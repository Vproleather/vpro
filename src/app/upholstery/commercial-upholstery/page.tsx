import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Commercial Upholstery Woodstock GA | Business Upholstery Services",
  description: "Commercial upholstery services in Woodstock, GA. Restaurants, hotels, medical, offices. High-volume work, maintenance contracts available.",
};

const relatedServices = [
  { name: "Restaurant Seat Upholstery", href: "/upholstery/restaurant-seat-upholstery" },
  { name: "Hospitality Upholstery", href: "/upholstery/hospitality-upholstery" },
  { name: "Medical Seat Upholstery", href: "/upholstery/medical-seat-upholstery" },
  { name: "Health Club Upholstery", href: "/upholstery/health-club-upholstery" },
  { name: "Commercial Leather Repair", href: "/leather-repair/commercial-leather-furniture-repair" },
];

export default function CommercialUpholsteryPage() {
  return (
    <ServicePageTemplate
      category="Upholstery"
      categoryHref="/upholstery"
      title="Commercial Upholstery"
      location="Woodstock GA"
      description="Full-service commercial upholstery for businesses. High-volume capabilities, quick turnaround, maintenance contracts available."
      relatedServices={relatedServices}
      image={{
        src: "/img/restaurant-booth-reupholstery-in-progress.webp",
        alt: "Commercial restaurant booth reupholstery in progress"
      }}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Commercial Upholstery Services in Woodstock</h2>
          
          <p>
            Running a business means your furniture gets a lot more use than residential stuff. Restaurants, hotels, offices, medical facilities - commercial furniture takes a beating. We provide commercial upholstery services designed for business needs throughout Cherokee County. Call us at (770) 592-4689 to discuss your project.
          </p>

          <p>
            We've been serving commercial clients in the Woodstock area for almost 20 years. From single-location restaurants to multi-facility operations, we understand what businesses need: durable work, quick turnaround, and minimal disruption to operations.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Industries We Serve</h3>

          <p>
            We work with all types of businesses:
          </p>

          <p>
            <strong>Restaurants and Bars</strong> - Booth reupholstery, bar stool repair, dining chair recovery. We understand health department requirements and the need to minimize closure time. Many of our restaurant clients have been with us for years.
          </p>

          <p>
            <strong>Hotels and Hospitality</strong> - Guest room furniture, lobby seating, conference chairs, pool furniture. We've worked on renovation projects for hotels throughout North Atlanta, from boutique properties to major chains.
          </p>

          <p>
            <strong>Medical and Dental Offices</strong> - Exam table upholstery, waiting room seating, dental chair recovery. We use materials that meet healthcare requirements for cleanability and infection control.
          </p>

          <p>
            <strong>Corporate Offices</strong> - Conference room chairs, reception seating, executive furniture. Professional appearance matters in business settings, and worn furniture sends the wrong message to clients.
          </p>

          <p>
            <strong>Fitness Centers and Gyms</strong> - Exercise equipment pads, weight benches, locker room seating. Materials need to handle sweat, cleaning chemicals, and heavy use.
          </p>

          <p>
            <strong>Churches and Religious Facilities</strong> - Pew cushions, sanctuary seating, fellowship hall chairs. We've worked with many churches in Cherokee County on seating projects.
          </p>

          <p>
            <strong>Retail Stores</strong> - Customer seating, fitting room benches, display fixtures.
          </p>

          <p>
            <strong>Salons and Spas</strong> - Styling chairs, shampoo stations, waiting seating, massage tables. These see constant use and need periodic refreshing.
          </p>

          <p>
            Whatever your business, we can handle your upholstery needs.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Why Commercial-Grade Work Matters</h3>

          <p>
            Commercial upholstery is different from residential. It's not just about how things look - it's about performance under demanding conditions.
          </p>

          <p>
            <strong>Durability Requirements</strong> - Commercial furniture gets used all day, every day. Materials need to withstand thousands of uses per year, not dozens. We use fabrics and vinyls rated for commercial use - typically 50,000+ double rubs compared to 15,000 for residential materials.
          </p>

          <p>
            <strong>Fire Ratings</strong> - Many commercial applications require fire-rated materials to meet building codes. Hotels, healthcare facilities, and public spaces often have specific fire code requirements. We stock and source materials that meet CAL 117 and other fire safety standards.
          </p>

          <p>
            <strong>Cleanability</strong> - Commercial furniture gets cleaned constantly. Materials need to withstand disinfectants, sanitizers, and cleaning chemicals without degrading. Healthcare and food service settings have especially demanding cleaning requirements.
          </p>

          <p>
            <strong>Construction Quality</strong> - Commercial furniture needs stronger construction to handle constant use. We reinforce seams, use commercial-grade foam, and build for longevity.
          </p>

          <p>
            Using residential-grade materials in commercial applications leads to premature failure and higher long-term costs.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">High-Volume Capabilities</h3>

          <p>
            Whether you need one chair done or 100 booths, we can handle it. Our shop is set up for production work:
          </p>

          <p>
            We've done complete restaurant reupholstery projects with 40+ booths. Hotel renovations with hundreds of chairs across multiple floors. Office buildings with entire floors of conference room and task seating. Church sanctuary projects with hundreds of pew cushions.
          </p>

          <p>
            For large projects, we create production schedules, stage materials in advance, and dedicate resources to meet your timeline. Our shop can scale to meet your needs.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Quick Turnaround</h3>

          <p>
            We understand that empty booths mean lost revenue and closed exam rooms mean missed appointments. Commercial clients can't afford to wait weeks for upholstery work.
          </p>

          <p>
            We prioritize commercial work and work around your schedule. Early mornings before you open. Evenings after you close. Weekends when you're closed. Overnight for 24-hour facilities. Whatever schedule minimizes disruption to your business.
          </p>

          <p>
            For phased projects, we work section by section so you never have to close completely. A restaurant might have half its booths done one week, the other half the next. You stay open throughout.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Material Selection</h3>

          <p>
            We help you choose the right materials for your application:
          </p>

          <p>
            <strong>Commercial Vinyl</strong> - The workhorse of commercial upholstery. Modern commercial vinyls look remarkably like leather but clean easily and resist stains. Available in hundreds of colors and textures.
          </p>

          <p>
            <strong>Contract Fabrics</strong> - Woven fabrics designed for commercial use. Higher durability than residential fabrics. Available in patterns and textures that hide wear.
          </p>

          <p>
            <strong>Commercial Leather</strong> - For high-end applications where genuine leather is desired. We use leather appropriate for the environment - protected finishes for high-traffic areas.
          </p>

          <p>
            <strong>Crypton and Performance Fabrics</strong> - These engineered fabrics resist stains, moisture, and odors. Excellent for hospitality and healthcare applications.
          </p>

          <p>
            We stock common commercial materials for quick turnaround and can source specialty materials for specific requirements.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Maintenance Contracts</h3>

          <p>
            The best way to keep commercial furniture looking great is regular maintenance. Our maintenance contracts include:
          </p>

          <p>
            <strong>Scheduled Inspections</strong> - We visit regularly to assess furniture condition and catch problems early.
          </p>

          <p>
            <strong>Proactive Repairs</strong> - Small issues are fixed before they become big problems. A loose seam repaired promptly doesn't become a blown-out cushion.
          </p>

          <p>
            <strong>Professional Cleaning</strong> - Deep cleaning keeps materials looking fresh and extends their life.
          </p>

          <p>
            <strong>Priority Scheduling</strong> - Contract clients get priority for repairs and emergency work.
          </p>

          <p>
            <strong>Predictable Budgeting</strong> - Monthly or quarterly billing helps you plan for upholstery expenses rather than facing unexpected repair costs.
          </p>

          <p>
            Many businesses find that maintenance contracts actually save money compared to reactive repairs and replacement. Catching problems early is always cheaper than letting them develop.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We serve commercial clients throughout Cherokee County (Woodstock, Canton, Holly Springs, Ball Ground), North Fulton (Roswell, Alpharetta, Johns Creek), Cobb County (Marietta, Kennesaw, Smyrna), and the greater Atlanta area.
          </p>

          <p>
            For large projects, we service the entire metro Atlanta region. Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock to discuss your commercial upholstery needs.
          </p>
        </>
      }
    />
  );
}
