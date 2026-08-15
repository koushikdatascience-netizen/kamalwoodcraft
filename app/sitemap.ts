import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/#about", "/#products", "/#process", "/#why", "/#contact"];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: "2026-08-15"
  }));
}
