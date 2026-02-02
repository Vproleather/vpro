import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Moving Damage Furniture Repair Woodstock GA | Mover Damage",
  description: "Moving damage furniture repair in Woodstock, GA. Scratches, dents, breaks from moving. Quick repairs, insurance documentation.",
};

const relatedServices = [
  { name: "Water Damaged Furniture Repair", href: "/furniture-repair/water-damaged-furniture-repair" },
  { name: "Fire Damaged Furniture Repair", href: "/furniture-repair/fire-damaged-furniture-repair" },
  { name: "Furniture Regluing", href: "/furniture-repair/furniture-regluing" },
  { name: "Leather Scratch Repair", href: "/leather-repair/leather-scratch-repair" },
  { name: "Vintage Furniture Restoration", href: "/furniture-repair/vintage-furniture-restoration" },
];

export default function MovingDamageFurnitureRepairPage() {
  return (
    <ServicePageTemplate
      category="Furniture Repair"
      categoryHref="/furniture-repair"
      title="Moving Damage Furniture Repair"
      location="Woodstock GA"
      description="Quick repair of furniture damaged during moves. Scratches, dents, breaks. Documentation for insurance or mover claims."
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Moving Damage Furniture Repair in Woodstock</h2>
          
          <p>
            Moving is hard on furniture. Even careful movers can scratch, dent, or break pieces. DIY moves are even harder on furniture. If your furniture was damaged in a move, we can repair it - and provide documentation if you need to file a claim. Call us at (770) 592-4689 for a free estimate.
          </p>

          <p>
            Woodstock and Cherokee County see lots of people moving in - it's a growing area. We repair moving damage constantly. Most damage looks worse than it is - we can usually restore furniture to pre-move condition.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Moving Damage</h3>

          <p>
            We see the same types of moving damage repeatedly. Most can be repaired:
          </p>

          <p>
            <strong>Scratches and Gouges</strong> - Furniture scrapes against doorways, truck walls, other furniture, or pavement during moves. Deep scratches gouge through the finish into the wood. Surface scratches may only affect the finish. Both are repairable.
          </p>

          <p>
            <strong>Dents</strong> - Impacts from drops, bumps, or heavy items placed on top create dents. The finish may be intact but the wood is compressed. We can often raise dents with steam and touch up any finish damage.
          </p>

          <p>
            <strong>Broken Legs and Stretchers</strong> - Legs snap off when furniture tips over or is dropped. Stretchers break when furniture is lifted by them instead of the frame. These breaks usually repair well with proper gluing and reinforcement.
          </p>

          <p>
            <strong>Chipped Veneer and Edges</strong> - Veneer is vulnerable to impact damage. Edges catch on doorways and chip. We can patch veneer with matching material or reattach loose pieces.
          </p>

          <p>
            <strong>Loose and Separated Joints</strong> - Rough handling puts stress on furniture joints. Moving trucks bounce and vibrate. Joints that were already slightly loose fail completely during moves. We reglue failed joints properly.
          </p>

          <p>
            <strong>Cracked Marble and Glass Tops</strong> - Marble, granite, and glass tops crack from impact or improper support during transport. Stone can sometimes be repaired; glass usually needs replacement.
          </p>

          <p>
            <strong>Bent Hardware</strong> - Drawer pulls, hinges, and decorative hardware get bent or broken. We straighten, repair, or replace hardware as needed.
          </p>

          <p>
            All of these can typically be repaired to restore the furniture's appearance and function.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Scratch and Dent Repair</h3>

          <p>
            Surface damage is the most common moving injury. We repair scratches and dents using professional techniques:
          </p>

          <p>
            <strong>Surface Scratches</strong> - Scratches that only affect the finish (not the wood underneath) can often be buffed out or touched up with matching finish. The scratch disappears completely.
          </p>

          <p>
            <strong>Deep Scratches</strong> - Scratches into the wood need filling, staining to match, and finish touch-up. Done well, the repair is nearly invisible.
          </p>

          <p>
            <strong>Gouges</strong> - Deep gouges require wood filler, careful color matching, and finish work. Severe gouges may show slightly but are dramatically improved.
          </p>

          <p>
            <strong>Dents</strong> - Many dents can be raised by applying steam to swell the compressed wood fibers back to their original position. This works surprisingly well on solid wood.
          </p>

          <p>
            Minor damage often disappears completely. Deeper damage is minimized to be barely noticeable.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Structural Repairs</h3>

          <p>
            Broken legs, cracked frames, separated joints - these need proper repair to restore function and safety.
          </p>

          <p>
            We disassemble affected areas as needed, clean out old glue, repair or replace broken parts, and reassemble with proper gluing and clamping. If wood is cracked, we may reinforce with hidden dowels or other internal support.
          </p>

          <p>
            Properly repaired structural damage is as strong as the original - often stronger because we add reinforcement.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Veneer Repair</h3>

          <p>
            Veneer is especially vulnerable to moving damage - chips, lifts, and separations are common. Impact damage creates chips. Vibration and stress cause veneer to lift from the substrate.
          </p>

          <p>
            We repair veneer damage carefully. Lifted veneer is reglued and clamped flat. Missing sections are patched with matched veneer - we keep various species on hand for matching. Touch-up blends repairs with the surrounding finish.
          </p>

          <p>
            On quality furniture with figured veneer (burled, book-matched, or other patterns), careful repair preserves the beauty of the piece.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Insurance and Claims Documentation</h3>

          <p>
            If you're filing a claim against your moving company or insurance, proper documentation is essential. We provide:
          </p>

          <p>
            <strong>Damage Documentation</strong> - Detailed written descriptions of all damage found. We note the type, location, and severity of each issue.
          </p>

          <p>
            <strong>Photographs</strong> - Before photos (when possible) and detailed damage photos. Visual documentation supports your claim.
          </p>

          <p>
            <strong>Repair Estimates</strong> - Itemized estimates showing what repairs are needed and their costs. We break down estimates by piece and repair type.
          </p>

          <p>
            <strong>Completion Documentation</strong> - After repairs are complete, we provide documentation showing the work performed and final condition.
          </p>

          <p>
            Professional documentation helps support your claim with the moving company or insurance. We've provided documentation for many successful claims.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Quick Turnaround</h3>

          <p>
            You just moved - you want your furniture usable, not sitting in a repair shop. You're living out of boxes and want to get settled.
          </p>

          <p>
            We prioritize moving damage repairs and turn around most jobs in 3-5 days. Simple repairs may be faster. Rush service available when you need something immediately - we understand moving timelines.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">New to Woodstock?</h3>

          <p>
            Welcome to the area! Woodstock is a great place to live. Cherokee County offers small-town feel with easy access to Atlanta. Great schools, beautiful scenery, and friendly neighbors.
          </p>

          <p>
            If you've arrived with damaged furniture, we can help get you settled in. We serve all Woodstock neighborhoods - Towne Lake, Eagle Watch, BridgeMill, Victoria Station, Wyngate, The Township, and more. We also serve Canton, Holly Springs, Roswell, Alpharetta, and throughout North Atlanta.
          </p>

          <p>
            Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock. We'll get your furniture fixed so you can enjoy your new home.
          </p>
        </>
      }
    />
  );
}
