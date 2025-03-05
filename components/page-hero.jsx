"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PageHero({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg",
  ctaButtons = [
    {
      text: "GET A FREE QUOTE",
      href: "/contact",
      primary: true,
    },
    {
      text: "VIEW OUR WORK",
      href: "/gallery",
    },
  ],
}) {
  return (
    <div
      className="relative h-[40vh] min-h-[400px] w-full overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 90% 100%, 10% 95%, 0 100%)",
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
        />
        <div className="absolute inset-0 bg-[#054177] bg-opacity-85" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-oswald md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-white/80 mb-8">{subtitle}</p>
            )}

            {/* CTA Buttons */}
            {ctaButtons && ctaButtons.length > 0 && (
              <div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                {ctaButtons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    className={`
                      inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all
                      ${
                        button.primary
                          ? "bg-[#C03140] text-white hover:bg-[#C03140]/90"
                          : "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#054177]"
                      }
                    `}
                  >
                    {button.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        {/* Main wave shape */}
        {/* Accent line */}
      </div>
    </div>
  );
}
