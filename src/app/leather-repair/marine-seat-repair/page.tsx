import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Marine Seat Repair Woodstock GA | Boat Leather Restoration",
  description: "Marine leather repair in Woodstock, GA. Boat seats, helm chairs, cockpit cushions. Weather-resistant repairs for Lake Allatoona boaters.",
};

const relatedServices = [
  { name: "Marine Upholstery", href: "/upholstery/marine-upholstery" },
  { name: "Leather Car Seat Repair", href: "/leather-repair/leather-car-seat-repair" },
  { name: "Aircraft Seat Repair", href: "/leather-repair/aircraft-seat-repair" },
  { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
];

export default function MarineSeatRepairPage() {
  return (
    <ServicePageTemplate
      category="Leather Repair"
      categoryHref="/leather-repair"
      title="Marine Seat Repair"
      location="Woodstock GA"
      description="Specialized boat and marine leather repair. Weather-resistant materials for Lake Allatoona and Lake Lanier boaters."
      relatedServices={relatedServices}
      image={{
        src: "/img/boat-seat-ripped-foam-exposed.webp",
        alt: "Boat seat with ripped vinyl and foam exposed before repair"
      }}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Marine Seat Repair in Woodstock</h2>
          
          <p>
            Living near Lake Allatoona means lots of folks around here have boats. And boat seats take a beating - sun, water, humidity, mildew. We specialize in marine leather repair that stands up to lake conditions. Call us at (770) 592-4689 to discuss your boat.
          </p>

          <p>
            We've been repairing boat seats for Lake Allatoona and Lake Lanier boaters for almost 20 years. We understand marine environments and use materials specifically designed for the challenges your boat faces every time it goes out.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Challenges of Marine Leather</h3>

          <p>
            Marine environments are tough on leather and vinyl. Way tougher than automotive or residential use. Understanding these challenges is key to making repairs that last.
          </p>

          <p>
            <strong>UV Exposure</strong> - On the water, there's no shade and UV is intense. Reflected light off the water surface doubles the exposure. Fading happens faster on boats than anywhere else. Without proper UV-resistant materials, repairs fade within a season.
          </p>

          <p>
            <strong>Water and Humidity</strong> - Splashing, spray, rain, and general moisture exposure. Georgia summers mean high humidity even when it's not raining. Water seeps into seams, behind cushions, everywhere. Materials need to handle constant moisture.
          </p>

          <p>
            <strong>Mildew and Mold</strong> - The combination of heat and moisture creates perfect conditions for mildew. That musty boat smell? That's mildew growing in your upholstery. Repair materials need mildew resistance built in.
          </p>

          <p>
            <strong>Temperature Extremes</strong> - A boat sitting in a Georgia summer can easily reach 140°F+ on dark surfaces. Then it cools overnight. These temperature swings stress materials. Standard leather repair products can't handle it.
          </p>

          <p>
            <strong>Salt (Coastal Use)</strong> - If you ever trailer your boat to the coast, salt air is extremely corrosive. It accelerates deterioration of unprotected materials.
          </p>

          <p>
            Standard leather repair materials won't hold up in these conditions. We use marine-grade products designed specifically for the challenges boats face.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Boat Seat Problems</h3>

          <p>
            <strong>Fading</strong> - The most common issue. What was once bright white is now dingy grey. Bold colors become washed out. UV damage is cumulative and happens faster than you'd expect.
          </p>

          <p>
            <strong>Cracking and Peeling</strong> - Heat and sun dry out vinyl and leather. The surface cracks, then peels. Once started, it spreads quickly.
          </p>

          <p>
            <strong>Mildew Staining</strong> - Those dark spots that won't come out with normal cleaning. Mildew grows into the material and leaves permanent staining if not treated properly.
          </p>

          <p>
            <strong>Seam Separation</strong> - Thread degrades in UV light. Stitching fails and seams come apart. Water gets behind the material and accelerates damage.
          </p>

          <p>
            <strong>Tears and Rips</strong> - From docking, anchors, fishing gear, kids, dogs - tears happen. Marine tears need marine-grade repair.
          </p>

          <p>
            <strong>General Wear</strong> - Surfaces get scuffed and worn from use. Areas where people sit repeatedly show accelerated wear.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">What We Repair</h3>

          <p>
            We repair all types of boat seating and upholstery:
          </p>

          <p>
            <strong>Helm Chairs and Captain Seats</strong> - The driver's seat sees the most use. We restore worn, faded, and damaged helm chairs to like-new condition.
          </p>

          <p>
            <strong>Passenger Seating</strong> - Bench seats, jump seats, companion seats. Wherever passengers sit, we can repair it.
          </p>

          <p>
            <strong>Cockpit Cushions</strong> - Removable cushions that have faded, mildewed, or worn. We repair or replace covers depending on condition.
          </p>

          <p>
            <strong>Sun Pads and Loungers</strong> - Those nice flat areas for sunbathing take brutal UV exposure. We restore faded and damaged sun pads.
          </p>

          <p>
            <strong>Cabin Upholstery</strong> - Overnight cruisers and larger boats have cabin seating and sleeping areas. We repair interior upholstery too.
          </p>

          <p>
            <strong>Steering Wheels and Controls</strong> - Leather-wrapped wheels and control surfaces that have worn or faded.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Weather-Resistant Materials</h3>

          <p>
            All our marine repairs use specialized materials:
          </p>

          <p>
            <strong>UV-Resistant Dyes</strong> - Specifically formulated to resist fading in intense marine UV exposure. Regular leather dyes would fade in weeks on a boat.
          </p>

          <p>
            <strong>Mildew-Resistant Treatments</strong> - Active mildewcides prevent mildew growth. Essential in the humid Georgia climate.
          </p>

          <p>
            <strong>Water-Resistant Finishes</strong> - The topcoat repels water rather than absorbing it. Spray and splashes bead up and roll off.
          </p>

          <p>
            <strong>Flexible Compounds</strong> - Materials that expand and contract with temperature changes without cracking or peeling.
          </p>

          <p>
            These materials cost more than standard leather repair products but last much longer in boat environments. Cheap repairs fail quickly - we've fixed plenty of DIY attempts and cheap repairs that didn't hold up.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Location</h3>

          <p>
            We can come to your boat at Lake Allatoona, Lake Lanier, or wherever it's stored. Many of our customers keep their boats at marinas like Park Marina, Holiday Harbor, Little River Marina, Victoria Harbor, or Allatoona Landing. We can meet you there.
          </p>

          <p>
            If your boat is on a trailer at your home, we can work on it in your driveway. Some repairs can even be done at a boat ramp if that's most convenient.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Seasonal Timing</h3>

          <p>
            <strong>Spring</strong> - The busiest time for boat repairs as people get ready for the season. Schedule early to avoid delays. March and April book up fast.
          </p>

          <p>
            <strong>Summer</strong> - We can still do repairs between your lake trips. Many customers schedule mid-week work when they're not using the boat anyway.
          </p>

          <p>
            <strong>Fall</strong> - Maintenance before storage helps prevent problems during the off-season. Conditioning and protecting leather before winter storage extends its life.
          </p>

          <p>
            <strong>Winter</strong> - Good time for more extensive repairs or restoration. Your boat is sitting anyway, and we have more scheduling flexibility.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Repair vs. Reupholster</h3>

          <p>
            Sometimes boat seats are better served by full reupholstery rather than repair. If the foam is deteriorated, if the vinyl/leather is extensively damaged over most of the surface, or if you want to change colors or materials - reupholstery might make more sense.
          </p>

          <p>
            We'll assess your situation and give you honest recommendations. If repair will give good results, we'll tell you. If reupholstery is the better investment, we'll tell you that too. See our marine upholstery page for full reupholstery options.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Related Marine Services</h3>

          <p>
            For boat owners, we offer a range of related services:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong><a href="/upholstery/marine-upholstery" className="text-[#C9A327] hover:underline">Marine Upholstery</a></strong> - Full reupholstery for extensive damage or material changes</li>
            <li><strong><a href="/leather-repair/leather-cleaning" className="text-[#C9A327] hover:underline">Leather Cleaning</a></strong> - Deep cleaning with marine-safe products</li>
            <li><strong><a href="/leather-repair/leather-color-restoration" className="text-[#C9A327] hover:underline">Leather Color Restoration</a></strong> - Restore faded marine leather</li>
            <li><strong><a href="/leather-repair/leather-tear-repair" className="text-[#C9A327] hover:underline">Leather Tear Repair</a></strong> - Fix rips and tears in boat seats</li>
          </ul>

          <p>
            We always provide free assessments. Send us photos or we can come look at your boat.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Contact Us</h3>

          <p>
            Ready to get your boat looking great for the season? Call us at (770) 592-4689. We serve boaters throughout the Lake Allatoona and Lake Lanier areas, as well as Cherokee County, North Fulton, and Cobb County.
          </p>
        </>
      }
    />
  );
}
