"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data structured for SEO
const faqs = [
  {
    category: "Window Film Benefits",
    questions: [
      {
        question: "How does window film reduce energy costs?",
        answer:
          "Window film reduces energy costs by blocking up to 80% of solar heat, significantly reducing air conditioning needs in summer. In winter, it helps retain indoor heat, resulting in year-round energy savings of up to 30% on utility bills. The film acts as an additional insulation layer, improving your windows' thermal efficiency.",
      },
      {
        question: "What types of UV protection do your window films provide?",
        answer:
          "Our window films provide comprehensive UV protection by blocking up to 99% of harmful ultraviolet rays. This protection helps prevent skin damage, furniture fading, and deterioration of artwork and flooring. The films maintain clear views and natural light while offering medical-grade UV protection year-round.",
      },
      {
        question: "Will window film make my windows dark or reflective?",
        answer:
          "Modern window films come in various options, from virtually clear to darker shades. We offer films that reduce heat and glare while maintaining natural light and views. You can choose from different tint levels and reflectivity options to match your specific needs and aesthetic preferences.",
      },
    ],
  },
  {
    category: "Installation & Maintenance",
    questions: [
      {
        question: "How long does professional window film installation take?",
        answer:
          "Professional window film installation timing varies by project scope. Residential installations typically take 1-2 days, while commercial projects may require additional time. Our experienced team works efficiently to minimize disruption, ensuring proper curing and optimal performance of the film.",
      },
      {
        question: "What is the proper way to clean and maintain window film?",
        answer:
          "Window film maintenance is straightforward. Wait 30 days after installation before first cleaning. Use a soft cloth or sponge with mild soap and water. Avoid abrasive cleaners, rough materials, or sharp objects. Regular gentle cleaning ensures optimal performance and longevity of the film.",
      },
      {
        question: "What is the expected lifespan of quality window film?",
        answer:
          "Quality window films typically last 15-20 years with proper maintenance. Our films come with manufacturer warranties ranging from 10 years to lifetime coverage, depending on the product. Factors affecting longevity include installation quality, maintenance, and environmental conditions.",
      },
    ],
  },
  {
    category: "Safety & Security",
    questions: [
      {
        question: "How does window film protect against storms and break-ins?",
        answer:
          "Security window films create a protective barrier by holding glass together upon impact. During storms or break-in attempts, the film prevents glass from shattering and creates a stronger barrier against forced entry. While not hurricane-proof, it provides valuable protection and additional response time during emergencies.",
      },
      {
        question:
          "Does window film installation affect manufacturer window warranties?",
        answer:
          "Most major window manufacturers maintain their warranties when using approved window films. We work exclusively with films that meet manufacturer specifications and can provide necessary documentation to ensure your window warranty remains valid. Always verify specific warranty requirements before installation.",
      },
    ],
  },
  {
    category: "Cost & Value",
    questions: [
      {
        question: "What determines the cost of window film installation?",
        answer:
          "Window film installation costs depend on several factors: film type (solar, security, decorative), window size and quantity, installation complexity, and specific performance requirements. Each project receives a detailed quote after thorough assessment of your windows and specific needs.",
      },
      {
        question:
          "Are there tax incentives available for window film installation?",
        answer:
          "Many energy-efficient window films qualify for federal, state, or local tax incentives. These may include energy efficiency rebates, utility company incentives, and tax deductions. The specific incentives vary by location and film type, potentially reducing your overall investment.",
      },
      {
        question: "What is the typical return on investment for window film?",
        answer:
          "Window film typically provides ROI within 2-5 years through energy savings alone. Additional value comes from protected furnishings, enhanced comfort, and increased security. Energy savings often range from 5-30% of cooling costs, while UV protection prevents costly furniture and flooring replacement.",
      },
    ],
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold mb-4 font-oswald tracking-tighter">
            <span className="text-[#054177]">Frequently Asked</span>{" "}
            <span className="text-[#C03140]">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-[#C03140] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover everything you need to know about window films, from energy
            savings and UV protection to installation and maintenance. Our
            comprehensive FAQ covers the most common questions about residential
            and commercial window film solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 lg:h-fit space-y-4"
          >
            <nav className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#054177] mb-4 border-b border-gray-100 pb-2">
                Browse Topics
              </h3>
              <ul className="space-y-2">
                {faqs.map((category) => (
                  <li key={category.category}>
                    <button
                      onClick={() => setActiveCategory(category.category)}
                      className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 ${
                        activeCategory === category.category
                          ? "bg-[#054177] text-white shadow-md"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#054177]"
                      }`}
                    >
                      {category.category}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SEO-friendly text snippet */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-sm text-gray-600">
                American Glass Coatings provides expert window film solutions in
                South Florida. Our FAQ addresses common questions about energy
                savings, UV protection, security features, and professional
                installation services.
              </p>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              {faqs.map((category) => (
                <div
                  key={category.category}
                  className={
                    activeCategory === category.category ? "" : "hidden"
                  }
                >
                  <h3 className="text-2xl font-semibold text-[#054177] mb-6 border-b border-gray-100 pb-4">
                    {category.category}
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <AccordionTrigger className="hover:no-underline py-4">
                          <span className="text-left font-medium text-gray-900 hover:text-[#C03140] text-lg">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="prose prose-gray max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Schema.org FAQ markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.flatMap((category) =>
              category.questions.map((q) => ({
                "@type": "Question",
                name: q.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: q.answer,
                },
              }))
            ),
          }),
        }}
      />
    </section>
  );
}
