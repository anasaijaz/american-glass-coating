"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b bg-[#054177] to-black">
      {/* Background Pattern */}

      <div className="container mx-auto px-4">
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

              {/* Navigation Dots */}
              <div className="flex flex-row gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="w-1 h-8 relative"
                  >
                    <span
                      className={`absolute left-0 w-1 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "h-4 bg-[#C03140]"
                          : "h-4 bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
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
