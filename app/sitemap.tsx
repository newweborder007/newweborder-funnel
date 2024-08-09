import { MetadataRoute } from "next";

const locales = ["en"];

const baseUrls = ["/"];

// async function tempSitemapEntries() {
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://localhost:3000",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
