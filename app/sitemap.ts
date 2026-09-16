import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { locales } from "@/lib/i18n/dictionaries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return locales.map((lang) => ({
    url: `${base}/${lang}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
  }));
}
