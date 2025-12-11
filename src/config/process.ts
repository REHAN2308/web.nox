// Process/How It Works configuration
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Get In Touch",
    description: "Contact us via form, Instagram, WhatsApp, or email. Share your initial requirements.",
    icon: "MessageCircle",
  },
  {
    id: 2,
    title: "Requirements Discussion",
    description: "We discuss your needs in detail and provide a customized quotation based on your requirements.",
    icon: "FileText",
  },
  {
    id: 3,
    title: "Advance Payment",
    description: "Once agreed, pay 30% advance to kick off the project. We begin planning immediately.",
    icon: "CreditCard",
  },
  {
    id: 4,
    title: "Design & Development",
    description: "Our team designs and develops your website. You receive regular updates on progress.",
    icon: "Code2",
  },
  {
    id: 5,
    title: "Review & Revisions",
    description: "Review the work and provide feedback. Up to 3 rounds of minor revisions included.",
    icon: "RefreshCw",
  },
  {
    id: 6,
    title: "Final Payment",
    description: "Pay the remaining 70% once you're satisfied with the final result.",
    icon: "CheckCircle",
  },
  {
    id: 7,
    title: "Handover & Support",
    description: "We deploy your site and hand over access. Enjoy 7 days of free technical support.",
    icon: "Rocket",
  },
];

export type ProcessConfig = typeof processSteps;
