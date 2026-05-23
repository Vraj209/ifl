import type { MetadataRoute } from "next";

import { inventoryCategories, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/inventory`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...inventoryCategories.map((category) => ({
      url: `${site.url}/inventory/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
