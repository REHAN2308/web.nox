"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader, LinkButton } from "@/components/ui";
import { packages } from "@/config/packages";
import { Icons } from "@/components/Icons";

export const Packages = () => {
  return (
    <SectionWrapper id="packages" background="white">
      <SectionHeader
        title="Our Packages"
        subtitle="Choose the perfect plan for your needs"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`
              relative flex flex-col rounded-2xl border-2 bg-white overflow-hidden
              ${pkg.highlighted 
                ? "border-primary shadow-2xl shadow-primary/20 scale-[1.02] lg:scale-105" 
                : "border-border hover:border-primary/30"
              }
              transition-all duration-300
            `}
          >
            {/* Popular badge */}
            {pkg.highlighted && (
              <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-semibold">
                Most Popular
              </div>
            )}

            {/* Header */}
            <div className={`p-6 pb-4 ${pkg.highlighted ? "pt-12" : ""}`}>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted">{pkg.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-muted text-lg">Starting from</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {pkg.currency}{pkg.startingPrice}
                  </span>
                </div>
                <p className="text-xs text-muted mt-1">{pkg.billingNote}</p>
              </div>

              {/* Description */}
              <p className="text-muted text-sm mb-2">
                <span className="font-medium text-foreground">Suitable for:</span>{" "}
                {pkg.suitableFor}
              </p>
            </div>

            {/* Features */}
            <div className="flex-1 p-6 pt-0">
              <ul className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`flex-shrink-0 mt-0.5 ${feature.included ? "text-green-500" : "text-red-400"}`}>
                      {feature.included ? (
                        <Icons.Check size={18} />
                      ) : (
                        <Icons.X size={18} />
                      )}
                    </span>
                    <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted line-through"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="p-6 pt-0">
              <LinkButton
                href="#contact"
                variant={pkg.highlighted ? "primary" : "outline"}
                size="md"
                className="w-full"
              >
                Book this package
              </LinkButton>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-muted mt-10 text-sm max-w-2xl mx-auto"
      >
        * Prices are indicative. Final quotation depends on specific requirements.
        Contact us for a customized quote tailored to your needs.
      </motion.p>
    </SectionWrapper>
  );
};
