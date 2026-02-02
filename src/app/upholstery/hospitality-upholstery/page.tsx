import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Hospitality Upholstery Woodstock GA | Hotel Furniture Services",
  description: "Hospitality upholstery services in Woodstock, GA. Hotels, resorts, event venues. Large-scale capabilities, quality guaranteed.",
};

const relatedServices = [
  { name: "Commercial Upholstery", href: "/upholstery/commercial-upholstery" },
  { name: "Restaurant Seat Upholstery", href: "/upholstery/restaurant-seat-upholstery" },
  { name: "Commercial Leather Repair", href: "/leather-repair/commercial-leather-furniture-repair" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
  { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration" },
];

export default function HospitalityUpholsteryPage() {
  return (
    <ServicePageTemplate
      category="Upholstery"
      categoryHref="/upholstery"
      title="Hospitality Upholstery"
      location="Woodstock GA"
      description="Full-service upholstery for hotels, resorts, and event venues. Large-scale project capabilities with quality workmanship."
      relatedServices={relatedServices}
      image={{
        src: "/img/black-vinyl-restaurant-booths-finished-wide.webp",
        alt: "Finished black vinyl hospitality booth seating"
      }}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Hospitality Upholstery in Woodstock</h2>
          
          <p>
            Hotels, resorts, conference centers, and event venues have unique upholstery needs. High traffic, strict timelines, and quality standards that protect your brand. We provide hospitality upholstery services designed for these demanding environments. Call us at (770) 592-4689 to discuss your project.
          </p>

          <p>
            We've been serving the hospitality industry in North Atlanta for almost 20 years. We understand that guest perception drives your business, and furniture condition is part of that perception. Worn seating says "we don't care about details" - the opposite of what hospitality should communicate.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Hospitality Experience</h3>

          <p>
            We've worked with hotels and hospitality businesses throughout the North Atlanta area:
          </p>

          <p>
            <strong>Hotels Along I-75 and I-575</strong> - The corridor from Marietta through Kennesaw, Woodstock, and Canton has numerous hotels serving business and leisure travelers. We've worked with properties from budget chains to premium brands.
          </p>

          <p>
            <strong>Boutique Properties</strong> - Smaller hotels and bed-and-breakfasts need the same quality work but on a smaller scale. Every room matters when you only have a few.
          </p>

          <p>
            <strong>Conference Centers</strong> - Meeting facilities in the North Atlanta area need seating that holds up to constant use and frequent reconfigurations.
          </p>

          <p>
            <strong>Event Venues</strong> - Wedding venues, reception halls, and event spaces throughout Cherokee County rely on quality seating for guest comfort.
          </p>

          <p>
            From these experiences, we understand the needs of the hospitality industry: quality that impresses guests, durability that handles constant use, and service that works around your operations.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">What We Upholster</h3>

          <p>
            Our hospitality services cover all furniture in your property:
          </p>

          <p>
            <strong>Lobby Furniture</strong> - Sofas, lounge chairs, benches, ottomans. The lobby creates first impressions - it needs to look perfect.
          </p>

          <p>
            <strong>Guest Room Furniture</strong> - Desk chairs, lounge chairs, headboards, luggage benches. Multiply any issue by your room count and small problems become significant.
          </p>

          <p>
            <strong>Conference Room Seating</strong> - Meeting room chairs, executive chairs, breakout area seating. Business travelers expect professional environments.
          </p>

          <p>
            <strong>Restaurant and Bar Areas</strong> - Dining chairs, booths, bar stools. On-site food service needs the same attention as standalone restaurants.
          </p>

          <p>
            <strong>Pool and Outdoor Furniture</strong> - Lounge chairs, umbrellas, outdoor seating. UV and weather resistance is essential.
          </p>

          <p>
            <strong>Banquet and Ballroom</strong> - Stacking chairs, fixed seating, head table furniture. Event spaces need furniture that photographs well.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Large-Scale Capabilities</h3>

          <p>
            Hospitality projects often involve hundreds of pieces. A 150-room hotel might have 300+ guest room chairs plus lobby, restaurant, conference, and pool furniture.
          </p>

          <p>
            We have the capacity to handle large-scale projects while maintaining quality and meeting deadlines. Our shop can process high volumes efficiently. We stage materials in advance, dedicate resources, and execute systematically.
          </p>

          <p>
            Whether it's a lobby refresh or a complete property renovation, we can scale to your needs. We've done complete hotel reupholstery projects and property-wide refreshes.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Hospitality-Grade Materials</h3>

          <p>
            We use fabrics and materials that meet hospitality standards:
          </p>

          <p>
            <strong>High Abrasion Resistance</strong> - Hospitality fabrics are rated by "double rubs" - a test of how many cycles the fabric withstands before showing wear. We use fabrics rated at 50,000+ double rubs, appropriate for heavy commercial use.
          </p>

          <p>
            <strong>Stain-Resistant Treatments</strong> - Crypton, Nanotex, and similar treatments help fabrics resist staining from spills and body oils.
          </p>

          <p>
            <strong>Fire-Rated Materials</strong> - Hotels must meet fire codes. We use materials that meet CAL 117 and other fire safety standards.
          </p>

          <p>
            <strong>Antimicrobial Options</strong> - For health-conscious properties, antimicrobial-treated fabrics and vinyls resist bacteria and odor.
          </p>

          <p>
            <strong>UV-Resistant Materials</strong> - Outdoor and poolside furniture needs materials that won't fade or degrade in sunlight.
          </p>

          <p>
            <strong>Easy Maintenance</strong> - Housekeeping staff need materials they can clean quickly and effectively during room turnovers.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Project Management</h3>

          <p>
            Large hospitality projects require careful coordination. We work with your management team to ensure smooth execution:
          </p>

          <p>
            <strong>Phased Approaches</strong> - We can work floor by floor, wing by wing, or area by area. Rooms stay in service while we work through the property systematically.
          </p>

          <p>
            <strong>Scheduling Around Occupancy</strong> - We coordinate with your front desk and housekeeping. Heavy occupancy periods are avoided. Slow periods are used for maximum work.
          </p>

          <p>
            <strong>Contractor Coordination</strong> - During renovations, we work with your general contractor and other trades. Our work integrates into the overall project schedule.
          </p>

          <p>
            <strong>Brand Standards</strong> - If you're part of a chain with brand requirements, we can work with those specifications for colors, materials, and quality standards.
          </p>

          <p>
            <strong>Timeline Adherence</strong> - Hospitality has deadlines: seasonal openings, conference bookings, special events. We understand these aren't flexible and plan accordingly.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Ongoing Maintenance</h3>

          <p>
            Many of our hospitality clients use maintenance contracts to keep their furniture in top condition:
          </p>

          <p>
            Regular inspections catch problems early. A small tear repaired promptly doesn't become a guest complaint. Professional cleaning maintains appearance between major refreshes.
          </p>

          <p>
            Planned refresh cycles let you budget for upholstery expenses. Rather than facing a sudden need to redo the entire lobby, you spread costs over time with scheduled work.
          </p>

          <p>
            Maintenance contracts include priority scheduling for urgent issues - when a guest damages furniture and you need it fixed before the next check-in.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We serve hospitality properties throughout Cherokee County (Woodstock, Canton, Holly Springs), North Fulton (Roswell, Alpharetta, Johns Creek), Cobb County (Marietta, Kennesaw), and the greater Atlanta area.
          </p>

          <p>
            Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock to discuss your hospitality upholstery needs.
          </p>
        </>
      }
    />
  );
}
