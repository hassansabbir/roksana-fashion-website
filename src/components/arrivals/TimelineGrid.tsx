"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

const TIMELINE_GROUPS = [
  { label: "Today", items: products.slice(0, 2) },
  { label: "This Week", items: products.slice(2, 5) },
  { label: "This Month", items: products.slice(5, 8) },
];

export const TimelineGrid = () => {
  return (
    <section className="py-24 bg-luxury-soft/30 min-h-screen">
      <Container>
        <div className="space-y-24 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-luxury-pink/10 hidden lg:block" />

          {TIMELINE_GROUPS.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-12">
              {/* Group Header */}
              <div className="flex items-center justify-center gap-6 relative z-10">
                <div className="h-[1px] flex-1 bg-luxury-pink/10" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-8 py-3 bg-white border border-luxury-pink/20 rounded-full shadow-sm"
                >
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-luxury-pink font-inter">
                    {group.label}
                  </span>
                </motion.div>
                <div className="h-[1px] flex-1 bg-luxury-pink/10" />
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Bottom CTA / End of List */}
          <div className="text-center pt-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex flex-col items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-luxury-pink/30" />
              <p className="text-xs text-luxury-gray uppercase tracking-widest font-bold font-inter">
                New styles added daily
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
