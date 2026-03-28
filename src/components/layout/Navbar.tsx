"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/store/useCart";
import { useUI } from "@/store/useUI";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "Shop",
    href: "/shop",
    megaMenu: [
      { name: "3 Piece", href: "/shop?category=3+Piece" },
      { name: "Saree", href: "/shop?category=Saree" },
      { name: "Salwar Kameez", href: "/shop?category=Salwar+Kameez" },
      { name: "Tops", href: "/shop?category=Tops" },
      { name: "Casual Wear", href: "/shop?category=Casual+Wear" },
    ],
  },
  { name: "New Arrivals", href: "/shop?sort=newest" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const cartItems = useCart((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-luxury-pink/10 py-3"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-serif font-bold tracking-tighter text-luxury-deep group-hover:text-luxury-pink transition-colors">
              ROKSANA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.megaMenu && setActiveMegaMenu(link.name)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-luxury-deep hover:text-luxury-pink transition-colors font-inter"
                >
                  {link.name}
                  {link.megaMenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* Mega Menu */}
                <AnimatePresence>
                  {link.megaMenu && activeMegaMenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 bg-white shadow-xl rounded-2xl p-6 min-w-[200px] border border-luxury-pink/5"
                    >
                      <div className="grid gap-3">
                        {link.megaMenu.map((side) => (
                          <Link
                            key={side.name}
                            href={side.href}
                            className="text-sm text-luxury-gray hover:text-luxury-pink transition-colors whitespace-nowrap"
                          >
                            {side.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-luxury-deep hover:text-luxury-pink transition-colors">
              <Search size={22} />
            </button>
            <button
              onClick={() => useUI.getState().openCart()}
              className="p-2 text-luxury-deep hover:text-luxury-pink transition-colors relative group"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-luxury-pink text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="lg:hidden p-2 text-luxury-deep"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 right-0 bottom-0 left-0 bg-white z-[60] p-6 pt-20"
          >
            <button
              className="absolute top-6 right-6 p-2 text-luxury-deep"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    className="text-2xl font-serif font-bold text-luxury-deep"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.megaMenu && (
                    <div className="flex flex-wrap gap-x-4 gap-y-2 pl-4 border-l-2 border-luxury-pink/20">
                      {link.megaMenu.map((side) => (
                        <Link
                          key={side.name}
                          href={side.href}
                          className="text-sm text-luxury-gray hover:text-luxury-pink"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {side.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
