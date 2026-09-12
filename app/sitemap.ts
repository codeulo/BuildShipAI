import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://buildshipai.com";
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1 },
    { url: `${base}/privacy-policy`, lastModified: new Date() },
    { url: `${base}/terms-of-service`, lastModified: new Date() },
  ];
}
