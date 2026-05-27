import type { MetadataRoute } from "next";
import { siteUrl } from "./shared-metadata";

const routes = ["/", "/explore-more", "/privacy", "/terms", "/community_guidelines", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
