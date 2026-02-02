import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Leather Cleaning Woodstock GA | Professional Leather Care",
  description: "Professional leather cleaning services in Woodstock, GA. Deep clean and condition leather furniture and car interiors. Extends leather life.",
};

const relatedServices = [
  { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration" },
  { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration" },
  { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair" },
  { name: "Leather Car Seat Repair", href: "/leather-repair/leather-car-seat-repair" },
  { name: "Commercial Leather Repair", href: "/leather-repair/commercial-leather-furniture-repair" },
];

export default function LeatherCleaningPage() {
  return (
    <ServicePageTemplate
      category="Leather Repair"
      categoryHref="/leather-repair"
      title="Leather Cleaning"
      location="Woodstock GA"
      description="Professional leather cleaning services that remove dirt, oils, and grime while protecting and conditioning your leather. Furniture and auto."
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Professional Leather Cleaning in Woodstock</h2>
          
          <p>
            Regular cleaning is the best thing you can do to extend the life of your leather furniture and car interiors. But most people either don't clean their leather at all, or they use the wrong products and actually damage it. We provide professional leather cleaning that removes dirt and oils while protecting the leather. Call us at (770) 592-4689 to schedule a cleaning.
          </p>

          <p>
            We've been cleaning and caring for leather in Cherokee County for almost 20 years. Sofas, chairs, car seats, restaurant booths, medical furniture - we've cleaned it all. Professional cleaning makes a bigger difference than most people expect. That dull, grimy leather you've gotten used to? It can look dramatically better after proper cleaning.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Why Professional Cleaning Matters</h3>

          <p>
            Leather is skin - it needs proper care to stay supple and looking good. Over time, body oils, sweat, dirt, and grime build up on the surface and in the pores. This buildup breaks down the finish and can cause the leather to crack and peel.
          </p>

          <p>
            Most store-bought leather cleaners are either too weak to really clean, or too harsh and can damage the finish. Some products leave residue that attracts more dirt. Others contain silicone that creates a temporary shine but actually accelerates deterioration. Professional cleaning uses the right products for your specific type of leather.
          </p>

          <p>
            Here in Georgia, our humidity and heat make leather care even more important. The moisture in the air can encourage mildew growth in leather pores. Then our dry winter heating sucks out moisture and causes cracking. Regular professional cleaning addresses both issues.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Signs Your Leather Needs Professional Cleaning</h3>

          <p>
            <strong>Dull appearance</strong> - Leather should have a natural luster. If yours looks flat and lifeless, it's coated with buildup.
          </p>

          <p>
            <strong>Tacky or sticky feeling</strong> - Body oils and residue from wrong cleaners can make leather feel tacky. Clean leather feels smooth and supple.
          </p>

          <p>
            <strong>Visible dirt and grime</strong> - Look at the creases and seams. If you see dark buildup, there's even more you can't see.
          </p>

          <p>
            <strong>Musty smell</strong> - Leather shouldn't smell musty. That's usually mold or mildew growing in the pores.
          </p>

          <p>
            <strong>Uneven color</strong> - Sometimes what looks like fading is actually dirt buildup making some areas darker or lighter than others.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Our Cleaning Process</h3>

          <p>
            <strong>Leather Assessment</strong> - First we identify what type of leather you have. Aniline, semi-aniline, pigmented, bonded - each requires different cleaning methods. We also check for any existing damage that needs repair. Some damage that looks serious is actually just heavy soiling.
          </p>

          <p>
            <strong>Vacuuming</strong> - We start by vacuuming loose dirt and debris from creases, seams, and crevices. This prevents scratching during the wet cleaning process. You'd be surprised how much grit accumulates in furniture crevices.
          </p>

          <p>
            <strong>Deep Cleaning</strong> - We use pH-balanced cleaners specifically formulated for leather. These lift dirt and oils from the surface and pores without stripping the finish. For heavy soiling, we may need multiple cleaning passes. We work the cleaner in with soft brushes that agitate dirt without scratching.
          </p>

          <p>
            <strong>Rinsing</strong> - Cleaner residue left on leather can cause problems. We thoroughly remove all cleaning solution so nothing is left behind to attract new dirt.
          </p>

          <p>
            <strong>Conditioning</strong> - After cleaning, we apply a leather conditioner that replaces natural oils and keeps the leather supple. This prevents cracking and extends the life of your leather significantly. Conditioning is especially important after cleaning because the process removes some natural oils along with the dirt.
          </p>

          <p>
            <strong>Protection</strong> - Finally we apply a protective treatment that helps resist future stains and makes regular maintenance easier. This creates a barrier that makes dirt and spills easier to wipe off before they penetrate the leather.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">What We Clean</h3>

          <p>
            We clean all types of leather including furniture (sofas, chairs, recliners, ottomans), car and truck interiors, motorcycle seats, boat seats, office furniture, and commercial leather furniture. If it's leather, we can clean it properly.
          </p>

          <p>
            <strong>Home Furniture</strong> - Sofas, sectionals, chairs, recliners, ottomans, headboards, dining chairs. Most home furniture benefits from annual professional cleaning.
          </p>

          <p>
            <strong>Car and Truck Interiors</strong> - Seats, door panels, steering wheels, center consoles. Auto leather takes a lot of abuse from sun, heat, and daily use.
          </p>

          <p>
            <strong>Office Furniture</strong> - Executive chairs, conference room seating, lobby furniture. Professional appearance matters in business settings.
          </p>

          <p>
            <strong>Restaurant and Commercial</strong> - Booths, bar stools, waiting room seating. High-traffic commercial leather needs regular professional care.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Cleaning as Part of Restoration</h3>

          <p>
            Professional cleaning is always the first step in any leather restoration. Before we can repair damage or restore color, the leather has to be thoroughly clean. Sometimes cleaning alone makes a dramatic improvement - what looked like serious damage was just years of built-up grime.
          </p>

          <p>
            We've had customers bring in furniture they thought needed complete restoration. After cleaning, the leather looked so much better that they decided restoration wasn't needed. We'd rather save you money by just cleaning than sell you services you don't need.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">DIY Cleaning Tips</h3>

          <p>
            Between professional cleanings, here are some tips to keep your leather looking good:
          </p>

          <p>
            <strong>Dust regularly</strong> - Use a dry microfiber cloth to wipe down leather weekly. This removes surface dust before it can work into the pores.
          </p>

          <p>
            <strong>Wipe up spills immediately</strong> - Don't let liquids sit on leather. Blot (don't rub) with a clean cloth right away.
          </p>

          <p>
            <strong>Avoid household cleaners</strong> - Don't use all-purpose cleaners, glass cleaner, or anything not specifically designed for leather.
          </p>

          <p>
            <strong>Skip the baby wipes</strong> - Despite what you've heard, baby wipes contain chemicals that can dry out and damage leather over time.
          </p>

          <p>
            <strong>Condition occasionally</strong> - A quality leather conditioner every few months helps between professional cleanings. We can recommend products appropriate for your leather type.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Maintenance Plans</h3>

          <p>
            For homes and businesses that want to keep their leather looking great, we offer maintenance cleaning plans. Regular professional cleaning every 6-12 months keeps leather in excellent condition and prevents the kind of damage that requires expensive repairs.
          </p>

          <p>
            This is especially popular with our commercial clients - restaurants, hotels, medical offices - who need to maintain a professional appearance. We can schedule regular visits to keep all your leather furniture looking its best. Maintenance plans also include priority scheduling and discounted rates.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We're based in Woodstock and serve all of Cherokee County including Canton, Holly Springs, Ball Ground, and Waleska. We also travel to Roswell, Alpharetta, Johns Creek, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <p>
            Ready to see what clean leather really looks like? Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock.
          </p>
        </>
      }
    />
  );
}
