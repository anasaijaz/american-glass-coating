"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, MapPin, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import Link from "next/link";
import AboutJPG from "@/assets/about/about.jpg";
import ClientLogosSection from "@/components/home/previous-clients";

const stats = [
  {
    value: "35+",
    label: "Years of Experience",
    icon: Shield,
  },
  {
    value: "5000+",
    label: "Projects Completed",
    icon: CheckCircle2,
  },
  {
    value: "100%",
    label: "Licensed & Insured",
    icon: Award,
  },
  {
    value: "2",
    label: "Service Regions",
    icon: MapPin,
  },
];

const serviceAreas = [
  "Juno Beach",
  "Lake Worth",
  "Wellington",
  "North Palm Beach",
  "Boca Raton",
  "Delray Beach",
  "Palm Beach Gardens",
  "Jupiter Island",
  "Tequesta",
  "West Palm Beach",
];

const certifications = [
  "Solar Window Film",
  "Safety Window Film",
  "Security Window Film",
  "Automotive Window Film",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About American Glass Coatings"
        subtitle="Over 35 Years of Excellence in Window Film Solutions"
        backgroundImage={AboutJPG}
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={AboutJPG}
                  alt="American Glass Coatings team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#054177]/50 to-transparent" />
              </div>

              {/* Stats */}
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Based in South Florida, the American Glass Coatings team has
                  been proudly serving customers for over 35 years. From
                  residential and commercial, to marine and recreational
                  vehicles, AGC&apos;s experienced team uses nothing but the highest
                  quality products on all projects.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  American Glass Coatings prides itself on superior customer
                  service as one of the most knowledgeable companies in the
                  window film industry and has certifications from the
                  International Window Film Association in solar, safety,
                  security and automotive products and installations.
                </p>
              </div>

              {/* Certifications */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-[#054177] mb-4">
                  IWFA Certifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Award className="h-5 w-5 text-[#C03140]" />
                      <span className="text-gray-600">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-md bg-[#054177] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#054177]/90"
                >
                  View Our Gallery
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-[#054177] px-6 py-3 text-sm font-medium text-[#054177] shadow-sm transition-colors hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              >
                <stat.icon className="h-8 w-8 text-[#C03140] mb-2" />
                <div className="text-2xl font-bold text-[#054177]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-4 font-oswald">
              <span className="text-[#054177]">Service Areas in</span>{" "}
              <span className="text-[#C03140]">Florida</span>
            </h2>
            <div className="w-24 h-1 bg-[#C03140] mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              American Glass Coatings provides expert window film solutions
              throughout South Florida, serving both residential and commercial
              clients in the following areas:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-lg text-center group hover:bg-[#054177] transition-colors duration-300"
              >
                <MapPin className="h-6 w-6 text-[#C03140] group-hover:text-white mx-auto mb-2" />
                <h3 className="font-medium text-gray-900 group-hover:text-white">
                  {area}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80">
                  Florida
                </p>
              </motion.div>
            ))}
          </div>

          {/* Appreciation Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-[#054177] font-medium">
              We greatly appreciate your business!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-[#054177] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-[#C03140]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <Users className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-white/80">
                Certified professionals with decades of experience
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <Shield className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-white/80">
                Full coverage for your peace of mind
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <Award className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
              <p className="text-white/80">
                Only the highest quality materials used
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <CheckCircle2 className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-white/80">
                Your satisfaction is our top priority
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ClientLogosSection />
    </main>
  );
}
