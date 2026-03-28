"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { products, categories } from "@/data/products";
import { SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const ShopContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const categoryFilter = searchParams.get("category");
  const sortFilter = searchParams.get("sort") || "newest";
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }
    
    // Sort
    if (sortFilter === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortFilter === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [categoryFilter, sortFilter]);

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gray/60 border-b border-luxury-pink/10 pb-4">
                  Categories
                </h3>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => updateFilter("category", null)}
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest text-left transition-all duration-300",
                      !categoryFilter ? "text-luxury-pink pl-2 border-l-2 border-luxury-pink" : "text-luxury-deep hover:text-luxury-pink hover:pl-2"
                    )}
                  >
                    All Collections
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateFilter("category", cat)}
                      className={cn(
                        "text-xs font-bold uppercase tracking-widest text-left transition-all duration-300",
                        categoryFilter === cat ? "text-luxury-pink pl-2 border-l-2 border-luxury-pink" : "text-luxury-deep hover:text-luxury-pink hover:pl-2"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gray/60 border-b border-luxury-pink/10 pb-4">
                  Sort By
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Newest", value: "newest" },
                    { label: "Price: Low to High", value: "price-low" },
                    { label: "Price: High to Low", value: "price-high" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => updateFilter("sort", opt.value)}
                      className={cn(
                        "text-xs font-bold uppercase tracking-widest text-left transition-all duration-300",
                        sortFilter === opt.value ? "text-luxury-pink pl-2 border-l-2 border-luxury-pink" : "text-luxury-deep hover:text-luxury-pink hover:pl-2"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 space-y-12">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-deep uppercase tracking-tight">
                {categoryFilter || "All Collections"}
              </h1>
              <p className="text-luxury-gray font-inter text-sm">
                Showing {filteredProducts.length} of {products.length} exquisite pieces
              </p>
              
              <button
                onClick={() => setIsMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-luxury-deep hover:text-luxury-pink transition-colors lg:hidden mt-4"
              >
                <SlidersHorizontal size={18} /> Filters & Sort
              </button>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <p className="text-luxury-gray font-inter italic">No pieces found in this category.</p>
                <button
                  onClick={() => updateFilter("category", null)}
                  className="text-luxury-pink font-bold uppercase tracking-widest text-xs border-b border-luxury-pink"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[101] shadow-2xl p-8 flex flex-col gap-12"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-bold text-luxury-deep">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-luxury-gray/60">Category</h3>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => { updateFilter("category", null); setIsMobileFiltersOpen(false); }}
                      className={cn("text-sm font-medium text-left", !categoryFilter ? "text-luxury-pink" : "text-luxury-deep")}
                    >
                      All Collections
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { updateFilter("category", cat); setIsMobileFiltersOpen(false); }}
                        className={cn("text-sm font-medium text-left", categoryFilter === cat ? "text-luxury-pink" : "text-luxury-deep")}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};


