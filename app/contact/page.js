"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageHero from "@/components/page-hero";
import HeroJPG from "@/assets/contact/hero.jpg";

export default function ContactPageComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="We Want To Hear From You!"
        backgroundImage={HeroJPG}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#054177] mb-4">
                  Get In Touch
                </h2>
                <p className="text-gray-600 text-sm">
                  For a no-cost evaluation, fill out the form or call us.
                </p>
              </div>

              <div className="grid gap-4">
                {/* Contact Items */}
                {[
                  {
                    href: "tel:+17728880866",
                    icon: Phone,
                    title: "Palm City",
                    value: "+1 (772) 888-0866",
                  },
                  {
                    href: "tel:+15615414005",
                    icon: Phone,
                    title: "North Palm Beach",
                    value: "+1 (561) 541-4005",
                  },
                  {
                    href: "mailto:ssmith@americanglasscoatings.com",
                    icon: Mail,
                    title: "Email",
                    value: "ssmith@americanglasscoatings.com",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    value: "Mon-Fri: 8AM - 6PM\nSat: 9AM - 2PM\nSun: Closed",
                  },
                ].map(({ href, icon: Icon, title, value, external }, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white shadow hover:shadow-md transition border border-gray-200"
                  >
                    <div className="bg-[#C03140] p-2.5 rounded-full">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#054177] font-medium text-sm">
                        {title}
                      </h3>
                      <p className="text-gray-600 text-xs whitespace-pre-line">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Mobile Service Info */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-6 bg-[#054177]/10 rounded-lg border border-[#054177]/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#C03140] p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-[#054177] font-medium">Mobile Service</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We are a mobile service covering South Florida. Our
                  professional team comes to your location for consultation and
                  installation, saving you time and hassle.
                </p>
              </motion.div>

              {/* Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 p-4 bg-[#054177]/5 rounded-lg border border-[#054177]/10"
              >
                <h3 className="text-[#054177] font-medium text-sm mb-2">
                  Why Choose Us?
                </h3>
                <ul className="space-y-1 text-xs text-gray-600">
                  {[
                    "Over 35 years of experience",
                    "Certified professionals",
                    "High-quality materials",
                    "Lifetime warranty",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-1">
                      <div className="h-1 w-1 rounded-full bg-[#C03140]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-[#054177] mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-gray-200 focus:border-[#054177] focus:ring-[#054177]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border-gray-200 focus:border-[#054177] focus:ring-[#054177]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 555-5555"
                      required
                      className="border-gray-200 focus:border-[#054177] focus:ring-[#054177]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={4}
                      required
                      className="border-gray-200 focus:border-[#054177] focus:ring-[#054177]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#054177] hover:bg-[#054177]/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {submitSuccess && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-600 text-center"
                    >
                      Thank you for your message! We&apos;ll get back to you
                      soon.
                    </motion.p>
                  )}
                </form>
              </div>

              {/* Service Areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-[#054177] mb-4">
                  Our Service Areas
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
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
                  ].map((area, index) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#C03140]" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#054177] relative overflow-hidden">
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
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <a
                  href="tel:+17728880866"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C03140] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#C03140]/90"
                >
                  <Phone className="h-4 w-4" />
                  Palm City: (772) 888-0866
                </a>
                <a
                  href="tel:+15615414005"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C03140] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#C03140]/90"
                >
                  <Phone className="h-4 w-4" />
                  North Palm Beach: (561) 541-4005
                </a>
                <a
                  href="mailto:ssmith@americanglasscoatings.com"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-[#054177]"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
