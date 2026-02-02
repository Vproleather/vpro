import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About V-Pro Leather Repair | Woodstock GA Leather Restoration",
  description: "Meet the team at V-Pro Leather Repair. Locally owned leather and upholstery repair serving Woodstock and surrounding areas. Licensed, insured, and committed to quality service.",
};

const serviceAreas = [
  "Woodstock", "Canton", "Roswell", "Alpharetta", "Marietta", 
  "Kennesaw", "Acworth", "Holly Springs", "Ball Ground", "Cumming",
  "Towne Lake", "Eagle Watch", "BridgeMill", "Lake Allatoona"
];

const trustSignals = [
  { icon: "shield", title: "Licensed & Insured", desc: "Fully licensed and insured for your protection" },
  { icon: "star", title: "20+ Years Experience", desc: "Serving Cherokee County since 2005" },
  { icon: "check", title: "Satisfaction Guaranteed", desc: "100% satisfaction on every job" },
  { icon: "clock", title: "Same-Day Estimates", desc: "Fast, free quotes for all projects" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-black">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
            About Us
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            About V-Pro Leather Repair — Your Local <span className="text-[#C9A327]">Woodstock</span> Leather Experts
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Locally owned. Professionally trained. Here when you need us.
          </p>
          <a
            href="tel:+17705924689"
            className="inline-flex items-center px-8 py-4 bg-[#C9A327] text-black font-semibold rounded-full hover:bg-[#d4af37] transition-all text-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (770) 592-4689
          </a>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
                How V-Pro Leather Repair Got Started
              </h2>
              
              {/* Replace with authentic business story */}
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  {/* Replace with authentic business story: How did you get into this industry? 
                      Why did you start this business? What's your connection to Woodstock? 
                      Be genuine and specific. This section should be 150-200 words when filled in. */}
                  V-Pro Leather Repair was born from a simple idea: people in Woodstock and Cherokee County deserve access to quality leather repair without having to drive to Atlanta. What started as a small operation has grown into one of the most trusted leather and upholstery repair services in North Georgia.
                </p>
                <p className="mb-6">
                  We've seen this community grow and change over the years. From the historic downtown area to the new neighborhoods around Towne Lake and BridgeMill, we've had the privilege of serving families throughout Cherokee County. Many of our customers have been with us for years, and we often work on multiple pieces for the same families as their needs change.
                </p>
                <p>
                  Our shop is right here in Woodstock because this is home. We're not a franchise or a national chain. We're your neighbors, and we take pride in the work we do for our community.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Before/After showcase images */}
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/img/vintage-leather-club-chair-before.webp"
                  alt="Vintage leather club chair before restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/img/vintage-leather-club-chair-after.webp"
                  alt="Vintage leather club chair after restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 aspect-video rounded-2xl overflow-hidden relative">
                <Image
                  src="/img/tan-leather-recliner-living-room-restored.webp"
                  alt="Restored tan leather recliner in living room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owner/Team Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              The Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
              Meet Our Team
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-2xl overflow-hidden relative">
                    <Image
                      src="/img/brad.webp"
                      alt="Brad Koplen, Owner of V-Pro Leather Repair"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Brad Koplen
                  </h3>
                  <p className="text-[#C9A327] font-medium mb-6">Owner & Lead Technician</p>
                  
                  <div className="prose prose-gray">
                    <p className="text-gray-600 mb-4">
                      With over two decades of experience in leather repair and restoration, Brad brings expertise and passion to every project. After years of working in the industry, the decision to open V-Pro Leather Repair in Woodstock came from a desire to serve the local community with quality craftsmanship.
                    </p>
                    <p className="text-gray-600">
                      Specializing in both residential and commercial leather repair, our team has worked on everything from family heirloom furniture to luxury vehicle interiors. We take pride in staying current with the latest techniques and materials to deliver the best possible results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
                Service Area
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
                Proudly Serving Woodstock and Surrounding Areas
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our shop is located right here in Woodstock, and we serve customers throughout Cherokee County and beyond. Whether you're in downtown Woodstock, out by Lake Allatoona, or anywhere in between, we're here to help.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                For most projects, we offer mobile service and can come to you. Large items like sofas and sectionals are often easier for us to work on in your home. Just give us a call to discuss your specific needs.
              </p>
              
              <div className="bg-[#fafafa] rounded-xl p-6">
                <h3 className="font-semibold text-black mb-4">Response Times:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Same-day estimates available
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Most repairs completed within 1-3 days
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mobile service throughout coverage area
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-6">Areas We Serve:</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {serviceAreas.map((area) => (
                  <span key={area} className="px-4 py-2 bg-[#fafafa] border border-gray-200 rounded-full text-gray-700">
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                Not sure if we serve your area? Give us a call at (770) 592-4689 and we'll let you know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Business Profile Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Find Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Find Us on Google
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Check out our reviews and see why customers trust V-Pro Leather Repair for their leather and upholstery needs.
            </p>
          </div>
          
          {/* Google Maps Embed */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260396.0718128909!2d-84.70788525767176!3d34.02804631858549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a1742b4d515ebc9%3A0xa987ed947983ac5!2sV-Pro%20Vinyl%20and%20Leather%20Repair!5e1!3m2!1sen!2sus!4v1769199870791!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="V-Pro Leather Repair Location"
              className="w-full"
            />
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://maps.google.com/?q=298+N+Briar+Ridge,+Woodstock,+GA+30189" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#C9A327] font-semibold hover:underline"
            >
              Get Directions
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
            Stay Connected
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
            Follow Us
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12">
            Stay up to date with our latest projects, tips for leather care, and special offers.
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center gap-6">
            {/* Only link to social profiles you actively maintain. Inactive profiles hurt more than help. */}
            
            {/* Facebook */}
            <a 
              href="#" // Add Facebook URL
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A327] transition-all group"
              aria-label="Follow us on Facebook"
            >
              <svg className="w-6 h-6 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Google Business Profile */}
            <a 
              href="#" // Add GBP URL
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A327] transition-all group"
              aria-label="Find us on Google"
            >
              <svg className="w-6 h-6 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a 
              href="#" // Add Instagram URL if applicable
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A327] transition-all group"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-6 h-6 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#C9A327]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-black/70 text-xl max-w-2xl mx-auto mb-8">
            Contact us today for a free estimate on your leather repair or upholstery project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17705924689"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (770) 592-4689
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all text-lg"
            >
              Request Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
