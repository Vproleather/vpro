import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Commercial Leather Furniture Repair Woodstock GA | Business Services",
  description: "Commercial leather repair for Woodstock GA businesses. Hotels, restaurants, offices, medical facilities. High-volume, maintenance contracts available.",
};

const relatedServices = [
  { name: "Commercial Upholstery", href: "/upholstery/commercial-upholstery" },
  { name: "Restaurant Seat Upholstery", href: "/upholstery/restaurant-seat-upholstery" },
  { name: "Medical Seat Upholstery", href: "/upholstery/medical-seat-upholstery" },
  { name: "Hospitality Upholstery", href: "/upholstery/hospitality-upholstery" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
];

export default function CommercialLeatherRepairPage() {
  return (
    <ServicePageTemplate
      category="Leather Repair"
      categoryHref="/leather-repair"
      title="Commercial Leather Furniture Repair"
      location="Woodstock GA"
      description="High-volume leather repair services for businesses. Hotels, restaurants, offices, medical facilities. Maintenance contracts and quick turnaround."
      relatedServices={relatedServices}
      image={{
        src: "/img/rust-red-booth-cushions-commercial.webp",
        alt: "Rust red commercial booth cushions showing professional upholstery work"
      }}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Commercial Leather Repair in Woodstock</h2>
          
          <p>
            Running a business means keeping your space looking professional. When leather furniture starts showing wear, it reflects poorly on your company. We provide commercial leather repair services for businesses throughout Cherokee County and North Atlanta. Call us at (770) 592-4689 to discuss your needs.
          </p>

          <p>
            We've been serving commercial clients for almost 20 years. Restaurants, hotels, medical offices, corporate spaces - we understand that businesses have different needs than residential customers. You need fast turnaround, minimal disruption, and reliable results.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Industries We Serve</h3>

          <p>
            <strong>Hotels and Hospitality</strong> - Lobby furniture, guest room seating, conference rooms, restaurant areas, pool furniture. We work with hotels throughout North Atlanta to maintain their leather furnishings. When guests see worn furniture, it affects their perception of your property.
          </p>

          <p>
            <strong>Restaurants and Bars</strong> - Booths, bar stools, dining chairs, waiting area seating, patio furniture. We understand restaurants need quick turnaround to avoid losing revenue. An empty booth is lost income. We work around your schedule to minimize impact.
          </p>

          <p>
            <strong>Medical Facilities</strong> - Waiting rooms, exam rooms, physician offices, dental practices, chiropractic offices, urgent cares. We use appropriate materials and understand healthcare cleanliness requirements. Your patients expect a clean, professional environment.
          </p>

          <p>
            <strong>Corporate Offices</strong> - Executive furniture, reception areas, conference rooms, break rooms, executive suites. Professional appearance matters in business settings. Worn furniture sends the wrong message to clients and employees.
          </p>

          <p>
            <strong>Law Firms</strong> - Traditional leather furniture is common in law offices. We maintain that professional image that clients expect. Conference rooms, partner offices, reception areas - we keep everything looking sharp.
          </p>

          <p>
            <strong>Fitness Centers and Gyms</strong> - Equipment seats, weight bench padding, waiting area furniture. Gym furniture takes a lot of abuse from sweat, wear, and constant use. We use materials that hold up to the demands.
          </p>

          <p>
            <strong>Car Dealerships</strong> - Customer lounge furniture, showroom seating. First impressions matter when selling cars. Clean, well-maintained furniture supports your sales process.
          </p>

          <p>
            <strong>Churches and Religious Organizations</strong> - Sanctuary seating, fellowship hall furniture, office furniture. We work with churches throughout Cherokee County to maintain their spaces.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Why Businesses Choose Us</h3>

          <p>
            <strong>Minimal Disruption</strong> - We work around your schedule. Early mornings before you open, evenings after you close, weekends when the office is empty - whatever works for your business. Most repairs can be done on-site so you don't have to move furniture.
          </p>

          <p>
            <strong>Quick Turnaround</strong> - We understand empty booths mean lost revenue. Worn waiting room furniture looks unprofessional. We prioritize commercial work to get your space back in service fast. Many repairs are same-day or next-day.
          </p>

          <p>
            <strong>Volume Discounts</strong> - Larger projects get better value. The more work you have, the more efficient we can be. Doing all your restaurant booths at once is more practical than one at a time.
          </p>

          <p>
            <strong>Consistent Quality</strong> - Every piece gets the same professional attention. Whether you have 5 chairs or 50 booths, the quality is consistent. Your space looks uniformly well-maintained.
          </p>

          <p>
            <strong>One Vendor Solution</strong> - We handle leather repair, vinyl repair, reupholstery, and general furniture repair. One call handles all your furniture maintenance needs.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Maintenance Programs</h3>

          <p>
            Our commercial maintenance programs include:
          </p>

          <p>
            <strong>Scheduled Inspections</strong> - We come regularly to assess all your leather furniture and identify issues before they become problems. Catching wear early means smaller, cheaper repairs.
          </p>

          <p>
            <strong>Professional Cleaning</strong> - Regular deep cleaning extends leather life and keeps everything looking fresh. We clean and condition leather properly, not with harsh chemicals that damage it.
          </p>

          <p>
            <strong>Proactive Repairs</strong> - Small repairs before damage spreads. A tiny tear caught early is a minor fix. Left alone, it becomes a major repair or replacement.
          </p>

          <p>
            <strong>Priority Scheduling</strong> - Maintenance contract clients get priority when unexpected issues arise. Spill damage, vandalism, accidents - we respond quickly.
          </p>

          <p>
            <strong>Predictable Billing</strong> - Monthly or quarterly billing so you can budget for furniture maintenance. No surprise expenses when repairs are needed.
          </p>

          <p>
            Many of our commercial clients have been with us for years. Regular maintenance costs less than emergency repairs and replacement. Plus your furniture always looks its best.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Common Commercial Leather Issues</h3>

          <p>
            Commercial furniture sees more use than residential. A restaurant booth might have 50+ people sit in it every day. An office chair might be used 8+ hours daily. This heavy use creates specific problems.
          </p>

          <p>
            <strong>Accelerated Wear</strong> - High traffic means faster wear. Seat cushions, armrests, and contact areas show wear sooner than residential furniture.
          </p>

          <p>
            <strong>Stain Accumulation</strong> - Restaurants deal with food and drink spills. Medical facilities deal with bodily fluids. Offices deal with coffee and ink. Stains accumulate over time.
          </p>

          <p>
            <strong>Fading</strong> - Commercial spaces often have lots of natural light. Sun exposure fades leather faster than residential use.
          </p>

          <p>
            <strong>Structural Stress</strong> - Heavy, repeated use stresses seams and construction. Tears along seams are common in commercial furniture.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Benefits of Professional Repair</h3>

          <p>
            Repairing and maintaining leather furniture offers significant advantages over replacement:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Significant savings</strong> - Repair typically costs a fraction of replacement furniture</li>
            <li><strong>Faster turnaround</strong> - Get furniture back in service quickly vs. waiting for new orders</li>
            <li><strong>Consistent appearance</strong> - Match existing furniture rather than introducing new styles</li>
            <li><strong>Extended lifespan</strong> - Properly maintained leather lasts much longer</li>
            <li><strong>Environmental responsibility</strong> - Keep quality furniture out of landfills</li>
          </ul>

          <p>
            The investment in maintenance pays off in extended furniture life and better appearance for your customers.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We serve commercial clients throughout Cherokee County (Woodstock, Canton, Holly Springs), North Fulton (Roswell, Alpharetta, Johns Creek, Milton), Cobb County (Marietta, Kennesaw, East Cobb, Acworth), and the greater North Atlanta area.
          </p>

          <p>
            For larger commercial projects, we travel throughout Metro Atlanta. Call us at (770) 592-4689 to discuss your business's leather maintenance needs. We'll provide a free assessment and quote.
          </p>
        </>
      }
    />
  );
}
