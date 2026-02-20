import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";
import Schema from "@/components/Schema";

const leatherServices = [
  { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair", desc: "Expert sofa restoration for homes in Towne Lake and beyond" },
  { name: "Leather Car Seat Repair", href: "/leather-repair/leather-car-seat-repair", desc: "Professional auto leather repair for all vehicle makes" },
  { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration", desc: "Complete furniture restoration services" },
  { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration", desc: "Bring faded leather back to vibrant life" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning", desc: "Deep cleaning that protects and preserves" },
  { name: "Leather Recoloring", href: "/leather-repair/leather-recoloring", desc: "Change or refresh your leather's color" },
];

const upholsteryServices = [
  { name: "Commercial Upholstery", href: "/upholstery/commercial-upholstery", desc: "High-volume solutions for Cherokee County businesses" },
  { name: "Restaurant Seat Upholstery", href: "/upholstery/restaurant-seat-upholstery", desc: "Keep your booths looking fresh" },
  { name: "Medical Seat Upholstery", href: "/upholstery/medical-seat-upholstery", desc: "Healthcare-grade materials and standards" },
  { name: "Marine Upholstery", href: "/upholstery/marine-upholstery", desc: "Lake Allatoona boat interior specialists" },
];

const furnitureServices = [
  { name: "Furniture Regluing", href: "/furniture-repair/furniture-regluing", desc: "Structural repairs that last" },
  { name: "Recliner Repair", href: "/furniture-repair/recliner-repair", desc: "Fix mechanisms and worn padding" },
  { name: "Vintage Furniture Restoration", href: "/furniture-repair/vintage-furniture-restoration", desc: "Preserve your heirloom pieces" },
  { name: "Water Damaged Furniture Repair", href: "/furniture-repair/water-damaged-furniture-repair", desc: "Storm and flood damage recovery" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Woodstock's Premier Leather Experts"
        title="Award Winning Leather Repair in Woodstock, GA"
        description="From your favorite recliner to your Mercedes interior, we restore leather to its original beauty. Serving Woodstock, Cherokee County, and North Atlanta since 2005."
        ctaText="Get Free Quote"
        ctaHref="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaHref="#services"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
                Why Choose V-Pro
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
                Woodstock's Most Trusted Leather Repair Service
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                When your leather sofa starts showing wear or your car seats have scratches, you want someone who knows what they're doing. We have been fixing leather for families around here for almost 20 years. From the historic homes in downtown Woodstock to the new developments out by Eagle Watch, we've seen it all.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Our shop is right here in Cherokee County, and we know this community. Whether you're dealing with sun damage from those hot Georgia summers or your dog decided the couch was a chew toy, we've seen it before and fixed it.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-[#fafafa] rounded-xl">
                  <p className="text-4xl font-bold text-[#C9A327] mb-2">20+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-[#fafafa] rounded-xl">
                  <p className="text-4xl font-bold text-[#C9A327] mb-2">5,000+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-[#fafafa] rounded-xl">
                  <p className="text-4xl font-bold text-[#C9A327] mb-2">5★</p>
                  <p className="text-gray-600">Google Rating</p>
                </div>
                <div className="text-center p-6 bg-[#fafafa] rounded-xl">
                  <p className="text-4xl font-bold text-[#C9A327] mb-2">100%</p>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/img/harley-davidson-golf-cart-orange-seats.webp"
                  alt="Custom Harley-Davidson golf cart with orange leather seats"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black rounded-xl p-4 shadow-lg">
                <p className="text-[#C9A327] font-bold text-lg">Custom Work</p>
                <p className="text-white/70 text-sm">Professional Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leather Repair Services */}
      <section id="services" className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leather Repair Service"
            title="Expert Leather Repair in Woodstock"
            description="From minor scratches to major tears, our leather repair specialists handle it all. We service homes and businesses throughout Cherokee County."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leatherServices.map((service) => (
              <ServiceCard
                key={service.name}
                title={service.name}
                description={service.desc}
                href={service.href}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                }
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/leather-repair"
              className="inline-flex items-center px-6 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all"
            >
              View All Leather Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Upholstery Services */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Upholstery Shop"
            title="Commercial & Residential Upholstery"
            description="Professional upholstery services for restaurants, medical facilities, boats, and homes across Woodstock and North Atlanta."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upholsteryServices.map((service) => (
              <Link key={service.name} href={service.href} className="group">
                <div className="p-6 border border-white/10 rounded-xl hover:border-[#C9A327]/50 hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A327] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{service.desc}</p>
                  <span className="text-[#C9A327] text-sm font-medium inline-flex items-center">
                    Learn More
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/upholstery"
              className="inline-flex items-center px-6 py-3 border-2 border-[#C9A327] text-[#C9A327] font-semibold rounded-full hover:bg-[#C9A327] hover:text-black transition-all"
            >
              View All Upholstery Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Furniture Repair Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Furniture Repair Shop"
            title="Furniture Repair & Restoration"
            description="Wobbly chairs, broken recliners, water damage - we fix furniture problems that other shops can't handle."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {furnitureServices.map((service) => (
              <ServiceCard
                key={service.name}
                title={service.name}
                description={service.desc}
                href={service.href}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/furniture-repair"
              className="inline-flex items-center px-6 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all"
            >
              View All Furniture Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
                Service Area
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
                Serving All of Cherokee County
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                We're located right here in Woodstock, just a few minutes from downtown and the Outlet Shoppes at Atlanta. Our technicians regularly service homes and businesses from Rope Mill Park to Towne Lake, and we're happy to come to you.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Beyond Cherokee County, we also serve customers in Roswell, Alpharetta, Marietta, Kennesaw, and throughout North Atlanta. If you're within about 30 miles of Woodstock, give us a call.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-black">Popular Areas We Serve:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Downtown Woodstock", "Towne Lake", "Rope Mill", "Eagle Watch", "BridgeMill", "Canton", "Roswell", "Alpharetta", "Marietta", "Kennesaw", "Holly Springs", "Ball Ground"].map((area) => (
                    <span key={area} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-black rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Service Stats</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/70">Average Response Time</span>
                  <span className="text-[#C9A327] font-semibold">Under 24 Hours</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/70">Free Estimates</span>
                  <span className="text-[#C9A327] font-semibold">Always</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/70">Mobile Service Available</span>
                  <span className="text-[#C9A327] font-semibold">Yes</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/70">Weekend Appointments</span>
                  <span className="text-[#C9A327] font-semibold">By Request</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Satisfaction Guarantee</span>
                  <span className="text-[#C9A327] font-semibold">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-24 bg-[#fafafa]">
        <Schema includeFAQ={true} includeLocalBusiness={false} />
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Common Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quick answers about our leather repair, furniture restoration, and upholstery services.
            </p>
          </div>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-black hover:text-[#C9A327] transition-colors flex justify-between items-center">
                What types of leather can V-Pro Leather Repair fix?
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                We repair all types of leather including aniline, semi-aniline, pigmented, bonded, and faux leather. This includes leather sofas, car seats, furniture, restaurant booths, medical equipment, marine seats, and aircraft interiors.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-black hover:text-[#C9A327] transition-colors flex justify-between items-center">
                How long does leather repair take?
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Most repairs take 2-4 hours for on-site work or 2-5 days for shop repairs depending on complexity. We offer same-day service for many repairs and can accommodate rush jobs when needed.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-black hover:text-[#C9A327] transition-colors flex justify-between items-center">
                Do you offer mobile leather repair services?
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Yes, we offer mobile service throughout Cherokee County and North Atlanta. We can come to your home for furniture repairs or your driveway for car leather repairs. We serve Woodstock, Canton, Roswell, Alpharetta, Marietta, Kennesaw, and surrounding areas.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-black hover:text-[#C9A327] transition-colors flex justify-between items-center">
                Can you match the exact color of my leather?
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Yes, we use a spectrophotometer to analyze your leather's exact color and custom-mix professional-grade dyes to match perfectly. We can also change the color entirely if you want a new look.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-black hover:text-[#C9A327] transition-colors flex justify-between items-center">
                Do you repair pet-damaged leather?
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Yes, pet scratches and damage are one of our most common repairs. We fix scratches from cats and dogs on furniture and car interiors. We can also treat the leather afterward to be more scratch-resistant.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-black hover:text-[#C9A327] transition-colors flex justify-between items-center">
                Can you repair cracked and peeling leather?
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Yes, we repair cracked and peeling leather by conditioning it, filling cracks, and restoring the color and finish. Early repair prevents further damage. Note that bonded leather may have limited repair options depending on severity.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-black hover:text-[#C9A327] transition-colors flex justify-between items-center">
                Do you work on commercial furniture?
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Yes, we provide commercial leather repair and upholstery services for restaurants, hotels, medical offices, gyms, and other businesses. We offer maintenance programs, work around business hours, and handle high-volume projects.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-black hover:text-[#C9A327] transition-colors flex justify-between items-center">
                How do I get a quote for leather repair?
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Call us at (770) 592-4689, send photos via text or email, or stop by our shop at 298 N Briar Ridge in Woodstock. We provide free estimates and will give you an honest assessment of what can be repaired and what to expect.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-black hover:text-[#C9A327] transition-colors flex justify-between items-center">
                What areas does V-Pro Leather Repair serve?
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                We're based in Woodstock, GA at 298 N Briar Ridge and serve all of Cherokee County including Canton, Holly Springs, and Ball Ground. We also serve Roswell, Alpharetta, Marietta, Kennesaw, Acworth, Cumming, and throughout North Atlanta.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-black hover:text-[#C9A327] transition-colors flex justify-between items-center">
                What furniture repair services do you offer?
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                We offer furniture regluing, recliner repair, dining chair repair, kitchen chair repair, loose joint repair, vintage furniture restoration, and repair of water-damaged, fire-damaged, and moving-damaged furniture.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Our Location
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Visit Us in Woodstock
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              298 N Briar Ridge, Woodstock, GA 30189 — Mobile service available throughout Cherokee County
            </p>
          </div>
          
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

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
