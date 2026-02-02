import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Leather Recoloring Woodstock GA | Change Your Leather Color",
  description: "Professional leather recoloring in Woodstock, GA. Change the color of your leather furniture or car interior. Expert color matching and application.",
};

const relatedServices = [
  { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration" },
  { name: "Leather Dyeing", href: "/leather-repair/leather-dyeing" },
  { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration" },
  { name: "Leather Sofa Repair", href: "/leather-repair/leather-sofa-repair" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
];

export default function LeatherRecoloringPage() {
  return (
    <ServicePageTemplate
      category="Leather Repair"
      categoryHref="/leather-repair"
      title="Leather Recoloring"
      location="Woodstock GA"
      description="Want a different color for your leather furniture or car interior? We professionally recolor leather to any shade you want."
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Leather Recoloring in Woodstock</h2>
          
          <p>
            Sometimes you love your leather furniture but hate the color. Maybe that burgundy sofa doesn't match your new decor, or you inherited a green leather chair that just isn't your style. We can recolor leather to virtually any shade you want. Call us at (770) 592-4689 to discuss your project.
          </p>

          <p>
            Recoloring is different from restoration - we're not trying to match the original color, we're changing it to something completely new. It's like getting a whole new piece of furniture for a fraction of the replacement cost.
          </p>

          <p>
            We've been recoloring leather for families and businesses in Cherokee County for almost 20 years. From sofas that don't match anymore to car interiors that need updating - we've transformed thousands of pieces from colors people couldn't stand to colors they love.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Why Recolor Instead of Replace?</h3>

          <p>
            There are many great reasons to choose leather recoloring:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Significant savings</strong> - Recoloring costs a fraction of buying new furniture</li>
            <li><strong>Superior quality</strong> - Your existing furniture likely has better construction than new options at the same price point</li>
            <li><strong>Perfect fit</strong> - You already know it fits your space and is comfortable</li>
            <li><strong>Environmental choice</strong> - Keep furniture out of landfills and extend its life by many years</li>
            <li><strong>Preserve memories</strong> - Update cherished pieces without losing the sentimental connection</li>
          </ul>

          <p>
            Older furniture often features solid hardwood frames, eight-way hand-tied springs, and thick leather - features that are hard to find in newer furniture.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Popular Color Changes</h3>

          <p>
            The most common requests we get are updating dated colors to more modern neutrals. Home design trends have moved toward greys, tans, and rich browns over the past decade. A lot of furniture from the 90s and 2000s has colors that feel outdated now.
          </p>

          <p>
            <strong>Burgundy to Brown or Grey</strong> - Burgundy was very popular for years but has fallen out of favor. Converting to warm brown or cool grey gives furniture a completely modern feel.
          </p>

          <p>
            <strong>Tan to Black</strong> - Black leather is classic and goes with everything. Many people updating from tan find black to be more versatile and easier to keep looking clean.
          </p>

          <p>
            <strong>Green to Navy</strong> - Hunter green had its moment. Navy is equally rich but feels more contemporary and coordinates with current color trends.
          </p>

          <p>
            <strong>Red to Brown</strong> - Bright red leather ages poorly (both the color itself and the style trend). Brown is a safer, more timeless choice.
          </p>

          <p>
            For car interiors, common requests include tan to black (very popular with BMW, Mercedes, and Lexus owners), grey to brown, and refreshing faded black back to true black. We can also do custom colors to match specific vehicle trims or personal preferences.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">The Recoloring Process</h3>

          <p>
            <strong>Assessment</strong> - First we examine the leather to determine its type and condition. We need to understand what we're working with before we can quote accurately. Some leather recolors easily; some requires more prep work.
          </p>

          <p>
            <strong>Color Selection</strong> - We work with you to pick the perfect color. We have color charts and samples, and can custom-mix to match anything you bring in. Want your sofa to match your wall color exactly? Bring us a paint chip and we'll match it.
          </p>

          <p>
            <strong>Preparation</strong> - The leather needs thorough cleaning and the old finish needs to be properly prepped. This is actually the most important step - proper prep determines how well the new color adheres and how long it lasts.
          </p>

          <p>
            <strong>Primer</strong> - For significant color changes, we apply a primer that helps the new color cover evenly. This is especially important when going from dark to light colors.
          </p>

          <p>
            <strong>Application</strong> - Multiple thin coats of professional leather dye are applied. This builds up color evenly and creates a durable finish. We don't spray heavy coats that might crack or peel - we layer thin coats that bond properly.
          </p>

          <p>
            <strong>Sealing</strong> - A protective topcoat in the appropriate sheen (matte, satin, or gloss) seals the color and provides durability. We match the topcoat to your original finish so the texture feels right.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">What Can Be Recolored</h3>

          <p>
            We recolor sofas and sectionals, chairs and recliners, car and truck interiors, ottomans and headboards, dining chairs, office furniture, restaurant booths, and more. Most leather items can be successfully recolored.
          </p>

          <p>
            <strong>Pigmented leather</strong> (the most common type) recolors beautifully. The existing finish provides a good base for new color.
          </p>

          <p>
            <strong>Semi-aniline leather</strong> can be recolored but needs more careful handling to maintain its character.
          </p>

          <p>
            <strong>Pure aniline leather</strong> is trickier because it has minimal finish. We can still recolor it, but the process is different and the results may show more variation.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Limitations and Honest Expectations</h3>

          <p>
            Going from dark to light is more challenging than light to dark. We can do it, but it requires more prep work and additional coats. For example, black to white would be difficult. Black to tan is doable but requires primer and multiple coats.
          </p>

          <p>
            Very worn or damaged leather may need repairs before recoloring for best results. Deep scratches, tears, and heavy wear should be addressed first. We'll assess your piece and let you know what to expect.
          </p>

          <p>
            The finish will look and feel like leather - because it is leather with a new color. But if your leather was very soft and natural-feeling before, recoloring may change that slightly. We discuss this during the assessment so there are no surprises.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Durability of Recolored Leather</h3>

          <p>
            Properly recolored leather lasts for years with normal use. The finish we use is designed for high-wear areas and won't rub off on clothes. You can clean it with appropriate leather cleaners. Most customers get 5-10 years before any touch-up might be needed.
          </p>

          <p>
            The recolored leather can actually be more durable than the original because we apply modern finishes with better UV protection and wear resistance.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Related Leather Services</h3>

          <p>
            Recoloring often works best when combined with other leather services:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong><a href="/leather-repair/leather-cleaning" className="text-[#C9A327] hover:underline">Leather Cleaning</a></strong> - Deep cleaning before recoloring ensures the best results</li>
            <li><strong><a href="/leather-repair/leather-tear-repair" className="text-[#C9A327] hover:underline">Leather Tear Repair</a></strong> - Fix any structural damage before applying new color</li>
            <li><strong><a href="/leather-repair/leather-scratch-repair" className="text-[#C9A327] hover:underline">Leather Scratch Repair</a></strong> - Address surface damage for a flawless finish</li>
            <li><strong><a href="/leather-repair/leather-furniture-restoration" className="text-[#C9A327] hover:underline">Leather Furniture Restoration</a></strong> - Complete restoration including recoloring</li>
            <li><strong><a href="/leather-repair/leather-dyeing" className="text-[#C9A327] hover:underline">Leather Dyeing</a></strong> - Alternative technique for certain leather types</li>
          </ul>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We're based in Woodstock and serve all of Cherokee County including Canton, Holly Springs, Ball Ground, and Waleska. We also travel to Roswell, Alpharetta, Johns Creek, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <p>
            Ready to give your leather a whole new look? Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock. We'll assess your piece and show you color options.
          </p>
        </>
      }
    />
  );
}
