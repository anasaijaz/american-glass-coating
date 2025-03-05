"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CommercialPNG from "@/assets/home/commercial.png";
import CruisePNG from "@/assets/home/cruise.png";
import MotorCoachPNG from "@/assets/home/motorcoach.png";
import ResidentialPNG from "@/assets/home/residential.png";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const featurableWidgetId = "25433811-034a-485f-aa93-3d0c76529f76"; // You can use "example" for testing

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "commercial-window-film",
      title: "Commercial",
      description:
        "Businesses come in all shapes and sizes, and our experienced team has worked on projects ranging from single-room offices to skyscrapers. First and foremost, we're focused on reducing expenses and protecting your bottom line.",
      image: CommercialPNG,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
          <path d="M13 13h4" />
          <path d="M13 17h4" />
          <path d="M9 13h.01" />
          <path d="M9 17h.01" />
        </svg>
      ),
    },
    {
      id: "marine-window-film",
      title: "Marine",
      description:
        "Adding a high-performance window film is the ideal way to improve your boat's comfort, privacy and style. American Glass Coatings will help reduce glare, block heat and protect the interior for any boat or marine craft. The open sea awaits!",
      image: CruisePNG,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
          <path d="M21 14H3a4 4 0 0 0-3 1.38A3.91 3.91 0 0 0 0 17h24a3.91 3.91 0 0 0-.1-1.62A4 4 0 0 0 21 14Z" />
          <path d="M22 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3" />
          <path d="M15.3 2H8.7c-.2 0-.4.1-.5.2L7 4h10l-1.2-1.8a.6.6 0 0 0-.5-.2Z" />
        </svg>
      ),
    },
    {
      id: "residential-window-film",
      title: "Residential",
      description:
        "Whether you're looking to reduce excess heat and/or fading, increased safety and security, or decorative touches to spruce up interior windows, American Glass Coatings has a wide variety of window film options for homeowners to consider.",
      image: ResidentialPNG,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: "motorcoach-window-film",
      title: "Motorcoach",
      description:
        "Window film is a true investment that improves both your motorcoach's value and the driving experience as a whole. Our window film options will allow you to enjoy top-notch comfort and privacy without closing the blinds, ensuring all of your guests can take in the sights.",
      image: MotorCoachPNG,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4 font-oswald tracking-tighter">
            <span className="text-[#054177]">Premium</span>{" "}
            <span className="text-[#C03140]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#C03140] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            With over 35 years of experience, American Glass Coatings provides
            expert window film solutions for all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)",
              }}
              key={service.id}
              className="group relative bg-white  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveService(service.id)}
              onHoverEnd={() => setActiveService(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <div className="bg-[#C03140] p-2 rounded-full text-white">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4 h-24 overflow-hidden">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-[#054177] font-semibold hover:text-[#C03140] transition-colors"
                >
                  More Info
                  <motion.div
                    animate={{
                      x: activeService === service.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ReactGoogleReviews
            layout="badge"
            featurableId={featurableWidgetId}
          />
        </div>
      </div>
    </section>
  );
}
