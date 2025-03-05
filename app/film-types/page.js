"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Shield,
  PaintBucket,
  Palette,
  Building2,
  Home,
  Sailboat,
  Bus,
  ArrowRight,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";

const filmTypes = [
  {
    id: "solar",
    title: "Solar & UV Film",
    description:
      "Premium solar control and UV protection window films for enhanced comfort and protection.",
    icon: Sun,
    image: "https://picsum.photos/600/400?random=60",
    benefits: [
      "Reduces cooling costs up to 30%",
      "Blocks 99% of harmful UV rays",
      "Improves comfort year-round",
      "Protects furnishings from fading",
    ],
    applications: [
      {
        type: "Commercial",
        icon: Building2,
        description: "Perfect for offices and commercial buildings",
      },
      {
        type: "Residential",
        icon: Home,
        description: "Ideal for homes and apartments",
      },
      {
        type: "Marine",
        icon: Sailboat,
        description: "Suitable for boats and yachts",
      },
      {
        type: "Motorcoach",
        icon: Bus,
        description: "Great for RVs and motorcoaches",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety & Security Film",
    description:
      "Advanced security window films that protect against break-ins, accidents, and severe weather.",
    icon: Shield,
    image: "https://picsum.photos/600/400?random=61",
    benefits: [
      "Strengthens windows against impacts",
      "Holds shattered glass together",
      "Deters break-in attempts",
      "Provides 24/7 protection",
    ],
    applications: [
      {
        type: "Commercial",
        icon: Building2,
        description: "Essential for business security",
      },
      {
        type: "Residential",
        icon: Home,
        description: "Protection for your home",
      },
      {
        type: "Marine",
        icon: Sailboat,
        description: "Safety for marine vessels",
      },
      {
        type: "Motorcoach",
        icon: Bus,
        description: "Security for your RV",
      },
    ],
  },
  {
    id: "antigraffiti",
    title: "Anti-Graffiti Film",
    description:
      "Sacrificial window films that protect glass surfaces from vandalism and damage.",
    icon: PaintBucket,
    image: "https://picsum.photos/600/400?random=62",
    benefits: [
      "Easy to remove and replace",
      "Protects against scratches",
      "Maintains glass clarity",
      "Cost-effective solution",
    ],
    applications: [
      {
        type: "Commercial",
        icon: Building2,
        description: "Ideal for storefronts",
      },
      {
        type: "Public Transit",
        icon: Bus,
        description: "Perfect for transit vehicles",
      },
    ],
  },
  {
    id: "decorative",
    title: "Decorative Film",
    description:
      "Aesthetic window films that enhance privacy and add style to any space.",
    icon: Palette,
    image: "https://picsum.photos/600/400?random=63",
    benefits: [
      "Enhanced privacy",
      "Custom designs available",
      "Easy to maintain",
      "Affordable alternative to custom glass",
    ],
    applications: [
      {
        type: "Commercial",
        icon: Building2,
        description: "Perfect for offices and retail",
      },
      {
        type: "Residential",
        icon: Home,
        description: "Beautiful home solutions",
      },
      {
        type: "Marine",
        icon: Sailboat,
        description: "Stylish marine options",
      },
    ],
  },
];

export default function FilmTypes() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Window Film Solutions"
        subtitle="Discover our comprehensive range of premium window films"
        backgroundImage="https://picsum.photos/1920/1080?random=64"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#054177] mb-6">
              Premium Window Film Solutions for Every Need
            </h2>
            <p className="text-gray-600 text-lg">
              American Glass Coatings offers a comprehensive range of window
              films to meet any requirement. From solar protection to security,
              our premium films enhance comfort, safety, and aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Film Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {filmTypes.map((film, index) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div
                  className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#054177]/5 rounded-xl -z-10" />
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={film.image || "/placeholder.svg"}
                        alt={film.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <film.icon className="h-12 w-12 text-[#C03140]" />
                    <h2 className="text-3xl font-bold text-[#054177]">
                      {film.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 text-lg mb-8">
                    {film.description}
                  </p>

                  <div className="space-y-8">
                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#054177] mb-4">
                        Key Benefits
                      </h3>
                      <ul className="grid gap-3">
                        {film.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-[#C03140]" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#054177] mb-4">
                        Applications
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {film.applications.map((app) => (
                          <div
                            key={app.type}
                            className="flex items-start gap-3"
                          >
                            <app.icon className="h-5 w-5 text-[#C03140] mt-1" />
                            <div>
                              <div className="font-medium text-[#054177]">
                                {app.type}
                              </div>
                              <div className="text-sm text-gray-600">
                                {app.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <Link
                        href={`/film-types/${film.id}`}
                        className="inline-flex items-center text-[#054177] font-medium hover:text-[#C03140] transition-colors"
                      >
                        Learn more about {film.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#054177]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Find the Perfect Window Film Solution
            </h2>
            <p className="text-white/80 mb-8">
              Not sure which window film is right for you? Our experts are here
              to help you choose the perfect solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#C03140] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#C03140]/90 w-full sm:w-auto"
              >
                Get Expert Advice
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-[#054177] w-full sm:w-auto"
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
