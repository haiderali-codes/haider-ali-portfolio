import type { MetadataRoute } from "next";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://haider-ali-portfolio.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/about", "/work", "/resume", "/contact"].map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "monthly" : "yearly", priority: route === "" ? 1 : 0.8 })); }
