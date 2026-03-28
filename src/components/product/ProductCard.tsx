"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/store/useCart";
import { useUI } from "@/store/useUI";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCart((state) => state.addItem);
  const openCart = useUI((state) => state.openCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col gap-4"
    >
      <Link href={`/product/${product.id}`} className="block relative overflow-hidden rounded-2xl bg-luxury-soft aspect-[3/4]">
        {/* Main Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={cn(
            "object-cover transition-all duration-700 ease-in-out",
            isHovered ? "scale-110 opacity-0" : "scale-100 opacity-100"
          )}
        />
        {/* Hover Image */}
        <Image
          src={product.hoverImage}
          alt={`${product.name} alternate`}
          fill
          className={cn(
            "object-cover transition-all duration-700 ease-in-out absolute inset-0",
            isHovered ? "scale-105 opacity-100" : "scale-110 opacity-0"
          )}
        />

        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          {parseInt(product.id) % 3 === 0 && (
            <div className="bg-luxury-gold text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-lg">
              Limited
            </div>
          )}
          {parseInt(product.id) % 2 === 0 && (
            <div className="bg-luxury-pink text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-lg">
              New
            </div>
          )}
        </div>

        {/* Premium Quick Add Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="absolute inset-x-6 bottom-6 z-20"
            >
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md text-luxury-deep py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-luxury-pink hover:text-white transition-all duration-500 active:scale-95"
              >
                <ShoppingBag size={14} />
                Quick Add
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Secondary Actions */}
        <div className={cn(
          "absolute top-6 right-6 flex flex-col gap-3 transition-all duration-500",
          isHovered ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
        )}>
          <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-luxury-deep hover:bg-luxury-pink hover:text-white transition-all shadow-lg">
            <Eye size={16} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-luxury-deep hover:bg-luxury-pink hover:text-white transition-all shadow-lg">
            <Heart size={16} />
          </button>
        </div>
      </Link>

      <div className="flex flex-col gap-1 px-1">
        <Link href={`/product/${product.id}`} className="group-hover:text-luxury-pink transition-colors">
          <h3 className="text-sm font-bold text-luxury-deep font-serif leading-tight line-clamp-1 uppercase tracking-wider">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-xs text-luxury-gray font-inter font-medium uppercase tracking-widest">
            {product.category}
          </span>
          <span className="text-sm font-bold text-luxury-pink">
            ৳{product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
