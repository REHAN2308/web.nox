"use client";

import { SectionWrapper, SectionHeader, Card, CardContent } from "@/components/ui";
import { services } from "@/config/services";
import { Icons } from "@/components/Icons";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <SectionWrapper id="services" background="surface">
      <SectionHeader
        title="Our Services"
        subtitle="Comprehensive web development solutions for your business"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = Icons[service.icon as keyof typeof Icons];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full" hover>
                <CardContent>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
