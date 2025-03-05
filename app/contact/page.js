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

export default function ContactPage() {
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
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#054177] mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  For a no cost evaluation, please fill out the form or give us
                  a call.
                </p>
              </div>

              <div className="grid gap-6">
                {/* Phone */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="tel:+15615414005"
                  className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="bg-[#C03140] p-4 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#054177] text-lg mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600 text-lg">+1 (561) 541 4005</p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="mailto:ssmith@americanglasscoatings.com"
                  className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="bg-[#C03140] p-4 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#054177] text-lg mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 text-lg">
                      ssmith@americanglasscoatings.com
                    </p>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg border border-gray-100"
                >
                  <div className="bg-[#C03140] p-4 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#054177] text-lg mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600 text-lg">
                      2129 SW Olympic Club Ter
                      <br />
                      Palm City, FL 34990
                    </p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg border border-gray-100"
                >
                  <div className="bg-[#C03140] p-4 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#054177] text-lg mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Monday - Friday: 8AM - 6PM
                      <br />
                      Saturday: 9AM - 2PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-6 bg-[#054177]/5 rounded-xl border border-[#054177]/10"
              >
                <h3 className="text-[#054177] font-semibold mb-3">
                  Why Choose American Glass Coatings?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#C03140]" />
                    Over 35 years of experience
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#C03140]" />
                    Professional, certified installers
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#C03140]" />
                    Premium quality materials
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#C03140]" />
                    Lifetime warranty available
                  </li>
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
                      Thank you for your message! We&apos;ll get back to you soon.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
