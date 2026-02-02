import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Restaurant Seat Upholstery Woodstock GA | Booth Reupholstery",
  description: "Restaurant booth and seat upholstery in Woodstock, GA. Keep your dining room looking fresh. Quick turnaround, minimal disruption.",
};

const relatedServices = [
  { name: "Commercial Upholstery", href: "/upholstery/commercial-upholstery" },
  { name: "Hospitality Upholstery", href: "/upholstery/hospitality-upholstery" },
  { name: "Dining Chair Upholstery", href: "/upholstery/dining-chair-upholstery" },
  { name: "Commercial Leather Repair", href: "/leather-repair/commercial-leather-furniture-repair" },
  { name: "Leather Cleaning", href: "/leather-repair/leather-cleaning" },
];

export default function RestaurantUpholsteryPage() {
  return (
    <ServicePageTemplate
      category="Upholstery"
      categoryHref="/upholstery"
      title="Restaurant Seat Upholstery"
      location="Woodstock GA"
      description="Professional restaurant booth and chair upholstery. Keep your dining room inviting with fresh, durable seating. Quick turnaround."
      relatedServices={relatedServices}
      image={{
        src: "/img/black-vinyl-restaurant-booths-completed.webp",
        alt: "Completed black vinyl restaurant booth reupholstery"
      }}
      content={
        <>
          <h2 className="text-3xl font-bold text-black mb-6">Restaurant Upholstery in Woodstock</h2>
          
          <p>
            Your restaurant's appearance directly impacts your business. Worn, torn, or stained seating makes a bad impression on customers. First impressions matter - customers notice the condition of your booths before the menu arrives. We provide restaurant upholstery services that keep your dining room looking fresh and inviting. Call us at (770) 592-4689 for a free consultation.
          </p>

          <p>
            We've been working with restaurants in Cherokee County and North Atlanta for almost 20 years. From downtown Woodstock eateries to restaurants in Canton, Roswell, and throughout the area, we understand the unique needs of food service businesses.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">What We Upholster</h3>

          <p>
            We handle all types of restaurant seating:
          </p>

          <p>
            <strong>Booths and Banquettes</strong> - The most common restaurant upholstery work. Single booths, double booths, U-shaped banquettes, wall-length built-in seating. We recover booth backs and seats, repair frames, and replace foam as needed.
          </p>

          <p>
            <strong>Dining Chairs</strong> - Wood chairs with upholstered seats, fully upholstered chairs, metal chairs with vinyl seats. We can match existing upholstery or update your look with new colors and materials.
          </p>

          <p>
            <strong>Bar Stools</strong> - Counter seating, bar-height stools, swivel stools. Seat recovering, back replacement, footrest repair. Bar stools take heavy abuse and often need periodic refreshing.
          </p>

          <p>
            <strong>Waiting Area Seating</strong> - Benches, chairs, and sofas in lobby and waiting areas. These create the first impression when customers arrive.
          </p>

          <p>
            <strong>Patio Furniture</strong> - Outdoor seating with UV-resistant, weather-resistant materials. Woodstock's weather allows patio dining much of the year, and outdoor furniture takes a beating from sun, rain, and temperature changes.
          </p>

          <p>
            <strong>Host Station Stools</strong> - The host stand seat that gets constant use all shift long.
          </p>

          <p>
            Whether you have a small cafe or a large dining room, we can handle your upholstery needs.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Restaurant-Grade Materials</h3>

          <p>
            Restaurant seating needs to withstand constant use, spills, and aggressive cleaning. Residential materials fail quickly in commercial food service. We use materials designed for the demands:
          </p>

          <p>
            <strong>Commercial-Grade Vinyl</strong> - Modern restaurant vinyl looks remarkably like leather but offers superior durability and cleanability. It resists stains, cleans easily with commercial sanitizers, and holds up to thousands of uses. Available in hundreds of colors and textures to match your decor.
          </p>

          <p>
            <strong>Stain-Resistant Fabrics</strong> - When you want a fabric look rather than vinyl, we use commercial fabrics with built-in stain resistance. These shed spills and clean up without permanent staining.
          </p>

          <p>
            <strong>High-Density Foam</strong> - Commercial foam resists compression from heavy use. Lower-quality foam compresses and bottoms out within months. We use foam rated for commercial seating that maintains comfort for years.
          </p>

          <p>
            <strong>Fire-Rated Materials</strong> - Many jurisdictions require fire-rated upholstery materials in commercial establishments. We stock materials that meet CAL 117 and other fire safety standards.
          </p>

          <p>
            <strong>Easy-Clean Construction</strong> - Seams, welts, and construction details are done in ways that allow thorough cleaning. No hidden crevices that trap crumbs and bacteria.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Minimal Business Disruption</h3>

          <p>
            We understand empty booths mean lost revenue. Every seat out of service costs you money. That's why we work around your schedule:
          </p>

          <p>
            <strong>Off-Hours Work</strong> - Many restaurant projects can be completed during closed hours. We work overnight, early morning before you open, or late night after you close. Your customers never see the work in progress.
          </p>

          <p>
            <strong>Section by Section</strong> - For larger projects, we work in sections. Recover booths along one wall while the rest of the restaurant operates normally. Rotate through the dining room without ever closing.
          </p>

          <p>
            <strong>Fast On-Site Work</strong> - For simple recovering, we can often do the work on-site in a single visit. Take booths apart, recover, reinstall - done before you open.
          </p>

          <p>
            <strong>Swap Programs</strong> - For removable seat cushions, we can swap out cushions with pre-made replacements and recover your originals at our shop. Zero downtime.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Quick Turnaround</h3>

          <p>
            Restaurant upholstery is time-sensitive and we treat it that way:
          </p>

          <p>
            Simple booth recovering can often be done same-day for 4-6 booths. We come in after closing, work through the night or early morning, and you're ready for lunch service.
          </p>

          <p>
            Larger projects are carefully planned to minimize your downtime. We stage materials in advance, schedule labor, and execute efficiently.
          </p>

          <p>
            We keep common restaurant colors and materials in stock to avoid ordering delays. When you need work done quickly, we can usually accommodate.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Design Updates</h3>

          <p>
            Reupholstery is also an opportunity to update your restaurant's look without major renovation. Changing booth colors can transform the feel of your dining room at a fraction of the cost of new furniture.
          </p>

          <p>
            We can help you choose colors and materials that work with your existing decor or support a refresh. We bring samples so you can see materials in your actual space.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Local Restaurant Experience</h3>

          <p>
            We've done upholstery work for restaurants throughout Woodstock, downtown Canton, along Highway 92, and throughout the North Atlanta area. From small family restaurants to larger chains, from casual dining to fine dining, we understand the needs of food service businesses.
          </p>

          <p>
            We understand health department requirements, fire code requirements, and the operational realities of running a restaurant. We've seen what works and what doesn't in food service environments.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Maintenance Programs</h3>

          <p>
            Regular maintenance extends the life of your seating and keeps it looking good between major reupholstery projects:
          </p>

          <p>
            <strong>Periodic Inspection</strong> - We visit regularly to check seating condition and catch problems early.
          </p>

          <p>
            <strong>Deep Cleaning</strong> - Professional cleaning removes ground-in grime that regular cleaning misses.
          </p>

          <p>
            <strong>Spot Repairs</strong> - Small tears, loose seams, and minor damage are fixed before they become bigger problems.
          </p>

          <p>
            <strong>Scheduled Rotation</strong> - For larger restaurants, we can plan staged reupholstery so costs are spread over time and your dining room always has some fresh-looking booths.
          </p>

          <p>
            This helps you budget for upholstery expenses and ensures your dining room always looks its best.
          </p>

          <h3 className="text-2xl font-bold text-black mt-10 mb-4">Service Area</h3>

          <p>
            We serve restaurants throughout Cherokee County including Woodstock, Canton, Holly Springs, and Ball Ground. We also serve Roswell, Alpharetta, Marietta, Kennesaw, and throughout North Atlanta.
          </p>

          <p>
            Call us at (770) 592-4689 or stop by our shop at 298 N Briar Ridge in Woodstock to discuss your restaurant upholstery needs.
          </p>
        </>
      }
    />
  );
}
