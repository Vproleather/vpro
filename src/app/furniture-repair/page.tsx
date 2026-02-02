import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Furniture Repair Shop Woodstock GA | Expert Furniture Restoration",
  description: "Professional furniture repair and restoration in Woodstock, GA. Regluing, recliner repair, water damage restoration. Serving Cherokee County.",
};

const services = [
  { name: "Furniture Regluing", href: "/furniture-repair/furniture-regluing", desc: "Fix wobbly, loose furniture joints with proper regluing techniques." },
  { name: "Dining Chair Repair", href: "/furniture-repair/dining-chair-repair", desc: "Restore your dining chairs to sturdy, reliable condition." },
  { name: "Recliner Repair", href: "/furniture-repair/recliner-repair", desc: "Fix broken mechanisms, worn padding, and structural issues." },
  { name: "Loose Joint Repair", href: "/furniture-repair/loose-joint-repair", desc: "Tighten and reinforce loose furniture joints properly." },
  { name: "Kitchen Chair Repair", href: "/furniture-repair/kitchen-chair-repair", desc: "Keep your kitchen seating safe and sturdy." },
  { name: "Vintage Furniture Restoration", href: "/furniture-repair/vintage-furniture-restoration", desc: "Preserve and restore antique and heirloom pieces." },
  { name: "Water Damaged Furniture Repair", href: "/furniture-repair/water-damaged-furniture-repair", desc: "Restore furniture affected by floods, leaks, or spills." },
  { name: "Fire Damaged Furniture Repair", href: "/furniture-repair/fire-damaged-furniture-repair", desc: "Salvage and restore furniture after fire or smoke damage." },
  { name: "Moving Damage Furniture Repair", href: "/furniture-repair/moving-damage-furniture-repair", desc: "Fix scratches, dents, and breaks from moving accidents." },
];

