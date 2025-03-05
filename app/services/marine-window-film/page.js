"use client";

import { motion } from "framer-motion";
import { Shield, Sun, Sailboat, Eye, ThermometerSun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";

const benefits = [
  {
    title: "Enhanced Comfort",
    description: "Stabilizes vessel climate and improves passenger comfort",
    icon: ThermometerSun,
    details: [
      "Reduces heat gain",
      "Improves HVAC efficiency",
      "Maintains consistent temperature",
      "Better cabin environment",
    ],
  },
  {
    title: "UV Protection",
    description: "Blocks 99% of harmful UV rays",
    icon: Sun,
    details: [
      "Prevents interior fading",
      "Protects against UV damage",
      "Extends furnishing life",
      "Reduces cancer risk",
    ],
  },
  {
    title: "Safety & Security",
    description: "Improves glass shatter resistance",
    icon: Shield,
    details: [
      "Enhanced glass strength",
      "Protection from waves",
      "Improved safety standards",
      "Crew protection",
    ],
  },
  {
    title: "Glare Reduction",
    description: "Optimal visibility in bright conditions",
    icon: Eye,
    details: [
      "Better navigation",
      "Reduced eye strain",
      "Clear visibility",
      "Night vision maintained",
    ],
  },
];

const vesselTypes = [
  "Luxury Yachts",
  "Sport Fishing Boats",
  "Cruise Ships",
  "Commercial Vessels",
  "Sailboats",
  "Charter Boats",
];

const associations = [
  "The National Fenestration Rating Council (NFRC)",
  "The ASIS International",
  "American Society of Interior Designers (ASID)",
  "Energy Star",
  "American Institute of Architect (AIA)",
  "National Glass Association (NGA)",
  "International Window Film Association (IWFA)",
];

export default function MarineWindowFilm() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Marine Window Films"
        subtitle="Premium window tinting solutions for ships, yachts, boats, and cruise vessels"
        backgroundImage="https://sjc.microlink.io/uIUohP8EWP6e1z0b5gvtg6CnSvye-Pw4RC4WCVbEeEvJwwde6_I5cbJ_3bCJt5KaNHbnP1_5J_6BEjbdeH18Sw.jpeg"
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
                Protect Your Marine Investment
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Windows are considered to be one of the most important yet
                  most overlooked components of yachts. American Glass Coatings'
                  window films offer a cooler cabin environment and maintain
                  visibility through your yacht's windows at night.
                </p>
                <p>
                  The marine environment is one of the harshest on fixtures,
                  surfaces and coatings of yachts, boats or cruise vessels. Our
                  specialized window films are ideal ways to improve your
                  vessel's style, comfort, privacy and safety.
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
                src="https://picsum.photos/800/450?random=40"
                alt="Marine window tinting installation"
                fill
                className="object-cover"
              />
            </motion.div>
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
              Benefits of Marine Window Films
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our marine window films provide comprehensive protection and
              comfort for all types of marine vessels.
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

      {/* Vessel Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#054177] mb-4">
              Serving All Marine Vessels
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide expert window film solutions for all types of marine
              vessels
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {vesselTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-lg text-center group hover:bg-[#054177] transition-colors duration-300"
              >
                <Sailboat className="h-8 w-8 text-[#C03140] group-hover:text-white mx-auto mb-2" />
                <p className="font-medium text-gray-900 group-hover:text-white">
                  {type}
                </p>
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
              that maintain the highest standards in marine window film
              installation.
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
              Protect Your Marine Investment Today
            </h2>
            <p className="text-gray-600 mb-8">
              Questions? Give us a call today for a free consultation. Our
              marine window film experts are ready to help.
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
