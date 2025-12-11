"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui";
import { processSteps } from "@/config/process";
import { Icons } from "@/components/Icons";

export const Process = () => {
  return (
    <SectionWrapper id="process" background="surface">
      <SectionHeader
        title="How It Works"
        subtitle="Our streamlined process ensures a smooth experience from start to finish"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-0">
            {processSteps.map((step, index) => {
              const IconComponent = Icons[step.icon as keyof typeof Icons];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`
                    relative flex items-center gap-4 md:gap-8
                    ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                  `}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`
                        bg-white p-5 rounded-xl border border-border shadow-sm
                        hover:shadow-md hover:border-primary/30 transition-all
                        ${isEven ? "md:mr-8" : "md:ml-8"}
                      `}
                    >
                      <div className={`flex items-center gap-3 mb-2 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className="md:hidden w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="text-primary" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">
                          Step {step.id}: {step.title}
                        </h3>
                      </div>
                      <p className="text-muted text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon (desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-white items-center justify-center shadow-lg shadow-primary/30 z-10">
                    <IconComponent size={24} />
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
