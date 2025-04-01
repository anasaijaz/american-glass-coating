"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Sun, Building2, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import HeroJPG from "@/assets/stuart-project/palm_beach/20181115_134532.jpg";
import ImagePNG from "@/assets/stuart-project/biotest/20181010_093500.jpg";

const benefits = [
  {
    title: "Glare Reduction",
    description:
      "Reduces glare by up to 87%, allowing comfortable computer work",
    icon: Sun,
  },
  {
    title: "Energy Savings",
    description:
      "Save up to one ton of air conditioning for every 100 sq. ft. of film installed",
    icon: Zap,
  },
  {
    title: "UV Protection",
    description:
      "Safeguards against harmful UVA & UVB rays that cause aging and skin cancer",
    icon: Shield,
  },
  {
    title: "Cost Effective",
    description: "Costs about one-tenth of the cost of a window replacement",
    icon: Building2,
  },
];

const features = [
  "Reduces glare by up to 87%",
  "People can work on computers without facing the irritating glare",
  "Costs about one-tenth of the cost of a window replacement",
  "Saves money on heating and cooling costs",
  "Eliminates hot spots in the office",
  "Protects against solar heat",
  "Virtually eliminate the chances of injury from glass shards",
  "Maintains curb appeal while ensuring superior privacy",
  "Protects against fading and irreparable damage to furnishings",
  "Safeguards against harmful UVA & UVB rays",
];

const associations = [
  "The National Fenestration Rating Council (NFRC)",
  "The American Institute of Architect (AIA)",
  "National Glass Association (NGA)",
  "International Window Film Association (IWFA)",
  "ASIS International",
  "American Society of Interior Designers (ASID)",
  "Energy Star",
];

export default function CommercialWindowFilm() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Commercial Window Film Installation"
        subtitle="Professional window tinting solutions for commercial buildings and offices"
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
                Industry Leaders in Commercial Window Tinting Solutions
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  American Glass Coatings is an industry leader in commercial
                  window tinting solutions that provide you an extensive range
                  of options that can meet all of your business needs.
                </p>
                <p>
                  During the window film installation, we ensure minimal
                  disruption to your businesses schedule and daily routine of
                  your employees. Our window films help reduce energy costs,
                  increase productivity, and protect your windows and commercial
                  property from vandalism.
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
                src={ImagePNG}
                alt="Commercial window tinting installation"
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
              Key Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Window film is a valuable investment for commercial spaces and
              provides countless benefits for property owners.
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
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <benefit.icon className="h-12 w-12 text-[#C03140] mb-4" />
                <h3 className="text-xl font-semibold text-[#054177] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#C03140] shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-[#054177] mb-6">
                Benefits of Window Film Installation in Office Buildings
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Our professional installation team is prompt and has taken
                  years to master their craft. Our qualified and skilled
                  professionals install window film for commercial buildings
                  that balance natural light and improve comfort for everyone
                  working there.
                </p>
                <div className="bg-[#054177]/5 p-6 rounded-lg mt-6">
                  <p className="font-semibold text-[#054177]">
                    FACT: Window film can save up to one ton of air conditioning
                    for every 100 sq. ft. of film installed on sun-exposed
                    glass.
                  </p>
                </div>
              </div>
            </motion.div>
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
              We&apos;re proud to be associated with leading industry
              organizations that maintain the highest standards in window film
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
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Questions? Give us a call today for a free consultation. Our
              experts are ready to help you find the perfect window film
              solution for your commercial property.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15615414005"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C03140] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#C03140]/90 w-full sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                (561) 541-4005
              </a>
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
