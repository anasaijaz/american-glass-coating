"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CommercialPNG from "@/assets/home/commercial.png";
import CruisePNG from "@/assets/home/cruise.png";
import MotorCoachPNG from "@/assets/home/motorcoach.png";
import ResidentialPNG from "@/assets/home/residential.png";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: CommercialPNG,
      alt: "Commercial building with window film installation",
      title: "Commercial Solutions",
      description:
        "Energy-efficient window films for office buildings and retail spaces",
    },
    {
      url: ResidentialPNG,
      alt: "Residential home with glass coating",
      title: "Residential Services",
      description: "UV protection and privacy films for your home",
    },
    {
      url: CruisePNG,
      alt: "Marine vessel with window tinting",
      title: "Marine Applications",
      description: "Specialized coatings for boats and yachts",
    },
    {
      url: MotorCoachPNG,
      alt: "Motor coach with window tinting",
      title: "Automotive Tinting",
      description: "Premium window films for vehicles and RVs",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="relative h-full w-full">
              <Image
                src={slides[currentIndex].url || "/placeholder.svg"}
                alt={slides[currentIndex].alt}
                className="h-full w-full object-cover"
                fill
                priority
              />
              <div className="absolute inset-0 bg-[#054177] bg-opacity-75"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full min-h-[90vh] items-center">
        <div className="container mx-auto px-6">
          <div
            className="glare-container max-w-3xl bg-black/75 p-8 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
            }}
          >
            <h1 className="mb-6 text-5xl font-oswald font-extrabold tracking-tight text-white md:text-7xl relative z-10">
              PREMIUM GLASS COATINGS
              <span className="mt-2 block text-[#C03140]">
                FOR OVER 35 YEARS
              </span>
            </h1>
            <p className="mb-8 text-xl font-medium text-white md:text-2xl relative z-10">
              South Florida&quot;s most trusted window film specialists for
              residential, commercial, and marine applications.
            </p>
            <div className="flex flex-wrap gap-4 relative z-10">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-md bg-[#C03140] px-8 text-lg font-bold text-white transition-colors hover:bg-red-700"
              >
                GET A FREE QUOTE
              </Link>
              <Link
                href="/services"
                className="inline-flex h-14 items-center justify-center rounded-md border-2 border-white bg-transparent px-8 text-lg font-bold text-white transition-colors hover:bg-white hover:text-[#054177]"
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Info and Navigation */}
      <div className="absolute text-right bottom-20 right-6 z-20 flex flex-col items-end space-y-2">
        <div className="p-3 rounded-lg max-w-xs">
          <h3 className="text-white font-bold">{slides[currentIndex].title}</h3>
          <p className="text-white/80 text-sm min-h-14">
            {slides[currentIndex].description}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevious}
            className="rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Service Areas Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 py-4">
        <div className="container mx-auto px-6">
          <p className="text-center font-medium text-white">
            Serving Palm Beach, Boca Raton, Wellington, Jupiter, and all of
            South Florida
          </p>
        </div>
      </div>

      {/* CSS for Glare Animation */}
      <style jsx>{`
        .glare-container {
          position: relative;
        }

        .glare-container::after {
          width: 200%;
          height: 100px;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.05) 40%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.05) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          animation: glareAnimation 3s infinite linear;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes glareAnimation {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
}
