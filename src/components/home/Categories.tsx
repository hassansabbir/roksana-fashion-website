"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    name: "3 Piece",
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
    href: "/shop?category=3+Piece",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Saree",
    image:
      "https://thumbs.dreamstime.com/b/folded-indian-cotton-saree-traditional-pattern-yellow-backgroundtraditional-erode-tamil-nadu-made-india-placed-424857535.jpg",
    href: "/shop?category=Saree",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Salwar Kameez",
    image:
      "https://i.etsystatic.com/36562015/r/il/c731ee/6249614832/il_fullxfull.6249614832_c7gl.jpg",
    href: "/shop?category=Salwar+Kameez",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Tops",
    image:
      "https://designermegamall.com/wp-content/uploads/2024/04/Womens-Tops.jpg",
    href: "/shop?category=Tops",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    name: "Casual Wear",
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
    href: "/shop?category=Casual+Wear",
    span: "md:col-span-1 md:row-span-1",
  },
];

export const Categories = () => {
  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-luxury-pink uppercase tracking-widest text-xs font-bold font-inter"
            >
              Our Collections
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-luxury-deep mt-4"
            >
              Shop by Category
            </motion.h2>
          </div>
          <Link
            href="/shop"
            className="group flex items-center gap-2 text-sm font-bold text-luxury-deep hover:text-luxury-pink transition-colors"
          >
            View All Collections
            <div className="w-10 h-[1px] bg-luxury-deep group-hover:w-16 group-hover:bg-luxury-pink transition-all" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-[1000px] md:h-[800px]">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${category.span} relative group overflow-hidden rounded-3xl shadow-luxury`}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 items-center justify-center group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-1/2">
                <Link href={category.href}>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-luxury-gold transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-white/70 text-sm font-medium tracking-widest uppercase items-center flex gap-2 group-hover:gap-4 transition-all">
                    Explore
                    <div className="w-8 h-[1px] bg-white/40" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
