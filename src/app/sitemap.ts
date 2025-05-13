// app/sitemap.ts
import { MetadataRoute } from "next";

const BASE_URL = "https://ishamashi.com"; // Ganti!

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/about", "/projects", "/contact"];

  const staticUrls = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date().toISOString(),
    // PERBAIKAN DI SINI: Gunakan nilai literal yang valid
    changeFrequency: (path === "/" ? "weekly" : "monthly") as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: path === "/" ? 1.0 : 0.8,
  }));

  return staticUrls; // Langsung return array hasil map
}
