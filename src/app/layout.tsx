import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  title: "Web.nox | Modern Full-Stack Websites for Small Businesses & Startups",
  description:
    "We design and develop responsive full-stack websites for individuals, small businesses, and startups. Professional, mobile-first, and affordable web development services.",
  keywords: [
    "web development",
    "website design",
    "full-stack development",
    "small business websites",
    "startup websites",
    "responsive design",
    "mobile-first",
    "web.nox",
  ],
  authors: [{ name: "Web.nox" }],
  creator: "Web.nox",
  openGraph: {
    title: "Web.nox | Modern Full-Stack Websites",
    description:
      "Professional website development for small businesses and startups. Mobile-first, modern designs with transparent pricing.",
    type: "website",
    locale: "en_US",
    siteName: "Web.nox",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web.nox | Modern Full-Stack Websites",
    description:
      "Professional website development for small businesses and startups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
