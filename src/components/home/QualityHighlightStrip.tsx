"use client";

import React from "react";
import { ShieldCheck, Sparkles, Gem, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const HIGHLIGHTS = [
  {
    icon: Gem,
    title: "Premium Fabric",
    description: "Finest silk & velvet",
  },
  {
    icon: Sparkles,
    title: "Handcrafted Design",
    description: "Unique zardozi & motifs",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Multi-point inspection",
  },
  {
    icon: Truck,
    title: "Priority Delivery",
    description: "Secure global shipping",
  },
];

export const QualityHighlightStrip = () => {
  return (
    <section className="py-12 bg-white border-y border-luxury-pink/5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-luxury-soft flex items-center justify-center text-luxury-pink group-hover:bg-luxury-pink group-hover:text-white transition-all duration-500">
                <item.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-luxury-deep uppercase tracking-widest mb-1">
                  {item.title}
                </h3>
                <p className="text-[10px] text-luxury-gray uppercase tracking-wider font-inter">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
