"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Leather Repair",
    href: "/leather-repair",
    children: [
      { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair" },
      { name: "Leather Car Seat Repair", href: "/leather-repair/leather-car-seat-repair" },
      { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration" },
      { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration" },
      { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
      { name: "Leather Recoloring", href: "/leather-repair/leather-recoloring" },
      { name: "Leather Upholstery Repair", href: "/leather-repair/leather-upholstery-repair" },
      { name: "Leather Scratch Repair", href: "/leather-repair/leather-scratch-repair" },
      { name: "Leather Tear Repair", href: "/leather-repair/leather-tear-repair" },
      { name: "Leather Dyeing", href: "/leather-repair/leather-dyeing" },
      { name: "Commercial Leather Repair", href: "/leather-repair/commercial-leather-furniture-repair" },
      { name: "Aircraft Seat Repair", href: "/leather-repair/aircraft-seat-repair" },
      { name: "Marine Seat Repair", href: "/leather-repair/marine-seat-repair" },
    ],
  },
  {
    name: "Upholstery",
    href: "/upholstery",
    children: [
      { name: "Commercial Upholstery", href: "/upholstery/commercial-upholstery" },
      { name: "Restaurant Seat Upholstery", href: "/upholstery/restaurant-seat-upholstery" },
      { name: "Hospitality Upholstery", href: "/upholstery/hospitality-upholstery" },
      { name: "Health Club Upholstery", href: "/upholstery/health-club-upholstery" },
      { name: "Medical Seat Upholstery", href: "/upholstery/medical-seat-upholstery" },
      { name: "Dining Chair Upholstery", href: "/upholstery/dining-chair-upholstery" },
      { name: "Marine Upholstery", href: "/upholstery/marine-upholstery" },
    ],
  },
  {
    name: "Furniture Repair",
    href: "/furniture-repair",
    children: [
      { name: "Furniture Regluing", href: "/furniture-repair/furniture-regluing" },
      { name: "Dining Chair Repair", href: "/furniture-repair/dining-chair-repair" },
      { name: "Recliner Repair", href: "/furniture-repair/recliner-repair" },
      { name: "Loose Joint Repair", href: "/furniture-repair/loose-joint-repair" },
      { name: "Kitchen Chair Repair", href: "/furniture-repair/kitchen-chair-repair" },
      { name: "Vintage Furniture Restoration", href: "/furniture-repair/vintage-furniture-restoration" },
      { name: "Water Damaged Furniture", href: "/furniture-repair/water-damaged-furniture-repair" },
      { name: "Fire Damaged Furniture", href: "/furniture-repair/fire-damaged-furniture-repair" },
      { name: "Moving Damage Repair", href: "/furniture-repair/moving-damage-furniture-repair" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/V-pro.png" 
              alt="V-Pro Leather Repair Logo" 
              width={180} 
              height={60}
              className="h-14 w-auto group-hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm text-white/80 hover:text-[#C9A327] transition-colors font-medium"
                >
                  {item.name}
                  {item.children && (
                    <svg className="inline-block ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 bg-black border border-white/10 rounded-lg shadow-2xl py-2 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-[#C9A327] hover:bg-white/5 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#C9A327] text-black font-semibold text-sm rounded-full hover:bg-[#d4af37] transition-all hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-white/80 hover:text-[#C9A327] transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block py-2 text-sm text-white/60 hover:text-[#C9A327] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center mt-4 px-6 py-3 bg-[#C9A327] text-black font-semibold text-sm rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        )}
      </nav>

      {/* Mobile Service Banner */}
      <div className="bg-[#C9A327] text-black text-center text-xs font-medium tracking-wide py-1.5 px-4">
        <span className="inline-flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Mobile Service Available
        </span>
      </div>
    </header>
  );
}