export default function FurnitureRepairPage() {
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
              Furniture Repair Shop
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Furniture Repair <span className="text-[#C9A327]">Woodstock GA</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Expert furniture repair and restoration services in Cherokee County. We fix wobbly chairs, broken recliners, water damage, and more. Don't throw it away - let us restore it.
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
              Don't Replace It - Let Us Fix It
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Got a wobbly dining chair that drives you crazy every dinner? A recliner that won't recline anymore? Maybe some furniture got damaged in a move or from water damage? Before you head to the furniture store and drop a bunch of money on something new, give us a call at (770) 592-4689.
              </p>
              
              <p>
                We've been fixing furniture in Woodstock and Cherokee County for nearly 20 years. A lot of the stuff people throw away can actually be repaired and restored to like-new condition. And with older furniture especially, the quality is often better than what you'd buy new today. Those solid wood dining chairs your grandmother gave you? They were built to last generations if you take care of them.
              </p>
              
              <p>
                Our shop at 298 N Briar Ridge handles everything from simple chair regluing to complex recliner mechanism repairs to full vintage furniture restoration. We work on wood furniture, upholstered pieces, antiques, and modern stuff. If it's broken, there's a good chance we can fix it.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Furniture Regluing and Joint Repair</h3>
              
              <p>
                The most common thing we see is loose joints. Chairs especially - all that rocking back and getting up and down loosens the glue over time. Your dining chairs probably started out rock-solid, but after 10 or 20 years of daily use, those joints start to wiggle. That wobble isn't just annoying - it's a safety issue. Keep using a wobbly chair and eventually it'll fail completely.
              </p>
              
              <p>
                Proper regluing involves taking the joint completely apart, cleaning out all the old dried glue, and reassembling with fresh adhesive and proper clamping pressure. Done right, it's stronger than the original. We use modern wood glues that are actually stronger than the wood itself. The joint will break somewhere else before that glue fails.
              </p>
              
              <p>
                Some furniture has been "repaired" badly before - maybe someone squirted some glue in the joint without taking it apart, or used screws to hold things together. We can fix those botched repairs too, though it takes more work to do it right.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Recliner and Motion Furniture Repair</h3>
              
              <p>
                Recliners are another big one. Those mechanisms are complicated - levers, cables, springs, motors on the power ones. Eventually something breaks or wears out. The footrest won't come up, the back won't recline, or there's a terrible grinding noise when you try to adjust.
              </p>
              
              <p>
                Most of the time we can repair or replace the mechanism for significantly less than buying a new chair. We can usually fix the mechanism and get your recliner working like new again. Same with the padding - we can replace worn cushioning and make an old recliner comfortable again.
              </p>
              
              <p>
                We work on all the major recliner brands. La-Z-Boy, Lane, Flexsteel, Ashley, Lazy Boy (yes, they're different companies), Best Home Furnishings - whatever you have. The mechanisms are mostly similar across brands, and we stock common replacement parts.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Water Damaged Furniture Repair</h3>
              
              <p>
                Georgia weather can be brutal on furniture. We get those summer storms that drop inches of rain in an hour. Basements flood, roofs leak, pipes burst. Then there's the humidity - stuff stored in non-climate-controlled spaces gets moldy and warped.
              </p>
              
              <p>
                Water damage doesn't always mean the furniture is ruined. It depends on how bad and how long. Solid wood furniture can often be dried out, stabilized, and refinished. Veneer is trickier - once it bubbles up, it needs careful repair. Upholstered furniture might need new foam and fabric, but the frame is usually salvageable.
              </p>
              
              <p>
                We've restored a lot of furniture after flooding. The key is getting it dried out properly before mold sets in. If you've had water damage, call us quick and we can often save pieces that look hopeless.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Moving Damage and Accident Repair</h3>
              
              <p>
                Moving is hard on furniture. Things get banged, scratched, dropped. Legs break, drawers get jammed, corners get dented. Professional movers have insurance for a reason, but that doesn't help when your favorite piece is damaged.
              </p>
              
              <p>
                We fix moving damage all the time. Broken legs can be reattached or replaced. Scratches and dents can be filled and refinished. Drawers can be adjusted or rebuilt. Most moving damage is cosmetic or structural in ways we can repair.
              </p>
              
              <p>
                If you're dealing with an insurance claim, we can provide detailed estimates and before/after documentation. We work with most insurance companies and can help you get fair compensation for repairs.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Vintage and Antique Furniture Restoration</h3>
              
              <p>
                Some of the most rewarding work we do is restoring vintage and antique furniture. These pieces were built before particle board and staple guns - solid hardwoods, mortise and tenon joints, hand-cut dovetails. They're worth preserving.
              </p>
              
              <p>
                Antique restoration requires special care. Original finishes often have value, and refinishing can actually hurt the piece's worth. We can advise on what makes sense for your situation. Sometimes light cleaning and touch-up is better than stripping and refinishing.
              </p>
              
              <p>
                We also do estate cleanout evaluations. If you've inherited furniture and don't know what's valuable, we can help you figure out what's worth restoring versus what should be sold or donated.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Our Furniture Repair Process</h3>
              
              <p>
                First, bring us the piece or send photos. We'll assess the damage and give you an honest evaluation. Some things aren't worth repairing - if the repair doesn't make sense for a particular piece, we'll tell you that. But most repairs are worthwhile and can extend your furniture's life for many more years.
              </p>
              
              <p>
                For structural repairs like regluing, we take the joints apart completely, clean them, and reassemble with proper adhesive and clamping. For finish repairs, we match the existing color and sheen as closely as possible. For upholstery work, we can use your fabric or source something that matches.
              </p>
              
              <p>
                Most repairs take a few days to a week, depending on complexity and what's ahead in the queue. Rush jobs are sometimes possible if you're in a bind.
              </p>

              <h3 className="text-2xl font-bold text-black mt-12 mb-4">Service Areas</h3>
              
              <p>
                We're located in Woodstock and serve all of Cherokee County - Canton, Holly Springs, Ball Ground, Waleska. We also regularly work with customers in Roswell, Alpharetta, East Cobb, Marietta, Kennesaw, and Acworth.
              </p>
              
              <p>
                For large pieces, we can sometimes pick up and deliver. For smaller items, most folks bring them to the shop. Either way, give us a call at (770) 592-4689 to set something up.
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
            title="Furniture Repair Services in Woodstock"
            description="From simple fixes to complete restoration, we handle all types of furniture repair."
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Repair vs Replace */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Smart Choice"
            title="Why Repair Instead of Replace?"
            description="There's good reasons to fix your existing furniture rather than buying new."
            light
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Save Money", desc: "Most repairs cost a fraction of replacement. Repair your favorite recliner instead of buying new." },
              { title: "Better Quality", desc: "Older furniture was often built better than new mass-produced stuff. It's worth preserving." },
              { title: "Sentimental Value", desc: "Some pieces can't be replaced. Grandma's chair, your first dining set - we can keep them going." },
              { title: "Eco-Friendly", desc: "Keeping furniture out of landfills is good for the environment. Repair is sustainable." },
              { title: "Custom Fit", desc: "That furniture fits your space perfectly. New stuff might not work as well." },
              { title: "Quick Turnaround", desc: "Most repairs take days, not weeks. No waiting for backorders or delivery windows." },
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
        title="Need Furniture Repair in Woodstock?"
        description="Get a free quote and find out if your furniture can be saved."
      />
    </>
  );
}
