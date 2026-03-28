"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const NewArrivals = () => {
  // Just show first 4 for home page
  const displayProducts = products.slice(0, 4);

  return (
    <section className="py-24 bg-luxury-soft/30">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-luxury-pink uppercase tracking-widest text-xs font-bold font-inter"
            >
              The Latest Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-luxury-deep mt-2"
            >
              New Arrivals
            </motion.h2>
          </div>
          <Link href="/shop">
            <Button variant="outline" size="md">
              Shop All New
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
