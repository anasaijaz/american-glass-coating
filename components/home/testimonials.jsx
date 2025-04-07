"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import projects from "@/lib/stuart-projects.js";
import houseTinting from "@/assets/home/person-with-background.png";

const testimonials = [
  {
    text: "American Glass Coatings did an outstanding job on our office building. The reduction in heat and glare is remarkable, and our energy bills have noticeably decreased. Their team was professional and efficient throughout the installation.",
    author: "Michael Richardson",
    role: "Property Manager",
    rating: 5,
  },
  {
    text: "I'm extremely satisfied with the window film installation in my home. The UV protection is excellent, and my furniture no longer fades. The team was knowledgeable and completed the work with great attention to detail.",
    author: "Sarah Martinez",
    role: "Homeowner",
    rating: 5,
  },
  {
    text: "The marine window film they installed on my yacht has made a huge difference. The cabin stays cooler, and the glare reduction makes navigation much more comfortable. Their expertise in marine applications is unmatched.",
    author: "James Cooper",
    role: "Yacht Owner",
    rating: 5,
  },
  {
    text: "We've had window films installed on multiple properties, and American Glass Coatings consistently delivers superior results. Their attention to detail and customer service is exceptional. Highly recommended!",
    author: "Lisa Thompson",
    role: "Real Estate Developer",
    rating: 5,
  },
];

// Extract all "after" images from projects
const afterImages = projects.map(
  (project) => project.after?.src || houseTinting.src
);
// Add some additional images from the project images array to have more variety
const additionalImages = projects.flatMap((project) =>
  project.images.slice(0, 2).map((img) => img.src)
);
// Combine all images
const allImages = [...afterImages, ...additionalImages];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#054177] to-[#032a4e]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      {/* Background Marquee - Top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden opacity-5">
        <Marquee gradient={false} speed={20}>
          <div className="flex gap-4 py-4">
            {allImages
              .slice(0, Math.ceil(allImages.length / 3))
              .map((image, index) => (
                <div
                  key={`top-${index}`}
                  className="relative h-32 w-48 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="Project showcase"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
          </div>
        </Marquee>
      </div>

      {/* Background Marquee - Middle */}
      <div className="absolute top-1/2 left-0 right-0 w-full overflow-hidden opacity-5 transform -translate-y-1/2">
        <Marquee gradient={false} speed={15} direction="right">
          <div className="flex gap-4 py-4">
            {allImages
              .slice(
                Math.ceil(allImages.length / 3),
                Math.ceil((allImages.length * 2) / 3)
              )
              .map((image, index) => (
                <div
                  key={`middle-${index}`}
                  className="relative h-40 w-60 overflow-hidden"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt="Project showcase"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
          </div>
        </Marquee>
      </div>

      {/* Background Marquee - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden opacity-5">
        <Marquee gradient={false} speed={20} direction="right">
          <div className="flex gap-4 py-4">
            {allImages
              .slice(Math.ceil((allImages.length * 2) / 3))
              .map((image, index) => (
                <div
                  key={`bottom-${index}`}
                  className="relative h-32 w-48 overflow-hidden"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt="Project showcase"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
          </div>
        </Marquee>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Heading and Description */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Excellence in the Eyes of Our Clients
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Explore testimonials from our valued clients who have
                experienced the American Glass Coatings difference. Hear their
                stories of transformed spaces and unparalleled service in window
                film installation.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Testimonial Cards */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 h-12 w-12 text-[#C03140] opacity-20" />

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-lg mb-6 relative z-10">
                  {testimonials[currentIndex].text}
                </p>

                {/* Author Info */}
                <div>
                  <div className="text-white font-semibold">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
