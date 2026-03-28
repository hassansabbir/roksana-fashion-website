"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Quote } from "lucide-react";

export const Founder = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop"
              alt="Founder of Roksana Fashion"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 space-y-8"
          >
            <Quote size={48} className="text-luxury-pink/20" />
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-luxury-deep leading-tight italic">
              &ldquo;Fashion is not just clothing, it&rsquo;s confidence. Our mission is to provide that spark of strength to every woman who wears our designs.&rdquo;
            </h2>

            <div className="space-y-1">
              <p className="text-lg font-bold text-luxury-deep font-playfair">Roksana Jahan</p>
              <p className="text-xs text-luxury-pink uppercase tracking-widest font-bold font-inter">Founder & Creative Director</p>
            </div>
            
            <p className="text-luxury-gray font-inter leading-relaxed max-w-xl">
              With over a decade of experience in the fashion industry, Roksana Jahan has dedicated her career to blending the rich heritage of South Asian craftsmanship with global luxury standards.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
