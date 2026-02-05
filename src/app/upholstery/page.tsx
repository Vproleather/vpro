import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Upholstery Shop Woodstock GA | Custom Upholstery",
  description: "Professional upholstery services in Woodstock, GA. Restaurant booths, medical seating, marine upholstery and more. Serving Cherokee County businesses.",
};

const services = [
  { name: "Commercial Upholstery", href: "/upholstery/commercial-upholstery", desc: "High-volume upholstery solutions for Cherokee County businesses of all sizes." },
  { name: "Restaurant Seat Upholstery", href: "/upholstery/restaurant-seat-upholstery", desc: "Keep your restaurant booths and chairs looking fresh and inviting." },
  { name: "Hospitality Upholstery", href: "/upholstery/hospitality-upholstery", desc: "Hotels, resorts, and event venues throughout North Atlanta." },
  { name: "Health Club Upholstery", href: "/upholstery/health-club-upholstery", desc: "Gym equipment padding and seating that withstands heavy use." },
  { name: "Medical Seat Upholstery", href: "/upholstery/medical-seat-upholstery", desc: "Healthcare-grade materials that meet sanitation standards." },
  { name: "Dining Chair Upholstery", href: "/upholstery/dining-chair-upholstery", desc: "Reupholster your dining set for a fresh new look." },
  { name: "Marine Upholstery", href: "/upholstery/marine-upholstery", desc: "Boat seats and marine interiors built for Lake Allatoona conditions." },
];

