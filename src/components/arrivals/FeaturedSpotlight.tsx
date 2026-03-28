"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { products } from "@/data/products";

export const FeaturedSpotlight = () => {
  // Use the first product as the featured one for this example
  const product = products[0];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="relative rounded-[3rem] overflow-hidden bg-luxury-deep text-white min-h-[600px] flex items-center">
          {/* Background Image / Pattern */}
          <div className="absolute inset-0 z-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover opacity-30 select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-deep via-luxury-deep/80 to-transparent" />
          </div>

          <div className="relative z-10 w-full md:w-1/2 p-12 md:p-20 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold font-inter">
                Limited Edition Drop
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                {product.name}
              </h2>
              <p className="text-white/70 text-lg font-inter font-light line-clamp-2">
                {product.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="text-3xl font-serif font-bold text-luxury-gold">
                ৳{product.price.toLocaleString()}
              </div>
              <Link href={`/product/${product.id}`}>
                <Button variant="secondary" className="px-10 py-4 uppercase tracking-widest text-xs font-bold">
                  Discover Details
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Visual Highlight Object */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center p-20"
          >
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              <Image
                src={product.hoverImage || product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
