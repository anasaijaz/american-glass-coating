"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Sun,
  Fingerprint,
  Sailboat,
  Bus,
  Building2,
  Home,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import AboutJPG from "@/assets/about/about.jpg";
import CommercialPNG from "@/assets/home/commercial.png";
import CruisePNG from "@/assets/home/cruise.png";
import MotorCoachPNG from "@/assets/home/motorcoach.png";
import ResidentialPNG from "@/assets/home/residential.png";

const services = [
  {
    id: "residential-window-film",
    title: "Residential Window Film",
    description:
      "Enhance your home's comfort and energy efficiency with our premium residential window films. Perfect for reducing heat, blocking harmful UV rays, and increasing privacy.",
    icon: Home,
    image: ResidentialPNG,
    benefits: [
      "Energy Savings",
      "UV Protection",
      "Glare Reduction",
      "Enhanced Privacy",
    ],
  },
  {
    id: "commercial-window-film",
    title: "Commercial Window Film",
    description:
      "Transform your commercial space with our professional window film solutions. Improve energy efficiency, enhance security, and create a more comfortable environment for employees and customers.",
    icon: Building2,
    image: CommercialPNG,
    benefits: [
      "Energy Efficiency",
      "Security Enhancement",
      "Glare Control",
      "Aesthetic Appeal",
    ],
  },
  {
    id: "marine-window-film",
    title: "Marine Window Film",
    description:
      "Protect your marine vessel with specialized window films designed for the harsh marine environment. Our solutions offer superior UV protection and heat reduction while maintaining visibility.",
    icon: Sailboat,
    image: CruisePNG,
    benefits: [
      "Heat Rejection",
      "UV Protection",
      "Anti-Glare",
      "Salt Water Resistant",
    ],
  },
  // {
  //   id: "motorcoach-window-film",
  //   title: "Motorcoach Window Film",
  //   description:
  //     "Enhance your motorcoach experience with our premium window films. Enjoy reduced heat, improved privacy, and protection from harmful UV rays while maintaining clear views.",
  //   icon: Bus,
  //   image: MotorCoachPNG,
  //   benefits: [
  //     "Temperature Control",
  //     "Privacy",
  //     "UV Protection",
  //     "Glare Reduction",
  //   ],
  // },
];

const features = [
  {
    icon: Sun,
    title: "UV Protection",
    description: "Block up to 99% of harmful UV rays",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enhanced protection against break-ins",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Premium materials and installation",
  },
  {
    icon: Fingerprint,
    title: "Custom Solutions",
    description: "Tailored to your specific needs",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Our Services"
        subtitle="Premium Window Film Solutions for Every Need"
        backgroundImage={AboutJPG}
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

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              >
                <feature.icon className="h-8 w-8 text-[#C03140] mb-4" />
                <h3 className="text-lg font-semibold text-[#054177] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold mb-4">
              <span className="text-[#054177]">Explore Our</span>{" "}
              <span className="text-[#C03140]">Window Film Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-[#C03140] mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of window film solutions, each
              designed to meet specific needs and deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <Link href={`/services/${service.id}`}>
                  <div className="bg-white rounded-lg h-full shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
                    {/* Image Section */}
                    <div className="relative h-64">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-3">
                          <service.icon className="h-8 w-8 text-white" />
                          <h3 className="text-2xl font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 h-full">
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-3 flex-grow">
                        <h4 className="font-semibold text-[#054177]">
                          Key Benefits:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.benefits.map((benefit) => (
                            <div
                              key={benefit}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-[#C03140]" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 flex items-center text-[#054177] font-semibold group-hover:text-[#C03140] transition-colors">
                        Learn More
                        <svg
                          className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#054177] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-[#C03140]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-semibold">
                Ready to Transform Your Windows?
              </h2>
              <p className="text-white/80">
                Contact us today for a free consultation and discover how our
                window film solutions can enhance your space.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#C03140] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#C03140]/90"
                >
                  Get Started
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-[#054177]"
                >
                  View Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
