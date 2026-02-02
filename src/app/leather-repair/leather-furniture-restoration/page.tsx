import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Leather Furniture Restoration Woodstock GA | Complete Restoration",
  description: "Complete leather furniture restoration in Woodstock, GA. Restore chairs, ottomans, recliners, and more. Expert craftsmanship, guaranteed results.",
};

const relatedServices = [
  { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair" },
  { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
  { name: "Vintage Furniture Restoration", href: "/furniture-repair/vintage-furniture-restoration" },
  { name: "Leather Recoloring", href: "/leather-repair/leather-recoloring" },
];

export default function LeatherFurnitureRestorationPage() {
  return (
    <ServicePageTemplate
      category="Leather Repair"
      categoryHref="/leather-repair"
      title="Leather Furniture Restoration"
      location="Woodstock GA"
      description="Complete leather furniture restoration services. We restore chairs, recliners, ottomans, and all types of leather furniture to like-new condition."
      relatedServices={relatedServices}
      image={{
        src: "/img/brown-leather-club-chair-nailhead-restored.webp",
        alt: "Restored brown leather club chair with nailhead trim"
      }}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Leather Furniture Restoration in Woodstock</h2>
          
          <p>
            Got a leather chair, recliner, or other furniture piece that's seen better days? We specialize in complete leather furniture restoration - bringing worn, faded, and damaged pieces back to their original beauty. We've been doing this in Cherokee County for close to 20 years. Call us at (770) 592-4689 for a free assessment.
          </p>

          <p>
            Restoration is more than just repair. We address all the issues - cleaning, conditioning, color restoration, and structural repairs if needed. When we're done, your furniture looks and feels like it did when you bought it. Or better, if we're being honest.
          </p>

          <p>
            A lot of our restoration work comes from families in Woodstock's established neighborhoods - people who bought quality leather furniture years ago and want to keep it looking great. We also work with antique dealers, estate sales, and folks who've inherited pieces from family members.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">What We Restore</h3>

          <p>
            We restore all types of leather furniture including leather chairs and club chairs, recliners, ottomans and footstools, leather headboards, office chairs, dining chairs, and vintage and antique pieces. If it's leather furniture, we can probably restore it.
          </p>

          <p>
            <strong>Leather Recliners</strong> - Recliners see heavy use. The headrest gets oily from hair and skin contact. The armrests wear from constant rubbing. The footrest mechanism puts stress on the leather. We restore all of it - the leather, the padding, even the mechanism if needed.
          </p>

          <p>
            <strong>Club Chairs and Wingbacks</strong> - These classic styles are worth preserving. Quality club chairs have solid hardwood frames that last generations. The leather can be restored multiple times over the chair's lifetime.
          </p>

          <p>
            <strong>Leather Headboards</strong> - Bedroom headboards get oily over time from hair products and skin contact. They also fade from sunlight. We clean, condition, and restore the color for a fresh look.
          </p>

          <p>
            <strong>Office Chairs</strong> - Executive leather chairs are expensive to replace. The armrests and seat cushion typically wear first. Restoration costs a fraction of a new chair and keeps your favorite seat in service.
          </p>

          <p>
            <strong>Dining Chairs</strong> - A set of leather dining chairs represents a significant investment. When one or two chairs show more wear than others, we can restore the damaged ones to match. Or restore the whole set for a uniform look.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">The Restoration Process</h3>

          <p>
            <strong>Assessment</strong> - First we thoroughly examine the piece to understand all the issues. Sometimes what looks like just fading also has underlying damage that needs attention. We give you a complete picture of what's needed and what it will cost. No surprises.
          </p>

          <p>
            <strong>Deep Cleaning</strong> - Years of dirt, oils, and grime build up in leather. You might not even notice how dirty it's gotten because it happens gradually. We use professional cleaners to remove all that without damaging the leather. This step alone often makes a huge difference - customers are sometimes shocked by how much better their furniture looks after just cleaning.
          </p>

          <p>
            <strong>Conditioning</strong> - Leather needs moisture to stay supple. Dried-out leather cracks and peels. We apply professional-grade conditioners that penetrate the leather and restore its natural flexibility. This prepares the leather for the next steps.
          </p>

          <p>
            <strong>Repairs</strong> - We fix any structural damage - tears, scratches, cracks, peeling. Each type of damage requires different techniques and materials. Tears need sub-patches and filler. Scratches may just need color touch-up. Peeling bonded leather is a bigger issue that we'll discuss honestly with you.
          </p>

          <p>
            <strong>Color Restoration</strong> - Using color-matched leather dyes, we restore the original color or change it completely if you want a new look. Our color matching is precise - we use a spectrophotometer to get an exact match. The finish is durable and won't rub off on clothing.
          </p>

          <p>
            <strong>Protection</strong> - Finally we apply a protective topcoat that helps the leather resist future damage. This extends the life of your restored furniture significantly. We'll also give you tips on maintaining the leather going forward.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Vintage and Antique Leather</h3>

          <p>
            We do a lot of work on vintage and antique pieces. These require special care because the leather and construction methods are different from modern furniture. We understand how to work with older leather without damaging it.
          </p>

          <p>
            Many families in Woodstock have heirloom pieces passed down through generations. Grandpa's chair, a leather ottoman from the 1950s, a Victorian settee - we help preserve these pieces for another generation. The sentimental value alone makes restoration worthwhile.
          </p>

          <p>
            Antique leather often has a patina that developed over decades. Some customers want to preserve that aged character. Others want a fresh, like-new appearance. We discuss the options and let you decide what fits your vision for the piece.
          </p>

          <p>
            We also work with antique dealers and estate sale companies in the area. When they acquire a quality piece that needs restoration, we can help them get it ready for sale. The restored value is usually much higher than the restoration cost.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Problems We Fix</h3>

          <p>
            <strong>Fading and Discoloration</strong> - Sunlight, body oils, and general use cause leather to fade unevenly. We restore uniform color across the entire piece.
          </p>

          <p>
            <strong>Cracking and Peeling</strong> - Dry leather cracks. Once it starts cracking, the damage spreads quickly. We repair cracks and re-moisturize the leather to prevent future damage.
          </p>

          <p>
            <strong>Tears and Holes</strong> - Whether from pets, kids, or just wear - we repair structural damage invisibly.
          </p>

          <p>
            <strong>Stains</strong> - Ink, food, drinks, pet accidents - different stains need different treatments. Some we remove, others we cover with color restoration.
          </p>

          <p>
            <strong>Worn Padding</strong> - If your cushions have gone flat, we can replace the foam and make everything feel like new again.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Benefits of Restoration vs. Replacement</h3>

          <p>
            Restoration offers significant advantages over buying new furniture:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Significant savings</strong> - Restoration typically costs a fraction of replacement</li>
            <li><strong>Superior construction</strong> - Older furniture often features solid hardwood frames versus particle board</li>
            <li><strong>Better springs</strong> - Eight-way hand-tied springs versus cheap webbing in newer furniture</li>
            <li><strong>Environmental benefit</strong> - Keep quality furniture out of landfills</li>
            <li><strong>Preservation of value</strong> - Antique and vintage pieces maintain their worth</li>
          </ul>

          <p>
            Good furniture should last generations, not get replaced every decade. If you're thinking about buying new furniture, consider getting your current pieces restored first. You might find that restoration gives you exactly what you want.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We're based in Woodstock and serve all of Cherokee County including Canton, Holly Springs, Ball Ground, and Waleska. We also travel to Roswell, Alpharetta, Milton, Johns Creek, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <p>
            For large pieces, we can often do the work on-site at your home. For smaller items or more extensive restoration, we may bring them to our shop. We'll discuss the best approach during your free assessment.
          </p>

          <p>
            Ready to bring your leather furniture back to life? Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock.
          </p>
        </>
      }
    />
  );
}
