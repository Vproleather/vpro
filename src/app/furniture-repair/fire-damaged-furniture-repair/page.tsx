import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fire Damaged Furniture Repair Woodstock GA | Smoke Damage",
  description: "Fire damaged furniture repair in Woodstock, GA. Smoke, soot, heat damage restoration. Insurance work welcome.",
};

const relatedServices = [
  { name: "Water Damaged Furniture Repair", href: "/furniture-repair/water-damaged-furniture-repair" },
  { name: "Vintage Furniture Restoration", href: "/furniture-repair/vintage-furniture-restoration" },
  { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
  { name: "Moving Damage Furniture Repair", href: "/furniture-repair/moving-damage-furniture-repair" },
];

export default function FireDamagedFurnitureRepairPage() {
  return (
    <ServicePageTemplate
      category="Furniture Repair"
      categoryHref="/furniture-repair"
      title="Fire Damaged Furniture Repair"
      location="Woodstock GA"
      description="Professional restoration of fire and smoke damaged furniture. Remove soot, odor, and restore appearance. Insurance work welcome."
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Fire Damaged Furniture Repair in Woodstock</h2>
          
          <p>
            Fire damage goes beyond what you can see. Even furniture not directly burned may have smoke damage, soot coating, and lingering odor. We restore fire damaged furniture, removing evidence of the fire and returning pieces to usable condition. Call us at (770) 592-4689 for an assessment.
          </p>

          <p>
            We've been restoring fire damaged furniture in Cherokee County for almost 20 years. After a fire, families often want to save whatever they can - especially meaningful furniture. Many pieces that look ruined can actually be restored with proper techniques.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Types of Fire Damage</h3>

          <p>
            Fire affects furniture in multiple ways, and most pieces experience several types of damage simultaneously:
          </p>

          <p>
            <strong>Direct Burn Damage</strong> - Charred, scorched, or burned surfaces. Severity ranges from light surface scorching to deep burning that destroys the wood structure. Light scorching can often be sanded and refinished. Deep burns may require patching or part replacement.
          </p>

          <p>
            <strong>Smoke and Soot Deposits</strong> - Oily, acidic residue that coats surfaces. Soot stains and discolors finishes. If left untreated, soot can permanently etch into finishes and even penetrate wood. Proper cleaning is essential and time-sensitive.
          </p>

          <p>
            <strong>Heat Damage</strong> - Even without direct flame, intense heat warps wood, loosens joints, cracks finishes, and damages structural integrity. Heat damage may not be immediately visible but affects the furniture's soundness.
          </p>

          <p>
            <strong>Smoke Odor</strong> - The most persistent problem. Smoke smell permeates wood, upholstery, and even metal hardware. The odor can linger for years without proper treatment. It's not just unpleasant - smoke smell makes furniture unusable in your home.
          </p>

          <p>
            <strong>Water Damage</strong> - Firefighting efforts soak furniture with water, adding water damage on top of fire damage. Wet, soot-covered furniture needs rapid attention before mold develops.
          </p>

          <p>
            We address all these issues in a systematic restoration process.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Assessment</h3>

          <p>
            Not all fire damaged furniture can be saved, but much of it can. We provide honest assessments of what's restorable versus what's too far gone.
          </p>

          <p>
            Factors we consider: extent of burn damage, structural integrity after heat exposure, depth of smoke penetration, presence of mold from water damage, and the furniture's value (monetary and sentimental).
          </p>

          <p>
            For valuable or sentimental pieces, restoration is often worth pursuing even when damage is significant. That dining table your grandfather made? We'll do everything possible to save it.
          </p>

          <p>
            For common furniture with severe damage, we'll give honest advice about whether repair costs make sense compared to replacement.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Soot and Smoke Removal</h3>

          <p>
            Soot deposits need proper cleaning - wrong methods can push soot deeper into the wood grain or permanently stain finishes. Soot is acidic and continues damaging finishes the longer it sits.
          </p>

          <p>
            We use appropriate cleaning techniques starting with dry methods to remove loose soot, then progressing to chemical cleaners that lift embedded residue without causing further damage. We work methodically to avoid spreading soot to clean areas.
          </p>

          <p>
            After surface cleaning, we address any staining that remains. This may involve chemical treatment of the finish, sanding and refinishing heavily stained areas, or complete refinishing for severe cases.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Odor Elimination</h3>

          <p>
            Smoke odor is often the most challenging aspect of fire restoration. The smell gets into the wood itself, not just the finish. Upholstered pieces absorb smoke deep into padding and frames.
          </p>

          <p>
            We use specialized treatments to neutralize odors:
          </p>

          <p>
            <strong>Ozone Treatment</strong> - Ozone generators oxidize odor-causing molecules. This works well for moderate smoke odor.
          </p>

          <p>
            <strong>Thermal Fogging</strong> - A heated deodorizing agent penetrates the same way smoke did, neutralizing odor where it lives.
          </p>

          <p>
            <strong>Chemical Sealers</strong> - Specialized primers and sealers can encapsulate remaining odor-causing residue, preventing it from off-gassing.
          </p>

          <p>
            <strong>Refinishing</strong> - Complete refinishing with odor-blocking sealers is sometimes necessary for severe cases.
          </p>

          <p>
            The goal is furniture you can have in your home without smelling smoke. We don't consider the job done until the odor is gone.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Structural Repair</h3>

          <p>
            Heat can damage structural integrity even without direct burning. Glue joints fail from heat exposure. Wood can crack or warp. The piece may look intact but be structurally compromised.
          </p>

          <p>
            We assess structural soundness throughout the piece. Joints are tested and reglued if needed. Cracked or weakened components are repaired or replaced. We make sure furniture is safe to use, not just good-looking.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Surface Restoration</h3>

          <p>
            After cleaning and structural repair, surfaces need attention:
          </p>

          <p>
            <strong>Finish Repair</strong> - Heat-damaged and smoke-stained finishes may need touch-up, partial refinishing, or complete refinishing depending on damage severity.
          </p>

          <p>
            <strong>Scorched Wood</strong> - Lightly scorched wood can often be sanded to remove the char and then refinished. Deeper burns may need wood filler, patches, or part replacement.
          </p>

          <p>
            <strong>Color Matching</strong> - Repaired areas are carefully color-matched to blend with original surfaces.
          </p>

          <p>
            We match original finishes when possible or update the look if you prefer a change.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Insurance Claims</h3>

          <p>
            Fire damage restoration is typically covered by insurance. We work with insurance companies regularly and understand the claims process.
          </p>

          <p>
            We provide detailed documentation including photographs of damage, itemized restoration plans, detailed estimates, and progress documentation. We can work directly with your adjuster to explain the damage and proposed repairs.
          </p>

          <p>
            Insurance work is a significant part of our fire damage restoration - we know how to document properly and communicate with adjusters effectively.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We serve Woodstock and all of Cherokee County including Canton, Holly Springs, Ball Ground, and Waleska. We also serve Roswell, Alpharetta, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <p>
            For fire damage restoration, we offer pickup services. You have enough to deal with after a fire - let us handle getting the furniture to and from our shop. Call us at (770) 592-4689 or reach us at our shop at 298 N Briar Ridge in Woodstock.
          </p>
        </>
      }
    />
  );
}
