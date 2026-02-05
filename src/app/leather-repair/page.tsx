import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Leather Repair Woodstock GA | Expert Restoration",
  description: "Professional leather repair services in Woodstock, GA. Sofa repair, car seat repair, color restoration, cleaning and more. Serving Cherokee County since 2005.",
};

const services = [
  { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair", desc: "Restore your leather sofas and couches to like-new condition. We fix tears, scratches, fading and more." },
  { name: "Leather Car Seat Repair", href: "/leather-repair/leather-car-seat-repair", desc: "Professional auto leather repair for all makes and models. Expert results from certified technicians." },
  { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration", desc: "Complete restoration services for all types of leather furniture." },
  { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration", desc: "Bring faded, worn leather back to its original vibrant color." },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning", desc: "Deep cleaning services that remove dirt and oils while protecting the leather." },
  { name: "Leather Recoloring", href: "/leather-repair/leather-recoloring", desc: "Change the color of your leather or refresh the existing color." },
  { name: "Leather Upholstery Repair", href: "/leather-repair/leather-upholstery-repair", desc: "Expert repair for all leather upholstered items." },
  { name: "Leather Scratch Repair", href: "/leather-repair/leather-scratch-repair", desc: "Remove scratches from pets, keys, or everyday wear." },
  { name: "Leather Tear Repair", href: "/leather-repair/leather-tear-repair", desc: "Professional tear and rip repair that's virtually invisible." },
  { name: "Leather Dyeing", href: "/leather-repair/leather-dyeing", desc: "Professional leather dyeing with color-matched results." },
  { name: "Commercial Leather Furniture Repair", href: "/leather-repair/commercial-leather-furniture-repair", desc: "High-volume repair services for offices, hotels, and businesses." },
  { name: "Aircraft Seat Repair", href: "/leather-repair/aircraft-seat-repair", desc: "Specialized repair for private aircraft and aviation interiors." },
  { name: "Marine Seat Repair", href: "/leather-repair/marine-seat-repair", desc: "Boat and marine leather repair built to withstand the elements." },
];

export default function LeatherRepairPage() {
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
              Leather Repair Service
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Leather Repair <span className="text-[#C9A327]">Woodstock GA</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Professional leather repair and restoration services for homes and businesses throughout Cherokee County. From your living room sofa to your luxury car's interior, we bring damaged leather back to life.
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
              Woodstock's Trusted Leather Repair Experts
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                If you live anywhere near Woodstock and your leather furniture or car seats need help, you've come to the right place. We have been doing leather repair in Cherokee County for close to 20 years, and there's not much we haven't seen. Ripped sofas, cracked car seats, faded recliners, stained dining chairs - we fix it all.
              </p>
              
              <p>
                Maybe your couch has scratches from the cat, or the driver's seat in your truck is starting to crack from all those Georgia summers. Maybe your kids spilled something on the dining chairs and now there's a stain that won't come out. Whatever the problem, we can most likely fix it for a lot less than replacing it.
              </p>
              
              <p>
                Our shop is located right here in Woodstock at 298 N Briar Ridge, easy to reach for folks living in Towne Lake, near Rope Mill Park, out by Eagle Watch, or anywhere else in the area. We also do a lot of work in Canton, Roswell, Alpharetta, Marietta, and throughout North Atlanta. Most jobs we can come to you if that's easier - just give us a call at (770) 592-4689.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">What Makes Our Leather Repair Different</h3>
              
              <p>
                A lot of places that do "leather repair" are really just using some kind of patch or cover-up that doesn't last. You can buy those kits at the auto parts store, and they work for about a month before they start peeling. We do it the right way.
              </p>
              
              <p>
                We match the exact color and texture of your leather using professional equipment - not guessing or mixing by eye. We use professional-grade materials that actually bond to the leather and become part of it. And we finish everything properly so you can't even tell there was damage. Our repairs last for years, not weeks.
              </p>
              
              <p>
                We work on all types of leather too. Aniline leather is the soft, natural-looking kind that shows every scratch but feels amazing. Semi-aniline has a light protective coating. Pigmented leather is the most durable and easiest to clean. Bonded leather - well, that's actually ground-up leather scraps pressed together, and it needs special treatment. We know how to handle them all. The leather in your Italian sofa is very different from what's in your Ford pickup, and we treat each one the right way.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Leather Repair Services We Offer in Woodstock</h3>
              
              <p>
                Our leather repair services cover just about everything you might need. We do leather sofa repair for couches, loveseats, sectionals, and chairs. We handle leather car seat repair for all makes and models - BMW, Mercedes, Lexus, Ford, Chevy, whatever you drive. We offer leather color restoration when your furniture has faded from the sun or just years of use. 
              </p>
              
              <p>
                Leather cleaning is something we do before most repairs, but we also offer it as a standalone service. Regular cleaning can add years to your leather's life. Leather recoloring lets you change the color entirely if you want a new look without buying new furniture. Leather scratch repair fixes those marks from pets, keys, belt buckles, and everyday wear. Leather tear repair is for when the damage is more serious - we can fix rips and holes so they're practically invisible.
              </p>
              
              <p>
                For businesses, we offer commercial leather furniture repair. Hotels, restaurants, medical offices, law firms, car dealerships - anywhere that has leather furniture and needs it looking sharp for customers. We can set up regular maintenance so your furniture always looks professional.
              </p>
              
              <p>
                We also handle some specialty work. Aircraft seat repair for private planes. Marine seat repair for boats - that leather takes a real beating from sun and water. These jobs need someone who knows what they're doing, and we've been doing them for years.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Why Repair Instead of Replace</h3>
              
              <p>
                Leather repair almost always makes more sense than replacement. Here's why our customers choose repair:
              </p>
              
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Save significantly</strong> - Repair typically costs a fraction of what new furniture or reupholstery would cost</li>
                <li><strong>Better quality</strong> - Older furniture was often built with solid hardwood frames and eight-way hand-tied springs</li>
                <li><strong>Keep what you love</strong> - Your favorite sofa or chair stays in your home, restored to like-new condition</li>
                <li><strong>Faster turnaround</strong> - Most repairs complete in days, not the weeks it takes to order new furniture</li>
                <li><strong>Environmentally friendly</strong> - Repairing keeps quality furniture out of landfills</li>
              </ul>
              
              <p>
                We help people keep their quality furniture instead of replacing it with something that may not be as well-made.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">How Our Leather Repair Process Works</h3>
              
              <p>
                First step is getting us some photos of the damage. You can text them to us, email them, or just stop by the shop. We'll give you an honest assessment of what can be fixed and how long it'll take. No pressure, no upselling.
              </p>
              
              <p>
                Once you give us the go-ahead, we clean the leather thoroughly. This removes dirt, oils, and any old conditioner that might interfere with the repair. Then we do any structural repairs needed - filling tears, building up worn areas, that kind of thing.
              </p>
              
              <p>
                Color matching is where our experience really shows. We use a spectrophotometer to analyze your leather's exact color. Then we mix a custom dye that matches perfectly. We don't use one-size-fits-all colors - every repair is matched to your specific piece.
              </p>
              
              <p>
                After the dye, we apply a topcoat that matches the original sheen - matte, semi-gloss, or glossy, whatever your leather has. This protects the repair and makes it blend seamlessly. Finally, we condition the leather so it's soft and supple.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Common Leather Problems in Georgia</h3>
              
              <p>
                Living in Georgia means your leather faces some specific challenges. The humidity swings are brutal - we go from 90% humidity in summer to dry heated air in winter. This constant expansion and contraction causes cracking faster than you'd see in more stable climates.
              </p>
              
              <p>
                Sun damage is huge too. That south-facing window in your living room? It's probably already faded your furniture. Car interiors are even worse - they can hit 150 degrees inside on a summer day. Leather that's exposed to that kind of heat and UV breaks down fast.
              </p>
              
              <p>
                We also see a lot of damage from body oils and sweat. In hot weather, you're sweating more, and that gets into the leather. Over time it breaks down the finish and changes the color. Regular cleaning helps, but eventually you need restoration.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Areas We Serve</h3>
              
              <p>
                Our shop is in Woodstock, but we serve all of Cherokee County and beyond. We do a lot of work in Canton - it's right up Highway 5. Roswell and Alpharetta are easy trips down 400. Marietta, Kennesaw, and Acworth are all within our regular service area.
              </p>
              
              <p>
                For furniture repair, we often come to you. It's easier than moving a big sofa. For car interiors and smaller items, folks usually bring them to the shop. Either way works - whatever's most convenient for you.
              </p>
              
              <p>
                Give us a call at (770) 592-4689 to get a free estimate. We'll tell you honestly whether repair makes sense for your situation. Sometimes replacement is the better choice, and we'll tell you that too. But most of the time, we can restore your leather and keep it looking great for years to come.
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
            title="Leather Repair Services in Woodstock"
            description="We offer a complete range of leather repair services. Click on any service below to learn more."
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Leather Repair Process"
            description="From assessment to completion, here's what to expect when you work with us."
            light
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Assessment", desc: "Send us photos or bring your item by. We'll give you an honest assessment and quote." },
              { step: "02", title: "Color Matching", desc: "We match the exact color and finish of your leather for seamless repairs." },
              { step: "03", title: "Expert Repair", desc: "Our technicians perform the repair using professional-grade materials." },
              { step: "04", title: "Quality Check", desc: "Final inspection ensures the repair meets our high standards before delivery." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#C9A327] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <h2 className="text-3xl font-bold text-black mb-8">Common Leather Problems We Fix Every Day</h2>
            
            <h3 className="text-xl font-bold text-black mt-8 mb-4">Leather Sofa Repair</h3>
            <p>
              Your leather sofa is likely one of the most expensive pieces of furniture in your house. When it starts looking worn, you don't want to just throw it away. We fix sofas from all the major brands - Natuzzi, Ethan Allen, Restoration Hardware, Arhaus, Pottery Barn, whatever you have.
            </p>
            <p>
              Common issues include faded color on the seat cushions from years of sitting, cracks on the armrests where your arms rest while watching TV, and tears from pets or kids. We also see a lot of sofas where the leather is peeling - this usually happens with bonded leather after 5-7 years. We can often repair it, but we'll tell you honestly if it's too far gone.
            </p>
            
            <h3 className="text-xl font-bold text-black mt-8 mb-4">Leather Car Seat Repair</h3>
            <p>
              The dealerships around here - we know them well because their customers come to us looking for specialized leather repair expertise. Jim Ellis BMW, Hennessy Lexus, Nalley Toyota - their customers find us when they want expert work from certified leather repair technicians rather than general service department staff.
            </p>
            <p>
              The most common car leather problems are bolster wear on the driver's seat (that part on the side you slide across getting in and out), cracked steering wheel leather, and color fading from the sun. We also repair cigarette burns, rips from moving cargo, and damage from kids' car seats.
            </p>
            
            <h3 className="text-xl font-bold text-black mt-8 mb-4">Leather Color Restoration</h3>
            <p>
              Sun damage is a big deal here in Georgia. That south-facing window in your living room has likely already faded your furniture. Your car's dashboard and seats get hit even harder - the windshield acts like a magnifying glass.
            </p>
            <p>
              We can restore the original color or even change it completely if you want a new look. Our color matching is spot-on because we use a spectrophotometer to analyze your leather's exact color. Then we mix a custom dye that matches perfectly. We don't use generic colors - every repair is matched to your specific leather.
            </p>
            
            <h3 className="text-xl font-bold text-black mt-8 mb-4">Commercial Leather Furniture Repair</h3>
            <p>
              We work with a lot of businesses around Woodstock and North Atlanta. Hotels like the Courtyard Marriott. Restaurants with leather booth seating. Medical offices with leather exam tables and waiting room chairs. Law firms with fancy conference rooms. Car dealerships with customer lounges.
            </p>
            <p>
              Any place that has leather furniture and needs to keep it looking professional - we can help. We offer maintenance contracts so you don't have to think about it. We come in regularly, inspect everything, and fix problems before they get bad. Your customers see well-maintained furniture, and you don't have to deal with it.
            </p>
            
            <h3 className="text-xl font-bold text-black mt-8 mb-4">Pet Damage Repair</h3>
            <p>
              Dogs and cats love leather furniture, and we love our pets. But those claws leave marks. We fix pet scratches all the time - sometimes light surface scratches, sometimes deep gouges. Cats are usually worse than dogs because they actually dig their claws in.
            </p>
            <p>
              We can also treat the leather after repair to make it more scratch-resistant. It won't make it bulletproof, but it helps. And we can recommend some products to use between professional cleanings that will help protect your investment.
            </p>
            
            <h3 className="text-xl font-bold text-black mt-8 mb-4">Antique and Vintage Leather</h3>
            <p>
              Some of the most interesting pieces we work on are antiques. Grandma's leather chair from the 1950s. A vintage Chesterfield sofa someone found at an estate sale. Leather-topped desks that have been in the family for generations.
            </p>
            <p>
              Old leather needs special care. The tanning methods used decades ago were different, and the leather behaves differently. We know how to work with it without making things worse. Sometimes folks try to clean or condition antique leather with modern products and end up damaging it. We can often fix that too.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection
        title="Need Leather Repair in Woodstock?"
        description="Get a free quote from Cherokee County's most trusted leather repair experts."
      />
    </>
  );
}
