import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { profile } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://haider-ali-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Haider Ali — Senior Software Engineer | Angular, React, Next.js & Node.js",
    template: "%s | Haider Ali",
  },
  description: profile.summary,
  keywords: ["Haider Ali", "Senior Software Engineer", "Angular", "Next.js", "React", "Node.js", "NestJS", "Lahore", "Frontend Team Lead", "eCommerce", "LLM"],
  openGraph: {
    type: "website",
    title: "Haider Ali — Senior Software Engineer",
    description: profile.summary,
    url: siteUrl,
    siteName: "Haider Ali Portfolio",
  },
  twitter: { card: "summary_large_image", title: "Haider Ali — Senior Software Engineer", description: profile.summary },
  alternates: { canonical: siteUrl },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><AppShell>{children}</AppShell></body></html>;
}
