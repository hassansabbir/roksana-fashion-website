"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Sparkles } from "lucide-react";

export const ArrivalsHero = () => {
  return (
    <section className="pt-32 pb-16 bg-white border-b border-luxury-pink/5">
      <Container>
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-2 bg-luxury-soft rounded-full text-luxury-pink text-xs font-bold uppercase tracking-widest font-inter"
          >
            <Sparkles size={14} />
            Just Dropped
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-luxury-deep leading-tight"
          >
            Fresh Styles <br />
            <span className="italic text-luxury-pink">You&rsquo;ll Love</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-luxury-gray text-lg font-inter font-light max-w-xl mx-auto"
          >
            Discover our latest collection of meticulously handcrafted pieces, designed to elevate your style this season.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};
