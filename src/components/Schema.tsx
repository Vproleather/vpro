'use client';

// Complete LocalBusiness Schema for V-Pro Leather Repair
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vproleather.com/#localbusiness",
  "name": "V-Pro Leather Repair",
  "alternateName": "VPro Leather",
  "description": "Professional leather repair, furniture restoration, and upholstery services in Woodstock, GA. Serving Cherokee County and North Atlanta since 2005.",
  "url": "https://vproleather.com",
  "telephone": "(770) 592-4689",
  "email": "info@vproleather.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "298 N Briar Ridge",
    "addressLocality": "Woodstock",
    "addressRegion": "GA",
    "postalCode": "30189",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.1015",
    "longitude": "-84.5194"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$",
  "image": "https://vproleather.com/V-pro.png",
  "founder": {
    "@type": "Person",
    "name": "Brad Koplen"
  },
  "foundingDate": "2005",
  "areaServed": [
    { "@type": "City", "name": "Woodstock", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Canton", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Roswell", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Alpharetta", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Marietta", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Kennesaw", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Acworth", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Holly Springs", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Ball Ground", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Cumming", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "AdministrativeArea", "name": "Cherokee County", "containedInPlace": { "@type": "State", "name": "Georgia" } }
  ],
  "sameAs": [
    "https://www.facebook.com/vproleather",
    "https://www.instagram.com/vproleather",
    "https://www.google.com/maps/place/V-Pro+Leather+Repair"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "V-Pro Leather Repair Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Leather Repair Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leather Sofa Repair",
              "description": "Professional leather sofa and couch repair including tears, scratches, fading, and wear damage restoration.",
              "url": "https://vproleather.com/leather-repair/leather-sofa-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leather Car Seat Repair",
              "description": "Auto leather repair for all makes and models. Fix cracks, tears, fading, and wear on vehicle interiors.",
              "url": "https://vproleather.com/leather-repair/leather-car-seat-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leather Furniture Restoration",
              "description": "Complete restoration services for all types of leather furniture including sofas, chairs, and recliners.",
              "url": "https://vproleather.com/leather-repair/leather-furniture-restoration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leather Color Restoration",
              "description": "Restore faded, worn leather to its original vibrant color using professional-grade dyes.",
              "url": "https://vproleather.com/leather-repair/leather-color-restoration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leather Cleaning",
              "description": "Deep cleaning services that remove dirt and oils while protecting and conditioning the leather.",
              "url": "https://vproleather.com/leather-repair/leather-cleaning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leather Recoloring",
              "description": "Change the color of your leather furniture or vehicle interior to a completely new color.",
              "url": "https://vproleather.com/leather-repair/leather-recoloring"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leather Scratch Repair",
              "description": "Remove scratches from pets, keys, or everyday wear on leather furniture and car interiors.",
              "url": "https://vproleather.com/leather-repair/leather-scratch-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leather Tear Repair",
              "description": "Professional tear and rip repair that restores leather to like-new condition.",
              "url": "https://vproleather.com/leather-repair/leather-tear-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leather Dyeing",
              "description": "Professional leather dyeing with color-matched or custom color results.",
              "url": "https://vproleather.com/leather-repair/leather-dyeing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Leather Furniture Repair",
              "description": "High-volume repair services for offices, hotels, restaurants, and businesses.",
              "url": "https://vproleather.com/leather-repair/commercial-leather-furniture-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Aircraft Seat Repair",
              "description": "Specialized leather repair for private aircraft and aviation interiors.",
              "url": "https://vproleather.com/leather-repair/aircraft-seat-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Marine Seat Repair",
              "description": "Boat and marine leather repair built to withstand sun, water, and harsh conditions.",
              "url": "https://vproleather.com/leather-repair/marine-seat-repair"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Furniture Repair Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Furniture Regluing",
              "description": "Fix wobbly, loose furniture joints with proper regluing techniques and modern adhesives.",
              "url": "https://vproleather.com/furniture-repair/furniture-regluing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dining Chair Repair",
              "description": "Restore dining chairs to sturdy, reliable condition including regluing, refinishing, and reupholstery.",
              "url": "https://vproleather.com/furniture-repair/dining-chair-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Recliner Repair",
              "description": "Fix broken mechanisms, worn padding, and structural issues on all recliner brands.",
              "url": "https://vproleather.com/furniture-repair/recliner-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kitchen Chair Repair",
              "description": "Keep your kitchen seating safe, sturdy, and looking great.",
              "url": "https://vproleather.com/furniture-repair/kitchen-chair-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vintage Furniture Restoration",
              "description": "Preserve and restore antique and heirloom pieces with appropriate period techniques.",
              "url": "https://vproleather.com/furniture-repair/vintage-furniture-restoration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Damaged Furniture Repair",
              "description": "Restore furniture affected by floods, leaks, or spills with professional drying and repair.",
              "url": "https://vproleather.com/furniture-repair/water-damaged-furniture-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fire Damaged Furniture Repair",
              "description": "Salvage and restore furniture after fire or smoke damage.",
              "url": "https://vproleather.com/furniture-repair/fire-damaged-furniture-repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Moving Damage Furniture Repair",
              "description": "Fix scratches, dents, and breaks from moving accidents.",
              "url": "https://vproleather.com/furniture-repair/moving-damage-furniture-repair"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Upholstery Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Upholstery",
              "description": "High-volume upholstery solutions for businesses including maintenance programs.",
              "url": "https://vproleather.com/upholstery/commercial-upholstery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Restaurant Seat Upholstery",
              "description": "Keep restaurant booths and chairs looking fresh with commercial-grade fabrics.",
              "url": "https://vproleather.com/upholstery/restaurant-seat-upholstery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hospitality Upholstery",
              "description": "Hotels, resorts, and event venues upholstery throughout North Atlanta.",
              "url": "https://vproleather.com/upholstery/hospitality-upholstery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Health Club Upholstery",
              "description": "Gym equipment padding and seating that withstands heavy use.",
              "url": "https://vproleather.com/upholstery/health-club-upholstery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medical Seat Upholstery",
              "description": "Healthcare-grade materials that meet sanitation and infection control standards.",
              "url": "https://vproleather.com/upholstery/medical-seat-upholstery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dining Chair Upholstery",
              "description": "Reupholster your dining set with new fabric for a fresh new look.",
              "url": "https://vproleather.com/upholstery/dining-chair-upholstery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Marine Upholstery",
              "description": "Boat seats and marine interiors built for Lake Allatoona conditions.",
              "url": "https://vproleather.com/upholstery/marine-upholstery"
            }
          }
        ]
      }
    ]
  }
};

