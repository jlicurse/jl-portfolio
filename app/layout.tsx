import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  // After you deploy, update this to your real domain
  metadataBase: new URL("https://jl-portfolio-ruby.vercel.app"),
  title: "Jonathan Licurse — Portfolio",
  description: "Embedded Systems & AI — building real-time control and compute tools.",
  openGraph: { images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
} satisfies Metadata; // ensures the object matches Next's Metadata type

export default function RootLayout({ children }: { children: ReactNode }) {
  // IMPORTANT: do NOT add 'use client' in this file.wh
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