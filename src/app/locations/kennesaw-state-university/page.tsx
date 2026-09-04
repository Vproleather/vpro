import { Metadata } from "next";
import Link from "next/link";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Leather Repair Near Kennesaw State University | V-Pro",
  description:
    "Leather and vinyl repair near Kennesaw State University for car seats, furniture, and commercial seating. Mobile service and free assessments.",
};

export default function KennesawStateUniversityPage() {
  return (
    <LocationPageTemplate
      landmark="Kennesaw State University"
      city="Kennesaw"
      h1="Leather Repair Near Kennesaw State University"
      intro="V-Pro repairs leather and vinyl for customers near Kennesaw State University, Chastain Road, Frey Road, and the surrounding Kennesaw area."
      services={[
        {
          name: "Leather Car Seat Repair",
          href: "/leather-repair/leather-car-seat-repair",
          description: "Repairs for worn bolsters, scratches, fading, and damaged seat panels.",
        },
        {
          name: "Leather Sofa Repair",
          href: "/leather-repair/leather-sofa-repair",
          description: "Assessment and repair options for leather sofas and sectionals.",
        },
        {
          name: "Commercial Upholstery",
          href: "/upholstery/commercial-upholstery",
          description: "Upholstery service for qualifying business seating projects.",
        },
      ]}
      directions={[
        "From the Kennesaw campus, use Town Point Drive Northwest to reach Chastain Road.",
        "Follow Chastain Road to the northbound interstate route and continue toward Wade Green Road.",
        "Continue on Wade Green Road, then turn right onto Highway 92.",
        "Turn left onto Robin Road, then left onto Bells Ferry Road.",
        "Turn left onto Black Oak Trail, then left onto North Briar Ridge to reach 298 N Briar Ridge.",
      ]}
      directionsUrl="https://www.google.com/maps/dir/?api=1&origin=1000+Chastain+Road%2C+Kennesaw%2C+GA+30144&destination=298+N+Briar+Ridge%2C+Woodstock%2C+GA+30189"
      nearbyLocations={[
        { name: "Town Center at Cobb", href: "/locations/town-center-at-cobb" },
        { name: "Noonday Creek Park", href: "/locations/noonday-creek-park" },
        { name: "Baker Elementary School", href: "/locations/baker-elementary-school" },
      ]}
      ctaTitle="Need Leather or Vinyl Repair Near KSU?"
      ctaDescription="Send photos and project details for a free assessment and help choosing mobile service or a scheduled shop appointment."
    >
      <h2>Leather and Vinyl Service for the KSU Area</h2>
      <p>
        Kennesaw State University&apos;s Kennesaw campus is located at 1000
        Chastain Road, just off Interstate 75. The campus, Chastain Road, Frey
        Road, Busbee Drive, and Town Point Drive form a recognizable service
        area for customers who live, work, study, or operate a business nearby.
        V-Pro serves Kennesaw from its verified Woodstock location and offers
        mobile service when the item and repair are suitable for on-site work.
      </p>
      <p>
        This page does not represent a V-Pro office on campus. It identifies a
        real landmark within the company&apos;s published Kennesaw service area.
        Shop appointments are arranged at 298 N Briar Ridge in Woodstock.
        Larger furniture may be assessed for mobile service so customers do not
        move a sofa or sectional unnecessarily.
      </p>
      <p>
        See V-Pro&apos;s complete{" "}
        <Link href="/leather-repair">leather repair services</Link>
        {" "}or use the{" "}
        <Link href="/locations">North Georgia locations directory</Link>
        {" "}to find coverage information for surrounding areas.
      </p>

      <h2>Useful Repair Options Near Kennesaw State</h2>
      <h3>Vehicle Seats and Interior Panels</h3>
      <p>
        A vehicle seat can show concentrated wear on the entry bolster,
        armrest, piping, or another high-contact panel while the rest of the
        interior remains in good condition. V-Pro assesses scratches, finish
        wear, color loss, small tears, and other damage on leather car seats.
        Vinyl surfaces can also be evaluated where appropriate.
      </p>
      <p>
        For an automotive quote, provide the vehicle year, make, and model.
        Include one photograph of the complete seat, one showing the damaged
        panel and nearby seams, and close images in neutral light. Do not apply
        a fresh conditioner or glossy dressing before the assessment unless
        instructed; surface products can affect preparation.
      </p>

      <h3>Furniture in Homes and Rental Properties</h3>
      <p>
        Sofas, recliners, dining chairs, and other leather furniture can be
        damaged during daily use or while being moved. The visible mark is only
        part of the evaluation. Material type, panel stability, seams, padding,
        and previous repair products can all influence what work is sensible.
        V-Pro reviews those factors before recommending a process.
      </p>
      <p>
        If an item needs attention before a move, allow time for assessment and
        scheduling instead of covering the damage with glue or an untested
        color product. Keep loose material intact. For a large item, explain
        whether stairs, narrow entrances, parking, or building-access rules
        affect a mobile visit. V-Pro can then discuss the appropriate service
        format.
      </p>

      <h3>Seating for Campus-Area Businesses</h3>
      <p>
        The roads surrounding the Kennesaw campus include offices, restaurants,
        lodging, and other commercial properties. V-Pro provides commercial
        leather repair and upholstery services for qualifying seating projects.
        A business inquiry should include the type and number of pieces,
        representative photographs, material information if known, and
        scheduling limitations.
      </p>
      <p>
        Commercial work requires a different plan from a single residential
        chair. Access, curing time, consistency across multiple pieces, and the
        hours when seating can be out of use all matter. V-Pro can review that
        information before proposing an appointment or scope.
      </p>

      <h2>Why KSU Is a Practical Local Reference</h2>
      <p>
        The university is more precise than a general Kennesaw label. Its main
        campus address identifies the Chastain Road corridor, while Town Point
        Drive and Frey Road help customers describe which side of the campus is
        nearest. This makes service-area conversations clearer without claiming
        a separate storefront.
      </p>
      <p>
        KSU also sits near the Town Center district, but the two pages answer
        different needs. This page focuses on vehicle, home, rental, and
        campus-area requests around Chastain Road. The Town Center page focuses
        on the mall and Barrett Parkway commercial corridor. Customers between
        the two landmarks can use whichever reference best describes their
        location.
      </p>

      <h2>How to Request an Accurate Assessment</h2>
      <ul>
        <li>Show the entire item before adding close photographs.</li>
        <li>Photograph the damage, adjacent seams, piping, and flex points.</li>
        <li>Identify the material if known, but do not guess if it is uncertain.</li>
        <li>List cleaners, conditioners, dyes, or adhesives previously used.</li>
        <li>Provide the KSU-area address and describe access for mobile service.</li>
      </ul>
      <p>
        V-Pro will use those details to determine what should be inspected,
        whether mobile service is practical, and whether repair is a sensible
        option for the item.
      </p>
    </LocationPageTemplate>
  );
}
