import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://auroradomes.com";
  const now = new Date();

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/solutions", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/solutions/dome-infrastructure", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/solutions/immersive-content", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/solutions/technical-support", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/solutions/end-to-end-delivery", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/industries/entertainment-tourism", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/events-festivals", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/hospitality-dining", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/health-wellness", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/music-nightlife", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/museums-cultural", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/corporate-brand", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/education-planetariums", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/private-events-weddings", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/technology-dome-systems", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/start-a-project", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
