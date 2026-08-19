import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  // This is a single-page app — hash-fragment "sections" (#about, #projects, etc.)
  // aren't separately indexable pages, so only the one real URL belongs here.
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
