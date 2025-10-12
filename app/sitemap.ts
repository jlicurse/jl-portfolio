import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jl-portfolio.vercel.app"; // update if you add a custom domain
  const routes = ["/", "/projects", "/resume", "/contact"];
  const lastModified = new Date();

  return routes.map((p) => ({
    url: `${base}${p}`,
    lastModified,
  }));
}