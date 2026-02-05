import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Aircraft Seat Repair Woodstock GA | Aviation",
  description: "Specialized aircraft seat repair in Woodstock, GA. Private planes, corporate jets. Expert leather restoration for aviation interiors.",
};

const relatedServices = [
  { name: "Leather Car Seat Repair", href: "/leather-repair/leather-car-seat-repair" },
  { name: "Marine Seat Repair", href: "/leather-repair/marine-seat-repair" },
  { name: "Leather Color Restoration", href: "/leather-repair/leather-color-restoration" },
  { name: "Commercial Leather Repair", href: "/leather-repair/commercial-leather-furniture-repair" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
];

export default function AircraftSeatRepairPage() {
  return (
    <ServicePageTemplate
      category="Leather Repair"
      categoryHref="/leather-repair"
      title="Aircraft Seat Repair"
      location="Woodstock GA"
      description="Specialized repair for aircraft leather interiors. Private planes, corporate jets, helicopters. Expert aviation leather restoration."
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Aircraft Seat Repair in Woodstock</h2>
          
          <p>
            Aircraft interiors require specialized care. The leather in your plane faces unique challenges - altitude changes, UV exposure, temperature extremes - and needs to be maintained to aviation standards. We provide aircraft leather repair for private planes and corporate jets throughout the Atlanta area. Call us at (770) 592-4689 to discuss your aircraft.
          </p>

          <p>
            We've been working with aircraft owners and corporate flight departments for years. We understand that aviation interiors are different from automotive or residential leather. The standards are higher, the materials are specialized, and the expectations are exacting.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Aviation Leather Expertise</h3>

          <p>
            Aircraft leather is different from automotive or furniture leather. It's often thinner and more delicate, with specialized finishes designed for aviation environments. The dyes and finishes need to hold up to conditions that typical leather never faces.
          </p>

          <p>
            <strong>Altitude Effects</strong> - Pressure changes during flight cause leather to expand and contract. Cabin pressurization cycles stress leather joints and finishes. Materials need to remain flexible through these changes.
          </p>

          <p>
            <strong>UV Exposure</strong> - At altitude, UV exposure is more intense than at ground level. That big cockpit window lets in a lot of sun. Fading happens faster on aircraft leather than on automotive or furniture leather.
          </p>

          <p>
            <strong>Temperature Extremes</strong> - Aircraft interiors experience significant temperature swings. A plane sitting on a hot Georgia tarmac might reach 140°F inside, then climb to altitude where temperatures are much lower. These swings stress leather.
          </p>

          <p>
            <strong>Low Humidity</strong> - Cabin air is very dry, typically 10-20% humidity. This dries out leather faster than normal indoor environments. Proper conditioning is essential.
          </p>

          <p>
            We understand these challenges and use appropriate materials and techniques. Standard automotive or furniture repair products don't hold up in aviation environments.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Aircraft Leather Issues</h3>

          <p>
            <strong>Sun Fading</strong> - UV exposure at altitude causes rapid fading. Seats near windows fade faster. Armrests and headrests in direct sun show the most damage.
          </p>

          <p>
            <strong>Cracking</strong> - The combination of low humidity and temperature swings causes cracking faster than in other environments. Regular conditioning helps prevent this.
          </p>

          <p>
            <strong>Wear Patterns</strong> - Passenger seats show wear from repeated use, especially on seat bolsters and armrests. Pilot seats see heavy wear from constant entry/exit.
          </p>

          <p>
            <strong>Scuffs and Scratches</strong> - Luggage, equipment cases, and general use create surface damage over time.
          </p>

          <p>
            <strong>Staining</strong> - Coffee spills, food service, and passenger mishaps leave stains that need professional removal.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Services for Aircraft</h3>

          <p>
            We repair and restore aircraft seat leather including:
          </p>

          <p>
            <strong>Seat Covers and Cushions</strong> - Full seat leather restoration including color matching, crack repair, wear restoration, and protective finishing.
          </p>

          <p>
            <strong>Armrests and Headrests</strong> - These high-contact areas often need the most attention. We restore worn leather and reinforce for extended life.
          </p>

          <p>
            <strong>Side Panels and Trim</strong> - Interior trim pieces that have faded or become worn. We match colors precisely so repairs blend seamlessly.
          </p>

          <p>
            <strong>Yoke and Control Grips</strong> - Leather yokes and controls wear from pilot use. We restore grip surfaces and appearance.
          </p>

          <p>
            <strong>Door Panels and Headliners</strong> - Entry areas that show wear from passenger traffic. We restore appearance while maintaining proper fit.
          </p>

          <p>
            <strong>Carpet and Floor Protection</strong> - While not leather, we can address carpet stains and wear as part of a complete interior refresh.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Aircraft Types We Service</h3>

          <p>
            We work on single-engine private aircraft, twin-engine planes, turboprops, light jets, midsize jets, and helicopters. From a Cessna 172 to a Gulfstream, we have experience with various aircraft interior configurations.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Convenient Service</h3>

          <p>
            We come to you - whether your aircraft is at PDK (Peachtree DeKalb), Cobb County Airport (RYY), Cherokee County Airport (CNI), Falcon Field, or another facility in the area. Most repairs can be done on-site without removing seats or panels.
          </p>

          <p>
            We understand the scheduling challenges of aircraft. Your plane needs to be available when you need it. We work around your flight schedule to minimize downtime. Early morning, evening, and weekend appointments are available.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Quality Standards</h3>

          <p>
            We use materials and techniques appropriate for aviation environments. Our repairs are durable and maintain the premium appearance expected in aircraft interiors. We understand that aircraft owners have high standards - your plane represents significant investment and should look the part.
          </p>

          <p>
            All our work uses aviation-appropriate products. UV-resistant finishes, flexible compounds that handle pressure changes, and professional-grade dyes that bond properly to aircraft leather.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Corporate Fleet Services</h3>

          <p>
            For companies with multiple aircraft, we offer fleet maintenance programs. Regular scheduled maintenance keeps all your aircraft interiors in top condition. We can coordinate with your aviation department or management company for convenient scheduling.
          </p>

          <p>
            Fleet programs include scheduled cleaning and conditioning, proactive wear identification, priority scheduling for repairs, and consistent appearance across your fleet.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Pre-Purchase Inspection Support</h3>

          <p>
            Buying an aircraft? We can assess the leather interior condition and provide a detailed evaluation of any needed repairs. This information helps you negotiate the purchase or plan for post-purchase work.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Benefits of Professional Repair</h3>

          <p>
            Leather repair and restoration offers significant advantages over interior replacement:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Significant savings</strong> - Repair costs a fraction of complete interior refurbishment</li>
            <li><strong>Faster turnaround</strong> - Get your aircraft back in service quickly</li>
            <li><strong>Preserve original character</strong> - Maintain the intended interior design</li>
            <li><strong>Extended lifespan</strong> - Regular maintenance delays or eliminates expensive replacement</li>
            <li><strong>Maintain value</strong> - Well-maintained interiors preserve aircraft resale value</li>
          </ul>

          <p>
            Most aircraft owners are surprised at how effective professional leather care can be compared to replacement. Regular maintenance extends interior life significantly.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Contact Us</h3>

          <p>
            Ready to restore your aircraft interior? Call us at (770) 592-4689 to discuss your aircraft's needs. We'll arrange a convenient time to assess your interior and provide a detailed quote.
          </p>
        </>
      }
    />
  );
}
