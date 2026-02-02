import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Dining Chair Repair Woodstock GA | Chair Restoration",
  description: "Dining chair repair in Woodstock, GA. Wobbly chairs, broken spindles, loose backs. Complete structural and cosmetic repairs.",
};

const relatedServices = [
  { name: "Furniture Regluing", href: "/furniture-repair/furniture-regluing" },
  { name: "Loose Joint Repair", href: "/furniture-repair/loose-joint-repair" },
  { name: "Kitchen Chair Repair", href: "/furniture-repair/kitchen-chair-repair" },
  { name: "Dining Chair Upholstery", href: "/upholstery/dining-chair-upholstery" },
  { name: "Vintage Furniture Restoration", href: "/furniture-repair/vintage-furniture-restoration" },
];

export default function DiningChairRepairPage() {
  return (
    <ServicePageTemplate
      category="Furniture Repair"
      categoryHref="/furniture-repair"
      title="Dining Chair Repair"
      location="Woodstock GA"
      description="Complete dining chair repair services. Fix wobbly chairs, broken parts, and worn finishes. Restore your dining set."
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Dining Chair Repair in Woodstock</h2>
          
          <p>
            Dining chairs get used constantly - pulled in and out, leaned back on, supporting family dinners and holiday gatherings. All that use takes a toll. We repair dining chairs to restore stability and extend their life. Call us at (770) 592-4689 for a free quote.
          </p>

          <p>
            We've been repairing dining chairs for families in Cherokee County for almost 20 years. From simple regluing to complete restoration, we handle all aspects of dining chair repair. Your chairs can be solid and stable again.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Dining Chair Problems</h3>

          <p>
            <strong>Wobbly Legs</strong> - The most common complaint. Joints have loosened from years of use. Every time you scoot the chair in or out, lean back, or shift your weight, stress is applied to the joints. Eventually they loosen. We disassemble, clean, and properly reglue the joints.
          </p>

          <p>
            <strong>Broken or Cracked Spindles</strong> - The vertical pieces in a chair back break from stress or impact. Sometimes they crack along the grain, sometimes they snap completely. We can repair cracked spindles with hidden dowels and glue, or turn new replacement spindles that match.
          </p>

          <p>
            <strong>Split Seats</strong> - Solid wood seats can crack or split, especially in dry conditions. Plywood seats can delaminate. We repair splits with glue and clamps, or replace severely damaged seats.
          </p>

          <p>
            <strong>Loose or Broken Stretchers</strong> - The horizontal pieces between the legs provide stability. They loosen, crack, or break from foot pressure and general stress. We reglue loose stretchers or replace broken ones with matching pieces.
          </p>

          <p>
            <strong>Broken Backs</strong> - Chair backs take stress when people lean back. The top rail can break, the splat can crack, connections can fail. We repair or replace broken back components.
          </p>

          <p>
            <strong>Damaged Finishes</strong> - Scratches, dents, worn areas, water rings. We can touch up minor damage or completely refinish chairs that need it.
          </p>

          <p>
            <strong>Worn or Damaged Upholstery</strong> - Seat cushions wear out, fabric tears, padding compresses. We reupholster dining chair seats with new fabric and padding.
          </p>

          <p>
            Most of these issues can be repaired to restore full functionality and appearance.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Structural Repairs</h3>

          <p>
            When a dining chair wobbles, the joints have loosened. Proper repair requires complete disassembly of the affected joints, not just squirting glue in and hoping for the best.
          </p>

          <p>
            We take the chair apart carefully, clean all old glue from the joint surfaces, assess the fit, and reglue properly with good clamping pressure. If joints are worn loose, we may need to add reinforcement like dowels or shims.
          </p>

          <p>
            Broken spindles can often be repaired if the break is clean. We use hidden dowels and glue to reconnect the pieces. For bad breaks or missing spindles, we can turn replacement spindles that match the profile and finish of the originals.
          </p>

          <p>
            For severe structural damage, we may need to fabricate replacement parts. We can replicate legs, stretchers, back components, and other parts to match your existing chairs.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Cosmetic Repairs</h3>

          <p>
            Beyond structural issues, we handle cosmetic repairs to restore your chairs' appearance:
          </p>

          <p>
            <strong>Scratch and Dent Repair</strong> - We fill scratches, raise dents with steam, and blend repairs to match the surrounding finish.
          </p>

          <p>
            <strong>Touch-Up Staining</strong> - Worn spots, water marks, and faded areas can be touched up to match the rest of the chair.
          </p>

          <p>
            <strong>Full Refinishing</strong> - For heavily damaged finishes, we can strip the old finish, sand smooth, and apply new stain and topcoat. This is like getting a new set of chairs.
          </p>

          <p>
            <strong>Seat Replacement or Reupholstery</strong> - Worn, torn, or dated seat covers can be replaced. We offer a wide selection of fabrics and can match existing decor.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Chair Styles We Repair</h3>

          <p>
            We repair all styles of dining chairs including traditional ladder backs, Windsor chairs, Chippendale and Queen Anne styles, mid-century modern, contemporary designs, Parson's chairs, farmhouse styles, and custom or unique designs. Whatever style you have, we can repair it.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Complete Sets</h3>

          <p>
            Usually if one dining chair needs repair, others in the set do too. Chairs from the same set have experienced similar use and stress. We handle complete dining sets efficiently.
          </p>

          <p>
            While we have them, it's efficient to address all issues across the set. Fix the wobbly ones, touch up the scratches on all of them, reupholster all the seats at once. The set comes back matching and solid.
          </p>

          <p>
            For large sets, we can work in phases so you're never without all your chairs. Fix half the set, return those, then take the other half.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Worth Repairing?</h3>

          <p>
            Most dining chairs are worth repairing. Quality sets from Ethan Allen, Restoration Hardware, or antique chairs would be very expensive to replace. Even basic sets from places like Rooms To Go or World Market add up quickly when replacing an entire set.
          </p>

          <p>
            Repair makes sense for most dining chairs because:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Keep furniture you like</strong> - No need to find a replacement set that matches your table and decor</li>
            <li><strong>Preserve quality</strong> - Older chairs are often better made than new options</li>
            <li><strong>Maintain sets</strong> - Keep your matching set together rather than piecing together replacements</li>
            <li><strong>Environmental choice</strong> - Extend furniture life and keep it out of landfills</li>
          </ul>

          <p>
            There are exceptions. Very cheap imported chairs made from composite materials may not be worth repairing. Some flat-pack furniture isn't designed to be repaired. We'll give you honest advice if repair doesn't make sense for your situation.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Antique and Heirloom Chairs</h3>

          <p>
            Many families in Woodstock have dining chairs that have been passed down through generations. These pieces have sentimental value beyond their monetary worth. We're careful with antiques and heirloom pieces, using appropriate techniques that preserve their character and value.
          </p>

          <p>
            Sometimes antique chairs have been poorly repaired in the past. We can undo bad repairs and do them right. Nails and screws that were added can be removed. Inappropriate modern parts can be replaced with period-correct pieces.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Local Service</h3>

          <p>
            We serve the Woodstock area including Towne Lake, Eagle Watch, BridgeMill, and surrounding neighborhoods in Cherokee County. We also serve Roswell, Alpharetta, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <p>
            Pickup and delivery available for dining sets - getting multiple chairs to our shop can be tricky otherwise. We handle the logistics so you don't have to wrestle chairs into your car.
          </p>

          <p>
            Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock.
          </p>
        </>
      }
    />
  );
}
