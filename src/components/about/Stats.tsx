"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";

const STATS = [
  { label: "Happy Customers", value: 10000, suffix: "+" },
  { label: "Unique Designs", value: 500, suffix: "+" },
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Global Reach", value: 20, suffix: "+" },
];

export const Stats = () => {
  return (
    <section className="py-24 bg-luxury-deep text-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {STATS.map((stat, index) => (
            <Counter key={index} stat={stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Counter = ({ stat, index }: { stat: typeof STATS[0]; index: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="text-center space-y-2"
    >
      <div className="text-4xl md:text-6xl font-serif font-bold text-luxury-gold flex items-center justify-center">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-xs md:text-sm text-white/60 uppercase tracking-[0.2em] font-bold font-inter">
        {stat.label}
      </p>
    </motion.div>
  );
};
