// Packages configuration - Edit pricing and features here
export interface PackageFeature {
  text: string;
  included: boolean;
}

export interface Package {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  suitableFor: string;
  startingPrice: string;
  currency: string;
  billingNote: string;
  features: PackageFeature[];
  highlighted?: boolean;
}

export const packages: Package[] = [
  {
    id: "basic",
    name: "BASIC PACK",
    subtitle: "Local / Budget Clients",
    description: "Perfect for personal profiles, student projects, or demo purposes.",
    suitableFor: "Personal profiles, student projects, or demo purposes",
    startingPrice: "1,499/-",
    currency: "₹",
    billingNote: "One-time Website Development Cost",
    features: [
      { text: "Up to 5 Pages Website", included: true },
      { text: "Responsive Design (Mobile Friendly)", included: true },
      { text: "Contact Form", included: true },
      { text: "Local Hosting only (Demo/Local Server)", included: true },
      { text: "Domain Registration", included: false },
      { text: "Live Hosting", included: false },
      { text: "Maintenance Support", included: false },
    ],
  },
  {
    id: "intermediate",
    name: "INTERMEDIATE PACK",
    subtitle: "Small to Medium Businesses",
    description: "Ideal for shops, small businesses, and professional portfolios.",
    suitableFor: "Shops, small businesses, portfolios",
    startingPrice: "2,499/-",
    currency: "₹",
    billingNote: "One-time Development + Annual Domain & Hosting",
    highlighted: true,
    features: [
      { text: "Up to 8–10 Pages Website", included: true },
      { text: "Responsive & SEO-Ready Design", included: true },
      { text: "Live Hosting (Shared or Basic VPS)", included: true },
      { text: "Domain Registration (Client-owned)", included: true },
      { text: "SSL Certificate", included: true },
      { text: "Basic SEO Setup", included: true },
      { text: "Annual Domain + Hosting (Recurring)", included: true },
    ],
  },
  {
    id: "advanced",
    name: "ADVANCED PACK",
    subtitle: "Professional / Startup Clients",
    description: "For startups requiring custom features, dashboards, or high traffic handling.",
    suitableFor: "Startups requiring custom features, dashboards, or high traffic",
    startingPrice: "4,999/-",
    currency: "₹",
    billingNote: "One-time Development + Annual Bundle",
    features: [
      { text: "Custom Full-Stack Website", included: true },
      { text: "Advanced Features (Admin Panel, Dashboards)", included: true },
      { text: "VPS / Cloud Hosting", included: true },
      { text: "Domain Registration (Client-owned)", included: true },
      { text: "SSL + Security Hardening", included: true },
      { text: "Annual Maintenance Included", included: true },
      { text: "Backups & Bug Fixes", included: true },
      { text: "Security Updates & Uptime Monitoring", included: true },
      { text: "Limited Content Changes", included: true },
    ],
  },
];

export type PackagesConfig = typeof packages;
