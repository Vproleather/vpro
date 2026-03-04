import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Areas We Serve | Leather Repair Across North Georgia",
  description:
    "V-Pro Leather Repair serves Woodstock, Holly Springs, Ball Ground, Kennesaw, Canton, and communities throughout Cherokee County and Cobb County. Find leather repair near you.",
};

const locationPages = [
  {
    name: "Holly Springs Town Center",
    href: "/locations/holly-springs-town-center",
    desc: "Leather repair near Holly Springs Town Center, Bradshaw Farm, and the Lake Allatoona corridor.",
    rank: "Nearest target — 10 minutes from our shop",
  },
  {
    name: "Kennesaw Mountain",
    href: "/locations/kennesaw-mountain",
    desc: "Leather restoration near Kennesaw Mountain National Battlefield Park and surrounding neighborhoods.",
    rank: "Iconic landmark with high search volume",
  },
  {
    name: "Gibbs Gardens, Ball Ground",
    href: "/locations/gibbs-gardens",
    desc: "Leather repair near Gibbs Gardens and the Etowah River corridor in Ball Ground, GA.",
    rank: "No local competition in a growing area",
  },
  {
    name: "Town Center at Cobb",
    href: "/locations/town-center-at-cobb",
    desc: "Commercial and residential leather repair along the Barrett Parkway corridor near Town Center Mall.",
    rank: "Highest commercial density in Cobb County",
  },
  {
    name: "Kennesaw State University",
    href: "/locations/kennesaw-state-university",
    desc: "Affordable leather and vinyl repair for students, faculty, and campus-area businesses near KSU.",
    rank: "43,000+ students and high foot traffic",
  },
];

const coreAreas = [
  "Woodstock",
  "Canton",
  "Acworth",
  "Cartersville",
  "Waleska",
  "Calhoun",
  "Adairsville",
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-black">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A327' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Areas We Serve
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Leather Repair{" "}
              <span className="text-[#C9A327]">Across North Georgia</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              V-Pro Leather Repair is based in Woodstock, GA, and we serve
              communities throughout Cherokee County, Cobb County, Pickens
              County, and the greater North Georgia area. Wherever you are, our
              team brings the same expert craftsmanship to your door.
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

      {/* Overview Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Professional Leather Repair Throughout North Georgia
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                We have been repairing leather for families and businesses across
                North Georgia for close to 20 years. Our shop is at 298 N Briar
                Ridge in Woodstock, but our work takes us all over the region.
                From the growing communities in Cherokee County to the
                established neighborhoods in Cobb County, we bring the same level
                of care and expertise to every project.
              </p>

              <p>
                North Georgia is a unique area. The mix of newer construction in
                places like Holly Springs and Ball Ground alongside the historic
                homes in Kennesaw and Cartersville means we see a huge variety of
                leather furniture and upholstery challenges. The hot Georgia
                summers, fluctuating humidity, and active family lifestyles all
                take their toll on leather. We understand the specific conditions
                in this region and how they affect your leather goods.
              </p>

              <p>
                Whether you need your leather sofa restored, car seats repaired,
                or commercial furniture maintained, we are just a short drive or
                phone call away. Most of our service area is within 30 minutes of
                our Woodstock location, and we offer mobile service for customers
                who prefer we come to them. Call{" "}
                <a
                  href="tel:+17705924689"
                  className="text-[#C9A327] hover:underline"
                >
                  (770) 592-4689
                </a>{" "}
                to schedule a free assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Pages */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Explore Our Service Areas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Landmarks and Neighborhoods We Serve
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Click on any area below to learn more about our leather repair
              services in your neighborhood.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationPages.map((location) => (
              <Link
                key={location.name}
                href={location.href}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#C9A327]/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#C9A327]/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#C9A327]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-[#C9A327] transition-colors">
                    {location.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{location.desc}</p>
                <span className="inline-flex items-center text-sm text-[#C9A327] font-medium">
                  Learn More
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Our Core Service Areas
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We provide leather repair, furniture restoration, and upholstery
            services throughout these communities and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {coreAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-[#fafafa] border border-gray-200 rounded-full text-sm text-gray-600"
              >
                {area}, GA
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locationPages.map((loc) => (
              <Link
                key={loc.name}
                href={loc.href}
                className="px-4 py-2 bg-[#C9A327]/10 border border-[#C9A327]/20 rounded-full text-sm text-[#C9A327] font-medium hover:bg-[#C9A327]/20 transition-colors"
              >
                {loc.name}, GA →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Leather Repair in Your Area?"
        description="No matter where you are in North Georgia, we can help. Call for a free quote or schedule a mobile service visit."
      />
    </>
  );
}
