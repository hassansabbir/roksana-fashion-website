import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-luxury-pink/10 pt-16 pb-8 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-luxury-deep">
              ROKSANA
            </Link>
            <p className="text-sm text-luxury-gray leading-relaxed font-inter">
              Redefining elegance with premium boutique collections. We bring you the finest in women&apos;s fashion, blending tradition with modern style.
            </p>
            <div className="flex items-center gap-4 text-luxury-deep">
              {/* Social icons removed temporarily due to library issues */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-luxury-deep font-inter">
              Categories
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/shop?category=3+Piece" className="text-sm text-luxury-gray hover:text-luxury-pink transition-colors">
                3 Piece Collections
              </Link>
              <Link href="/shop?category=Saree" className="text-sm text-luxury-gray hover:text-luxury-pink transition-colors">
                Exclusive Sarees
              </Link>
              <Link href="/shop?category=Salwar+Kameez" className="text-sm text-luxury-gray hover:text-luxury-pink transition-colors">
                Salwar Kameez
              </Link>
              <Link href="/shop?category=Tops" className="text-sm text-luxury-gray hover:text-luxury-pink transition-colors">
                Modern Tops
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-luxury-deep font-inter">
              Support
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/shipping" className="text-sm text-luxury-gray hover:text-luxury-pink transition-colors">
                Shipping Policy
              </Link>
              <Link href="/returns" className="text-sm text-luxury-gray hover:text-luxury-pink transition-colors">
                Returns & Exchanges
              </Link>
              <Link href="/size-guide" className="text-sm text-luxury-gray hover:text-luxury-pink transition-colors">
                Size Guide
              </Link>
              <Link href="/faq" className="text-sm text-luxury-gray hover:text-luxury-pink transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-luxury-deep font-inter">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-luxury-gray">
                <Phone size={16} className="text-luxury-pink" />
                <span>+880 1234 567890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-luxury-gray">
                <Mail size={16} className="text-luxury-pink" />
                <span>hello@roksanafashion.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-luxury-gray">
                <MapPin size={16} className="text-luxury-pink" />
                <span>Banani, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-pink/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-luxury-gray/60 font-inter">
          <p>© {currentYear} Roksana Fashion BD. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-luxury-deep">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-luxury-deep">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
