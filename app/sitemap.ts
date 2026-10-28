import { MetadataRoute } from "next";
import { programsList, articlesList } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ptmjaufarswadiq.com";

  const staticPages = [
    "",
    "/about",
    "/expertise",
    "/programs",
    "/impact",
    "/events",
    "/insights",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const programPages = programsList.map((p) => ({
    url: `${baseUrl}/programs/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articlePages = articlesList.map((a) => ({
    url: `${baseUrl}/insights/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...programPages, ...articlePages];
}

