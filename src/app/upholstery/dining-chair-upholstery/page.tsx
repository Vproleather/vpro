import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Dining Chair Upholstery Woodstock GA | Chair Reupholstery",
  description: "Dining chair upholstery in Woodstock, GA. Reupholster your dining set for a fresh new look. Fabric selection, quality workmanship.",
};

const relatedServices = [
  { name: "Restaurant Seat Upholstery", href: "/upholstery/restaurant-seat-upholstery" },
  { name: "Dining Chair Repair", href: "/furniture-repair/dining-chair-repair" },
  { name: "Kitchen Chair Repair", href: "/furniture-repair/kitchen-chair-repair" },
  { name: "Vintage Furniture Restoration", href: "/furniture-repair/vintage-furniture-restoration" },
  { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration" },
];

export default function DiningChairUpholsteryPage() {
  return (
    <ServicePageTemplate
      category="Upholstery"
      categoryHref="/upholstery"
      title="Dining Chair Upholstery"
      location="Woodstock GA"
      description="Give your dining chairs a fresh new look with professional reupholstery. Wide fabric selection, expert craftsmanship."
      relatedServices={relatedServices}
      image={{
        src: "/img/cognac-leather-chair-nailhead-arm-detail.webp",
        alt: "Cognac leather chair arm detail with nailhead trim"
      }}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Dining Chair Upholstery in Woodstock</h2>
          
          <p>
            Your dining chairs get used every day but are often overlooked when it comes to updating your home. Worn, stained, or outdated upholstery can drag down the look of your whole dining room. We reupholster dining chairs to give them - and your space - a fresh new look. Call us at (770) 592-4689 for a free consultation.
          </p>

          <p>
            We've been reupholstering dining chairs for families in Cherokee County for almost 20 years. From antique chairs that need period-appropriate restoration to modern chairs that need a fabric refresh, we've done thousands of dining chair projects.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Why Reupholster Instead of Replace?</h3>

          <p>
            If the frames are solid, reupholstering makes much more sense than replacement. Here's why:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Significant savings</strong> - Reupholstery costs a fraction of replacement furniture</li>
            <li><strong>Keep what fits</strong> - Your chairs already match your table and space</li>
            <li><strong>Better quality</strong> - Older chairs were often made with solid hardwood frames and proper joinery</li>
            <li><strong>Exactly what you want</strong> - Pick exactly the fabric you want instead of manufacturer options</li>
            <li><strong>Environmental choice</strong> - Keep good furniture out of landfills</li>
            <li><strong>Preserve sentimental value</strong> - Keep heirloom or cherished furniture in the family</li>
          </ul>

          <p>
            New furniture at moderate prices often uses cheaper construction. Your existing chairs may be better made than replacements.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Fabric Options</h3>

          <p>
            We have access to thousands of fabric options. Whatever look you want, we can find the right material:
          </p>

          <p>
            <strong>Performance Fabrics</strong> - Crypton, Sunbrella, and other performance fabrics resist stains, repel liquids, and clean easily. Perfect for families with kids or if you host regular dinners. These fabrics look as good as traditional options but perform far better.
          </p>

          <p>
            <strong>Traditional Fabrics</strong> - Damasks, brocades, velvet, and classic patterns for formal dining rooms. If you want the traditional look, we have options from subtle to ornate.
          </p>

          <p>
            <strong>Modern Textures</strong> - Linen looks, tweeds, herringbone, and contemporary patterns for updated spaces.
          </p>

          <p>
            <strong>Leather and Faux Leather</strong> - Real leather for premium look and feel, or high-quality faux leather that's easier to maintain and more affordable.
          </p>

          <p>
            <strong>Custom Colors</strong> - We can match virtually any color to coordinate with your existing decor. Bring a sample and we'll find something that works.
          </p>

          <p>
            We help you choose the right material for your lifestyle. If you have young kids, we'll steer you toward performance fabrics. If your dining room is formal and rarely used, traditional fabrics work fine.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">The Reupholstery Process</h3>

          <p>
            Professional reupholstery is more than just stretching new fabric over old:
          </p>

          <p>
            <strong>Inspection</strong> - First we strip the old fabric and inspect everything underneath. We check the frame for loose joints, the padding for deterioration, and the springs (if present) for damage.
          </p>

          <p>
            <strong>Frame Repair</strong> - Any loose joints get reglued properly. Cracks get repaired. We don't just cover up structural problems.
          </p>

          <p>
            <strong>Padding Replacement</strong> - If the foam is compressed or deteriorated, we replace it. Old foam that's broken down will show through new fabric and won't be comfortable. We use quality foam that maintains its shape.
          </p>

          <p>
            <strong>New Fabric Application</strong> - We apply the new fabric carefully, ensuring tight fit, proper pattern alignment, and professional finish. Corners are handled cleanly, seams are straight, and the result looks factory-fresh.
          </p>

          <p>
            <strong>Quality Check</strong> - Every chair is inspected before delivery to ensure consistent quality across the set.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Styles We Handle</h3>

          <p>
            We reupholster all styles of dining chairs: Parson's chairs (fully upholstered), traditional with upholstered seats, ladder back chairs with seat pads, Queen Anne and Chippendale styles, mid-century modern, farmhouse styles, and custom or unique designs.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Complete Dining Set Services</h3>

          <p>
            We handle complete dining sets - all your chairs plus any upholstered elements:
          </p>

          <p>
            <strong>Side Chairs</strong> - The regular chairs around your table.
          </p>

          <p>
            <strong>Arm Chairs</strong> - Matching arm chairs for the ends of the table or host positions.
          </p>

          <p>
            <strong>Benches</strong> - If your set includes an upholstered bench, we can match the fabric across everything.
          </p>

          <p>
            <strong>Captain's Chairs</strong> - Special host and hostess chairs that may have different styling.
          </p>

          <p>
            Consistent fabric across all pieces creates a cohesive look. We plan fabric cutting to ensure pattern consistency.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Timeline</h3>

          <p>
            Typical turnaround for a set of dining chairs is 1-2 weeks depending on fabric availability. If you choose an in-stock fabric, we can usually complete work faster. Special order fabrics may add a week for delivery.
          </p>

          <p>
            Rush service is available for an additional fee if you have a deadline - holiday dinner, special event, house guests arriving. Let us know your timeline and we'll work with you.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Related Upholstery Services</h3>

          <p>
            We offer related services that complement dining chair upholstery:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong><a href="/furniture-repair/dining-chair-repair" className="text-[#C9A327] hover:underline">Dining Chair Repair</a></strong> - Fix structural issues before reupholstering</li>
            <li><strong><a href="/furniture-repair/furniture-regluing" className="text-[#C9A327] hover:underline">Furniture Regluing</a></strong> - Tighten loose joints for solid chairs</li>
            <li><strong><a href="/upholstery/commercial-upholstery" className="text-[#C9A327] hover:underline">Commercial Upholstery</a></strong> - For restaurants and commercial dining spaces</li>
            <li><strong><a href="/upholstery/restaurant-seat-upholstery" className="text-[#C9A327] hover:underline">Restaurant Seat Upholstery</a></strong> - Commercial-grade fabrics for high-volume use</li>
          </ul>

          <p>
            Sets are handled efficiently - we always provide a detailed quote before starting work so you know exactly what to expect.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We serve Woodstock and all of Cherokee County including Canton, Holly Springs, Ball Ground, and Waleska. We also serve Roswell, Alpharetta, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <p>
            For dining sets, we offer pickup and delivery - getting 6 or 8 chairs to us can be challenging otherwise. Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock.
          </p>
        </>
      }
    />
  );
}
