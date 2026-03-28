"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

const CRAFT_STEPS = [
  {
    title: "Fabric Selection",
    description:
      "Only the finest silks, velvets, and cottons are chosen for our collections.",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Intricate Design",
    description:
      "Our artisans spend weeks on hand-embroidering unique zardozi patterns.",
    image:
      "https://thumbs.dreamstime.com/b/historical-fashion-patterns-showcase-design-elements-various-eras-intricate-details-styles-visual-displays-430354302.jpg",
  },
  {
    title: "Quality Assurance",
    description:
      "Every piece undergoes multiple rounds of inspection before reaching you.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
  },
];

export const Craftsmanship = () => {
  return (
    <section className="py-24 bg-luxury-soft overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-luxury-deep uppercase tracking-widest">
            The Craftsmanship
          </h2>
          <div className="h-[2px] w-24 bg-luxury-pink mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CRAFT_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-8 border-8 border-white shadow-xl group-hover:border-luxury-pink transition-all duration-500">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="text-center space-y-4 px-4">
                <h3 className="text-xl font-serif font-bold text-luxury-deep uppercase tracking-widest">
                  {step.title}
                </h3>
                <p className="text-luxury-gray text-sm font-inter leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
