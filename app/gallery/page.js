"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Sailboat,
  Bus,
  MapPin,
  ArrowRight,
  ExternalLink,
  Phone,
  Map,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import projects from "@/lib/stuart-projects.js";
import HeroJPG from "@/assets/stuart-project/boca_polo_club/20190131_101200.jpg";
import LocationMapJPG from "@/assets/home/person-with-background.png"; // Replace with your actual location map image
import Image from "next/image";
import Link from "next/link";

// Update the categories to be more generic since we don't have specific categories in the new data
const categories = [
  { id: "all", label: "All Projects", icon: MapPin },
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "marine", label: "Marine", icon: Sailboat },
];

// Service areas for the locations section
const serviceAreas = [
  "Juno Beach",
  "Lake Worth",
  "Wellington",
  "North Palm Beach",
  "Boca Raton",
  "Delray Beach",
  "Palm Beach Gardens",
  "Jupiter Island",
  "Tequesta",
  "West Palm Beach",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6); // Initial number of projects to show
  const [isLoading, setIsLoading] = useState(false);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.tags &&
            project.tags.includes(selectedCategory.toLowerCase())
        );

  // Load more projects when user scrolls near the bottom
  const loadMoreProjects = () => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
      setIsLoading(false);
    }, 500); // Simulate loading delay
  };

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleProjects < filteredProjects.length
        ) {
          loadMoreProjects();
        }
      },
      { threshold: 0.1 }
    );

    const loadMoreTrigger = document.getElementById("load-more-trigger");
    if (loadMoreTrigger) {
      observer.observe(loadMoreTrigger);
    }

    return () => {
      if (loadMoreTrigger) {
        observer.unobserve(loadMoreTrigger);
      }
    };
  }, [visibleProjects, filteredProjects.length]);

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

      {/* Locations Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Map className="h-6 w-6 text-[#C03140]" />
                <h2 className="text-3xl font-bold text-[#054177]">
                  Our Service Locations
                </h2>
              </div>
              <div className="w-20 h-1 bg-[#C03140] mb-6" />

              <p className="text-gray-700 mb-6">
                American Glass Coatings proudly serves clients throughout South
                Florida. Our expert team provides premium window film solutions
                for residential, commercial, marine, and motorcoach applications
                in the following areas:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#C03140]" />
                    <span className="text-gray-700">{area}, Florida</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={LocationMapJPG || "/placeholder.svg"}
                  alt="American Glass Coatings service areas in South Florida"
                  fill
                  className="object-cover"
                  priority={false}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#054177]/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#054177] mb-6 text-center">
              Browse Our Projects
            </h2>
            <Tabs
              defaultValue="all"
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 p-1 rounded-lg bg-gray-100">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-[#054177] data-[state=active]:text-white rounded-md transition-all duration-200"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Projects Grid - 3 columns */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(index * 0.1, 1),
                  }} // Cap the delay to avoid too long delays
                  className="bg-white shadow-md overflow-hidden border border-gray-200 flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Project Header */}
                  <div className="bg-[#054177] rounded-sm text-white p-3">
                    <h2 className="text-lg font-bold truncate">
                      {project.title}
                    </h2>
                    {project.location && (
                      <div className="flex items-center gap-1 text-xs text-white/80 mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>{project.location}, Florida</span>
                      </div>
                    )}
                  </div>

                  {/* Project Image */}
                  <div className="p-3 border-b border-gray-200 flex-grow">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div
                          className="relative h-[200px] overflow-hidden mb-3 cursor-pointer group"
                          onClick={() => setSelectedProject(project)}
                        >
                          <Image
                            src={
                              project.after.src ||
                              project.after ||
                              "/placeholder.svg"
                            }
                            alt={project.title}
                            fill
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            loading="lazy" // Lazy load images
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 rounded-lg">
                        {selectedProject && (
                          <div className="overflow-y-auto max-h-[90vh]">
                            {/* Project Detail Header */}
                            <div className="bg-[#054177] text-white p-6">
                              <h2 className="text-2xl font-bold">
                                {selectedProject.title}
                              </h2>
                              {selectedProject.location && (
                                <div className="flex items-center gap-1 text-white/80 mt-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>
                                    {selectedProject.location}, Florida
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                              <div className="grid md:grid-cols-2 gap-6">
                                {/* Main Image */}
                                <div className="relative aspect-video overflow-hidden rounded-lg">
                                  <Image
                                    src={
                                      selectedProject.after.src ||
                                      selectedProject.after ||
                                      "/placeholder.svg"
                                    }
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>

                                {/* Project Description */}
                                <div>
                                  <h3 className="text-xl font-semibold text-[#054177] mb-4">
                                    Project Details
                                  </h3>
                                  <p className="text-gray-700 leading-relaxed mb-6">
                                    {selectedProject.description}
                                  </p>

                                  {selectedProject.tags &&
                                    selectedProject.tags.length > 0 && (
                                      <div className="space-y-3">
                                        <h4 className="font-medium text-[#054177]">
                                          Features
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                          {selectedProject.tags.map(
                                            (tag, idx) => (
                                              <span
                                                key={idx}
                                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs capitalize"
                                              >
                                                {tag}
                                              </span>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    )}
                                </div>
                              </div>

                              {/* Before & After Comparison */}
                              {selectedProject.before &&
                                selectedProject.after && (
                                  <div className="mt-8">
                                    <h3 className="text-xl font-semibold text-[#054177] mb-4">
                                      Before & After
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <div className="relative aspect-video overflow-hidden rounded-lg">
                                          <Image
                                            src={
                                              selectedProject.before.src ||
                                              selectedProject.before ||
                                              "/placeholder.svg"
                                            }
                                            alt={`${selectedProject.title} - Before`}
                                            fill
                                            className="object-cover"
                                          />
                                          <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                            BEFORE
                                          </div>
                                        </div>
                                      </div>
                                      <div className="space-y-2">
                                        <div className="relative aspect-video overflow-hidden rounded-lg">
                                          <Image
                                            src={
                                              selectedProject.after.src ||
                                              selectedProject.after ||
                                              "/placeholder.svg"
                                            }
                                            alt={`${selectedProject.title} - After`}
                                            fill
                                            className="object-cover"
                                          />
                                          <div className="absolute top-2 left-2 bg-[#C03140]/90 text-white text-xs px-2 py-1 rounded">
                                            AFTER
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}

                              {/* Additional Images */}
                              {selectedProject.images &&
                                selectedProject.images.length > 0 && (
                                  <div className="mt-8">
                                    <h3 className="text-xl font-semibold text-[#054177] mb-4">
                                      Project Gallery
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                      {selectedProject.images.map(
                                        (image, imageIndex) => (
                                          <div
                                            key={imageIndex}
                                            className="relative aspect-square overflow-hidden rounded-lg border border-gray-200"
                                          >
                                            <Image
                                              src={
                                                image.src ||
                                                image ||
                                                "/placeholder.svg"
                                              }
                                              alt={`${
                                                selectedProject.title
                                              } - View ${imageIndex + 1}`}
                                              fill
                                              className="object-cover hover:scale-105 transition-transform duration-300"
                                              loading="lazy"
                                            />
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                            </div>

                            {/* Project Footer */}
                            <div className="px-6 py-4 bg-gray-50 flex flex-wrap items-center justify-between gap-4">
                              <p className="text-gray-700">
                                Want a similar installation for your property?
                              </p>
                              <div className="flex flex-wrap gap-3">
                                <Link
                                  href="tel:+15615414005"
                                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#054177] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#054177]/90"
                                >
                                  <Phone className="h-4 w-4" />
                                  (561) 541-4005
                                </Link>
                                <Link
                                  href="/contact"
                                  className="inline-flex items-center justify-center rounded-md bg-[#C03140] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#C03140]/90"
                                >
                                  Request a Quote
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-sm text-xs capitalize"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-sm text-xs">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-4 gap-1 mb-3">
                      {project.images &&
                        project.images.slice(0, 4).map((image, imageIndex) => (
                          <div
                            key={imageIndex}
                            className="relative aspect-square overflow-hidden"
                          >
                            <Image
                              src={image.src || image || "/placeholder.svg"}
                              alt={`${project.title} thumbnail ${
                                imageIndex + 1
                              }`}
                              fill
                              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                              loading="lazy" // Lazy load thumbnails
                            />
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Project Footer */}
                  <div className="px-3 py-2 bg-gray-50 flex justify-between items-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-[#054177] text-sm font-medium flex items-center hover:text-[#C03140] transition-colors"
                        >
                          View Details
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </button>
                      </DialogTrigger>
                    </Dialog>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-sm bg-[#C03140] px-3 py-1 text-xs font-medium text-white shadow transition-colors hover:bg-[#C03140]/90"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Load More Trigger */}
          {visibleProjects < filteredProjects.length && (
            <div id="load-more-trigger" className="flex justify-center mt-8">
              <button
                onClick={loadMoreProjects}
                disabled={isLoading}
                className="bg-white border border-gray-300 rounded-md px-4 py-2 text-[#054177] hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="h-4 w-4 border-2 border-[#054177] border-t-transparent rounded-full animate-spin"></div>
                    Loading more projects...
                  </>
                ) : (
                  <>
                    Load More Projects
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#054177] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-[#C03140]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-semibold">
                Ready to Transform Your Windows?
              </h2>
              <p className="text-white/80">
                Contact us today for a free consultation and discover how our
                window film solutions can enhance your space.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#C03140] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#C03140]/90"
                >
                  Get Started
                </Link>
                <Link
                  href="tel:+15615414005"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-[#054177]"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  (561) 541-4005
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
