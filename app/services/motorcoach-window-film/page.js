"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Sun,
  Bus,
  ThermometerSun,
  Lock,
  Sparkles,
  Timer,
  Sofa,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import HeroJPG from "@/assets/home/motorcoach.png";

const benefits = [
  {
    title: "Enhanced Comfort",
    description: "Improve your travel experience with better climate control",
    icon: ThermometerSun,
    details: [
      "Reduces interior heat",
      "Improves AC efficiency",
      "Maintains consistent temperature",
      "Creates comfortable environment",
    ],
  },
  {
    title: "Glare Reduction",
    description: "Safer and more comfortable driving experience",
    icon: Sun,
    details: [
      "Reduces eye strain",
      "Improves visibility",
      "Better screen viewing",
      "Enhanced road safety",
    ],
  },
  {
    title: "Interior Protection",
    description: "Preserve your motorcoach's interior",
    icon: Sofa,
    details: [
      "Prevents upholstery fading",
      "Protects furniture",
      "Extends interior life",
      "Blocks 99% UV rays",
    ],
  },
  {
    title: "Privacy & Security",
    description: "Enhanced protection for your home away from home",
    icon: Lock,
    details: [
      "Increased privacy",
      "Better security",
      "Deters break-ins",
      "Peace of mind",
    ],
  },
];

const statistics = [
  {
    value: "5+",
    label: "Weeks Average Annual Usage",
    icon: Timer,
  },
  {
    value: "2,700+",
    label: "Miles Traveled Per Year",
    icon: Bus,
  },
  {
    value: "99%",
    label: "UV Ray Protection",
    icon: Shield,
  },
  {
    value: "30%",
    label: "Potential Energy Savings",
    icon: Sparkles,
  },
];

export default function MotorcoachWindowFilm() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Motorcoach Window Film Solutions"
        subtitle="Enhance comfort and protection for your home away from home"
        backgroundImage={HeroJPG}
        ctaButtons={[
          {
            text: "GET A FREE QUOTE",
            href: "/contact",
            primary: true,
          },
          {
            text: "VIEW OUR WORK",
            href: "/gallery",
          },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#054177] mb-6">
                Transform Your Motorcoach Experience
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Window film is a true investment that improves both your
                  motorcoach&apos;s value and the driving experience as a whole.
                  On average, motorcoach owners spend over five weeks and 2,700
                  miles in their RV each year.
                </p>
                <p>
                  Our window film options will allow you to enjoy top-notch
                  comfort and security without sacrificing vehicle performance
                  and potential. You can even significantly reduce your air
                  conditioning usage, making your travels more efficient and
                  environmentally friendly.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://picsum.photos/800/450?random=51"
                alt="Motorcoach window tinting installation"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-[#054177]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-[#C03140]" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#054177] mb-4">
              Benefits of Motorcoach Window Films
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how our premium window films can enhance your motorcoach
              experience and protect your investment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <benefit.icon className="h-12 w-12 text-[#C03140] mb-4" />
                <h3 className="text-xl font-semibold text-[#054177] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#C03140] mt-2" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Image
                src="https://picsum.photos/800/600?random=52"
                alt="Motorcoach interior with window tinting"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-[#054177] mb-6">
                Professional Installation
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Our expert technicians understand the unique requirements of
                  motorcoach window film installation. We use only the highest
                  quality materials and precise installation techniques to
                  ensure:
                </p>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-[#C03140] shrink-0 mt-1" />
                    <span>
                      Perfect fit and finish for all window shapes and sizes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-[#C03140] shrink-0 mt-1" />
                    <span>Maximum durability for long-distance travel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-[#C03140] shrink-0 mt-1" />
                    <span>
                      Optimal performance in various weather conditions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-[#C03140] shrink-0 mt-1" />
                    <span>Compliance with all relevant regulations</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#054177] mb-6">
              Ready to Upgrade Your Motorcoach?
            </h2>
            <p className="text-gray-600 mb-8">
              Questions? Give us a call today for a free consultation. Our
              experts are ready to help you enhance your motorcoach experience
              with premium window films.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="tel:+15615414005"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C03140] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#C03140]/90 w-full sm:w-auto"
              >
                <Shield className="h-4 w-4" />
                (561) 541-4005
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-[#054177] px-6 py-3 text-sm font-medium text-[#054177] shadow transition-colors hover:bg-[#054177] hover:text-white w-full sm:w-auto"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
