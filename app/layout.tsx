import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  // After you deploy, update this to your real domain
  metadataBase: new URL("https://jl-portfolio.vercel.app"),
  title: "Jonathan Licurse — Portfolio",
  description: "Embedded Systems & AI — building real-time control and compute tools.",
  openGraph: {
    title: "Jonathan Licurse — Portfolio",
    description: "Embedded Systems & AI — building real-time control and compute tools.",
    url: "https://jl-portfolio.vercel.app",
    type: "website",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
} satisfies Metadata; // ✅ ensures the object matches Next's Metadata type

export default function RootLayout({ children }: { children: ReactNode }) {
  // IMPORTANT: do NOT add 'use client' in this file.
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}