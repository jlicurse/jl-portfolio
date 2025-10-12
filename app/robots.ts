import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://jl-portfolio.vercel.app"; // replace with your domain later
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}