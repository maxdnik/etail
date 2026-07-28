import type { MetadataRoute } from "next";

const baseUrl = "https://www.israel-entrypiba.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/eta-il-para-argentinos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/requisitos-eta-il", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/cuanto-demora-eta-il", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/preguntas-frecuentes", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/aviso-legal", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
