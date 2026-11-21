import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Suspense } from "react";
import { RouteScrollManager } from "@/components/layout/RouteScrollManager";
import { ScrollChrome } from "@/components/layout/ScrollChrome";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-[#f7f9ff] font-sans text-slate-900 antialiased">
        <Suspense fallback={null}>
          <RouteScrollManager />
        </Suspense>
        <ScrollChrome />
        {children}
      </body>
    </html>
  );
}
