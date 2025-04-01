"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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

export default function ServiceAreasSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4 font-oswald">
            <span className="text-[#054177]">Service Areas in</span>{" "}
            <span className="text-[#C03140]">Florida</span>
          </h2>
          <div className="w-24 h-1 bg-[#C03140] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            American Glass Coatings provides expert window film solutions
            throughout South Florida, serving both residential and commercial
            clients in the following areas:
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-lg text-center group hover:bg-[#054177] transition-colors duration-300"
            >
              <MapPin className="h-6 w-6 text-[#C03140] group-hover:text-white mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 group-hover:text-white">
                {area}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/80">
                Florida
              </p>
            </motion.div>
          ))}
        </div>

        {/* Appreciation Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-[#054177] font-medium">
            We greatly appreciate your business!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
