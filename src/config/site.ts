// Site configuration - Edit this file to customize your content
export const siteConfig = {
  name: "Web.nox",
  tagline: "Modern full-stack websites for small businesses and startups.",
  description:
    "We design and develop responsive full-stack websites for individuals, small businesses, and startups.",
  
  // Contact Information - Update these with your actual details
  email: "webnox88@gmail.com",
  instagram: "web.nox", // Your Instagram handle (without @)

  // Social Links
  socialLinks: {
    instagram: "https://instagram.com/web.nox",
    email: "mailto:webnox88@gmail.com",
  },

  // Navigation Links
  navLinks: [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#packages", label: "Packages" },
    { href: "#process", label: "Process" },
    { href: "#terms", label: "Terms" },
    { href: "#contact", label: "Contact" },
  ],

  // Footer Links
  footerLinks: [
    { href: "#terms", label: "Terms & Conditions" },
    { href: "#privacy", label: "Privacy Policy" },
  ],
};

export type SiteConfig = typeof siteConfig;
