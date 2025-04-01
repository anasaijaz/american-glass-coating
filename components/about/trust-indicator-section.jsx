"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";

export default function TrustIndicatorsSection() {
  return (
    <section className="py-16 bg-[#054177] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-[#C03140]"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Users className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
            <p className="text-white/80">
              Certified professionals with decades of experience
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Shield className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
            <p className="text-white/80">
              Full coverage for your peace of mind
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Award className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
            <p className="text-white/80">
              Only the highest quality materials used
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <CheckCircle2 className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Satisfaction Guaranteed
            </h3>
            <p className="text-white/80">
              Your satisfaction is our top priority
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
