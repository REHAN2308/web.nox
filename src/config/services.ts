// Services configuration - Edit service offerings here
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name for Lucide icons
}

export const services: Service[] = [
  {
    id: "web-design",
    title: "Custom Website Design",
    description:
      "Unique, modern designs tailored to your brand identity. Mobile-first approach ensuring your site looks great on all devices.",
    icon: "Palette",
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description:
      "Complete front-end and back-end solutions. From simple landing pages to complex web applications with databases and APIs.",
    icon: "Code2",
  },
  {
    id: "hosting",
    title: "Hosting & Domain Setup",
    description:
      "We help you choose and set up reliable hosting. Domain registration assistance with ownership fully in your name.",
    icon: "Server",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Ongoing support for advanced clients. Regular backups, security updates, bug fixes, and content changes.",
    icon: "Wrench",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description:
      "Basic to advanced SEO setup to help your website rank better in search engines and reach more customers.",
    icon: "Search",
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description:
      "Every website is built mobile-first, ensuring perfect display across phones, tablets, and desktops.",
    icon: "Smartphone",
  },
];

export type ServicesConfig = typeof services;
