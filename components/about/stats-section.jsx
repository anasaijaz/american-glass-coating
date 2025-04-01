"use client";

import { motion } from "framer-motion";
import { Shield, Award, MapPin, CheckCircle2 } from "lucide-react";

const stats = [
  {
    value: "45+",
    label: "Years of Experience",
    icon: Shield,
  },
  {
    value: "5000+",
    label: "Projects Completed",
    icon: CheckCircle2,
  },
  {
    value: "100%",
    label: "Licensed & Insured",
    icon: Award,
  },
  {
    value: "2",
    label: "Service Regions",
    icon: MapPin,
  },
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
        >
          <stat.icon className="h-8 w-8 text-[#C03140] mb-2" />
          <div className="text-2xl font-bold text-[#054177]">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
