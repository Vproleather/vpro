import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Leather Repair near Gibbs Gardens in Ball Ground GA",
  description:
    "Professional leather repair near Gibbs Gardens in Ball Ground, GA. Furniture restoration, auto leather repair, and vintage leather care for northeast Cherokee County homes near the Etowah River corridor.",
  keywords:
    "leather repair near Gibbs Gardens Ball Ground, leather furniture repair Ball Ground GA, auto leather repair near Gibbs Gardens, leather restoration Etowah River corridor, vinyl repair Ball Ground Cherokee County",
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
    name: "Vintage Furniture Restoration",
    href: "/furniture-repair/vintage-furniture-restoration",
  },
  {
    name: "Leather Color Restoration",
    href: "/leather-repair/leather-color-restoration",
  },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
];

export default function GibbsGardensPage() {
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
            <span className="text-[#C9A327]">Gibbs Gardens, Ball Ground</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Gibbs Gardens &amp; Ball Ground Area
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Leather Repair near Gibbs Gardens{" "}
              <span className="text-[#C9A327]">in Ball Ground, GA</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Expert leather repair and furniture restoration for homeowners near Gibbs Gardens and the Etowah River corridor in Ball Ground. The only professional leather repair within miles of northeast Cherokee County.
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
                  The Closest Professional Leather Repair to Gibbs Gardens
                </h2>

                <p>
                  Gibbs Gardens is one of the most celebrated botanical destinations in the entire Southeast. The 376-acre estate garden in Ball Ground draws visitors from across the region for its Japanese gardens, daffodil displays, and manor house grounds. But Gibbs Gardens is more than a visitor attraction — it defines a neighborhood. The homes surrounding the gardens along Yellow Creek Road, the properties lining the Etowah River corridor, and the residential developments spreading through northeast Ball Ground are home to families who invest in their properties, including quality leather furniture.
                </p>

                <p>
                  There is no leather repair shop in Ball Ground. There is no leather repair shop between Ball Ground and Atlanta. Our Woodstock location at 298 N Briar Ridge is the closest professional leather repair service to Gibbs Gardens — about 20 minutes straight down GA-5 through Canton. Call us at{" "}
                  <a href="tel:+17705924689" className="text-[#C9A327] hover:underline">(770) 592-4689</a>{" "}
                  to discuss your project or schedule a free assessment.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  How the Etowah River Corridor Affects Leather near Gibbs Gardens
                </h3>

                <p>
                  The Etowah River runs through Ball Ground and directly influences the environment in homes near Gibbs Gardens. River valleys trap humidity, and the Etowah corridor is no exception. Summer months push interior humidity levels higher than you might expect even with air conditioning, especially in homes with crawl spaces or those backing up to wooded lots near the river.
                </p>

                <p>
                  We have repaired leather furniture from the Gibbs Gardens area that showed classic humidity damage — mildew growth in the creases of seat cushions, a musty smell embedded in the leather pores, and surface stiffening from repeated moisture absorption and drying cycles. These are not signs of neglect; they are signs of the local environment doing what river corridors do. We treat these issues with deep-cleaning protocols, antimicrobial conditioning, and moisture-barrier topcoats that protect the leather against the conditions it actually lives in.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Classic Cars and Rural Estate Leather near Gibbs Gardens
                </h3>

                <p>
                  The Ball Ground area around Gibbs Gardens has a character that draws people who appreciate craftsmanship — in their gardens, in their homes, and in their vehicles. The larger properties in the area often come with detached garages and workshops, and we work regularly with classic car owners who keep vehicles on these properties. Restoring a 1967 Corvette's leather interior or refreshing the seats in a classic pickup truck is a different discipline than modern car repair. The leather is different, the dyes are different, and the construction is different. We understand those differences.
                </p>

                <p>
                  Estate properties near Gibbs Gardens also tend to have leather furniture with history — pieces passed down through families, chairs that were purchased decades ago and have aged with the home. A well-built leather wing chair from the 1970s has better bones than most furniture made today. Restoring it costs less than replacing it with something of equal quality, and it keeps the character and memory that the piece carries.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  What We Fix for Homeowners near Gibbs Gardens
                </h3>

                <ul className="space-y-2">
                  <li><strong>Humidity-damaged leather furniture</strong> — Mildew treatment, deep conditioning, and protective barrier application for river-corridor homes</li>
                  <li><strong>Faded and worn leather sofas</strong> — Full color restoration and surface refinishing for daily-use furniture</li>
                  <li><strong>Vintage and heirloom leather restoration</strong> — Careful preservation of antique chairs, leather-topped desks, trunks, and family heirlooms</li>
                  <li><strong>Classic vehicle leather interiors</strong> — Period-appropriate restoration for vintage cars, trucks, and specialty vehicles</li>
                  <li><strong>Leather color matching and recoloring</strong> — Exact shade matching using professional equipment, not eyeball guessing</li>
                  <li><strong>Pet damage repair</strong> — Scratches, tears, and chewing damage from dogs and cats on leather furniture</li>
                </ul>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  No Local Options — Why That Matters
                </h3>

                <p>
                  When there is no leather repair shop nearby, the temptation is to either ignore the damage or try a DIY kit from an auto parts store. Both choices cost more in the long run. Ignored damage gets worse — a small crack becomes a split, a faded spot becomes a stripped surface. DIY kits use generic colors and thin adhesives that peel within weeks, and the failed repair makes the professional fix harder and more expensive later.
                </p>

                <p>
                  At 20 minutes away, we are close enough to make professional leather repair convenient for Gibbs Gardens area homeowners. We also offer pickup and delivery for larger pieces — we can come to your home, load the sofa or chair, take it to our shop for proper repair, and return it when finished. Many of our Ball Ground customers prefer this approach since hauling a full-size leather sectional is not a one-person job.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Driving Directions from Gibbs Gardens to V-Pro Leather Repair
                </h3>

                <p>
                  From Gibbs Gardens at 1987 Gibbs Drive, Ball Ground, head south on Gibbs Drive to Yellow Creek Road. Turn right onto Yellow Creek Road and continue to GA-5 (Canton Highway). Turn right (south) onto GA-5 and follow it through Canton for approximately 12 miles. As GA-5 becomes Main Street entering Woodstock, turn left onto Rope Mill Road, then right onto N Briar Ridge. Our shop at 298 N Briar Ridge is on your right. The drive takes approximately 20 to 25 minutes on a straightforward route down GA-5 with no highway driving required.
                </p>

                <p>
                  Ready to restore your leather? Call{" "}
                  <a href="tel:+17705924689" className="text-[#C9A327] hover:underline">(770) 592-4689</a>{" "}
                  or{" "}
                  <Link href="/contact" className="text-[#C9A327] hover:underline">request a free quote online</Link>.
                  We look forward to serving our neighbors near Gibbs Gardens.
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
                  <li><Link href="/locations/holly-springs-town-center" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Holly Springs Town Center</Link></li>
                  <li><Link href="/locations/kennesaw-mountain" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Kennesaw Mountain</Link></li>
                  <li><Link href="/locations/town-center-at-cobb" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Town Center at Cobb</Link></li>
                  <li><Link href="/locations/kennesaw-state-university" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Kennesaw State University</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Leather Repair near Gibbs Gardens?"
        description="Get a free quote from the closest professional leather repair to Ball Ground. Just 20 minutes down GA-5."
      />
    </>
  );
}
