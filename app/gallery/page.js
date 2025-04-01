"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Sailboat,
  Bus,
  MapPin,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import projects from "@/lib/stuart-projects.js";
import HeroJPG from "@/assets/stuart-project/boca_polo_club/20190131_101200.jpg";
import Image from "next/image";

// Update the categories to be more generic since we don't have specific categories in the new data
const categories = [
  { id: "all", label: "All Projects", icon: MapPin },
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "marine", label: "Marine", icon: Sailboat },
  { id: "motorcoach", label: "Motorcoach", icon: Bus },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // For now, we'll show all projects since we don't have category information
  const filteredProjects = projects;

  return (
    <main className="min-h-screen bg-gray-50">
      <PageHero
        title="Our Work"
        subtitle="Explore our portfolio of premium window film installations"
        backgroundImage={HeroJPG}
        ctaButtons={[
          {
            text: "GET A FREE QUOTE",
            href: "/contact",
            primary: true,
          },
        ]}
      />

      {/* Projects Grid - 3 columns */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white shadow-md overflow-hidden border border-gray-200 flex flex-col"
              >
                {/* Project Header */}
                <div className="bg-[#054177] rounded-sm text-white p-3">
                  <h2 className="text-lg font-bold truncate">
                    {project.title}
                  </h2>
                </div>

                {/* Project Image */}
                <div className="p-3 border-b border-gray-200 flex-grow">
                  <div className="relative h-[200px] overflow-hidden mb-3">
                    <Image
                      src={project.after || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Thumbnail Grid */}
                  <div className="grid grid-cols-4 gap-1 mb-3">
                    {project.images.slice(0, 4).map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="relative aspect-square overflow-hidden"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${imageIndex + 1}`}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-3 py-2 bg-gray-50 flex justify-between items-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-sm bg-[#C03140] px-3 py-1 text-xs font-medium text-white shadow transition-colors hover:bg-[#C03140]/90"
                  >
                    Get a Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
