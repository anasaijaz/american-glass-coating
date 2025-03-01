"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Hammer, Wrench, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your launch date here
  useEffect(() => {
    const launchDate = new Date("2025-03-28").getTime(); // Change this to your actual launch date

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    initial: { rotate: 0 },
    animate: {
      rotate: [0, -45, 45, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

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
          {/* Construction Icons */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-4">
            <motion.div
              variants={iconVariants}
              initial="initial"
              className="bg-[#C03140] p-3 rounded-full shadow-lg"
            >
              <Hammer className="h-6 w-6 text-white" />
            </motion.div>
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="bg-[#054177] p-3 rounded-full shadow-lg"
            >
              <Wrench className="h-6 w-6 text-white" />
            </motion.div>
            <motion.div
              variants={iconVariants}
              initial="initial"
              className="bg-[#C03140] p-3 rounded-full shadow-lg"
            >
              <HardHat className="h-6 w-6 text-white" />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Under Construction
            </h1>
            <p className="text-white/80 text-lg mb-6">
              We're working hard to bring you something amazing. This page is
              currently being developed.
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-white/60 text-sm">{item.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Notification Form */}
          <motion.div variants={itemVariants} className="max-w-md mx-auto mb-8">
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email for updates"
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
                  Thank you! We'll notify you when we're ready.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Homepage</span>
            </Link>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white/10 rounded-full h-2 overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#C03140] to-[#054177]"
              initial={{ width: 0 }}
              animate={{ width: "15%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </motion.div>
          <div className="text-center mt-2">
            <span className="text-white/60 text-sm">75% Complete</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
