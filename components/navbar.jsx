"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoPNG from "@/assets/common/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
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
            <Image src={LogoPNG} width={128} height={32} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
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
              href="tel:+15555555555"
              className="flex items-center text-white hover:text-[#C03140]"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span className="font-medium">Call Us</span>
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
                  href="tel:+15555555555"
                  className="flex items-center justify-center py-2 text-white hover:text-[#C03140]"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  <span className="font-medium">Call Us</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
