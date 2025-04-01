"use client";

import { motion } from "framer-motion";
import { Phone, Shield, Sun, Timer, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import CTAPersonPNG from "@/assets/home/person.png";
import CTAPersonWithBackgroundPNG from "@/assets/home/person-with-background.png";

const benefits = [
  {
    icon: Sun,
    text: "Up to 80% Heat Reduction",
  },
  {
    icon: Shield,
    text: "99% UV Protection",
  },
  {
    icon: Timer,
    text: "15-20 Year Lifespan",
  },
];

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#054177] to-[#032a4e]"></div>

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div className="inline-block">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#C03140] h-1"
              ></motion.div>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 font-oswald tracking-tight">
                TRANSFORM YOUR
                <span className="block text-[#C03140]">WINDOWS TODAY</span>
              </h2>
            </div>

            <p className="text-xl text-gray-100">
              Join thousands of satisfied customers who have enhanced their
              properties with American Glass Coating&quot;s premium window film
              solutions.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="bg-[#C03140] p-3 rounded-lg">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <a
                href="tel:5615414005"
                className="group inline-flex items-center justify-center gap-2 bg-[#C03140] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#C03140]/90 transition-colors duration-300 relative"
              >
                <Phone className="h-5 w-5" />
                <span>Call (561) 541-4005</span>
                <span className="absolute -bottom-6 left-0 right-0 text-sm font-normal opacity-75">
                  Free Consultation & Quote
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4 items-center text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#C03140]" />
                  <span>45+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#C03140]" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#C03140]" />
                  <span>Lifetime Warranty Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              {/* Background Image */}
              <Image
                src={CTAPersonWithBackgroundPNG || "/placeholder.svg"}
                alt="Window film installation showcase"
                fill
                className="object-cover"
              />

              {/* Tint Layer */}
              <div className="absolute inset-0 bg-black opacity-70" />

              {/* Foreground Person Image */}
              <Image
                src={CTAPersonPNG || "/placeholder.svg"}
                alt="Window film installation showcase"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#054177]">5,000+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C03140]">98%</div>
                <div className="text-sm text-gray-600">
                  Customer Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
