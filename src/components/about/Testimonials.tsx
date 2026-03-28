"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/layout/Container";

const TESTIMONIALS = [
  {
    name: "Sarah Ahmed",
    role: "Regular Customer",
    content: "The quality of the Banarasi saree I bought is unmatched. It felt like I was wearing a piece of art.",
    rating: 5,
  },
  {
    name: "Mariya Karim",
    role: "Fashion Blogger",
    content: "Roksana Fashion is my go-to for elegant 3-piece suites. The craftsmanship is truly world-class.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "Designer",
    content: "I love how they blend traditional motifs with modern silhouettes. Truly unique collections.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-luxury-deep">Customer Love</h2>
          <p className="text-luxury-gray text-sm md:text-base font-inter">
            Hear from the women who inspire us every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl border border-luxury-pink/10 hover:border-luxury-pink/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="text-luxury-deep font-inter leading-relaxed italic mb-8">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="space-y-1">
                <p className="font-bold text-luxury-deep">{testimonial.name}</p>
                <p className="text-xs text-luxury-gray uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
