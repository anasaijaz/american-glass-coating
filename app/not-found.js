"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Search, Home, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    // Add your subscription logic here
    setIsSubscribed(true);
    setEmail("");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Popular pages for quick navigation
  const popularPages = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#054177] to-[#032444] flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl w-full mx-auto"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          {/* 404 Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-4">
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="bg-[#C03140] p-3 rounded-full shadow-lg"
            >
              <Search className="h-6 w-6 text-white" />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
              Page Not Found
            </h2>
            <p className="text-white/80 text-lg mb-6">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-white/90 text-center mb-4">
              Popular Destinations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularPages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transition-all duration-300 group"
                >
                  <div className="text-white font-medium group-hover:text-[#C03140] transition-colors">
                    {page.name}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Notification Form */}
          <motion.div variants={itemVariants} className="max-w-md mx-auto mb-8">
            <h3 className="text-white/90 text-center mb-4">
              Subscribe to our newsletter
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#C03140] hover:bg-[#C03140]/90 text-white"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-sm text-center"
                >
                  Thank you for subscribing to our newsletter!
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white hover:text-[#C03140] transition-colors font-medium"
            >
              <Home className="h-5 w-5" />
              <span>Return to Homepage</span>
            </Link>
          </motion.div>

          {/* Service Areas */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-2 text-white/60 text-xs">
              <span className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                Serving:
              </span>
              {[
                "Palm Beach",
                "Boca Raton",
                "Wellington",
                "Jupiter",
                "South Florida",
              ].map((area, index) => (
                <span key={area}>
                  {area}
                  {index < 4 ? " •" : ""}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
