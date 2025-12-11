"use client";

import { SectionWrapper, SectionHeader, FadeIn } from "@/components/ui";
import { Icons } from "@/components/Icons";

const whyChooseUs = [
  {
    icon: "Code2",
    title: "Full-Stack Development",
    description: "Complete front-end and back-end solutions under one roof",
  },
  {
    icon: "Smartphone",
    title: "Mobile-First Approach",
    description: "Designed for phones first, perfectly adapted for desktops",
  },
  {
    icon: "FileText",
    title: "Clear Service Agreement",
    description: "Transparent pricing, clear terms, no hidden surprises",
  },
  {
    icon: "MessageCircle",
    title: "Professional Support",
    description: "Responsive communication throughout your project",
  },
  {
    icon: "CheckCircle",
    title: "Quality Assurance",
    description: "Rigorous testing and 3 revision rounds included",
  },
];

export const About = () => {
  return (
    <SectionWrapper id="about" background="white">
      <SectionHeader
        title="About Web.nox"
        subtitle="Your trusted partner in digital transformation"
      />

      <div className="max-w-4xl mx-auto">
        {/* Mission Statement */}
        <FadeIn className="mb-16">
          <div className="bg-surface rounded-2xl p-6 md:p-10 border border-border">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted text-lg leading-relaxed mb-4">
              At <span className="text-primary font-semibold">Web.nox</span>, we
              believe every business deserves a professional online presence.
              Our mission is to help small and medium businesses go online with
              modern, scalable websites that truly represent their brand.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              We provide professional, full-stack website development with
              transparent pricing, clear terms, and a commitment to building
              long-term relationships with our clients.
            </p>
          </div>
        </FadeIn>

        {/* Why Choose Us */}
        <div>
          <FadeIn>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              Why Choose Us?
            </h3>
          </FadeIn>

          <div className="grid gap-4 md:gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComponent = Icons[item.icon as keyof typeof Icons];
              return (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4 p-4 md:p-6 bg-surface rounded-xl border border-border hover:border-primary/30 transition-colors group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
