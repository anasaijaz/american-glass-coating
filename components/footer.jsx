"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";
import AmericanLogo from "@/assets/common/logo.png";

const serviceLinks = [
  { name: "Solar Window Film", href: "/services/solar-window-film" },
  { name: "Motorcoach Window Film", href: "/services/motorcoach-window-film" },
  {
    name: "Residential Window Film",
    href: "/services/residential-window-film",
  },
  { name: "Marine Window Film", href: "/services/marine-window-film" },
  { name: "Commercial Window Film", href: "/services/commercial-window-film" },
  {
    name: "Safety & Security Film",
    href: "/services/safety-security-window-film",
  },
  { name: "Anti-Graffiti Film", href: "/services/anti-graffiti-window-film" },
  { name: "Decorative Window Film", href: "/services/decorative-window-film" },
];

const locationLinks = [
  { name: "Boca Raton", href: "/locations/boca-raton" },
  { name: "Juno Beach", href: "/locations/juno-beach" },
  { name: "Wellington", href: "/locations/wellington" },
  { name: "Lake Worth", href: "/locations/lake-worth" },
  { name: "North Palm Beach", href: "/locations/north-palm-beach" },
  { name: "Palm Beach Gardens", href: "/locations/palm-beach-gardens" },
  { name: "Delray Beach", href: "/locations/delray-beach" },
  { name: "Jupiter Island", href: "/locations/jupiter-island" },
  { name: "Tequesta", href: "/locations/tequesta" },
  { name: "West Palm Beach", href: "/locations/west-palm-beach" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Resources", href: "/resources" },
  { name: "Photo Gallery", href: "/gallery" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#054177] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <Link href="/" className="flex items-center">
                <Image
                  src={AmericanLogo}
                  className="bg-white p-2"
                  width={128}
                  height={32}
                />
              </Link>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#C03140] flex-shrink-0 mt-1" />
                  <div>
                    <p>123 Main Street</p>
                    <p>West Palm Beach, FL 33401</p>
                  </div>
                </div>

                <a
                  href="tel:5615414005"
                  className="flex items-center gap-3 hover:text-[#C03140] transition-colors"
                >
                  <Phone className="h-5 w-5 text-[#C03140]" />
                  <span>(561) 541-4005</span>
                </a>

                <a
                  href="mailto:info@americanglasscoatings.com"
                  className="flex items-center gap-3 hover:text-[#C03140] transition-colors"
                >
                  <Mail className="h-5 w-5 text-[#C03140]" />
                  <span>info@americanglasscoatings.com</span>
                </a>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#C03140] flex-shrink-0 mt-1" />
                  <div>
                    <p>Monday - Friday: 8AM - 6PM</p>
                    <p>Saturday: 9AM - 2PM</p>
                    <p>Sunday: Closed</p>
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#C03140] transition-colors inline-flex items-center gap-1 group"
                >
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} American Glass Coatings. All rights
              reserved.
            </p>
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
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
              addressLocality: "West Palm Beach",
              addressRegion: "FL",
              postalCode: "33401",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 26.7153,
              longitude: -80.0534,
            },
            url: "https://americanglasscoatings.com",
            telephone: "+15615414005",
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
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "14:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/americanglasscoatings",
              "https://www.instagram.com/americanglasscoatings",
              "https://www.linkedin.com/company/american-glass-coatings",
            ],
          }),
        }}
      />
    </footer>
  );
}
