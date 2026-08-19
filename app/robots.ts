import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    // Open to everyone by default — including AI/LLM crawlers (GPTBot, ClaudeBot,
    // Google-Extended, CCBot, etc.), which fall under the "*" wildcard since none
    // are explicitly disallowed. See /llms.txt for an LLM-oriented site summary.
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
