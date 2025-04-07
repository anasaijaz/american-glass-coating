"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  ChevronRight,
} from "lucide-react";
import AmericanLogo from "@/assets/common/logo.png";
import Affiliates from "@/assets/common/affiliate.png";
import { motion } from "framer-motion";
import WebeaseLogo from "@/assets/webease/logo.png";

const serviceLinks = [
  { name: "Solar Window Film", href: "/film-types" },
  {
    name: "Residential Window Film",
    href: "/services/residential-window-film",
  },
  { name: "Marine Window Film", href: "/services/marine-window-film" },
  { name: "Commercial Window Film", href: "/services/commercial-window-film" },
  {
    name: "Safety & Security Film",
    href: "/film-types",
  },
  { name: "Anti-Graffiti Film", href: "/film-types" },
  { name: "Decorative Window Film", href: "/film-types" },
];

const locationLinks = [
  { name: "Juno Beach", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  {
    name: "North Palm Beach",
    href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA",
  },
  {
    name: "Palm Beach Gardens",
    href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA",
  },
  { name: "Jupiter Island", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  { name: "Tequesta", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  {
    name: "West Palm Beach",
    href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA",
  },
  { name: "Port St. Lucie", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  {
    name: "Hutchinson Island",
    href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA",
  },
  { name: "Sewalls Point", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  { name: "Stuart", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  { name: "Palm City", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  { name: "Hobe Sound", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  { name: "Jupiter", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  { name: "Abacoa", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  { name: "Singer Island", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
  { name: "Palm Beach", href: "https://maps.app.goo.gl/Lmyv2TsxEnYcsAFQA" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Photo Gallery", href: "/gallery" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/AmericanGlassCoatings/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#054177] text-white">
      {/* Affiliates Banner */}
      <div className="w-full bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="relative w-full" style={{ aspectRatio: "7/1" }}>
            <Image
              src={Affiliates || "/placeholder.svg"}
              alt="American Glass Coatings affiliations and certifications"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <Image
                src={AmericanLogo || "/placeholder.svg"}
                className="bg-white p-2"
                width={128}
                height={32}
                alt="American glass coating logos"
              />

              <div className="space-y-4">
                <div className="space-y-2">
                  <a
                    href="tel:7728880866"
                    className="flex items-center gap-3 hover:text-[#C03140] transition-colors"
                  >
                    <Phone className="h-5 w-5 text-[#C03140]" />
                    <span>Palm City: (772) 888-0866</span>
                  </a>

                  <a
                    href="tel:5615414005"
                    className="flex items-center gap-3 hover:text-[#C03140] transition-colors"
                  >
                    <Phone className="h-5 w-5 text-[#C03140]" />
                    <span>North Palm Beach: (561) 541-4005</span>
                  </a>
                </div>

                <a
                  href="mailto:ssmith@americanglasscoatings.com"
                  className="flex items-center gap-3 hover:text-[#C03140] transition-colors"
                >
                  <Mail className="h-5 w-5 text-[#C03140]" />
                  <span>ssmith@americanglasscoatings.com</span>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#C03140] flex-shrink-0 mt-1" />
                  <span>Mobile Service - We Come To You!</span>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#C03140] flex-shrink-0 mt-1" />
                  <div>
                    <p>Monday - Friday: 8AM - 6PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-[#C03140] transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C03140] transition-colors inline-flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C03140] transition-colors inline-flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              {locationLinks.map((link) => (
                <p
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#C03140] transition-colors inline-flex items-center gap-1 group"
                >
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {link.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} American Glass Coatings. All rights
                reserved.
              </p>

              <div className="flex items-center gap-2">
                <p className="text-sm text-white/60">
                  Website by{" "}
                  <Link
                    href="https://webease.tech"
                    className="hover:text-white transition-colors underline"
                    target="_blank"
                  >
                    webease.tech
                  </Link>
                </p>
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={WebeaseLogo}
                    alt="Webease Tech Logo"
                    width={24}
                    height={24}
                    className="rounded-sm"
                  />
                </motion.div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Organization Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "American Glass Coatings",
            image: "https://americanglasscoatings.com/logo.png",
            description:
              "Professional window film installation for residential, commercial, marine, and recreational vehicles throughout South Florida.",
            url: "https://americanglasscoatings.com",
            telephone: ["+17728880866", "+15615414005"],
            email: "ssmith@americanglasscoatings.com",
            areaServed: [
              {
                "@type": "City",
                name: "Palm City",
                "@id": "https://en.wikipedia.org/wiki/Palm_City,_Florida",
              },
              {
                "@type": "City",
                name: "North Palm Beach",
                "@id":
                  "https://en.wikipedia.org/wiki/North_Palm_Beach,_Florida",
              },
              {
                "@type": "City",
                name: "West Palm Beach",
                "@id": "https://en.wikipedia.org/wiki/West_Palm_Beach,_Florida",
              },
              {
                "@type": "City",
                name: "Juno Beach",
                "@id": "https://en.wikipedia.org/wiki/Juno_Beach,_Florida",
              },
              {
                "@type": "City",
                name: "Palm Beach Gardens",
                "@id":
                  "https://en.wikipedia.org/wiki/Palm_Beach_Gardens,_Florida",
              },
              {
                "@type": "City",
                name: "Jupiter Island",
                "@id": "https://en.wikipedia.org/wiki/Jupiter_Island,_Florida",
              },
              {
                "@type": "City",
                name: "Tequesta",
                "@id": "https://en.wikipedia.org/wiki/Tequesta,_Florida",
              },
              {
                "@type": "City",
                name: "Palm Beach",
                "@id": "https://en.wikipedia.org/wiki/Palm_Beach,_Florida",
              },
              {
                "@type": "City",
                name: "Jupiter",
                "@id": "https://en.wikipedia.org/wiki/Jupiter,_Florida",
              },
              {
                "@type": "City",
                name: "Port St. Lucie",
                "@id": "https://en.wikipedia.org/wiki/Port_St._Lucie,_Florida",
              },
              {
                "@type": "City",
                name: "Hutchinson Island",
                "@id":
                  "https://en.wikipedia.org/wiki/Hutchinson_Island_South,_Florida",
              },
              {
                "@type": "City",
                name: "Sewalls Point",
                "@id":
                  "https://en.wikipedia.org/wiki/Sewall%27s_Point,_Florida",
              },
              {
                "@type": "City",
                name: "Stuart",
                "@id": "https://en.wikipedia.org/wiki/Stuart,_Florida",
              },
              {
                "@type": "City",
                name: "Hobe Sound",
                "@id": "https://en.wikipedia.org/wiki/Hobe_Sound,_Florida",
              },
              {
                "@type": "City",
                name: "Abacoa",
                "@id": "https://en.wikipedia.org/wiki/Abacoa,_Florida",
              },
              {
                "@type": "City",
                name: "Singer Island",
                "@id": "https://en.wikipedia.org/wiki/Singer_Island",
              },
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
            ],
            sameAs: ["https://www.facebook.com/americanglasscoatings"],
          }),
        }}
      />
    </footer>
  );
}
