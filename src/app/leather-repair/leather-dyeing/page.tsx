import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Leather Dyeing Woodstock GA | Color Change Service",
  description: "Professional leather dyeing services in Woodstock, GA. Change colors, restore faded leather, custom color matching. Furniture and auto.",
};

const relatedServices = [
  { name: "Leather Recoloring", href: "/leather-repair/leather-recoloring" },
  { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
  { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration" },
  { name: "Leather Car Seat Repair", href: "/leather-repair/leather-car-seat-repair" },
];

export default function LeatherDyeingPage() {
  return (
    <ServicePageTemplate
      category="Leather Repair"
      categoryHref="/leather-repair"
      title="Leather Dyeing"
      location="Woodstock GA"
      description="Professional leather dyeing with expert color matching. Restore faded colors or change to something new. Quality results guaranteed."
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Leather Dyeing Services in Woodstock</h2>
          
          <p>
            Professional leather dyeing is the key to restoring faded leather or changing its color entirely. Unlike consumer products that sit on top of leather and rub off, professional leather dye bonds to the leather for lasting, durable results. Call us at (770) 592-4689 to discuss your project.
          </p>

          <p>
            We've been dyeing leather professionally in Cherokee County for almost 20 years. Sofas, chairs, car seats, motorcycle seats, boat cushions - if it's leather, we can dye it to restore its original color or change it to something new.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Professional vs. DIY Dyeing</h3>

          <p>
            You can buy leather dye at craft stores, and some people try to do it themselves. The results are usually disappointing - uneven color, dye that rubs off on clothes, and finishes that crack or peel within months.
          </p>

          <p>
            The problems with DIY leather dyeing include:
          </p>

          <p>
            <strong>Poor adhesion</strong> - Consumer dyes don't bond properly to leather. They sit on top of the surface and rub off with use. Within weeks or months, you'll have dye on your clothes and patchy spots on your furniture.
          </p>

          <p>
            <strong>Uneven application</strong> - Without proper equipment and technique, getting even coverage is nearly impossible. You end up with streaks, blotches, and color variations.
          </p>

          <p>
            <strong>Wrong products for the leather type</strong> - Different leathers need different approaches. Aniline leather, pigmented leather, and bonded leather all require different preparation and products. Consumer products are one-size-fits-all.
          </p>

          <p>
            <strong>Cracking and peeling</strong> - Consumer products often don't remain flexible. As the leather flexes with use, the finish cracks and peels away.
          </p>

          <p>
            Professional dyeing is completely different. We use commercial-grade leather dyes designed for professional use. These bond properly to leather, flex without cracking, and create a finish that's durable and cleanable. The difference in quality is dramatic.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Color Matching Technology</h3>

          <p>
            For color restoration, we use a spectrophotometer to analyze your existing leather color. This device reads the color scientifically - it measures the exact wavelengths of light reflected by the leather. No guessing or eyeballing.
          </p>

          <p>
            The spectrophotometer gives us precise data that we use to mix an exact match. Even if your leather has faded unevenly, we can match the original color from unfaded areas. The result is seamless repairs where you can't tell where the old finish ends and the new begins.
          </p>

          <p>
            For color changes, we work with you to select the perfect shade. We have extensive color charts from multiple manufacturers. We can also custom-mix virtually any color you want. Bring in a paint chip, a fabric swatch, or just describe what you're looking for - we can match it.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Understanding Leather Dye Types</h3>

          <p>
            Not all leather dyes are the same. The type we use depends on your leather and your goals.
          </p>

          <p>
            <strong>Penetrating dyes</strong> soak into the leather fibers. These are used for aniline and semi-aniline leathers where you want to maintain the natural look and feel. The dye becomes part of the leather itself.
          </p>

          <p>
            <strong>Surface dyes (pigmented finishes)</strong> coat the surface of the leather. These are used for pigmented leather and provide more coverage for damaged or heavily faded leather. They're also used when changing colors significantly.
          </p>

          <p>
            <strong>Combination approaches</strong> use both penetrating and surface dyes for optimal results. We assess your leather and choose the approach that will give you the best outcome.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">The Dyeing Process</h3>

          <p>
            <strong>Assessment</strong> - We examine your leather to determine its type and condition. We discuss your goals - restoration or color change - and explain what to expect. You get a detailed quote before we start any work.
          </p>

          <p>
            <strong>Cleaning</strong> - The leather must be thoroughly cleaned before dyeing. Dirt, oils, and old products interfere with dye adhesion. We use pH-balanced leather cleaners that prepare the surface without damaging it.
          </p>

          <p>
            <strong>Preparation</strong> - The old finish may need to be removed or abraded for proper adhesion of the new dye. For color changes, this step is especially important. We create a surface that the new dye can bond to.
          </p>

          <p>
            <strong>Priming (when needed)</strong> - For significant color changes or heavily damaged leather, we apply a primer that helps the new color adhere evenly and provides coverage.
          </p>

          <p>
            <strong>Application</strong> - Dye is applied in multiple thin coats, building up color gradually. This creates even coverage and a durable finish. Each coat needs to dry before the next is applied. Rushing this step leads to poor results.
          </p>

          <p>
            <strong>Finishing</strong> - A clear topcoat is applied in the appropriate sheen level - matte, satin, or gloss - to match your original finish. This protects the dye and provides the final look and feel. The topcoat also provides UV protection to slow future fading.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">What We Dye</h3>

          <p>
            We dye all types of leather items:
          </p>

          <p>
            <strong>Furniture</strong> - Sofas, sectionals, chairs, recliners, ottomans, headboards, dining chairs, office furniture. Any leather furniture can be dyed.
          </p>

          <p>
            <strong>Automotive</strong> - Car seats, door panels, steering wheels, center consoles, dashboards. All makes and models.
          </p>

          <p>
            <strong>Marine</strong> - Boat seats, cushions, interior panels. We use marine-grade products that hold up to the harsh lake and saltwater environment.
          </p>

          <p>
            <strong>Motorcycle</strong> - Seats, saddlebags, accessories. We understand the unique demands of motorcycle leather exposed to sun and weather.
          </p>

          <p>
            <strong>Accessories</strong> - Handbags, briefcases, luggage, belts, shoes, boots. Small items benefit from professional dyeing just as much as large ones.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Results and Durability</h3>

          <p>
            Professional dyeing lasts for years with proper care. The dye won't rub off on clothes, crack, or peel like consumer products. It's cleanable with appropriate leather cleaners.
          </p>

          <p>
            Most customers are amazed at how good their leather looks after professional dyeing. What was faded, worn, and tired-looking becomes vibrant and fresh. It's a transformation that extends your furniture's life significantly.
          </p>

          <p>
            With proper care - regular cleaning, conditioning, and UV protection - professionally dyed leather typically lasts 5-10 years before any touch-up might be needed. High-wear areas may need attention sooner, but the base color remains stable.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Related Leather Services</h3>

          <p>
            Leather dyeing often works best when combined with other services:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong><a href="/leather-repair/leather-cleaning" className="text-[#C9A327] hover:underline">Leather Cleaning</a></strong> - Essential preparation before dyeing</li>
            <li><strong><a href="/leather-repair/leather-recoloring" className="text-[#C9A327] hover:underline">Leather Recoloring</a></strong> - Alternative technique for complete color changes</li>
            <li><strong><a href="/leather-repair/leather-color-restoration" className="text-[#C9A327] hover:underline">Leather Color Restoration</a></strong> - Restore original color rather than change it</li>
            <li><strong><a href="/leather-repair/leather-tear-repair" className="text-[#C9A327] hover:underline">Leather Tear Repair</a></strong> - Fix structural damage before dyeing</li>
            <li><strong><a href="/leather-repair/leather-furniture-restoration" className="text-[#C9A327] hover:underline">Leather Furniture Restoration</a></strong> - Complete restoration including dyeing</li>
          </ul>

          <p>
            We provide detailed free estimates after assessing your specific item. Color changes require more work than simple restoration, and we'll explain exactly what's involved.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We're based in Woodstock and serve all of Cherokee County including Canton, Holly Springs, Ball Ground, and Waleska. We also travel to Roswell, Alpharetta, Johns Creek, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <p>
            Ready to restore or transform your leather? Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock.
          </p>
        </>
      }
    />
  );
}
