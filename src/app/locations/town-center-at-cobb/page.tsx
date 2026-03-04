import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title:
    "Leather Repair near Town Center at Cobb in Kennesaw GA | V-Pro Leather",
  description:
    "Professional leather repair near Town Center at Cobb Mall and the Barrett Parkway corridor in Kennesaw, GA. Commercial and residential leather restoration, car seat repair, and furniture repair. Free quotes.",
  keywords:
    "leather repair near Town Center at Cobb, leather restoration Town Center Mall Kennesaw GA, leather furniture repair Barrett Parkway, commercial leather repair near Town Center at Cobb, vinyl repair Town Center Kennesaw",
};

const relatedServices = [
  { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair" },
  {
    name: "Leather Car Seat Repair",
    href: "/leather-repair/leather-car-seat-repair",
  },
  {
    name: "Commercial Leather Repair",
    href: "/leather-repair/commercial-leather-furniture-repair",
  },
  {
    name: "Leather Furniture Restoration",
    href: "/leather-repair/leather-furniture-restoration",
  },
  {
    name: "Leather Color Restoration",
    href: "/leather-repair/leather-color-restoration",
  },
  {
    name: "Restaurant Seat Upholstery",
    href: "/upholstery/restaurant-seat-upholstery",
  },
];

export default function TownCenterAtCobbPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-black">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A327' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-white/50 hover:text-[#C9A327] transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/locations" className="text-white/50 hover:text-[#C9A327] transition-colors">Areas We Serve</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#C9A327]">Town Center at Cobb</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Town Center at Cobb Area
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Leather Repair near Town Center at Cobb{" "}
              <span className="text-[#C9A327]">in Kennesaw, GA</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Professional leather repair for homes and businesses along the Barrett Parkway corridor near Town Center at Cobb. Commercial leather maintenance, residential furniture restoration, and auto leather repair — 15 minutes from the mall via I-575.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#C9A327] text-black font-semibold rounded-full hover:bg-[#d4af37] transition-all">
                Get Free Quote
              </Link>
              <a href="tel:+17705924689" className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[#C9A327] hover:text-[#C9A327] transition-all">
                (770) 592-4689
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-600">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Leather Repair for the Barrett Parkway Corridor and Town Center at Cobb
                </h2>

                <p>
                  Town Center at Cobb is the commercial anchor of Kennesaw and one of the busiest commercial districts in Cobb County. The Barrett Parkway corridor stretching east from the mall toward I-75 and west toward Acworth is lined with restaurants, retail storefronts, professional offices, and medical practices. Every one of those businesses has furniture that gets daily use from the public — and that furniture needs maintenance.
                </p>

                <p>
                  Our leather repair shop in Woodstock is 15 minutes north of Town Center at Cobb via I-575. We work with both businesses along Barrett Parkway and homeowners in the residential neighborhoods that surround the commercial corridor. Whether you need a restaurant's booth seats restored or your home leather sectional brought back to life, we are the closest professional leather repair to the Town Center area. Call{" "}
                  <a href="tel:+17705924689" className="text-[#C9A327] hover:underline">(770) 592-4689</a>{" "}
                  for a free estimate.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Commercial Leather Repair along Barrett Parkway
                </h3>

                <p>
                  The Barrett Parkway corridor has one of the highest densities of restaurants and retail per mile in northwest metro Atlanta. Those businesses deal with constant furniture wear from foot traffic, spilled food and drinks, shifting bodies, and cleaning chemicals that strip leather finishes over time. A restaurant booth that looked perfect when it was installed starts showing cracked vinyl and faded leather within two to three years of heavy use.
                </p>

                <p>
                  Replacing a set of restaurant booths can cost $15,000 to $30,000 depending on the number of seats. Repairing them? A fraction of that — often 70 to 80 percent less. And the repair can be done after hours with no disruption to business operations. We schedule commercial work on Barrett Parkway around our clients' needs: early mornings before opening, late evenings after closing, or during slow mid-week periods. The booth looks new by the next service.
                </p>

                <p>
                  Medical offices and professional practices along Barrett Parkway face the same issue. Waiting room chairs with worn armrests, exam table vinyl that has cracked, and conference room seating that has faded — all of it makes an impression on patients and clients walking through the door. We offer ongoing maintenance contracts that keep commercial spaces looking professional without the periodic shock of full furniture replacement.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Auto Leather Repair: Drop Off While You Shop
                </h3>

                <p>
                  One of the most common ways we work with Town Center at Cobb area customers is the drop-and-shop approach. You bring your vehicle to our Woodstock shop in the morning, do your shopping or errands at Town Center, and pick it up on the way home with your leather seats looking brand new. The 15-minute drive between our shop and the mall makes this a natural fit for anyone already planning a Town Center trip.
                </p>

                <p>
                  Auto leather repair near the Town Center is in constant demand because of the sheer volume of vehicles in the area. The sun exposure in those massive parking lots bakes dashboard leather and accelerates seat wear. Getting in and out of a vehicle dozens of times while shopping puts repeated stress on the driver's seat bolster. Add commuter wear from the I-75 corridor, and car leather near Town Center takes more punishment than average. We repair cracked seats, faded color, torn armrests, and worn bolsters using automotive-grade products that hold up to the conditions.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Residential Neighborhoods near Town Center at Cobb
                </h3>

                <p>
                  The neighborhoods surrounding Town Center at Cobb — along Shiloh Road, Big Shanty Road, and the streets between Barrett Parkway and Chastain Road — include a mix of single-family homes, townhome communities, and apartment complexes. The residential density here means a lot of leather furniture in a compact area, and that furniture needs periodic care.
                </p>

                <p>
                  We work regularly with homeowners in the Barrett Lakes, Legacy Park, and Shiloh Crossing communities near the Town Center. These neighborhoods have a mix of newer and established homes, but the leather furniture challenges are consistent: fading from sunlight, wear from daily use, pet damage, and the occasional move-day accident. For all of these, professional repair costs less than a replacement and gets the piece back to looking right.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  What We Fix near Town Center at Cobb
                </h3>

                <ul className="space-y-2">
                  <li><strong>Restaurant booth and commercial seating repair</strong> — Cracked vinyl, faded leather, torn seats, and worn finishes at restaurants, offices, and medical practices along Barrett Parkway</li>
                  <li><strong>Auto leather repair</strong> — Sun damage, cracked seats, worn bolsters, and faded color for the heavy-commute vehicles near the I-75 corridor</li>
                  <li><strong>Leather sofa and sectional restoration</strong> — Fading, scratches, tears, and wear on residential leather furniture in surrounding neighborhoods</li>
                  <li><strong>Hotel and hospitality furniture repair</strong> — Lobby seating, conference room pieces, and guest room furniture for lodging near Town Center</li>
                  <li><strong>Leather color restoration</strong> — Full-surface refinishing for commercial and residential pieces that have faded from UV exposure or cleaning chemical damage</li>
                  <li><strong>Ongoing maintenance contracts</strong> — Scheduled cleaning, conditioning, and spot repair to keep commercial leather looking professional year-round</li>
                </ul>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Why Businesses near Town Center Choose V-Pro
                </h3>

                <p>
                  We have been working with Cobb County businesses for close to 20 years. We understand that commercial leather repair has different requirements than residential work. Turnaround time matters — a restaurant cannot have booths out of service during a Friday dinner rush. Durability matters — the repair needs to withstand public use, not just look good for a week. And cost matters — the whole point of repair over replacement is saving money while maintaining appearance.
                </p>

                <p>
                  We back our commercial work with a satisfaction guarantee. If a repair does not meet the standard we agreed on, we come back and make it right. That is how we have maintained long-term relationships with businesses along Barrett Parkway and throughout Cobb County.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Driving Directions from Town Center at Cobb to V-Pro Leather Repair
                </h3>

                <p>
                  From Town Center at Cobb Mall, exit onto Barrett Parkway heading east toward I-75. Take I-75 North to Exit 269 for I-575 North toward Canton. Follow I-575 North for approximately 7 miles to Exit 7 for Towne Lake Parkway in Woodstock. Turn right onto Towne Lake Parkway, then right onto Rope Mill Road. Turn left onto N Briar Ridge — our shop at 298 N Briar Ridge is on your right. The drive takes approximately 15 minutes with normal traffic flow on I-575.
                </p>

                <p>
                  Have a leather repair project near Town Center at Cobb? Call{" "}
                  <a href="tel:+17705924689" className="text-[#C9A327] hover:underline">(770) 592-4689</a>{" "}
                  or{" "}
                  <Link href="/contact" className="text-[#C9A327] hover:underline">request a free quote online</Link>.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-black rounded-2xl p-6 mb-8 sticky top-28">
                <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
                <div className="space-y-4 mb-6">
                  <a href="tel:+17705924689" className="flex items-center gap-3 text-white/70 hover:text-[#C9A327] transition-colors">
                    <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    (770) 592-4689
                  </a>
                  <a href="mailto:vpro@bellsouth.net" className="flex items-center gap-3 text-white/70 hover:text-[#C9A327] transition-colors">
                    <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    vpro@bellsouth.net
                  </a>
                  <div className="flex items-start gap-3 text-white/70">
                    <svg className="w-5 h-5 text-[#C9A327] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>298 N Briar Ridge<br />Woodstock, GA 30189</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center px-6 py-3 bg-[#C9A327] text-black font-semibold rounded-full hover:bg-[#d4af37] transition-all">
                  Request Quote
                </Link>
              </div>

              <div className="bg-[#fafafa] rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-black mb-4">Services We Provide</h3>
                <ul className="space-y-3">
                  {relatedServices.map((service) => (
                    <li key={service.name}>
                      <Link href={service.href} className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors">
                        <svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fafafa] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-black mb-4">Nearby Areas We Serve</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>All Service Areas</Link></li>
                  <li><Link href="/locations/kennesaw-mountain" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Kennesaw Mountain</Link></li>
                  <li><Link href="/locations/kennesaw-state-university" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Kennesaw State University</Link></li>
                  <li><Link href="/locations/holly-springs-town-center" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Holly Springs Town Center</Link></li>
                  <li><Link href="/locations/gibbs-gardens" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Gibbs Gardens, Ball Ground</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Leather Repair near Town Center at Cobb?"
        description="Get a free quote for commercial or residential leather repair. Just 15 minutes from Barrett Parkway via I-575."
      />
    </>
  );
}
