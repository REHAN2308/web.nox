"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  highlighted?: boolean;
}

export const Card = ({
  children,
  className = "",
  hover = true,
  highlighted = false,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
      className={`
        relative rounded-2xl p-6
        bg-white border border-border
        shadow-sm hover:shadow-xl
        transition-shadow duration-300
        ${highlighted ? "ring-2 ring-primary border-primary" : ""}
        ${className}
      `}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      {children}
    </motion.div>
  );
};

// Card subcomponents for better composition
export const CardHeader = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h3 className={`text-xl font-bold text-foreground ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p className={`text-muted text-sm mt-1 ${className}`}>{children}</p>
);

export const CardContent = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

export const CardFooter = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mt-6 pt-4 border-t border-border ${className}`}>
    {children}
  </div>
);
