"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heart, MessageCircle, Camera } from "lucide-react";
import Image from "next/image";

const INSTA_POSTS = [
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
  "https://img.freepik.com/free-photo/empty-boutique-shopping-centre_482257-78792.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-photo/women-s-fashion-store-shopping-center_1112-9608.jpg",
  "https://globalmarketingprofessor.com/wp-content/uploads/2020/04/26032013_-_fashion_retail_space_-_shop_examples.jpg",
  "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop",
];

export const InstagramGallery = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-pink uppercase tracking-widest text-xs font-bold font-inter"
          >
            Join the movement
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-luxury-deep mt-4"
          >
            Our Instagram Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-luxury-gray mt-4 max-w-sm mx-auto flex items-center justify-center gap-2 font-inter"
          >
            Follow us @RoksanaFashionBD{" "}
            <Camera size={16} className="text-luxury-pink" />
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTA_POSTS.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={post}
                alt={`Instagram Post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-pink/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-1 font-bold text-sm">
                  <Heart size={18} fill="white" /> 1.2k
                </div>
                <div className="flex items-center gap-1 font-bold text-sm">
                  <MessageCircle size={18} fill="white" /> 84
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
