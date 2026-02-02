import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Vintage Furniture Restoration Woodstock GA | Antique Repair",
  description: "Vintage and antique furniture restoration in Woodstock, GA. Careful restoration preserving value and character. Expert craftsmanship.",
};

const relatedServices = [
  { name: "Furniture Regluing", href: "/furniture-repair/furniture-regluing" },
  { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration" },
  { name: "Water Damaged Furniture Repair", href: "/furniture-repair/water-damaged-furniture-repair" },
  { name: "Dining Chair Repair", href: "/furniture-repair/dining-chair-repair" },
  { name: "Loose Joint Repair", href: "/furniture-repair/loose-joint-repair" },
];

export default function VintageFurnitureRestorationPage() {
  return (
    <ServicePageTemplate
      category="Furniture Repair"
      categoryHref="/furniture-repair"
      title="Vintage Furniture Restoration"
      location="Woodstock GA"
      description="Careful restoration of vintage and antique furniture. Preserve value and character while returning pieces to usable condition."
      relatedServices={relatedServices}
      image={{
        src: "/img/green-leather-le-corbusier-set.webp",
        alt: "Green leather Le Corbusier style vintage furniture set"
      }}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Vintage Furniture Restoration in Woodstock</h2>
          
          <p>
            Vintage and antique furniture deserves special care. These pieces have history, character, and often significant value. We provide restoration services that preserve what makes old furniture special while returning it to functional condition. Call us at (770) 592-4689 for a consultation.
          </p>

          <p>
            We've been restoring vintage furniture in Cherokee County for almost 20 years. From family heirlooms to estate sale finds, we've brought thousands of pieces back to life. Each piece gets individual attention appropriate to its age and value.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Restoration vs Refinishing</h3>

          <p>
            There's an important distinction that many people don't understand:
          </p>

          <p>
            <strong>Refinishing</strong> means stripping the old finish completely and applying new finish. This destroys patina - the subtle color and texture changes that develop over decades. For valuable antiques, aggressive refinishing can significantly reduce value. A piece with original finish is worth more to collectors than one that's been stripped and redone.
          </p>

          <p>
            <strong>Restoration</strong> means careful preservation and repair while maintaining original character. We clean, stabilize, and repair without erasing the evidence of age. The goal is to preserve what makes the piece special while returning it to usable condition.
          </p>

          <p>
            We discuss options thoroughly so you can make an informed choice. Sometimes refinishing is appropriate - a common piece that will be used daily may benefit from a fresh finish. But for valuable antiques or meaningful heirlooms, preservation-focused restoration is usually better.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">What We Restore</h3>

          <p>
            We work on vintage and antique furniture of all types:
          </p>

          <p>
            <strong>Seating</strong> - Chairs, rockers, settees, benches. Old chairs especially need joint repair from decades of use.
          </p>

          <p>
            <strong>Tables</strong> - Dining tables, occasional tables, coffee tables, library tables. Water rings, scratches, and loose joints are common issues.
          </p>

          <p>
            <strong>Case Pieces</strong> - Dressers, chests, armoires, china cabinets, sideboards. Drawer repairs, veneer issues, and hardware problems.
          </p>

          <p>
            <strong>Desks</strong> - Roll-tops, partners desks, writing desks, secretaries. These complex pieces often need specialized restoration.
          </p>

          <p>
            <strong>Beds</strong> - Antique bed frames, headboards, footboards. Often need adaptation for modern mattresses.
          </p>

          <p>
            <strong>Decorative Pieces</strong> - Mirrors, screens, plant stands, hall trees, and other decorative furniture.
          </p>

          <p>
            We work on furniture from all periods: Mid-century modern, Art Deco, Victorian, Colonial Revival, Arts and Crafts, Federal, Empire, and earlier periods. Each style has its own characteristics and appropriate restoration approaches.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Structural Restoration</h3>

          <p>
            Old furniture often has structural issues from decades of use and storage:
          </p>

          <p>
            <strong>Loose and Broken Joints</strong> - Traditional hide glue dries out and fails over time. We carefully disassemble joints, clean out old glue, and reassemble with appropriate adhesives. For antiques, we may use reversible adhesives that can be undone if needed later.
          </p>

          <p>
            <strong>Missing Parts</strong> - Knobs, finials, carvings, hardware, and other elements go missing over time. We can source period-appropriate replacements or create matching pieces.
          </p>

          <p>
            <strong>Broken Components</strong> - Legs, stretchers, backs, and other structural pieces break. We repair with techniques appropriate to the piece - traditional joinery, hidden reinforcement, or careful reconstruction.
          </p>

          <p>
            <strong>Veneer Problems</strong> - Old veneer lifts, chips, and cracks. We carefully reattach loose veneer and patch missing areas with matching material.
          </p>

          <p>
            <strong>Worm Damage</strong> - Wood-boring insects leave tunnels and holes. We stabilize damaged wood and fill holes when appropriate.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Finish Restoration</h3>

          <p>
            Original finishes can often be cleaned, revived, and touched up without stripping. We start with the least invasive approach:
          </p>

          <p>
            <strong>Cleaning</strong> - Decades of grime, wax buildup, and smoke film can obscure the original finish. Careful cleaning often reveals a finish in better condition than expected.
          </p>

          <p>
            <strong>Revival</strong> - Shellac and lacquer finishes can be reactivated with solvents, blending touch-ups seamlessly with the original.
          </p>

          <p>
            <strong>Touch-Up</strong> - Scratches, worn spots, and small damaged areas can be touched up to blend with surrounding finish. Done well, touch-up is invisible.
          </p>

          <p>
            <strong>Waxing and Polishing</strong> - A proper wax finish protects and enhances aged finishes.
          </p>

          <p>
            Full refinishing only when necessary - when the original finish is too damaged to save or when the piece will benefit from a fresh finish.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Upholstery Restoration</h3>

          <p>
            Vintage upholstered furniture may need new fabric while preserving original construction. We can reupholster using period-appropriate techniques and materials that suit the piece's age and style.
          </p>

          <p>
            For museum-quality pieces, we can use historically accurate materials and techniques. For pieces that will be used daily, we can suggest durable fabrics in period-appropriate styles.
          </p>

          <p>
            When original upholstery has historical significance (hand-stitching, unusual materials), we document it before removal and can preserve samples.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Value Considerations</h3>

          <p>
            For valuable antiques, improper restoration can destroy value. We advise on what approaches preserve or enhance value versus what might diminish it:
          </p>

          <p>
            <strong>Preserve Original Elements</strong> - Original hardware, finishes, and construction should be preserved when possible. Replacing original elements with reproductions reduces value.
          </p>

          <p>
            <strong>Document Provenance</strong> - History adds value. We don't erase labels, marks, or evidence of origin.
          </p>

          <p>
            <strong>Minimal Intervention</strong> - Sometimes the best restoration is minimal. Stabilize, clean, and leave alone. Heavy-handed restoration can reduce value more than the original condition.
          </p>

          <p>
            <strong>Reversibility</strong> - When possible, use techniques that can be undone if needed. Future conservators should be able to undo our work if better methods develop.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Family Heirlooms</h3>

          <p>
            Much of our vintage work involves family heirlooms - grandmother's rocking chair, great-uncle's desk, the table your parents bought when they married. These pieces have sentimental value beyond money.
          </p>

          <p>
            We treat heirlooms with the care they deserve. We understand that you're trusting us with something irreplaceable. We take time to understand what the piece means to you and what you hope to do with it.
          </p>

          <p>
            Often families want heirlooms restored to usable condition so they can continue to be part of daily life rather than sitting in storage. We can make that happen while preserving the character and history.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We serve Woodstock and all of Cherokee County including Canton, Holly Springs, Ball Ground, and Waleska. We also serve Roswell, Alpharetta, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <p>
            For large or fragile pieces, we offer pickup and delivery with proper padding and care. Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock.
          </p>
        </>
      }
    />
  );
}
