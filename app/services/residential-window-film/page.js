"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Sun,
  Home,
  Sparkles,
  PaintBucket,
  Lock,
  Palette,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";

const filmTypes = [
  {
    title: "Solar Window Films",
    description: "Reduce cooling costs and improve energy efficiency",
    icon: Sun,
    benefits: [
      "Reduce cooling costs by up to 30%",
      "Improve television and computer screen viewing",
      "Block up to 99% of harmful UV rays",
      "Improve comfort and maintain temperature consistency",
    ],
  },
  {
    title: "Safety & Security Films",
    description: "Protect your home and family with enhanced security",
    icon: Lock,
    benefits: [
      "Impedes quick entry by intruders",
      "Protection from hazards and violent weather",
      "Available in clear or tinted options",
      "Helps hold glass panes in place",
    ],
  },
  {
    title: "UV Protection Films",
    description: "Shield your family and furnishings from harmful UV rays",
    icon: Shield,
    benefits: [
      "Protects from skin cancer causing UV rays",
      "Reduces fading of furnishings",
      "Maintains natural light",
      "Long-lasting protection",
    ],
  },
  {
    title: "Anti-Graffiti Films",
    description: "Protect glass surfaces from damage and vandalism",
    icon: PaintBucket,
    benefits: [
      "Fraction of the cost of new glass",
      "Protects from scratches and gouges",
      "Easy to remove and replace",
      "Maintains glass clarity",
    ],
  },
  {
    title: "Decorative Films",
    description: "Enhance privacy and aesthetics of your windows",
    icon: Palette,
    benefits: [
      "Enhanced privacy",
      "Improved appearance",
      "Better light control",
      "Reduced utility bills",
    ],
  },
];

const associations = [
  "Energy Star",
  "American Institute of Architect (AIA)",
  "National Glass Association (NGA)",
  "International Window Film Association (IWFA)",
  "The National Fenestration Rating Council (NFRC)",
  "The ASIS International",
  "American Society of Interior Designers (ASID)",
];

export default function ResidentialWindowFilm() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Residential Window Film Solutions"
        subtitle="Enhance the comfort, efficiency, and privacy of your home"
        backgroundImage="https://picsum.photos/1920/1080?random=30"
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
                Transform Your Home with Premium Window Films
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Glass windows can cause hot spots and severe fading of your
                  furnishings, and in the event of a break-in, glass windows are
                  the most vulnerable points in your home. Window Tint Film
                  enhances window safety, security, generates energy cost
                  savings and also improves your home's overall appearance and
                  style.
                </p>
                <p>
                  American Glass Coatings' window tinting film for residential
                  applications is designed to reject solar heat, reduce fading
                  and add a valuable layer of protection to your home's windows.
                  Best of all, these window films can provide all these benefits
                  without changing the look of your home.
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
                src="https://picsum.photos/800/450?random=31"
                alt="Residential window tinting installation"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Film Types */}
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
              Our Window Film Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of window films, each designed to
              meet specific needs and deliver exceptional results for your home.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filmTypes.map((film, index) => (
              <motion.div
                key={film.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <film.icon className="h-12 w-12 text-[#C03140] mb-4" />
                <h3 className="text-xl font-semibold text-[#054177] mb-2">
                  {film.title}
                </h3>
                <p className="text-gray-600 mb-4">{film.description}</p>
                <ul className="space-y-2">
                  {film.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#C03140] mt-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Associations */}
      <section className="py-16 bg-[#054177] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Our Trusted Associations
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We're proud to be associated with leading industry organizations
              that maintain the highest standards in window film installation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associations.map((association, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 p-4 rounded-lg text-center"
              >
                <Shield className="h-8 w-8 mx-auto mb-3 text-[#C03140]" />
                <p className="text-white/90">{association}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Savings Fact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <Sparkles className="h-8 w-8 text-[#C03140] shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#054177] mb-2">
                    Did You Know?
                  </h3>
                  <p className="text-gray-600">
                    Window film can save up to one ton of air conditioning for
                    every 100 sq. ft. of film installed on sun-exposed glass.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#054177] mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-gray-600 mb-8">
              Questions? Give us a call today for a free consultation. Our
              experts are ready to help you find the perfect window film
              solution for your home.
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
