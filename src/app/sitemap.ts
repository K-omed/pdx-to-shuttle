import type { MetadataRoute } from "next";
import { absoluteUrl, allIndexablePaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return allIndexablePaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/blog") ? 0.7 : 0.8,
  }));
}
