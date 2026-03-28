"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Exit intent detection (mouse leaves top of viewport)
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Auto-show after some time as well
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 30000); // 30 seconds

    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Visual Side */}
          <div className="w-full md:w-1/2 bg-luxury-pink p-8 text-white flex flex-col justify-center items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <Gift size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold italic">Special Wait!</h3>
            <p className="text-sm font-inter opacity-90 uppercase tracking-widest font-medium">
              Join the inner circle
            </p>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center gap-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-luxury-gray hover:text-luxury-deep transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="space-y-2">
              <h2 className="text-4xl font-serif font-bold text-luxury-deep">10% OFF</h2>
              <p className="text-luxury-gray text-sm font-inter leading-relaxed">
                Get an exclusive discount on your very first order at Roksana Fashion.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-luxury-pink/10 focus:outline-none focus:ring-2 focus:ring-luxury-pink/20 transition-all font-inter text-sm"
              />
              <Button className="w-full py-4 text-sm uppercase tracking-[0.2em] font-bold">
                Claim My Offer
              </Button>
              <p className="text-[10px] text-center text-luxury-gray uppercase tracking-widest opacity-60">
                *Valid for new customers only
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
