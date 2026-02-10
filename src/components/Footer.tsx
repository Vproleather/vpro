import Link from "next/link";
import Image from "next/image";

const serviceAreas = [
  "Woodstock", "Canton", "Roswell", "Alpharetta", "Marietta", 
  "Kennesaw", "Acworth", "Holly Springs", "Ball Ground", "Cumming"
];

const leatherServices = [
  { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair" },
  { name: "Leather Car Seat Repair", href: "/leather-repair/leather-car-seat-repair" },
  { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
  { name: "Commercial Leather Repair", href: "/leather-repair/commercial-leather-furniture-repair" },
];

const upholsteryServices = [
  { name: "Commercial Upholstery", href: "/upholstery/commercial-upholstery" },
  { name: "Restaurant Upholstery", href: "/upholstery/restaurant-seat-upholstery" },
  { name: "Marine Upholstery", href: "/upholstery/marine-upholstery" },
  { name: "Medical Upholstery", href: "/upholstery/medical-seat-upholstery" },
];

const furnitureServices = [
  { name: "Furniture Regluing", href: "/furniture-repair/furniture-regluing" },
  { name: "Recliner Repair", href: "/furniture-repair/recliner-repair" },
  { name: "Vintage Restoration", href: "/furniture-repair/vintage-furniture-restoration" },
  { name: "Water Damage Repair", href: "/furniture-repair/water-damaged-furniture-repair" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/V-pro.png" 
                alt="V-Pro Leather Repair Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Premier leather repair and restoration services in Woodstock, Georgia. 
              Expert craftsmen serving Cherokee County and the greater Atlanta area since 2005.
            </p>
            <div className="space-y-2 text-white/60">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                298 N Briar Ridge, Woodstock, GA 30189
              </p>
              <a href="tel:+17705924689" className="flex items-center gap-2 hover:text-[#C9A327] transition-colors">
                <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (770) 592-4689
              </a>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                vpro@bellsouth.net
              </p>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <a 
                href="https://www.facebook.com/VProVinylLeatherRepair/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#C9A327] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow us on Facebook
              </a>
            </div>
          </div>

          {/* Leather Repair */}
          <div>
            <h4 className="text-[#C9A327] font-semibold mb-4 text-sm uppercase tracking-wider">
              Leather Repair
            </h4>
            <ul className="space-y-3">
              {leatherServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/60 hover:text-[#C9A327] transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Upholstery */}
          <div>
            <h4 className="text-[#C9A327] font-semibold mb-4 text-sm uppercase tracking-wider">
              Upholstery
            </h4>
            <ul className="space-y-3">
              {upholsteryServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/60 hover:text-[#C9A327] transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Furniture Repair */}
          <div>
            <h4 className="text-[#C9A327] font-semibold mb-4 text-sm uppercase tracking-wider">
              Furniture Repair
            </h4>
            <ul className="space-y-3">
              {furnitureServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/60 hover:text-[#C9A327] transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="text-[#C9A327] font-semibold mb-4 text-sm uppercase tracking-wider">
            Service Areas
          </h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {serviceAreas.map((area) => (
              <span key={area} className="text-white/60 text-sm">
                {area}, GA
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} V-Pro Leather Repair. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-white/40 hover:text-[#C9A327] transition-colors text-sm">
              About Us
            </Link>
            <a href="/sitemap.xml" className="text-white/40 hover:text-[#C9A327] transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
