"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

export const BrandStory = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop"
              alt="The Roksana Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-luxury-pink/10 mix-blend-multiply" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-luxury-pink text-xs font-bold uppercase tracking-widest font-inter">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-deep leading-tight">
                Crafting Elegance for the Modern Woman
              </h2>
            </div>

            <p className="text-luxury-gray text-lg font-inter leading-relaxed font-light">
              Founded on the principles of grace and empowerment, Roksana Fashion began as a small boutique with a big dream: to redefine how women experience luxury in their everyday lives.
            </p>

            <p className="text-luxury-gray text-lg font-inter leading-relaxed font-light">
              We believe that fashion is more than just clothing—it&apos;s a medium of self-expression and a source of confidence. Our designs are a tribute to the timeless beauty of traditional craftsmanship, infused with the bold spirit of contemporary style.
            </p>

            <div className="pt-6">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-[1px] bg-luxury-pink group-hover:w-16 transition-all duration-500" />
                <span className="text-sm font-bold uppercase tracking-widest text-luxury-deep italic">
                  Since 2018
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
