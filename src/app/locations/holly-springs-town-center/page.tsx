import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Leather Repair near Holly Springs Town Center in Holly Springs GA",
  description:
    "Professional leather repair near Holly Springs Town Center in Holly Springs, GA. Leather sofa repair, car seat repair, and furniture restoration just minutes from the Town Center. Free quotes.",
  keywords:
    "leather repair near Holly Springs Town Center, leather repair Holly Springs GA, leather sofa repair Holly Springs Town Center, car seat repair near Holly Springs Town Center, vinyl repair Holly Springs GA",
};

const relatedServices = [
  { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair" },
  {
    name: "Leather Car Seat Repair",
    href: "/leather-repair/leather-car-seat-repair",
  },
  {
    name: "Leather Furniture Restoration",
    href: "/leather-repair/leather-furniture-restoration",
  },
  {
    name: "Leather Color Restoration",
    href: "/leather-repair/leather-color-restoration",
  },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
  { name: "Recliner Repair", href: "/furniture-repair/recliner-repair" },
];

export default function HollySpringsPage() {
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-white/50 hover:text-[#C9A327] transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/locations" className="text-white/50 hover:text-[#C9A327] transition-colors">Areas We Serve</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#C9A327]">Holly Springs Town Center</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Holly Springs Town Center Area
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Leather Repair near Holly Springs Town Center{" "}
              <span className="text-[#C9A327]">in Holly Springs, GA</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Professional leather repair and restoration for homes and
              businesses near Holly Springs Town Center. Just 10 minutes from
              our Woodstock shop — the closest professional leather repair to
              the Town Center.
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
                  The Closest Professional Leather Repair to Holly Springs Town Center
                </h2>

                <p>
                  Holly Springs Town Center has become the heart of one of Cherokee County's fastest-growing communities. The restaurants, shops, and gathering spaces at the Town Center draw families from Bradshaw Farm, the Harmony on the Lakes developments, and neighborhoods stretching out toward Sixes Road and beyond. If you live or work near Holly Springs Town Center, our Woodstock leather repair shop is the closest professional option — about 10 minutes straight down Holly Springs Parkway.
                </p>

                <p>
                  We have been serving families near the Town Center since well before the area's recent growth boom. Back when Holly Springs Parkway was mostly two lanes and the Town Center area was still open land, we were already repairing leather furniture and car seats for residents in the surrounding neighborhoods. Now that the area has grown into a proper town center with its own identity, the demand for quality leather care has grown right alongside it.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Why Leather Repair Makes Sense near Holly Springs Town Center
                </h3>

                <p>
                  The homes surrounding Holly Springs Town Center are predominantly newer construction — built within the last 10 to 15 years. When families moved into these homes, many invested in quality leather furniture for their open-concept living rooms and family rooms. A leather sectional that cost $3,000 to $5,000 new doesn't need to be replaced when the cushions start fading or the armrest gets a scratch. Professional repair restores it for a fraction of the replacement cost.
                </p>

                <p>
                  We regularly work with homeowners from Bradshaw Farm, one of the largest planned communities near the Town Center. Bradshaw Farm families tend to have active households — kids, dogs, daily life taking its toll on furniture. The leather sofas that looked perfect on move-in day start showing their years. Faded seat cushions from daily use, pet scratches on the ottoman, maybe a tear on the armrest from moving the couch to paint the wall. All of it is repairable, and all of it is work we do every week.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Auto Leather Repair for Holly Springs Town Center Commuters
                </h3>

                <p>
                  Holly Springs Town Center sits right along the GA-5 corridor that thousands of commuters use daily heading south toward I-575 and Atlanta. Those commutes mean hours sitting in the same driver's seat every day, and leather car seats take the punishment. The left bolster on the driver's seat wears first — that's the spot that gets friction every time you get in and out. The headrest darkens from hair products and body oils. In the Georgia heat, the leather dries out and starts cracking along stress lines.
                </p>

                <p>
                  A lot of our Holly Springs Town Center area customers drop off their vehicle on the way to work and pick it up on the way home. Our shop is right on the route between Holly Springs and I-575, making it easy to work into a commute without any extra time. We can repair cracked seats, restore faded color, fix tears, and treat the leather to resist future damage — all typically in one day for standard auto leather jobs.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Commercial Leather Repair near Holly Springs Town Center
                </h3>

                <p>
                  The commercial growth around Holly Springs Town Center has brought restaurants, medical offices, and professional businesses to the area, all with furniture that gets heavy public use. Restaurant booth seats crack and stain. Waiting room chairs show wear from constant use. Conference room furniture fades. Replacing commercial furniture is expensive and disruptive — repair keeps it looking professional at a fraction of the cost.
                </p>

                <p>
                  We work with several businesses in the Holly Springs Town Center area on ongoing maintenance programs. Rather than waiting until furniture looks bad enough to warrant attention, we schedule periodic cleaning, conditioning, and spot repair visits that keep everything looking fresh. It is more cost-effective than crisis-mode replacement and makes a better impression on customers walking through the door.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  How Holly Springs Town Center&apos;s Growth Affects Your Leather
                </h3>

                <p>
                  The construction activity near the Town Center creates dust and airborne particulate that settles on everything, including leather furniture near open windows or in sunrooms. Construction dust is abrasive — it cuts into the finish of leather surfaces and accelerates wear. If you live in one of the newer developments near the Town Center that is still under active construction, keeping your leather cleaned and conditioned is important preventive maintenance.
                </p>

                <p>
                  The area's growing population also means more traffic on Holly Springs Parkway and Sixes Road. Longer commutes in hotter cars means more wear on auto leather. We have seen a noticeable increase in car seat repair requests from the Holly Springs area as the community has grown and commute times have lengthened.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Driving Directions from Holly Springs Town Center to V-Pro Leather Repair
                </h3>

                <p>
                  From Holly Springs Town Center, exit onto Holly Springs Parkway heading south toward Woodstock. Continue on Holly Springs Parkway for approximately 4 miles — the road becomes Main Street as you enter Woodstock. Turn right onto Rope Mill Road, then take a left onto N Briar Ridge. Our shop at 298 N Briar Ridge will be on your right. The entire drive is about 10 minutes with normal traffic. There is no highway driving required — it is a straight, simple route down Holly Springs Parkway.
                </p>

                <p>
                  Have a leather repair project near Holly Springs Town Center? Call us at{" "}
                  <a href="tel:+17705924689" className="text-[#C9A327] hover:underline">(770) 592-4689</a>{" "}
                  or{" "}
                  <Link href="/contact" className="text-[#C9A327] hover:underline">request a free quote online</Link>.
                  We look forward to helping you.
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
                  <li><Link href="/locations/gibbs-gardens" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Gibbs Gardens, Ball Ground</Link></li>
                  <li><Link href="/locations/town-center-at-cobb" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Town Center at Cobb</Link></li>
                  <li><Link href="/locations/kennesaw-state-university" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Kennesaw State University</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Leather Repair near Holly Springs Town Center?"
        description="Get a free quote from the closest professional leather repair shop to the Town Center. Just 10 minutes down Holly Springs Parkway."
      />
    </>
  );
}
