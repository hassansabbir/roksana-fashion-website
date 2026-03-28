"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useCart } from "@/store/useCart";
import { useUI } from "@/store/useUI";
import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Share2, Heart, ShoppingBag, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeImage, setActiveImage] = useState(product.image);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [openAccordion, setOpenAccordion] = useState<string | null>("description");

  const addItem = useCart((state) => state.addItem);
  const openCart = useUI((state) => state.openCart);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handleAddToCart = () => {
    addItem(product);
    openCart();
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Image Gallery */}
          <div className="flex-1 flex flex-col gap-6">
            <div
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-luxury-soft cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <Image
                src={activeImage}
                alt={product.name}
                fill
                className={cn(
                  "object-cover transition-transform duration-200",
                  isZoomed ? "scale-150" : "scale-100"
                )}
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                      }
                    : undefined
                }
              />
              <div className="absolute top-6 left-6">
                <Badge variant="gold" className="px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase">
                  Exclusive Piece
                </Badge>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[product.image, product.hoverImage].map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={cn(
                    "relative aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                    activeImage === img ? "border-luxury-pink scale-95" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image src={img} alt={`${product.name} thumbnail ${i}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="space-y-4">
              <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-luxury-gray/60">
                <Link href="/" className="hover:text-luxury-pink transition-colors">Home</Link>
                <span>/</span>
                <Link href="/shop" className="hover:text-luxury-pink transition-colors">Shop</Link>
                <span>/</span>
                <span className="text-luxury-deep">{product.category}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-deep leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center justify-between border-b border-luxury-pink/10 pb-6">
                <p className="text-3xl font-bold text-luxury-pink">৳{product.price.toLocaleString()}</p>
                <div className="flex items-center gap-4">
                  <button className="p-3 rounded-full bg-white shadow-sm hover:text-luxury-pink transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="p-3 rounded-full bg-white shadow-sm hover:text-luxury-pink transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Selection */}
            <div className="space-y-8">
              {/* Color Selection */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-deep">
                  Color: <span className="text-luxury-gray ml-2">{selectedColor.name}</span>
                </h4>
                <div className="flex items-center gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 transition-all p-1",
                        selectedColor.name === color.name ? "border-luxury-pink scale-110" : "border-transparent"
                      )}
                    >
                      <div
                        className="w-full h-full rounded-full shadow-inner flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                      >
                         {selectedColor.name === color.name && <Check size={14} className="text-white drop-shadow-md" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-deep">Size</h4>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-luxury-pink border-b border-luxury-pink">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "py-3 text-sm font-bold rounded-xl border-2 transition-all",
                        selectedSize === size
                          ? "border-luxury-pink bg-luxury-pink/5 text-luxury-pink"
                          : "border-luxury-soft text-luxury-gray hover:border-luxury-pink/20"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="flex-1 gap-3" onClick={handleAddToCart}>
                  <ShoppingBag size={20} /> Add to Bag
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-luxury-pink/10">
              {[
                { id: "description", title: "Description", content: product.description },
                { id: "details", title: "Product Highlights", content: (
                  <ul className="list-disc pl-5 space-y-2">
                    {product.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )},
                { id: "shipping", title: "Shipping & Returns", content: "Free express shipping on orders over ৳10,000. Easy 7-day returns and exchanges." },
              ].map((section) => (
                <div key={section.id} className="border-b border-luxury-pink/10">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full py-6 flex items-center justify-between group"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest text-luxury-deep group-hover:text-luxury-pink transition-colors">
                      {section.title}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "text-luxury-gray transition-transform duration-300",
                        openAccordion === section.id ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openAccordion === section.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-sm text-luxury-gray leading-relaxed font-inter">
                          {section.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
