// Terms and Conditions configuration
export interface TermSection {
  id: string;
  title: string;
  content: string[];
}

export const termsConfig = {
  title: "WEB.NOX SERVICE AGREEMENT",
  lastUpdated: "December 2024",
  sections: [
    {
      id: "project-scope",
      title: "Project Scope",
      content: [
        "All website development work will be scoped and agreed upon before project commencement.",
        "The scope includes design mockups, development, testing, and deployment as per the selected package.",
        "Any features or pages not included in the original scope will be quoted separately.",
        "Changes to scope after project start may affect timeline and cost.",
      ],
    },
    {
      id: "financial-terms",
      title: "Financial Terms",
      content: [
        "30% advance payment is required to begin work on any project.",
        "Remaining 70% payment is due before final handover and deployment.",
        "For packages with recurring charges (hosting/domain), annual fees are billed separately.",
        "All prices are in Indian Rupees (₹) unless otherwise specified.",
        "Payment can be made via bank transfer, UPI, or other agreed methods.",
      ],
    },
    {
      id: "client-obligations",
      title: "Client Obligations (Data & Content)",
      content: [
        "Client is responsible for providing all necessary content (text, images, logos) in a timely manner.",
        "Delays in content delivery may affect project timeline.",
        "Client must provide clear feedback during revision rounds.",
        "Client is responsible for the accuracy and legality of provided content.",
      ],
    },
    {
      id: "revision-policy",
      title: "Revision Policy",
      content: [
        "3 rounds of minor revisions are included free of charge.",
        "Minor revisions include text changes, color adjustments, and small layout tweaks.",
        "Major revisions (structural changes, new features, redesigns) will be quoted separately.",
        "Revision requests must be consolidated and submitted in writing.",
      ],
    },
    {
      id: "branding-credit",
      title: "Branding & Credit",
      content: [
        'All websites will include a "Designed & Developed by Web.nox" credit in the footer.',
        "This credit serves as our portfolio reference and is standard practice.",
        "Credit removal is available for an additional fee (contact for pricing).",
        "Web.nox may showcase the completed project in our portfolio unless otherwise agreed.",
      ],
    },
    {
      id: "delivery-support",
      title: "Delivery & Support",
      content: [
        "Project delivery timeline will be communicated after scope finalization.",
        "7 days of free technical support for bug fixes after go-live.",
        "Support covers technical issues only, not content changes or new features.",
        "Extended support and maintenance available in Advanced Package or as add-on.",
      ],
    },
    {
      id: "cancellation-refund",
      title: "Cancellation & Refund Policy",
      content: [
        "50% of advance payment is refundable if client cancels before design approval.",
        "No refund after design approval and development begins.",
        "No work (code, designs, assets) will be handed over upon cancellation.",
        "Web.nox reserves the right to cancel projects due to non-payment or breach of terms.",
      ],
    },
  ] as TermSection[],
};

export type TermsConfig = typeof termsConfig;
