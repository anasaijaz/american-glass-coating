"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Building2, Home, Sailboat, Bus } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoPNG from "@/assets/common/logo.png";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const serviceLinks = [
  {
    name: "Commercial Window Film",
    href: "/services/commercial-window-film",
    description:
      "Professional window tinting solutions for offices and commercial buildings",
    icon: Building2,
  },
  {
    name: "Residential Window Film",
    href: "/services/residential-window-film",
    description: "Premium window films for homes and residential properties",
    icon: Home,
  },
  {
    name: "Marine Window Film",
    href: "/services/marine-window-film",
    description: "Specialized window tinting for boats and marine vessels",
    icon: Sailboat,
  },
  {
    name: "Motorcoach Window Film",
    href: "/services/motorcoach-window-film",
    description: "Specialized window tinting for motorcoach and road vehicles",
    icon: Bus,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "absolute left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={LogoPNG || "/placeholder.svg"}
              width={128}
              height={32}
              alt="American Glass Coatings"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {/* Services HoverCard */}
              <li>
                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger asChild>
                    <Link
                      href="/services"
                      className="text-white transition-colors hover:text-[#C03140]"
                    >
                      Services
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80" align="start">
                    <div className="grid gap-4">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="group grid grid-cols-[25px_1fr] items-start gap-2 rounded-md p-2 hover:bg-accent"
                        >
                          <service.icon className="h-5 w-5 text-[#C03140] group-hover:text-[#C03140]/70" />
                          <div className="grid gap-1">
                            <div className="text-sm font-medium leading-none group-hover:underline">
                              {service.name}
                            </div>
                            <div className="line-clamp-2 text-sm text-muted-foreground">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </li>
              {/* Regular Nav Links */}
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white transition-colors hover:text-[#C03140]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="tel:+15615414005"
              className="flex items-center text-white hover:text-[#C03140]"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span className="font-medium">(561) 541-4005</span>
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-[#C03140] px-4 py-2 font-medium text-white transition-colors hover:bg-red-700"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-20 bg-black/95 md:hidden">
          <nav className="container mx-auto px-4 py-5">
            <ul className="flex flex-col space-y-4">
              {/* Services Section in Mobile */}
              <li>
                <div className="space-y-2">
                  <Link
                    href="/services"
                    className="block text-lg text-white transition-colors hover:text-[#C03140]"
                  >
                    Services
                  </Link>
                  <ul className="pl-4 space-y-2">
                    {serviceLinks.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="flex items-center gap-2 py-2 text-sm text-white/80 transition-colors hover:text-[#C03140]"
                          onClick={() => setIsOpen(false)}
                        >
                          <service.icon className="h-4 w-4" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* Regular Nav Links */}
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 text-lg text-white transition-colors hover:text-[#C03140]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="/contact"
                  className="block rounded-md bg-[#C03140] px-4 py-3 text-center font-medium text-white transition-colors hover:bg-red-700"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="tel:+15615414005"
                  className="flex items-center justify-center py-2 text-white hover:text-[#C03140]"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  <span className="font-medium">(561) 541-4005</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
