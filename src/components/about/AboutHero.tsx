"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-luxury-deep">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop"
          alt="About Roksana Fashion"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block text-luxury-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 font-inter">
            Our Legacy
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            Where Elegance Meets <br />
            <span className="italic text-luxury-gold">Everyday</span> Fashion
          </h1>
          <div className="w-20 h-[1px] bg-luxury-gold mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};
