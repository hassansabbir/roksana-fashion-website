"use client";

import React from "react";
import { motion } from "framer-motion";

const MARQUEE_TEXT = [
  "Trending Now",
  "Elegant",
  "Summer Collection",
  "Festive Wear",
  "New Drop",
  "Exquisite Craftsmanship",
];

export const Marquee = () => {
  return (
    <div className="bg-luxury-deep py-6 overflow-hidden border-y border-luxury-pink/20">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 px-6"
        >
          {/* Duplicate to create seamless loop */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {MARQUEE_TEXT.map((text, index) => (
                <div key={index} className="flex items-center gap-12">
                  <span className="text-white text-md md:text-xl font-serif font-bold uppercase tracking-[0.2em]">
                    {text}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-luxury-gold" />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
