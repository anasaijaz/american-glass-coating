"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ArrowRight, Star } from "lucide-react";
import projects from "@/lib/stuart-projects.js";
import { motion } from "framer-motion";

export default function WorkShowcase() {
  // Extract all "after" images from projects
  const afterImages = projects.map((project) => ({
    src: project.after.src,
    title: project.title,
  }));

  // Add some additional images from the project images array to have more variety
  const additionalImages = projects.flatMap((project) =>
    project.images.slice(0, 2).map((img) => ({
      src: img.src,
      title: project.title,
    }))
  );

  // Combine all images for the marquee
  const allImages = [...afterImages, ...additionalImages];

  // State to track if the component is mounted (for SSR compatibility)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-24 bg-[#054177] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      {/* Full-width marquee container */}
      <div className="mb-12">
        {/* Top row marquee - moves left to right */}
        <Marquee
          autoFill
          gradient={false}
          speed={35}
          pauseOnHover={true}
          className="mb-4"
        >
          <div className="flex gap-4">
            {allImages
              .slice(0, Math.ceil(allImages.length / 2))
              .map((image, index) => (
                <div
                  key={`top-${index}`}
                  className="relative h-[400px] w-[600px] overflow-hidden border border-gray-800 group"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-xl font-bold mb-2">
                      {image.title}
                    </p>
                    <div className="w-12 h-1 bg-[#C03140]"></div>
                  </div>
                </div>
              ))}
          </div>
        </Marquee>

        {/* Bottom row marquee - moves right to left */}
        <Marquee
          gradient={false}
          speed={35}
          direction="right"
          pauseOnHover={true}
        >
          <div className="flex gap-4">
            {allImages
              .slice(Math.ceil(allImages.length / 2))
              .map((image, index) => (
                <div
                  key={`bottom-${index}`}
                  className="relative h-[400px] w-[600px] overflow-hidden border border-gray-800 group"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-xl font-bold mb-2">
                      {image.title}
                    </p>
                    <div className="w-12 h-1 bg-[#C03140]"></div>
                  </div>
                </div>
              ))}
          </div>
        </Marquee>
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center bg-[#C03140] text-white px-10 py-4 text-lg font-medium hover:bg-[#C03140]/90 transition-colors group"
          >
            Explore Our Full Gallery
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
