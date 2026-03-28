"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";

const STORY_STEPS = [
  {
    text: "Crafted with elegance",
    sub: "Every stitch tells a story of heritage and sophistication.",
  },
  {
    text: "Designed for confidence",
    sub: "Empowering the modern woman through timeless silhouettes.",
  },
  {
    text: "Styled for you",
    sub: "A curated collection that reflects your unique persona.",
  },
];

export const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 bg-luxury-soft relative overflow-hidden">
      {/* Background Parallax Element */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1]),
        }}
        className="absolute inset-0 flex items-center justify-center -z-0 select-none pointer-events-none"
      >
        <span className="text-[20vw] font-serif font-black text-luxury-pink uppercase leading-none opacity-10">
          Heritage
        </span>
      </motion.div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto space-y-40">
          {STORY_STEPS.map((step, index) => (
            <StoryItem key={index} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const StoryItem = ({ step }: { step: typeof STORY_STEPS[0] }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "end 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, y }}
      className="flex flex-col items-center text-center gap-6"
    >
      <h2 className="text-4xl md:text-6xl font-serif font-bold text-luxury-deep leading-tight italic">
        &ldquo;{step.text}&rdquo;
      </h2>
      <p className="text-luxury-gray text-lg md:text-xl font-inter max-w-xl mx-auto leading-relaxed font-light">
        {step.sub}
      </p>
      <div className="w-12 h-[1px] bg-luxury-pink/30 mt-4" />
    </motion.div>
  );
};
