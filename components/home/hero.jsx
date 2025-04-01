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
    // {
    //   url: MotorCoachPNG,
    //   alt: "Motor coach with window tinting",
    //   title: "Automotive Tinting",
    //   description: "Premium window films for vehicles and RVs",
    // },
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
      {/* Google Rating Widget */}
      <Link
        className="md:block hidden"
        href="https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA"
        target="_blank"
      >
        <div className="absolute top-24 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 shadow-xl max-w-[220px] md:max-w-[220px]  sm:right-6 ">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#4285F4]"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="ml-1 text-white font-medium text-xs sm:text-sm">
                Google
              </span>
            </div>
            <div className="text-white text-xs font-medium hidden sm:block">
              20+ Reviews
            </div>
          </div>
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-white text-xs sm:text-sm">
            &apos;Rated 5 stars on Google by our satisfied customers&apos;
          </p>
        </div>
      </Link>

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
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glare-container max-w-3xl bg-black/75 p-4 sm:p-6 md:p-8 relative overflow-hidden hero-container">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-oswald font-extrabold tracking-tight text-white relative z-10">
              PREMIUM GLASS COATINGS
              <span className="mt-1 sm:mt-2 block text-[#C03140]">
                FOR OVER 45 YEARS
              </span>
            </h1>
            <p className="mb-4 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white relative z-10">
              South Florida&apos;s most trusted window film specialists for
              residential, commercial, and marine applications.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 relative z-10">
              <Link
                href="/contact"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-[#C03140] px-4 sm:px-8 text-base sm:text-lg font-bold text-white transition-colors hover:bg-red-700 w-full sm:w-auto"
              >
                GET A FREE QUOTE
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md border-2 border-white bg-transparent px-4 sm:px-8 text-base sm:text-lg font-bold text-white transition-colors hover:bg-white hover:text-[#054177] w-full sm:w-auto"
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Info and Navigation */}
      <div className="absolute text-right bottom-20 right-4 sm:right-6 z-20 flex flex-col items-end space-y-2">
        <div className="p-2 sm:p-3 rounded-lg max-w-[250px] sm:max-w-xs">
          <h3 className="text-white font-bold text-sm sm:text-base">
            {slides[currentIndex].title}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm min-h-8 sm:min-h-14">
            {slides[currentIndex].description}
          </p>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={handlePrevious}
            className="rounded-full p-1 sm:p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={handleNext}
            className="rounded-full p-1 sm:p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>

      {/* Service Areas Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 py-2 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center font-medium text-white text-xs sm:text-sm md:text-base">
            Proudly serving the state of Florida with dedication and excellence
            for over 45 years.
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
          animation: glareAnimation 3s infinite ease-in;
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

        .absolute.top-24.right-6 {
          transform-origin: center;
        }

        /* Only apply clip-path on medium screens and above */
        @media (min-width: 768px) {
          .hero-container {
            clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
          }
        }
      `}</style>
    </div>
  );
}
