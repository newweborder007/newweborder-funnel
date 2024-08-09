import { MetadataRoute } from "next";

const locales = ["en"];

const baseUrls = ["/"];

// async function tempSitemapEntries() {
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://newweborder-funnel-git-master-new-web-orders-projects.vercel.app/",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
