import type { Metadata } from "next";

export const metadata: Metadata = {
  // Use your real URL after deploy
  metadataBase: new URL("https://jl-portfolio.vercel.app"),
  title: "Jonathan Licurse — Portfolio",
  description: "Embedded Systems & AI — building real-time control and compute tools.",
  openGraph: {
    title: "Jonathan Licurse — Portfolio",
    description: "Embedded Systems & AI — building real-time control and compute tools.",
    images: ["/og-image.png"], // put a 1200x630 image in /public
  },
  icons: { icon: "/favicon.ico" },
};
