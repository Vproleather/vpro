import Link from "next/link";
import { Children, isValidElement, ReactNode } from "react";
import CTASection from "@/components/CTASection";

type ServiceLink = {
  name: string;
  href: string;
  description: string;
};

type NearbyLink = {
  name: string;
  href: string;
};

type LocationPageTemplateProps = {
  landmark: string;
  city: string;
  h1: string;
  intro: string;
  children: ReactNode;
  services: ServiceLink[];
  directions: string[];
  directionsUrl: string;
  nearbyLocations: NearbyLink[];
  ctaTitle: string;
  ctaDescription: string;
};

export default function LocationPageTemplate({
  landmark,
  city,
  h1,
  intro,
  children,
  services,
  directions,
  directionsUrl,
  nearbyLocations,
  ctaTitle,
  ctaDescription,
}: LocationPageTemplateProps) {
  const contentSections: ReactNode[][] = [];

  Children.forEach(children, (child) => {
    const startsNewSection = isValidElement(child) && child.type === "h2";

    if (startsNewSection || contentSections.length === 0) {
      contentSections.push([child]);
      return;
    }

    contentSections[contentSections.length - 1].push(child);
  });

  return (
    <>
      <section className="relative pt-32 pb-16 bg-black">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A327' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-white/50 hover:text-[#C9A327] transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/locations" className="text-white/50 hover:text-[#C9A327] transition-colors">
              Locations
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#C9A327]">{landmark}</span>
          </nav>

          <div className="max-w-4xl">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              {landmark} Area
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {h1}
            </h1>
            <p className="text-xl text-white/70 mb-8">{intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#C9A327] text-black font-semibold rounded-full hover:bg-[#d4af37] transition-all"
              >
                Get a Free Quote
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

      <section className="relative bg-[#f7f7f5] pb-24">
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="-translate-y-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="grid sm:grid-cols-3">
              {[
                ["Mobile service", "Available in the " + city + " area"],
                ["Photo assessment", "Send wide and close-up images"],
                ["Woodstock based", "Scheduled shop visits available"],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className={
                    "flex items-center gap-4 px-6 py-5 " +
                    (index < 2 ? "sm:border-r border-gray-200" : "")
                  }
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A327]/15 text-[#9a7b16]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-black">{title}</p>
                    <p className="text-sm leading-5 text-gray-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <article className="space-y-8 lg:col-span-2">
              {contentSections.map((section, index) => (
                <section
                  key={index}
                  className="location-rich-text rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10"
                >
                  {section}
                </section>
              ))}

              <section className="rounded-3xl border border-[#C9A327]/30 bg-[#fffaf0] p-6 md:p-10">
                <div className="mb-6 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C9A327] text-black">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z"
                      />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#8b6e12]">
                      Plan your visit
                    </p>
                    <h2 className="text-2xl font-bold text-black md:text-3xl">
                      Directions From {landmark} to V-Pro Leather Repair
                    </h2>
                  </div>
                </div>
                <p className="mb-7 text-[1.0625rem] leading-8 text-gray-600">
                  V-Pro offers mobile service in the {city} area, so large furniture often does not
                  need to be transported. Customers who arrange a shop visit can use the published
                  business address at 298 N Briar Ridge, Woodstock, GA 30189. Confirm your appointment
                  before setting out.
                </p>
                <ol className="grid gap-3">
                  {directions.map((direction, index) => (
                    <li
                      key={direction}
                      className="flex gap-4 rounded-2xl border border-[#C9A327]/20 bg-white px-5 py-4 text-gray-600"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 leading-6">{direction}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-sm leading-6 text-gray-500">
                  Road conditions and turn restrictions can change. Check the{" "}
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#8b6e12] underline decoration-[#C9A327]/40 underline-offset-4 hover:text-black"
                  >
                    live route from {landmark}
                  </a>{" "}
                  before departure.
                </p>
              </section>

              <section className="overflow-hidden rounded-3xl bg-black p-6 text-white shadow-xl md:p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A327]">
                  Ready to get started?
                </p>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  Request Leather Repair in the {landmark} Area
                </h2>
                <p className="max-w-2xl text-[1.0625rem] leading-8 text-white/70">
                  Send clear photos of the full item and the damaged area when requesting an
                  estimate. V-Pro can then assess whether mobile service or a scheduled shop visit
                  is the more practical option.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-[#C9A327] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#d4af37]"
                  >
                    Request a Free Assessment
                  </Link>
                  <a
                    href="tel:+17705924689"
                    className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-[#C9A327] hover:text-[#C9A327]"
                  >
                    (770) 592-4689
                  </a>
                </div>
              </section>
            </article>

            <aside className="lg:col-span-1">
              <div className="space-y-6 lg:sticky lg:top-28">
                <div className="rounded-3xl bg-black p-6 shadow-xl">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A327]">
                    Need help?
                  </p>
                  <h2 className="mb-5 text-xl font-bold text-white">Quick Contact</h2>
                  <div className="mb-6 space-y-4 text-white/70">
                    <a href="tel:+17705924689" className="block hover:text-[#C9A327] transition-colors">
                      (770) 592-4689
                    </a>
                    <a href="mailto:vpro@bellsouth.net" className="block hover:text-[#C9A327] transition-colors">
                      vpro@bellsouth.net
                    </a>
                    <p>
                      298 N Briar Ridge
                      <br />
                      Woodstock, GA 30189
                    </p>
                    <p className="text-sm text-white/50">Mobile service available</p>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full rounded-full bg-[#C9A327] px-6 py-3 text-center font-semibold text-black transition-all hover:bg-[#d4af37]"
                  >
                    Request Quote
                  </Link>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-lg font-bold text-black">Relevant Services</h2>
                  <ul className="space-y-3">
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="group block rounded-2xl border border-gray-100 bg-[#fafafa] p-4 transition-all hover:border-[#C9A327]/40 hover:bg-[#fffaf0]"
                        >
                          <span className="flex items-center justify-between gap-3 font-semibold text-black group-hover:text-[#8b6e12]">
                            {service.name}
                            <span aria-hidden="true">→</span>
                          </span>
                          <span className="mt-1 block text-sm leading-5 text-gray-500">
                            {service.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-lg font-bold text-black">Nearby Locations</h2>
                  <ul className="divide-y divide-gray-100">
                    {nearbyLocations.map((location) => (
                      <li key={location.href}>
                        <Link
                          href={location.href}
                          className="flex items-center justify-between gap-3 py-3 text-gray-600 transition-colors hover:text-[#8b6e12]"
                        >
                          {location.name}
                          <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/locations"
                        className="flex items-center justify-between gap-3 pt-4 font-semibold text-[#8b6e12] hover:text-black"
                      >
                        View all locations
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection title={ctaTitle} description={ctaDescription} />
    </>
  );
}
