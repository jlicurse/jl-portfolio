import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Jonathan Licurse — Portfolio",
  description: "Embedded Systems & AI — building real-time control and compute tools.",
  openGraph: { title: "Jonathan Licurse — Portfolio", description: "Embedded Systems & AI — building real-time control and compute tools.", type: "website", url: "https://example.com", images: ["/og-image.png"]},
  icons: { icon: "/favicon.ico" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><Nav/><main className="container">{children}</main><Footer/></body></html>);
}
