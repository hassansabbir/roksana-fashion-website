import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { AboutHero } from "@/components/about/AboutHero";
import { BrandStory } from "@/components/about/BrandStory";
import { MissionVision } from "@/components/about/MissionVision";
import { Founder } from "@/components/about/Founder";
import { Craftsmanship } from "@/components/about/Craftsmanship";
import { Stats } from "@/components/about/Stats";
import { Testimonials } from "@/components/about/Testimonials";

export const metadata = {
  title: "Our Story | Roksana Fashion",
  description: "Learn about the heritage and craftsmanship behind Roksana Fashion BD.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <CartDrawer />
      <AboutHero />
      <BrandStory />
      <MissionVision />
      <Founder />
      <Craftsmanship />
      <Stats />
      <Testimonials />
      <Footer />
    </main>
  );
}
