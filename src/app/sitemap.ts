import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://nihal-puse.vercel.app", priority: 1 }];
}
