import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Furniture Regluing Woodstock GA | Joint Regluing Service",
  description: "Professional furniture regluing in Woodstock, GA. Loose joints, wobbly chairs, separating pieces. Proper techniques for lasting repairs.",
};

const relatedServices = [
  { name: "Loose Joint Repair", href: "/furniture-repair/loose-joint-repair" },
  { name: "Dining Chair Repair", href: "/furniture-repair/dining-chair-repair" },
  { name: "Kitchen Chair Repair", href: "/furniture-repair/kitchen-chair-repair" },
  { name: "Vintage Furniture Restoration", href: "/furniture-repair/vintage-furniture-restoration" },
  { name: "Recliner Repair", href: "/furniture-repair/recliner-repair" },
];

export default function FurnitureRegluingPage() {
  return (
    <ServicePageTemplate
      category="Furniture Repair"
      categoryHref="/furniture-repair"
      title="Furniture Regluing"
      location="Woodstock GA"
      description="Expert furniture regluing services. Restore stability to loose and wobbly furniture with proper techniques that last."
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Furniture Regluing in Woodstock</h2>
          
          <p>
            Over time, wood furniture joints loosen. The glue dries out, the wood shrinks and expands with humidity changes, and suddenly your chair or table is wobbly. We provide professional furniture regluing that restores stability for years to come. Call us at (770) 592-4689 for a free assessment.
          </p>

          <p>
            We've been regluing furniture for families in Cherokee County for almost 20 years. From antique dining chairs to modern kitchen stools, we've repaired thousands of loose joints. Done right, a reglued joint is actually stronger than it was originally.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Why Joints Fail</h3>

          <p>
            Understanding why furniture joints fail helps you understand why proper repair technique matters. It's not just about squirting glue into a gap.
          </p>

          <p>
            <strong>Original Glue Deterioration</strong> - Traditional hide glue used in older furniture becomes brittle with age. Even modern wood glues eventually break down, especially if the furniture has been in humid or dry environments.
          </p>

          <p>
            <strong>Wood Movement</strong> - Wood is hygroscopic - it absorbs and releases moisture from the air. In humid Georgia summers, wood expands. In dry winter heating, it contracts. This constant movement works joints loose over decades.
          </p>

          <p>
            <strong>Stress and Wear</strong> - Every time you lean back in a chair, every time you scoot a chair up to the table, every time kids climb on furniture - stress is applied to the joints. Over years and decades, this gradually loosens them.
          </p>

          <p>
            <strong>Poor Original Construction</strong> - Not all furniture is well-made. Cheap furniture often has poor-fitting joints that fail quickly. Mass-produced furniture sometimes uses inadequate glue or poor joint design.
          </p>

          <p>
            <strong>Previous Bad Repairs</strong> - We see this constantly. Someone tried to fix a loose joint by squirting glue in without proper cleaning and clamping. The repair fails quickly, and now the joint is contaminated with old glue that needs to be cleaned out.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">The Right Way to Reglue</h3>

          <p>
            Just squirting glue into a loose joint doesn't work well. For a lasting repair, proper technique is essential:
          </p>

          <p>
            <strong>Complete Disassembly</strong> - The affected joints need to come apart. Partially-glued joints don't hold. We carefully separate the pieces, taking care not to damage wood or break weakened parts.
          </p>

          <p>
            <strong>Clean All Surfaces</strong> - Old glue must be completely removed from both sides of the joint. Glue doesn't stick well to old dried glue. We scrape, sand, or otherwise clean the joint surfaces to bare wood.
          </p>

          <p>
            <strong>Assess Fit</strong> - After cleaning, we check how the joint fits together. Years of wear may have changed the fit. Loose-fitting joints need adjustment - sometimes shimming with veneer, sometimes recutting.
          </p>

          <p>
            <strong>Quality Glue</strong> - We use professional-grade wood glues appropriate for the repair. Different situations call for different glues - standard PVA for most repairs, specialized glues for outdoor furniture or pieces that may need future disassembly.
          </p>

          <p>
            <strong>Proper Clamping</strong> - Glue alone doesn't make a strong joint - it needs pressure during curing. We use appropriate clamps to hold joints tight while the glue sets. Too little pressure means a weak joint.
          </p>

          <p>
            <strong>Adequate Curing Time</strong> - Rushed repairs fail. Glue needs time to cure fully before the furniture is used. We don't rush this process.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Joint Types</h3>

          <p>
            Different furniture uses different joint types, each requiring slightly different repair approaches:
          </p>

          <p>
            <strong>Mortise and Tenon</strong> - The strongest traditional joint. A peg (tenon) fits into a hole (mortise). Common in chairs, tables, and quality furniture. These joints can usually be restored to full strength.
          </p>

          <p>
            <strong>Dowel Joints</strong> - Round wooden pegs connect pieces. Very common in modern furniture. Dowels can break or become loose. We can replace dowels if needed.
          </p>

          <p>
            <strong>Dovetail</strong> - Interlocking wedge-shaped cuts. Used in drawers and case construction. Rarely fail completely but can loosen over time.
          </p>

          <p>
            <strong>Tongue and Groove</strong> - One piece has a projecting ridge that fits into a groove in another. Used in table leaves, panels, and planked surfaces.
          </p>

          <p>
            <strong>Butt Joints with Fasteners</strong> - Cheaper construction uses simple butt joints reinforced with screws, nails, or brackets. These fail more often and may need additional reinforcement.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Reinforcement When Needed</h3>

          <p>
            Sometimes joints have worn to the point where glue alone won't hold. The wood may be damaged, the joint may have loosened beyond what glue can fix, or the original design was inadequate.
          </p>

          <p>
            In these cases we use appropriate reinforcement - dowel plugs to fill worn holes before re-drilling, corner braces hidden inside corners, steel plates or brackets concealed from view, or other techniques that preserve the appearance while adding structural support.
          </p>

          <p>
            We discuss reinforcement options with you before proceeding. Our goal is lasting repairs that don't compromise appearance.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">What We Reglue</h3>

          <p>
            We reglue all types of wood furniture:
          </p>

          <p>
            <strong>Chairs</strong> - Dining chairs, kitchen chairs, office chairs, rocking chairs, bar stools, desk chairs. Chairs see constant stress and are our most common regluing work.
          </p>

          <p>
            <strong>Tables</strong> - Dining tables, kitchen tables, coffee tables, end tables. Leg joints, apron connections, and pedestal bases all come loose over time.
          </p>

          <p>
            <strong>Bed Frames</strong> - Headboard connections, side rail joints, foot board joints. Bed joints take a lot of stress.
          </p>

          <p>
            <strong>Case Pieces</strong> - Dressers, armoires, china cabinets, bookcases. Joints connecting tops, sides, and backs can loosen.
          </p>

          <p>
            <strong>Antique Furniture</strong> - Older furniture often used hide glue that has deteriorated. We're careful with antiques to preserve value while restoring stability.
          </p>

          <p>
            If it's made of wood and has joints, we can reglue it.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">When to Repair vs. Replace</h3>

          <p>
            Most furniture is worth regluing. Quality furniture - solid wood construction, good design - is expensive to replace. Even budget furniture often costs more to replace than repair.
          </p>

          <p>
            Exceptions: Particleboard and MDF furniture often isn't worth repairing. The material itself fails, not just the joints. Very cheap furniture may not be worth repairing. We'll give you honest advice about whether repair makes sense for your piece.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Timing</h3>

          <p>
            Regluing needs proper curing time. Plan on 2-3 days minimum for us to have your piece. Complex pieces with multiple joints may take longer. We won't rush the process and risk a failed repair.
          </p>

          <p>
            For furniture you use daily (like dining chairs), consider getting them repaired a few at a time so you're not without all your seating.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Related Furniture Services</h3>

          <p>
            We offer a complete range of furniture repair services:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong><a href="/furniture-repair/dining-chair-repair" className="text-[#C9A327] hover:underline">Dining Chair Repair</a></strong> - Complete dining chair restoration including regluing</li>
            <li><strong><a href="/furniture-repair/kitchen-chair-repair" className="text-[#C9A327] hover:underline">Kitchen Chair Repair</a></strong> - Fix everyday kitchen seating</li>
            <li><strong><a href="/furniture-repair/loose-joint-repair" className="text-[#C9A327] hover:underline">Loose Joint Repair</a></strong> - Tighten and reinforce all types of furniture joints</li>
            <li><strong><a href="/furniture-repair/vintage-furniture-restoration" className="text-[#C9A327] hover:underline">Vintage Furniture Restoration</a></strong> - Preserve antique and heirloom pieces</li>
          </ul>

          <p>
            We provide free estimates after seeing your piece. Bring it by or send photos and we'll give you an assessment.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We're based in Woodstock and serve all of Cherokee County including Canton, Holly Springs, Ball Ground, and Waleska. We also serve Roswell, Alpharetta, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <p>
            For multiple pieces or large items, we offer pickup and delivery service. Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock.
          </p>
        </>
      }
    />
  );
}
