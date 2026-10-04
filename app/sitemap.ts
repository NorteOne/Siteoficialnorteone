import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/solucoes",
    "/segmentos",
    "/como-trabalhamos",
    "/sobre",
    "/insights",
    "/contato",
    "/politica-de-privacidade",
  ];

  const solutionRoutes = [
    "/solucoes/automacao-de-processos",
    "/solucoes/integracoes",
    "/solucoes/solucoes-sob-medida",
  ];

  return [...staticRoutes, ...solutionRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
