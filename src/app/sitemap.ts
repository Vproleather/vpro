import type { MetadataRoute } from "next";

const baseUrl = new URL("https://vprousa.com");

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/furniture-repair", changeFrequency: "monthly", priority: 0.8 },
  { path: "/furniture-repair/dining-chair-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/furniture-repair/fire-damaged-furniture-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/furniture-repair/furniture-regluing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/furniture-repair/kitchen-chair-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/furniture-repair/loose-joint-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/furniture-repair/moving-damage-furniture-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/furniture-repair/recliner-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/furniture-repair/vintage-furniture-restoration", changeFrequency: "monthly", priority: 0.7 },
  { path: "/furniture-repair/water-damaged-furniture-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair", changeFrequency: "monthly", priority: 0.8 },
  { path: "/leather-repair/aircraft-seat-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/commercial-leather-furniture-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/leather-car-seat-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/leather-cleaning", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/leather-color-restoration", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/leather-dyeing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/leather-furniture-restoration", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/leather-recoloring", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/leather-scratch-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/leather-sofa-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/leather-tear-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/leather-upholstery-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leather-repair/marine-seat-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "/upholstery", changeFrequency: "monthly", priority: 0.8 },
  { path: "/upholstery/commercial-upholstery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/upholstery/dining-chair-upholstery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/upholstery/health-club-upholstery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/upholstery/hospitality-upholstery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/upholstery/marine-upholstery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/upholstery/medical-seat-upholstery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/upholstery/restaurant-seat-upholstery", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((route) => ({
    url: new URL(route.path, baseUrl).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
