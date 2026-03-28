"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Sparkles, Zap } from "lucide-react";
import { Container } from "@/components/layout/Container";

const VALUES = [
  {
    icon: Heart,
    title: "Empower Women",
    description: "Creating fashion that inspires confidence and self-belief in every woman.",
  },
  {
    icon: Sparkles,
    title: "Affordable Elegance",
    description: "Bringing high-end boutique aesthetics to a wider audience without compromise.",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Meticulous attention to detail in every stitch, fabric, and finish.",
  },
  {
    icon: Zap,
    title: "Innovative Tradition",
    description: "Blending heritage craftsmanship with modern design sensibilities.",
  },
];

export const MissionVision = () => {
  return (
    <section className="py-24 bg-luxury-soft">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-deep"> Our Values & Vision</h2>
          <p className="text-luxury-gray text-sm md:text-base font-inter">
            The core principles that guide every decision at Roksana Fashion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-luxury-soft flex items-center justify-center text-luxury-pink mb-6 mx-auto group-hover:scale-110 group-hover:bg-luxury-pink group-hover:text-white transition-all duration-500">
                <value.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-serif font-bold text-luxury-deep mb-4">
                {value.title}
              </h3>
              <p className="text-luxury-gray text-sm font-inter leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
