import React, { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShopContent } from "@/components/product/ShopContent";
import { CartDrawer } from "@/components/cart/CartDrawer";

export const metadata = {
  title: "Shop Collection | Roksana Fashion",
  description: "Browse our exclusive collection of luxury 3-piece suites, Sarees, and Salwar Kameez. Elegance redefined for every occasion.",
};

export default function ShopPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <CartDrawer />
      
      <Suspense fallback={
        <div className="pt-32 pb-24 text-center">
          <p className="text-luxury-gray animate-pulse font-serif italic text-xl">Loading Luxury...</p>
        </div>
      }>
        <ShopContent />
      </Suspense>
      
      <Footer />
    </main>
  );
}
