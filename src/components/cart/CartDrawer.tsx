"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/store/useCart";
import { useUI } from "@/store/useUI";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const CartDrawer = () => {
  const { isCartOpen, closeCart } = useUI();
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-luxury-pink/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-luxury-pink" size={20} />
                <h2 className="text-xl font-serif font-bold text-luxury-deep">Your Bag</h2>
                <span className="bg-luxury-pink/10 text-luxury-pink text-xs font-bold px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-luxury-soft rounded-full transition-colors"
              >
                <X size={24} className="text-luxury-deep" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-20 h-20 bg-luxury-soft rounded-full flex items-center justify-center">
                    <ShoppingBag size={40} className="text-luxury-gray/40" />
                  </div>
                  <p className="text-luxury-gray font-inter">Your cart is empty.</p>
                  <Button variant="outline" size="sm" onClick={closeCart}>
                    Start Shopping
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative w-24 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-luxury-soft">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="text-sm font-bold text-luxury-deep font-serif leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs text-luxury-gray mt-1">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-luxury-pink/20 rounded-full px-2 py-1 gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-luxury-pink transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-luxury-pink transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-bold text-luxury-pink">
                            ৳{item.price * item.quantity}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-luxury-gray hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Summary */}
            {items.length > 0 && (
              <div className="p-6 border-t border-luxury-pink/10 bg-luxury-soft/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-luxury-gray font-medium">Subtotal</span>
                  <span className="text-xl font-bold text-luxury-pink">৳{totalPrice()}</span>
                </div>
                <p className="text-[10px] text-luxury-gray mb-6 text-center italic">
                  Shipping and taxes calculated at checkout.
                </p>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
