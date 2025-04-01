"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AboutJPG from "@/assets/about/about.jpg";

const certifications = [
  "Solar Window Film",
  "Safety Window Film",
  "Security Window Film",
  "Automotive Window Film",
];

export default function AboutContent() {
  return (
    <>
      {/* Left Column - Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src={AboutJPG || "/placeholder.svg"}
            alt="American Glass Coatings team at work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#054177]/50 to-transparent" />
        </div>
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
            Based in South Florida, the American Glass Coatings team has been
            proudly serving customers for over 45 years. From residential and
            commercial, to marine and recreational vehicles, AGC&apos;s
            experienced team uses nothing but the highest quality products on
            all projects.
          </p>
          <p className="text-gray-600 leading-relaxed">
            American Glass Coatings prides itself on superior customer service
            as one of the most knowledgeable companies in the window film
            industry and has certifications from the International Window Film
            Association in solar, safety, security and automotive products and
            installations.
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
    </>
  );
}
