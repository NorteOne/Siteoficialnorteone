import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { solutions } from "@/content/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/solucoes",
    "/segmentos",
    "/como-trabalhamos",
    "/sobre",
    "/cases",
    "/insights",
    "/contato",
    "/politica-de-privacidade",
  ];

  const solutionRoutes = solutions.map((solution) => `/solucoes/${solution.slug}`);

  return [...staticRoutes, ...solutionRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
