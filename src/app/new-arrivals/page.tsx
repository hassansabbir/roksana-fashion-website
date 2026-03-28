import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { ArrivalsHero } from "@/components/arrivals/ArrivalsHero";
import { FeaturedSpotlight } from "@/components/arrivals/FeaturedSpotlight";
import { TimelineGrid } from "@/components/arrivals/TimelineGrid";

export const metadata = {
  title: "New Arrivals | Roksana Fashion",
  description: "Explore our latest collection of meticulously handcrafted fashion pieces.",
};

export default function NewArrivalsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <CartDrawer />
      <ArrivalsHero />
      <FeaturedSpotlight />
      <TimelineGrid />
      <Footer />
    </main>
  );
}
