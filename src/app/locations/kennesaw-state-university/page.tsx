import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title:
    "Leather & Vinyl Repair near Kennesaw State University, GA | V-Pro Leather",
  description:
    "Affordable leather and vinyl repair near Kennesaw State University. Car seat repair, furniture restoration, and commercial upholstery for the KSU corridor along Chastain Road and Frey Lake Road. Free quotes.",
  keywords:
    "vinyl repair near Kennesaw State University, leather repair near KSU, car seat repair Kennesaw State, leather furniture repair Chastain Road Kennesaw, commercial upholstery near KSU",
};

const relatedServices = [
  {
    name: "Leather Car Seat Repair",
    href: "/leather-repair/leather-car-seat-repair",
  },
  { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair" },
  { name: "Leather Dyeing", href: "/leather-repair/leather-dyeing" },
  {
    name: "Leather Scratch Repair",
    href: "/leather-repair/leather-scratch-repair",
  },
  {
    name: "Leather Color Restoration",
    href: "/leather-repair/leather-color-restoration",
  },
  {
    name: "Commercial Upholstery",
    href: "/upholstery/commercial-upholstery",
  },
];

export default function KennesawStateUniversityPage() {
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
            <span className="text-[#C9A327]">Kennesaw State University</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Kennesaw State University Area
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Leather & Vinyl Repair near Kennesaw State University{" "}
              <span className="text-[#C9A327]">Kennesaw, GA</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Affordable professional leather and vinyl repair for students, faculty, and businesses near KSU. Auto leather, apartment furniture, and commercial seating repair — just 15 minutes from campus via I-575.
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
                  Leather and Vinyl Repair for the KSU Community
                </h2>

                <p>
                  Kennesaw State University is one of the largest universities in Georgia, with over 43,000 students and thousands of faculty and staff moving through the campus and surrounding area daily. The corridors along Chastain Road, Frey Lake Road, and Busbee Drive are packed with apartments, restaurants, fitness centers, and businesses that serve the university community. All of that activity means a lot of leather and vinyl surfaces getting heavy daily use.
                </p>

                <p>
                  V-Pro Leather Repair is located in Woodstock, approximately 15 minutes north of KSU via I-575. We handle everything from car seat leather that has cracked from years of campus commuting to apartment leather couches that have taken damage from daily student use. Call{" "}
                  <a href="tel:+17705924689" className="text-[#C9A327] hover:underline">(770) 592-4689</a>{" "}
                  for a free estimate on any leather or vinyl repair project near Kennesaw State.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Auto Leather Repair for KSU Commuters
                </h3>

                <p>
                  A huge percentage of KSU's student body commutes to campus by car. Between the drive to class, the drive to work, and weekend trips, commuter vehicles near KSU accumulate mileage and leather wear fast. The most common issues we see from KSU area vehicles are cracked driver seat bolsters from frequent entry and exit, faded leather from sun exposure in open campus lots, and worn armrests from daily use.
                </p>

                <p>
                  Professional car seat leather repair typically runs 60 to 80 percent less than a seat cover or full leather replacement. For students and young professionals on a budget, that is a meaningful difference. We repair rather than replace — which means you keep the factory look and feel of your vehicle's leather interior at a price that makes sense for a student budget.
                </p>

                <p>
                  We also handle vinyl repair on dashboards, door panels, and center consoles. Vinyl cracks are extremely common on vehicles parked in the exposed campus lots along Chastain Road and Frey Lake Road, where there is minimal shade during peak summer months. A vinyl dashboard crack that costs $150 to repair today becomes a $500+ problem if left to spread.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Apartment and Rental Furniture Repair near KSU
                </h3>

                <p>
                  The apartment complexes surrounding KSU — along Frey Lake Road, Busbee Drive, and the stretch of Chastain Road between campus and I-75 — house thousands of students and young professionals. Leather and vinyl furniture in these apartments gets heavy daily use, and when it is time to move out, damage to leather sofas and chairs can mean losing security deposits or dealing with replacement costs.
                </p>

                <p>
                  We regularly work with KSU area renters who need leather furniture repaired before a move-out inspection. Cat scratches, pen marks, small tears from moving furniture through tight apartment doorways, and general wear — all of these are fixable for a fraction of the replacement cost. If you are moving out of a KSU apartment and your leather couch has damage, call us before you assume you need a new one.
                </p>

                <p>
                  We also work with apartment property managers in the KSU area who need common area furniture maintained. Lobby seating, clubhouse leather couches, and leasing office furniture all benefit from periodic professional repair rather than the cycle of buying cheap replacement pieces every couple of years.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Commercial Repair for Campus-Area Businesses
                </h3>

                <p>
                  The restaurant and retail corridor near KSU along Chastain Road and Big Shanty Road is one of the busiest in Cobb County. Restaurants, cafes, salons, and professional offices that serve the university community all have seating that takes constant use. Booth vinyl that has cracked, waiting room chairs with worn armrests, and salon chairs with torn leather are standard problems for businesses in high-traffic university corridors.
                </p>

                <p>
                  Commercial leather and vinyl repair near KSU can save a business thousands compared to replacing furniture. We schedule commercial work around business hours and can often complete a full set of booth repairs in a single overnight session. The result is seating that looks new, works properly, and lasts several more years before needing attention again.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  What We Repair near Kennesaw State University
                </h3>

                <ul className="space-y-2">
                  <li><strong>Car seat leather repair</strong> — Cracked, faded, and worn leather seats from campus commuting and sun exposure in open lots</li>
                  <li><strong>Vinyl dashboard and panel repair</strong> — Cracks and splits on dashboards and door panels caused by extreme heat exposure</li>
                  <li><strong>Apartment leather furniture repair</strong> — Scratches, tears, and wear on leather couches for move-out prep or ongoing maintenance</li>
                  <li><strong>Restaurant booth repair</strong> — Cracked vinyl and worn leather on high-traffic seating at campus-area restaurants and cafes</li>
                  <li><strong>Office and waiting room seating</strong> — Worn armrests, faded leather, and cracked seats in professional offices near campus</li>
                  <li><strong>Leather dyeing and color restoration</strong> — Full-surface color matching and restoration for faded automotive and furniture leather</li>
                </ul>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Affordable Leather Repair for Students and Young Professionals
                </h3>

                <p>
                  We understand that the KSU community includes a lot of people on tight budgets. That is part of why leather repair is such a smart investment — it extends the life of what you already have instead of forcing a full replacement. A leather couch with cat scratches does not need to be thrown away. A car seat with a cracked bolster does not need a full re-upholstery job. Targeted, professional repair solves specific problems at a fraction of the replacement cost.
                </p>

                <p>
                  We provide free estimates on every project with no pressure. If a repair does not make financial sense, we will tell you that directly. Most of the time, though, repair is the smarter path — especially for the kind of focused, specific damage that furniture and car seats near a university campus tend to develop.
                </p>

                <h3 className="text-2xl font-bold text-black mt-10 mb-4">
                  Driving Directions from Kennesaw State University to V-Pro Leather Repair
                </h3>

                <p>
                  From the KSU campus on Chastain Road, head north on Frey Lake Road toward I-575. Merge onto I-575 North toward Canton. Follow I-575 North for approximately 7 miles to Exit 7 for Towne Lake Parkway in Woodstock. Turn right onto Towne Lake Parkway, then right onto Rope Mill Road. Turn left onto N Briar Ridge — our shop at 298 N Briar Ridge is on your right. The drive takes approximately 15 minutes from campus with normal traffic.
                </p>

                <p>
                  Need leather or vinyl repair near Kennesaw State? Call{" "}
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
                  <li><Link href="/locations/town-center-at-cobb" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Town Center at Cobb</Link></li>
                  <li><Link href="/locations/holly-springs-town-center" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Holly Springs Town Center</Link></li>
                  <li><Link href="/locations/gibbs-gardens" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A327] transition-colors"><svg className="w-4 h-4 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>Gibbs Gardens, Ball Ground</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Leather or Vinyl Repair near KSU?"
        description="Get a free quote for auto, apartment, or commercial leather repair. Just 15 minutes from campus via I-575."
      />
    </>
  );
}