// FAQ Schema for the FAQ section
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of leather can V-Pro Leather Repair fix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We repair all types of leather including aniline, semi-aniline, pigmented, bonded, and faux leather. This includes leather sofas, car seats, furniture, restaurant booths, medical equipment, marine seats, and aircraft interiors."
      }
    },
    {
      "@type": "Question",
      "name": "How long does leather repair take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most repairs take 2-4 hours for on-site work or 2-5 days for shop repairs depending on complexity. We offer same-day service for many repairs and can accommodate rush jobs when needed."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer mobile leather repair services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer mobile service throughout Cherokee County and North Atlanta. We can come to your home for furniture repairs or your driveway for car leather repairs. We serve Woodstock, Canton, Roswell, Alpharetta, Marietta, Kennesaw, and surrounding areas."
      }
    },
    {
      "@type": "Question",
      "name": "Can you match the exact color of my leather?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we use a spectrophotometer to analyze your leather's exact color and custom-mix professional-grade dyes to match perfectly. We can also change the color entirely if you want a new look."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does V-Pro Leather Repair serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're based in Woodstock, GA at 298 N Briar Ridge and serve all of Cherokee County including Canton, Holly Springs, and Ball Ground. We also serve Roswell, Alpharetta, Marietta, Kennesaw, Acworth, Cumming, and throughout North Atlanta."
      }
    },
    {
      "@type": "Question",
      "name": "Do you repair pet-damaged leather?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, pet scratches and damage are one of our most common repairs. We fix scratches from cats and dogs on furniture and car interiors. We can also treat the leather afterward to be more scratch-resistant."
      }
    },
    {
      "@type": "Question",
      "name": "Can you repair cracked and peeling leather?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we repair cracked and peeling leather by conditioning it, filling cracks, and restoring the color and finish. Early repair prevents further damage. Note that bonded leather (leather dust mixed with polyurethane) may have limited repair options depending on severity."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work on commercial furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide commercial leather repair and upholstery services for restaurants, hotels, medical offices, gyms, and other businesses. We offer maintenance programs, work around business hours, and handle high-volume projects."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a quote for leather repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call us at (770) 592-4689, send photos via text or email, or stop by our shop at 298 N Briar Ridge in Woodstock. We provide free estimates and will give you an honest assessment of what can be repaired and what to expect."
      }
    },
    {
      "@type": "Question",
      "name": "What furniture repair services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer furniture regluing, recliner repair, dining chair repair, kitchen chair repair, loose joint repair, vintage furniture restoration, and repair of water-damaged, fire-damaged, and moving-damaged furniture."
      }
    }
  ]
};

// Organization schema for broader LLM context
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://vproleather.com/#organization",
  "name": "V-Pro Leather Repair",
  "url": "https://vproleather.com",
  "logo": "https://vproleather.com/V-pro.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(770) 592-4689",
    "contactType": "customer service",
    "areaServed": "US-GA",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "298 N Briar Ridge",
    "addressLocality": "Woodstock",
    "addressRegion": "GA",
    "postalCode": "30189",
    "addressCountry": "US"
  }
};

// Component to render all schemas
export default function Schema({ 
  includeLocalBusiness = true, 
  includeFAQ = false,
  includeOrganization = false 
}: { 
  includeLocalBusiness?: boolean;
  includeFAQ?: boolean;
  includeOrganization?: boolean;
}) {
  return (
    <>
      {includeLocalBusiness && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      )}
      {includeFAQ && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      )}
      {includeOrganization && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      )}
    </>
  );
}

// Service page schema generator for individual service pages
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  parentCategory: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "url": serviceUrl,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://vproleather.com/#localbusiness"
    },
    "serviceType": parentCategory,
    "areaServed": {
      "@type": "State",
      "name": "Georgia"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "298 N Briar Ridge",
          "addressLocality": "Woodstock",
          "addressRegion": "GA",
          "postalCode": "30189"
        }
      },
      "servicePhone": "(770) 592-4689"
    }
  };
}
