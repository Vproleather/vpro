import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Recliner Repair Woodstock GA | Reclining Chair Repair",
  description: "Recliner repair in Woodstock, GA. Mechanisms, motors, frames, upholstery. Fix your favorite chair instead of replacing it.",
};

const relatedServices = [
  { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair" },
  { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration" },
  { name: "Furniture Regluing", href: "/furniture-repair/furniture-regluing" },
  { name: "Loose Joint Repair", href: "/furniture-repair/loose-joint-repair" },
  { name: "Leather Tear Repair", href: "/leather-repair/leather-tear-repair" },
];

export default function ReclinerRepairPage() {
  return (
    <ServicePageTemplate
      category="Furniture Repair"
      categoryHref="/furniture-repair"
      title="Recliner Repair"
      location="Woodstock GA"
      description="Complete recliner repair services. Mechanisms, motors, frames, upholstery. Save your favorite chair from the landfill."
      relatedServices={relatedServices}
      image={{
        src: "/img/caramel-leather-recliner-new-in-box-collage.webp",
        alt: "Caramel leather recliner collage showing repair results"
      }}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Recliner Repair in Woodstock</h2>
          
          <p>
            That recliner is probably someone's favorite seat in the house. When it stops working right, it's a big deal. We repair recliners - mechanisms, motors, frames, and upholstery - so you can keep your favorite chair. Call us at (770) 592-4689 for an estimate.
          </p>

          <p>
            We've been fixing recliners in Cherokee County for almost 20 years. From simple handle repairs to complete mechanism replacements, we've seen every recliner problem there is. Most can be fixed for a fraction of replacement cost.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Recliner Problems</h3>

          <p>
            Recliners have mechanical parts that can fail. Understanding what's wrong helps you know what to expect for repairs:
          </p>

          <p>
            <strong>Mechanism Sticks or Won't Lock</strong> - The most common issue. The reclining mechanism gets jammed, sticks in one position, or won't lock when reclined. Usually caused by worn parts, broken springs, or debris in the mechanism.
          </p>

          <p>
            <strong>Broken Handles and Release Cables</strong> - The handle that releases the footrest wears out, breaks off, or the cable connecting it to the mechanism fails. This is often a simple fix.
          </p>

          <p>
            <strong>Power Recliner Motor Problems</strong> - Electric recliners add motors that can burn out, lose power, or run slowly. Motors are usually replaceable.
          </p>

          <p>
            <strong>Switch and Control Failures</strong> - Power recliner buttons and switches fail. Wiring can come loose or break. These electrical issues are usually repairable.
          </p>

          <p>
            <strong>Broken Footrest Linkages</strong> - The metal linkage arms that extend and retract the footrest can bend, break, or come loose. We can often repair or replace individual linkage components.
          </p>

          <p>
            <strong>Frame Damage</strong> - The wooden frame can crack or break, especially at stress points. Frame repairs need proper reinforcement to hold up.
          </p>

          <p>
            <strong>Collapsed Cushions</strong> - The foam in seat and back cushions compresses over years of use. The chair still works but isn't comfortable anymore.
          </p>

          <p>
            <strong>Worn or Torn Upholstery</strong> - Leather cracks and peels, fabric wears through, seams split. The mechanism works fine but the chair looks terrible.
          </p>

          <p>
            We fix all of these issues. Most recliners can be restored to full function and appearance.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Mechanism Repair</h3>

          <p>
            The reclining mechanism is the heart of the chair. When it fails, the whole chair becomes useless. Recliner mechanisms are complex assemblies of metal parts, springs, and pivots.
          </p>

          <p>
            We diagnose mechanism problems by examining how the chair moves (or doesn't move). Often we can repair mechanisms by cleaning out debris, lubricating moving parts, adjusting worn components, or replacing individual springs and pins.
          </p>

          <p>
            When parts are too damaged to repair, we source replacement mechanisms. Major recliner brands like La-Z-Boy, Lane, Ashley, and Flexsteel use standard mechanism types. We can usually find compatible replacement mechanisms that fit your chair.
          </p>

          <p>
            Full mechanism replacement involves removing the old mechanism, fitting the new one, and ensuring all adjustments are correct. It's a complete refresh of the chair's reclining function.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Power Recliner Repair</h3>

          <p>
            Power recliners add motors and electronics that create additional failure points. We diagnose and repair electrical issues including:
          </p>

          <p>
            <strong>Motor Replacement</strong> - Electric motors burn out over time. We source and install replacement motors compatible with your chair. The motor may be for the footrest, back, or both on dual-motor chairs.
          </p>

          <p>
            <strong>Switch and Control Repair</strong> - The buttons you push to operate the chair can fail. Wired or wireless remotes can stop working. We repair or replace control components.
          </p>

          <p>
            <strong>Wiring Problems</strong> - Wires get pinched, chafed, or disconnected inside the chair. We trace wiring issues and make proper repairs.
          </p>

          <p>
            <strong>Transformer and Power Supply</strong> - The power supply that converts wall current for the motors can fail. Replacements are usually available.
          </p>

          <p>
            Power recliner repairs require understanding both electrical systems and mechanical components. We have the expertise for both.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Frame Repair</h3>

          <p>
            Recliner frames take significant stress, especially on the footrest extension and back recline. Most recliner frames combine wood and metal components.
          </p>

          <p>
            Wood frame sections can crack or break at stress points. We repair frame damage with proper reinforcement - sistering in new wood, adding metal plates, or rebuilding damaged sections.
          </p>

          <p>
            Metal frame components can bend or break. Depending on the damage, we can often straighten bent metal or weld broken pieces. Severe metal frame damage may require sourcing replacement frame sections.
          </p>

          <p>
            Proper frame repair ensures the chair holds up to continued use. A weak repair just fails again.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Cushion and Upholstery</h3>

          <p>
            Sometimes the mechanism is fine but the comfort is gone. Over years of use, cushion foam compresses and loses resilience. The seat develops a permanent body impression. Back support is gone.
          </p>

          <p>
            We can refresh the comfort by replacing foam in the seat cushion, back, and arm rests with new high-density foam. We also replace batting, the soft layer under the upholstery that provides surface comfort. Springs in the seat can be replaced or retied if they've stretched or broken.
          </p>

          <p>
            For upholstery, we repair or replace leather and fabric covers. A recliner with a worn seat panel but good leather elsewhere can have just that section repaired. Severely worn upholstery can be completely redone in new leather or fabric.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Brands We Repair</h3>

          <p>
            We repair all brands of recliners including La-Z-Boy, Lane, Flexsteel, Ashley, Best Home Furnishings, Berkline, Barcalounger, Bradington-Young, Palliser, and Southern Motion. We also work on store brands and off-brand recliners. If it reclines, we can probably fix it.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Benefits of Recliner Repair</h3>

          <p>
            Repair makes sense for most recliners because:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Significant savings</strong> - Repair costs a fraction of replacement</li>
            <li><strong>Keep what you love</strong> - You've already broken it in and gotten comfortable</li>
            <li><strong>Quality preservation</strong> - Many older recliners were built better than today's models</li>
            <li><strong>Environmental choice</strong> - Keep furniture out of landfills</li>
            <li><strong>Faster turnaround</strong> - Get your chair back in days, not weeks waiting for delivery</li>
          </ul>

          <p>
            Unless the frame is completely destroyed, repair almost always makes sense. We'll give you an honest assessment - if repair doesn't make sense for your chair, we'll tell you.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We serve Woodstock and all of Cherokee County including Canton, Holly Springs, Ball Ground, and Waleska. We also serve Roswell, Alpharetta, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Pickup Available</h3>

          <p>
            Recliners are awkward to transport. They're heavy, bulky, and hard to fit in most vehicles. We offer pickup and delivery throughout our service area. We'll get your chair to our shop and back to you when it's fixed.
          </p>

          <p>
            Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock.
          </p>
        </>
      }
    />
  );
}
