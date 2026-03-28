"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="py-24 bg-luxury-soft">
      <Container>
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center shadow-luxury flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full bg-luxury-pink/10 flex items-center justify-center text-luxury-pink"
          >
            <Mail size={32} />
          </motion.div>
          
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold text-luxury-deep">Subscribe to our Newsletter</h2>
            <p className="text-luxury-gray font-inter max-w-md mx-auto">
              Get early access to new arrivals, exclusive events, and luxury fashion tips from our experts.
            </p>
          </div>

          <form className="w-full max-w-lg flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white border border-luxury-pink/20 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-luxury-pink/50 transition-all font-inter"
              required
            />
            <Button size="lg" className="px-10">
              Subscribe
            </Button>
          </form>
          
          <p className="text-[10px] text-luxury-gray/60 uppercase tracking-widest font-bold font-inter">
            Join 10,000+ fashion enthusiasts
          </p>
        </div>
      </Container>
    </section>
  );
};