export default function UpholsteryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-black">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A327' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Upholstery Shop
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Upholstery Shop <span className="text-[#C9A327]">Woodstock GA</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Full-service upholstery shop serving businesses and homeowners throughout Cherokee County. From restaurant booths to boat seats, we handle commercial and residential upholstery projects of any size.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#C9A327] text-black font-semibold rounded-full hover:bg-[#d4af37] transition-all"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+17705924689"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[#C9A327] hover:text-[#C9A327] transition-all"
              >
                (770) 592-4689
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Cherokee County's Full-Service Upholstery Shop
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Looking for an upholstery shop near Woodstock that can handle both commercial and residential work? We've been serving businesses and families in Cherokee County for close to 20 years, and we've built a reputation for quality work and reliable service. Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock.
              </p>
              
              <p>
                We do everything from single dining chairs to entire restaurant reupholstery projects. A lot of the restaurants you see around here - from downtown Woodstock to the shops along Highway 92 - we've done work for them at some point. Same goes for medical offices, gyms, churches, and other commercial spaces throughout Cherokee County and North Atlanta.
              </p>
              
              <p>
                For homeowners, we can reupholster pretty much any piece of furniture you have. That old chair your grandmother had? We can bring it back to life with new fabric while keeping its character. Or if you want something more modern, we've got access to thousands of fabric options from basic to designer.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Commercial Upholstery Services</h3>
              
              <p>
                When you're running a business, you need upholstery work done fast and done right. Empty booths mean lost revenue. Waiting room chairs that look beat up don't make a good impression. We understand that, which is why we work around your schedule - early mornings, late nights, weekends, whatever works best for your business.
              </p>
              
              <p>
                Restaurant booth reupholstery is one of our specialties. We've worked with restaurants all over Cherokee County - from the bars and grills along Main Street Woodstock to the chains out by Outlet Shoppes. Most restaurant jobs we can do overnight or during your slow hours so you don't lose any business.
              </p>
              
              <p>
                We also offer maintenance contracts for commercial clients. You pay a set amount each month or quarter, and we come in regularly to inspect and maintain your upholstery. When something needs work, we handle it before it becomes a bigger problem. Your furniture always looks professional, and you can budget the expense instead of dealing with surprise repair bills.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Restaurant Seat Upholstery</h3>
              
              <p>
                Restaurant booths and chairs take a beating. People slide in and out hundreds of times a day. Food and drinks get spilled. Kids drag toys across the seats. The sun coming through windows fades the fabric. After a few years, even quality upholstery starts looking rough.
              </p>
              
              <p>
                We can reupholster your existing booths with new fabric that matches your decor, or we can help you choose something completely different if you're ready for a change. We work with commercial-grade fabrics that are designed for high-traffic use - they're tougher, easier to clean, and come with stain-resistance treatments.
              </p>
              
              <p>
                For bar stools and dining chairs, we can do the cushions while you watch or pick them up and have them back the next day. Some restaurants rotate their chairs through the shop a few at a time so they never have to close or reduce seating.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Medical and Healthcare Upholstery</h3>
              
              <p>
                Medical facilities have special requirements for upholstery. The materials need to be easy to sanitize. They need to resist stains from all kinds of fluids. They need to hold up to constant use and frequent cleaning. Not every upholstery shop can handle this, but we can.
              </p>
              
              <p>
                We work with medical offices, dental practices, chiropractors, urgent cares, and other healthcare facilities throughout Cherokee County and North Atlanta. Exam tables, waiting room seating, procedure chairs, blood draw chairs - we've done it all. We use healthcare-grade materials that meet infection control standards.
              </p>
              
              <p>
                Many of our medical clients are on maintenance schedules. We come in quarterly or semi-annually to inspect all the upholstery, clean it properly, and repair any damage before it spreads. This keeps your facility looking professional and extends the life of your furniture.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Marine Upholstery for Lake Allatoona</h3>
              
              <p>
                Living near Lake Allatoona means a lot of folks around here have boats. Marine upholstery is different from regular upholstery - it needs to handle sun, water, mildew, and constant UV exposure. The materials and techniques are specialized, and not every shop knows how to do it right.
              </p>
              
              <p>
                We've been doing boat seats for Lake Allatoona boat owners for years. Captain's chairs, bench seats, sun pads, cockpit cushions, bow cushions - all of it. We use marine-grade vinyl and fabrics that are designed for the harsh conditions on the water. UV-resistant, mildew-resistant, easy to clean, and built to last.
              </p>
              
              <p>
                If your boat seats are cracked, faded, or falling apart, we can bring them back or replace them entirely. Many customers choose to upgrade while they're at it - better materials, different colors, more comfortable padding. We can usually have your boat ready before the next weekend on the lake.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Residential Upholstery Services</h3>
              
              <p>
                Not everything we do is commercial. We love working on residential furniture too. Dining chairs, living room chairs, headboards, ottomans, antique pieces - we do it all. Reupholstering is a great way to update your home's look without buying all new furniture.
              </p>
              
              <p>
                Got a set of dining chairs that are structurally sound but the fabric is dated or worn? We can strip them down and reupholster with new fabric for a lot less than buying new chairs. And you get to keep furniture that might have sentimental value.
              </p>
              
              <p>
                We keep sample books from major fabric suppliers in the shop, or you can bring your own fabric. Some folks find something they love at a fabric store or online and bring it in. As long as it's suitable for upholstery use, we can work with it.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Our Upholstery Process</h3>
              
              <p>
                Every project starts with an assessment. Bring the piece in or send us photos, and we'll give you a quote. For commercial jobs, we usually come to your location to measure and assess everything on site.
              </p>
              
              <p>
                Once you approve the quote, we strip the old upholstery, inspect the frame and padding, make any repairs needed, and then apply the new covering. For foam cushions that have gone flat, we can replace the foam and make everything feel like new again.
              </p>
              
              <p>
                Turnaround depends on the project size and our current workload. A dining chair might be same-day or next-day. A full restaurant reupholstery project might take a week or two, scheduled around your business hours.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Areas We Serve</h3>
              
              <p>
                Our shop is in Woodstock, and we serve all of Cherokee County including Canton, Holly Springs, Ball Ground, and Waleska. We also do a lot of work in Cobb County (Marietta, Kennesaw, Acworth) and North Fulton (Roswell, Alpharetta, Johns Creek).
              </p>
              
              <p>
                For commercial jobs, we'll travel further for the right project. We've done restaurant and hotel work all over Metro Atlanta. Give us a call at (770) 592-4689 and let's talk about what you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Upholstery Services in Woodstock"
            description="Commercial and residential upholstery for every need. Click on any service to learn more."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.name}
                title={service.name}
                description={service.desc}
                href={service.href}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Commercial Upholstery Solutions"
            description="We work with businesses of all types across Cherokee County and North Atlanta."
            light
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Restaurants & Bars", desc: "Booths, bar stools, dining chairs, patio furniture - we keep restaurants looking great." },
              { title: "Healthcare Facilities", desc: "Medical-grade materials that meet sanitation requirements. Exam tables, waiting room seating, more." },
              { title: "Hotels & Hospitality", desc: "Lobby furniture, guest room seating, conference rooms - we handle large-scale projects." },
              { title: "Fitness Centers", desc: "Equipment padding, locker room benches, reception furniture built for heavy use." },
              { title: "Churches & Religious", desc: "Pew cushions, altar furniture, fellowship hall seating at congregation-friendly prices." },
              { title: "Marine & Boating", desc: "Boat seats, cockpit cushions, swim platforms - all weather-resistant materials." },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-white/10 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection
        title="Need Upholstery Work in Woodstock?"
        description="Get a free quote for your commercial or residential upholstery project."
      />
    </>
  );
}
