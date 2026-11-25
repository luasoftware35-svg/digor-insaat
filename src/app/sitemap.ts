import type { MetadataRoute } from "next";
import { projects, services } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://digorgroup.com";
  const now = new Date();
  const staticPaths = [
    "",
    "/hakkimizda",
    "/hizmetler",
    "/projeler",
    "/surdurulebilirlik",
    "/kariyer",
    "/iletisim",
    "/gizlilik",
    "/kvkk",
    "/cerez-politikasi",
    "/yasal-uyari",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path || "/"}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${base}/hizmetler/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...projects.map((p) => ({
      url: `${base}/projeler/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
