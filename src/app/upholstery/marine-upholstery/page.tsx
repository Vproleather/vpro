import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Marine Upholstery Woodstock GA | Boat Seat Reupholstery",
  description: "Marine upholstery services in Woodstock, GA. Boat seats, cockpit cushions, sun pads. Weather-resistant materials for Lake Allatoona boaters.",
};

const relatedServices = [
  { name: "Marine Seat Repair", href: "/leather-repair/marine-seat-repair" },
  { name: "Commercial Upholstery", href: "/upholstery/commercial-upholstery" },
  { name: "Leather Car Seat Repair", href: "/leather-repair/leather-car-seat-repair" },
  { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
];

export default function MarineUpholsteryPage() {
  return (
    <ServicePageTemplate
      category="Upholstery"
      categoryHref="/upholstery"
      title="Marine Upholstery"
      location="Woodstock GA"
      description="Complete boat reupholstery services. Weather-resistant materials built for Lake Allatoona and Lake Lanier conditions."
      relatedServices={relatedServices}
      image={{
        src: "/img/boat-seat-repaired-cream-vinyl.webp",
        alt: "Repaired cream vinyl boat seat showing professional marine upholstery work"
      }}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Marine Upholstery in Woodstock</h2>
          
          <p>
            Lake Allatoona is right in our backyard, and a lot of folks around Woodstock have boats. Sun, water, and constant exposure takes a toll on boat interiors. We provide marine upholstery services using materials designed to withstand lake conditions. Call us at (770) 592-4689 to discuss your boat project.
          </p>

          <p>
            We've been doing marine upholstery for boaters in Cherokee County for almost 20 years. From fishing boats to pontoons to wakeboard boats, we've reupholstered hundreds of vessels. Lake Allatoona and Lake Lanier boats see us regularly - the Georgia sun and lake water are hard on interiors.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">What We Upholster</h3>

          <p>
            We handle complete boat interior upholstery:
          </p>

          <p>
            <strong>Helm Chairs and Captain Seats</strong> - The seat you use most needs to be comfortable and durable. These take the most wear and sun exposure.
          </p>

          <p>
            <strong>Passenger Seating</strong> - Front and rear passenger seats, jump seats, and observer seating.
          </p>

          <p>
            <strong>Bench Seats</strong> - Continuous bench seating along the sides of the boat.
          </p>

          <p>
            <strong>Cockpit Cushions</strong> - The cushions in the seating area of the cockpit.
          </p>

          <p>
            <strong>Sun Pads and Loungers</strong> - The large padded areas for sunbathing on bow riders and deck boats.
          </p>

          <p>
            <strong>Swim Platform Pads</strong> - Padding on the rear swim platform.
          </p>

          <p>
            <strong>Cabin Upholstery</strong> - For larger boats with cabins, we handle interior seating and sleeping surfaces.
          </p>

          <p>
            <strong>Protective Covers</strong> - Tonneau covers, cockpit covers, and other protective covers.
          </p>

          <p>
            We work on all boat types: bass boats, fishing boats, pontoon boats, deck boats, bow riders, wake boats, ski boats, and cruisers.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Why Marine Upholstery is Different</h3>

          <p>
            Boat interiors face conditions that regular upholstery can't handle. Standard furniture materials would fail in weeks on a boat:
          </p>

          <p>
            <strong>UV Exposure</strong> - Boats spend hours in direct Georgia sun. Regular materials fade, crack, and deteriorate rapidly under UV exposure.
          </p>

          <p>
            <strong>Water and Moisture</strong> - Spray, rain, wet swimsuits - marine upholstery is constantly exposed to water. Materials need to resist water penetration and dry quickly.
          </p>

          <p>
            <strong>Mildew and Mold</strong> - Warm, wet environments breed mold and mildew. Without proper materials, you'll fight mildew constantly.
          </p>

          <p>
            <strong>Temperature Extremes</strong> - Surfaces get scorching hot in summer sun, then cool overnight. Materials expand and contract repeatedly.
          </p>

          <p>
            <strong>Salt and Chemicals</strong> - Lake water, sunscreen, fish, cleaning chemicals - marine upholstery is exposed to things that damage regular materials.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Marine-Grade Materials</h3>

          <p>
            We use materials specifically designed for marine environments:
          </p>

          <p>
            <strong>Marine-Grade Vinyl</strong> - Vinyl designed specifically for boats. UV-stabilized to resist fading and cracking. Water-resistant backing prevents moisture penetration. Won't support mildew growth. Available in hundreds of colors and textures.
          </p>

          <p>
            <strong>UV-Resistant Thread</strong> - Regular thread deteriorates rapidly in sunlight. Marine thread is UV-treated to last years in sun exposure.
          </p>

          <p>
            <strong>Mildew-Resistant Foam</strong> - Open-cell foam that drains water and resists mildew growth. Closed-cell options for areas that need complete waterproofing.
          </p>

          <p>
            <strong>Stainless Hardware</strong> - Snaps, zippers, and fasteners that resist corrosion in lake environments.
          </p>

          <p>
            <strong>Sealed Seams</strong> - Construction techniques that keep water out. Where seams are necessary, they're positioned and sealed to prevent water entry.
          </p>

          <p>
            Using proper marine materials, your upholstery will last years on the water rather than one season.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Custom Work</h3>

          <p>
            Every boat is different. Even boats of the same model vary based on year, options, and previous modifications. We do custom work to fit your specific vessel:
          </p>

          <p>
            <strong>Custom Shapes and Sizes</strong> - We create patterns specific to your boat. Seats fit properly without gaps or overhang.
          </p>

          <p>
            <strong>Color Matching</strong> - Match existing colors for partial replacements, or create entirely new color schemes.
          </p>

          <p>
            <strong>Feature Additions</strong> - Add cup holders, storage pockets, grab handles, or other features your boat didn't have.
          </p>

          <p>
            <strong>OEM Replication</strong> - Match the original equipment exactly for restoration projects.
          </p>

          <p>
            <strong>Upgrades</strong> - Update your boat's look with new colors, patterns, or styles different from original.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Local Marinas We Service</h3>

          <p>
            We can come to your boat at marinas around Lake Allatoona and Lake Lanier:
          </p>

          <p>
            <strong>Lake Allatoona</strong> - Park Marina, Holiday Harbor, Little River Marina, Victoria Harbor, Allatoona Landing, Glade Marina, and others. We know the area and can work at your slip.
          </p>

          <p>
            <strong>Lake Lanier</strong> - Aqualand Marina, Sunrise Cove Marina, Holiday Marina, Gainesville Marina, and other locations around the lake.
          </p>

          <p>
            <strong>At Your Home</strong> - If your boat is on a trailer at home, we can work there. Many smaller boats never go to a marina, and we can still serve you.
          </p>

          <p>
            <strong>At Our Shop</strong> - For trailerable boats, bringing them to our shop in Woodstock works great. We have the space and equipment for complete interior work.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Seasonal Timing</h3>

          <p>
            Spring gets busy as people prep for boating season. Everyone wants their boat ready for Memorial Day weekend, and there's a rush of work in April and May.
          </p>

          <p>
            We recommend scheduling early if you want work done before summer. Book in February or March for spring completion. Last-minute spring requests are harder to accommodate.
          </p>

          <p>
            Fall is also a good time - get your boat refreshed before winter storage. It's ready for spring, and you're not competing with the pre-season rush.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Related Marine Services</h3>

          <p>
            We offer related services for Lake Allatoona boaters:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong><a href="/leather-repair/marine-seat-repair" className="text-[#C9A327] hover:underline">Marine Seat Repair</a></strong> - For repairs rather than full reupholstery</li>
            <li><strong><a href="/leather-repair/leather-cleaning" className="text-[#C9A327] hover:underline">Leather Cleaning</a></strong> - Deep cleaning for marine leather</li>
            <li><strong><a href="/leather-repair/leather-color-restoration" className="text-[#C9A327] hover:underline">Leather Color Restoration</a></strong> - Restore faded marine leather</li>
            <li><strong><a href="/upholstery/commercial-upholstery" className="text-[#C9A327] hover:underline">Commercial Upholstery</a></strong> - For charter boats and commercial marine operations</li>
          </ul>

          <p>
            We provide detailed free estimates after assessing your specific boat. Every project is different based on boat size, current condition, material choices, and scope of work.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We serve boaters throughout Cherokee County and the North Atlanta area. Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock to discuss your marine upholstery project.
          </p>
        </>
      }
    />
  );
}
