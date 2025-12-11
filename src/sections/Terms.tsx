"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui";
import { termsConfig } from "@/config/terms";
import { Icons } from "@/components/Icons";

export const Terms = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <SectionWrapper id="terms" background="white">
      <SectionHeader
        title="Terms & Conditions"
        subtitle="Our commitment to transparency and fair business practices"
      />

      <div className="max-w-3xl mx-auto">
        <div className="bg-surface rounded-2xl border border-border overflow-hidden">
          {/* Header */}
          <div className="p-6 bg-secondary text-white">
            <h3 className="text-xl font-bold">{termsConfig.title}</h3>
            <p className="text-gray-300 text-sm mt-1">
              Last updated: {termsConfig.lastUpdated}
            </p>
          </div>

          {/* Accordion sections */}
          <div className="divide-y divide-border">
            {termsConfig.sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-white/50 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {section.title}
                  </span>
                  <span className="flex-shrink-0 text-muted">
                    {openSection === section.id ? (
                      <Icons.ChevronUp size={20} />
                    ) : (
                      <Icons.ChevronDown size={20} />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5">
                        <ul className="space-y-2">
                          {section.content.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                              <span className="text-muted text-sm leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Payment:</span> 30% advance to start,
              70% before final handover
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Revisions:</span> 3 rounds of minor
              revisions included free
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Support:</span> 7 days free technical
              support after go-live
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Refund:</span> 50% of advance refundable
              if cancelled before design approval
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
