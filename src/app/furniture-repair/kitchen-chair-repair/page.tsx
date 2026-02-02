import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Kitchen Chair Repair Woodstock GA | Breakfast Nook Chairs",
  description: "Kitchen chair repair in Woodstock, GA. Fix wobbly stools, breakfast nook chairs, counter seating. Quick turnaround.",
};

const relatedServices = [
  { name: "Dining Chair Repair", href: "/furniture-repair/dining-chair-repair" },
  { name: "Furniture Regluing", href: "/furniture-repair/furniture-regluing" },
  { name: "Loose Joint Repair", href: "/furniture-repair/loose-joint-repair" },
  { name: "Dining Chair Upholstery", href: "/upholstery/dining-chair-upholstery" },
  { name: "Restaurant Seat Upholstery", href: "/upholstery/restaurant-seat-upholstery" },
];

export default function KitchenChairRepairPage() {
  return (
    <ServicePageTemplate
      category="Furniture Repair"
      categoryHref="/furniture-repair"
      title="Kitchen Chair Repair"
      location="Woodstock GA"
      description="Kitchen chair and stool repair services. Fix wobbly breakfast nook chairs, bar stools, and counter seating quickly."
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Kitchen Chair Repair in Woodstock</h2>
          
          <p>
            Kitchen chairs get more use than almost any furniture in your home. Breakfast, lunch, dinner, snacks, homework, coffee - they're used all day long. No wonder they get wobbly. We repair kitchen chairs so they're solid and safe again. Call us at (770) 592-4689 for a free quote.
          </p>

          <p>
            We've been repairing kitchen furniture for families in Cherokee County for almost 20 years. From breakfast nook benches to counter stools, we've fixed thousands of kitchen chairs. Your family deserves seating that's solid and safe.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Types of Kitchen Seating We Repair</h3>

          <p>
            We repair all types of kitchen seating:
          </p>

          <p>
            <strong>Traditional Kitchen Chairs</strong> - Classic wood kitchen chairs in ladder-back, Windsor, farmhouse, and other styles. These are our bread and butter - we repair them constantly.
          </p>

          <p>
            <strong>Breakfast Nook Chairs and Benches</strong> - Built-in and freestanding breakfast nook seating. Benches can be challenging to transport, but we handle logistics for larger pieces.
          </p>

          <p>
            <strong>Counter Stools</strong> - Counter-height stools for kitchen islands and breakfast bars. Metal, wood, and combination construction.
          </p>

          <p>
            <strong>Bar Stools</strong> - Taller bar-height stools for higher counters. Often have swivel bases and footrests that need specific attention.
          </p>

          <p>
            <strong>High Chairs</strong> - Wooden high chairs can last generations with proper repair. We've restored high chairs that are on their third generation of use.
          </p>

          <p>
            <strong>Kitchen Island Seating</strong> - Whatever seating surrounds your island - stools, chairs, benches - we can repair it.
          </p>

          <p>
            Whatever you sit on in your kitchen, we can fix it.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Problems</h3>

          <p>
            Kitchen chairs take unique abuse. They're scooted in and out constantly, kids lean back in them, they get bumped and jostled. Common problems include:
          </p>

          <p>
            <strong>Wobbly Legs and Loose Joints</strong> - The most common issue. Joints loosen from constant scooting, leaning, and general use. We disassemble, clean, and properly reglue affected joints.
          </p>

          <p>
            <strong>Broken Rungs and Stretchers</strong> - The horizontal pieces between legs break from foot pressure or impact. Kids hanging their feet especially stresses these pieces. We repair or replace broken stretchers.
          </p>

          <p>
            <strong>Cracked or Split Seats</strong> - Solid wood seats can crack, especially when humidity changes. Plywood seats can delaminate. We repair splits or replace severely damaged seats.
          </p>

          <p>
            <strong>Broken Backs and Spindles</strong> - People lean back, chairs tip, backs break. We repair or replace broken back components including spindles, top rails, and splats.
          </p>

          <p>
            <strong>Damaged Finishes</strong> - Kitchen chairs see spills, heat from pots set down nearby, cleaning chemicals. Finishes get worn, stained, and damaged. We touch up or refinish as needed.
          </p>

          <p>
            <strong>Worn or Ripped Seat Cushions</strong> - Upholstered kitchen chair seats wear out, rip, or just get dated. We recover seats with new fabric and padding.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Bar Stool Repair</h3>

          <p>
            Counter and bar stools have their own challenges beyond standard chair issues:
          </p>

          <p>
            <strong>Footrest Damage</strong> - The footrest on bar stools takes tremendous abuse. People rest their full weight on it, kick it, push off from it. Footrests bend, come loose, or break completely. We repair and reinforce footrests or replace them with sturdier versions.
          </p>

          <p>
            <strong>Swivel Mechanism Wear</strong> - Swivel bases wear out, becoming loose or stiff. Bearings fail. Swivel plates bend. We repair or replace swivel mechanisms to restore smooth rotation.
          </p>

          <p>
            <strong>Gas Lift Failure</strong> - Adjustable-height stools use gas lift cylinders that eventually fail - the stool won't stay up or slowly sinks. We replace gas lift cylinders with new ones.
          </p>

          <p>
            <strong>Base Stability</strong> - Four-legged stools can wobble like chairs. Pedestal and ring bases can become loose or unstable. We repair whatever base style your stool has.
          </p>

          <p>
            <strong>Tall Structure Stress</strong> - Bar stools are tall, which puts more stress on joints. The leverage factor is higher. We reinforce joints appropriately for the height.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Metal Kitchen Chairs</h3>

          <p>
            Many modern kitchen chairs and stools have metal frames. We repair these too. Bent metal can often be straightened. Welds can be redone. We replace worn glides, repair bent legs, and address other metal frame issues.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Quick Turnaround</h3>

          <p>
            We know you need your kitchen chairs - you can't eat standing up forever. We prioritize kitchen seating repairs because we understand the urgency.
          </p>

          <p>
            Most chairs can be completed in 2-3 days. Simple repairs may be faster. Rush service available if you're hosting a gathering or otherwise need chairs immediately.
          </p>

          <p>
            For sets, we can work in stages so you're never completely without seating - fix half the set, return those, then take the other half.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Multiple Chair Discount</h3>

          <p>
            Kitchen chairs come in sets. If one is wobbly, the others probably are too (or will be soon). They've all experienced the same years of use.
          </p>

          <p>
            We handle sets efficiently - disassembly, gluing, and clamping of multiple chairs at once is faster than doing them one at a time.
          </p>

          <p>
            While we have them, consider addressing all issues across the set - tighten all joints, touch up all scratches, recover all seats. The whole set comes back matching and solid.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">When to Repair vs Replace</h3>

          <p>
            Most kitchen chairs are worth repairing. Here's why repair makes sense:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Keep matching sets</strong> - Finding replacement chairs that match your table is difficult</li>
            <li><strong>Preserve quality</strong> - Many older chairs are built better than new options</li>
            <li><strong>Environmental choice</strong> - Extend furniture life and keep it out of landfills</li>
            <li><strong>Maintain style</strong> - Keep chairs that fit your kitchen decor</li>
          </ul>

          <p>
            Exceptions: Very cheap chairs with pressed wood or particleboard construction, or chairs with extensive damage may not be practical to repair. We'll give honest advice.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We serve Woodstock and surrounding areas including Towne Lake, BridgeMill, Eagle Watch, Holly Springs, Canton, Ball Ground, and throughout Cherokee County. We also serve Roswell, Alpharetta, Marietta, and Kennesaw.
          </p>

          <p>
            Pickup available if you can't transport multiple chairs. Call us at (770) 592-4689 or bring your chairs to our shop at 298 N Briar Ridge in Woodstock.
          </p>
        </>
      }
    />
  );
}
