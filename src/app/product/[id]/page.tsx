import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductDetails } from "@/components/product/ProductDetails";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { CartDrawer } from "@/components/cart/CartDrawer";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} | Roksana Fashion`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <CartDrawer />
      
      <ProductDetails product={product} />
      
      {/* Related Products Section (Simplified) */}
      <section className="py-24 border-t border-luxury-pink/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-luxury-deep mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
              <div key={p.id} className="group relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-luxury-soft mb-4">
                  <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-sm font-bold text-luxury-deep font-serif leading-tight">{p.name}</h3>
                <p className="text-luxury-pink text-sm font-bold mt-1">৳{p.price.toLocaleString()}</p>
                <Link href={`/product/${p.id}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View {p.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
