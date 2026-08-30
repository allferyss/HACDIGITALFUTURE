import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/lib/services-data";
import { articles } from "@/lib/articles-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/layanan", "/tentang", "/artikel", "/kontak", "/portfolio"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/layanan/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${siteConfig.url}/artikel/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
