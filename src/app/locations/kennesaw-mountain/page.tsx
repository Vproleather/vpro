import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Leather Repair near Kennesaw Mountain in Kennesaw GA",
  description:
    "Professional leather repair near Kennesaw Mountain National Battlefield Park in Kennesaw, GA. Leather furniture restoration, car seat repair, and color restoration for homes surrounding the mountain.",
  keywords:
    "leather repair near Kennesaw Mountain, leather restoration Kennesaw Mountain GA, leather sofa repair near Kennesaw Mountain, furniture repair Kennesaw Mountain Kennesaw GA, vinyl repair near Kennesaw Mountain",
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
  {
    name: "Vintage Furniture Restoration",
    href: "/furniture-repair/vintage-furniture-restoration",
  },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
];

export default function KennesawMountainPage() {
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
            <span className="text-[#C9A327]">Kennesaw Mountain</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Kennesaw Mountain Area
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Leather Repair near Kennesaw Mountain{" "}
              <span className="text-[#C9A327]">in Kennesaw, GA</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Expert leather repair and restoration for homeowners surrounding Kennesaw Mountain National Battlefield Park. Serving the neighborhoods along Old Mountain Road, Stilesboro Road, and the historic heart of Kennesaw.
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
                  Leather Repair for Homes near Kennesaw Mountain National Battlefield Park
                </h2>

                <p>
                  Kennesaw Mountain National Battlefield Park is the defining landmark of Kennesaw, Georgia. The 2,965-acre park draws over two million visitors a year and sits at the center of some of the most desirable residential neighborhoods in Cobb County. If you live near the mountain — along Old Mountain Road, Kennesaw Due West Road, Stilesboro Road, or in the neighborhoods tucked between the park and downtown Kennesaw — our leather repair shop in Woodstock is about 15 minutes north on I-575.
                </p>

                <p>
                  The homes surrounding Kennesaw Mountain range from established mid-century builds to newer luxury construction. What they share is a homeowner base that appreciates quality. These are neighborhoods where people invest in leather furniture — real leather sectionals, wing chairs, recliners — and they want someone who can maintain those pieces properly when they start to show age. That is exactly what we do. Call us at{" "}
                  <a href="tel:+17705924689" className="text-[#C9A327] hover:underline">(770) 592-4689</a>{" "}
                  for a free assessment.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  The Kennesaw Mountain Microclimate and Your Leather
                </h3>

                <p>
                  Living near Kennesaw Mountain means living with the specific conditions that the mountain creates. The park's heavy tree canopy produces a shaded, humid microclimate in the surrounding neighborhoods. In summer, outdoor humidity regularly pushes above 80 percent while air conditioning drops indoor humidity to 40 or 50 percent. That daily swing between wet and dry is one of the biggest enemies of leather.
                </p>

                <p>
                  We see the effects of this in the leather furniture we repair from the Kennesaw Mountain area. Leather cracks along stress lines faster than it would in a more climate-stable environment. Color fading accelerates because the leather surface is constantly expanding and contracting with moisture changes. The topcoat finish breaks down earlier than the manufacturer expected. Understanding these local conditions is why our repairs for Kennesaw Mountain area homes include heavier conditioning treatments and more durable finishing products than we might use elsewhere.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Old Mountain Road and Stilesboro Road Neighborhoods
                </h3>

                <p>
                  Old Mountain Road runs along the eastern side of the park and connects to some of the most established neighborhoods in Kennesaw. These homes are mature, tree-lined properties — many with living rooms and dens that have had the same leather furniture for a decade or more. That is furniture worth saving. A leather sofa that has developed a patina from years of family life is a completely different character piece than something off a showroom floor. We restore these pieces to be functional and beautiful while preserving the character that makes them special.
                </p>

                <p>
                  Stilesboro Road on the western side of the mountain represents a similar story. The neighborhoods between Stilesboro and the park include homes in the $400,000 to $800,000 range, often with formal living rooms and finished basements with leather furniture. We have done a lot of work along the Stilesboro corridor — everything from full sofa restorations to individual cushion repair to leather color matching where a cat scratched the side of a chair.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Vintage Leather and Kennesaw&apos;s Historic Character
                </h3>

                <p>
                  Kennesaw Mountain's Civil War heritage attracts residents who appreciate history, and that appreciation often extends to their furniture. We work with a number of homeowners near the mountain who own antique and vintage leather pieces — chairs that came from grandparents' estates, leather-topped desks from another era, Chesterfield sofas that have been in the family for decades. These pieces require a different restoration approach than modern furniture.
                </p>

                <p>
                  Antique leather is typically aniline or unfinished — it has no protective topcoat and absorbs everything. Stains go deep, and harsh chemical cleaners can cause irreversible damage. We evaluate the leather type, the original construction, and the finish (or lack of it) before recommending any treatment. The goal with vintage leather is always preservation — keeping the original character alive while making the piece usable and enjoyable for another generation.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  What We Fix for Kennesaw Mountain Area Homeowners
                </h3>

                <ul className="space-y-2">
                  <li><strong>Fading and wear on leather sofas and sectionals</strong> — The daily humidity cycling near the mountain breaks down leather finish faster. We restore color and apply protective treatments designed for high-humidity environments.</li>
                  <li><strong>Cracking leather on recliners and chairs</strong> — Furniture positioned near windows or in sunrooms catches UV through the tree canopy. Even filtered light causes progressive damage over years.</li>
                  <li><strong>Pet damage from mountain-area wildlife encounters</strong> — Dogs near the park tend to be more active, and active dogs cause more furniture damage. Scratches, tears from nails, and chewing are all repairable.</li>
                  <li><strong>Vintage leather restoration</strong> — Antique chairs, desks, and historic pieces that deserve expert care rather than DIY experiments.</li>
                  <li><strong>Auto leather repair</strong> — The hilly terrain near the mountain means more steering wheel grip and more seat bolster wear for daily drivers. We restore auto leather to like-new condition.</li>
                </ul>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Driving Directions from Kennesaw Mountain Visitor Center to V-Pro Leather Repair
                </h3>

                <p>
                  From the Kennesaw Mountain National Battlefield Park Visitor Center on Old Mountain Road, head north on Old Mountain Road to Stilesboro Road. Turn right onto Stilesboro Road and continue east to Cobb Parkway (US-41). Turn left (north) onto Cobb Parkway and merge onto I-75 North. Take I-75 North to Exit 269 for I-575 North toward Canton. Follow I-575 North to Exit 7 for Towne Lake Parkway in Woodstock. Turn right onto Towne Lake Parkway, then right onto Rope Mill Road. Turn left onto N Briar Ridge — our shop at 298 N Briar Ridge is on your right. The drive takes approximately 15 to 20 minutes depending on traffic conditions at the I-75/I-575 interchange.
                </p>

                <p>
                  Need leather repair near Kennesaw Mountain? Call{" "}
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
                  <li><Link href="/locations/town-center-at-cobb" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Town Center at Cobb</Link></li>
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
        title="Need Leather Repair near Kennesaw Mountain?"
        description="Get a free quote from the professionals. Just 15 minutes from the Battlefield Park via I-575."
      />
    </>
  );
}
