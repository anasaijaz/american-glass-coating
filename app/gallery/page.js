"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReactCompareImage from "react-compare-image";
import {
  Building2,
  Home,
  Sailboat,
  Bus,
  MapPin,
  Calendar,
  Tag,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data - replace with your actual project data
const projects = [
  {
    id: 1,
    title: "Luxury Residential Window Tinting",
    category: "residential",
    description:
      "Modern home window tinting with heat reduction and UV protection. This project showcases our premium residential window film installation that significantly improved the home's energy efficiency while maintaining its aesthetic appeal.",
    location: "Palm Beach Gardens, FL",
    date: "January 2024",
    beforeImage: "https://picsum.photos/800/450?random=1",
    afterImage: "https://picsum.photos/800/450?random=2",
    additionalImages: [
      "https://picsum.photos/400/400?random=3",
      "https://picsum.photos/400/400?random=4",
      "https://picsum.photos/400/400?random=5",
    ],
    tags: ["Heat Reduction", "UV Protection", "Privacy"],
    specifications: [
      "Heat Reduction: 78%",
      "UV Blocking: 99%",
      "Visible Light Transmission: 70%",
      "Glare Reduction: 82%",
    ],
  },
  {
    id: 2,
    title: "Commercial Office Building",
    category: "commercial",
    description:
      "Energy-efficient window film installation for a 20-story office building. This large-scale commercial project delivered significant energy savings and improved comfort for all occupants while maintaining the building's professional appearance.",
    location: "West Palm Beach, FL",
    date: "December 2023",
    beforeImage: "https://picsum.photos/800/450?random=6",
    afterImage: "https://picsum.photos/800/450?random=7",
    additionalImages: [
      "https://picsum.photos/400/400?random=8",
      "https://picsum.photos/400/400?random=9",
    ],
    tags: ["Energy Efficiency", "Glare Reduction", "Security"],
    specifications: [
      "Energy Savings: Up to 30%",
      "UV Blocking: 99%",
      "Visible Light Transmission: 65%",
      "Solar Heat Reduction: 75%",
    ],
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: MapPin },
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "marine", label: "Marine", icon: Sailboat },
  { id: "motorcoach", label: "Motorcoach", icon: Bus },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <PageHero
        title="Our Work"
        subtitle="Explore our portfolio of premium window film installations"
        backgroundImage="https://picsum.photos/1920/1080?random=10"
        ctaButtons={[
          {
            text: "GET A FREE QUOTE",
            href: "/contact",
            primary: true,
          },
        ]}
      />

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="all"
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-[#054177] data-[state=active]:text-white"
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Project Header */}
                <div className="bg-[#054177] text-white p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-white/80">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                </div>

                {/* Before & After Comparison */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-[#054177] mb-4">
                    Before & After Comparison
                  </h3>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <ReactCompareImage
                      leftImage={project.beforeImage}
                      rightImage={project.afterImage}
                      sliderPositionPercentage={0.5}
                      handleSize={40}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-[#054177] mb-4">
                        Project Details
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {project.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-[#054177]">
                          Specifications:
                        </h4>
                        <ul className="grid gap-2">
                          {project.specifications.map((spec, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-[#C03140]" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-semibold text-[#054177] mb-3">
                          Features:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 rounded-full bg-[#054177]/10 px-3 py-1 text-sm font-medium text-[#054177]"
                            >
                              <Tag className="h-3 w-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Additional Images */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#054177] mb-4">
                        Additional Views
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {project.additionalImages.map((image, index) => (
                          <div
                            key={index}
                            className="relative aspect-square rounded-lg overflow-hidden"
                          >
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`Additional view ${index + 1} of ${
                                project.title
                              }`}
                              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="border-t border-gray-100 px-6 md:px-8 py-4 bg-gray-50">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-gray-600">
                      Want a similar installation? Contact us for a free
                      consultation.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md bg-[#C03140] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#C03140]/90"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
