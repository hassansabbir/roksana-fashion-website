import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { NewArrivals } from "@/components/home/NewArrivals";
import { Featured } from "@/components/home/Featured";
import { InstagramGallery } from "@/components/home/InstagramGallery";
import { Newsletter } from "@/components/home/Newsletter";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { QualityHighlightStrip } from "@/components/home/QualityHighlightStrip";
import { StorySection } from "@/components/home/StorySection";
import { Marquee } from "@/components/home/Marquee";
import { PromoModal } from "@/components/ui/PromoModal";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <CartDrawer />
      <PromoModal />
      
      <Hero />
      <QualityHighlightStrip />
      <Categories />
      <StorySection />
      <NewArrivals />
      <Marquee />
      <Featured />
      <InstagramGallery />
      <Newsletter />
      
      <Footer />
    </main>
  );
}
