"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export const Featured = () => {
  return (
    <section className="py-24 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="flex-1 relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop"
                alt="Featured Collection"
                fill
                className="object-cover"
              />
              {/* Floating Badge */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-12 -right-6 lg:-right-12 glass p-8 rounded-3xl shadow-xl max-w-[200px] hidden md:block"
              >
                <p className="text-luxury-pink font-serif italic text-xl mb-1">Handcrafted</p>
                <p className="text-luxury-deep text-xs font-bold uppercase tracking-widest leading-tight">
                  Premium Silk & Embroidery
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="flex-1 flex flex-col items-start gap-8 lg:padding-left-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold font-inter">
                Summer Luxe 2026
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-luxury-deep leading-[1.1]">
                The Art of <br />
                <span className="italic">Graceful</span> Living
              </h2>
              <p className="text-lg text-luxury-gray leading-relaxed font-inter font-light">
                Our new collection celebrates the fusion of traditional craftsmanship and contemporary aesthetics. Each piece is a masterpiece designed to make you feel extraordinary.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-luxury-soft flex items-center justify-center text-luxury-pink font-serif text-xl group-hover:bg-luxury-pink group-hover:text-white transition-all">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-luxury-deep font-inter uppercase text-xs tracking-widest">Pure Banarasi Silk</h4>
                    <p className="text-sm text-luxury-gray font-inter">Authentic weaving from the heart of Bengal.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-luxury-soft flex items-center justify-center text-luxury-pink font-serif text-xl group-hover:bg-luxury-pink group-hover:text-white transition-all">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-luxury-deep font-inter uppercase text-xs tracking-widest">Artisan Embroidery</h4>
                    <p className="text-sm text-luxury-gray font-inter">Days of intricate hand-work on every garment.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/shop">
                  <Button size="lg" className="px-12">
                    Explore Collection
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
