"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader, Input, Textarea, Select, Button } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/Icons";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  package: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const projectTypes = [
  { value: "personal", label: "Personal Website" },
  { value: "shop", label: "Shop / E-commerce" },
  { value: "startup", label: "Startup" },
  { value: "portfolio", label: "Portfolio" },
  { value: "other", label: "Other" },
];

const packageOptions = [
  { value: "basic", label: "Basic Pack" },
  { value: "intermediate", label: "Intermediate Pack" },
  { value: "advanced", label: "Advanced Pack" },
  { value: "not-sure", label: "Not Sure Yet" },
];

const budgetRanges = [
  { value: "under-5k", label: "Under ₹5,000" },
  { value: "5k-15k", label: "₹5,000 - ₹15,000" },
  { value: "15k-40k", label: "₹15,000 - ₹40,000" },
  { value: "40k-plus", label: "₹40,000+" },
  { value: "discuss", label: "Let's Discuss" },
];

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    package: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (optional but validate if provided)
    if (formData.phone.trim()) {
      const phoneRegex = /^[+]?[\d\s-]{10,}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    // Project type validation
    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    // Package validation
    if (!formData.package) {
      newErrors.package = "Please select a package";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your project";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          package: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" background="surface">
      <SectionHeader
        title="Get In Touch"
        subtitle="Ready to start your project? Let's talk!"
      />

      <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="bg-secondary text-white rounded-2xl p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Fill out the form or reach out directly through any of these channels.
            </p>

            {/* Contact methods */}
            <div className="space-y-6">
              <a
                href={siteConfig.socialLinks.email}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icons.Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icons.Instagram size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Instagram</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    @{siteConfig.instagram}
                  </p>
                </div>
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Follow us</p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Icons.Instagram size={20} />
                </a>
                <a
                  href={siteConfig.socialLinks.email}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Email"
                >
                  <Icons.Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm"
          >
            {/* Success/Error messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800"
              >
                <div className="flex items-center gap-2">
                  <Icons.CheckCircle size={20} />
                  <span className="font-medium">Message sent successfully!</span>
                </div>
                <p className="text-sm mt-1">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800"
              >
                <div className="flex items-center gap-2">
                  <Icons.X size={20} />
                  <span className="font-medium">Something went wrong</span>
                </div>
                <p className="text-sm mt-1">
                  Please try again or contact us directly via email or Instagram.
                </p>
              </motion.div>
            )}

            <div className="grid gap-5">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
              </div>

              {/* Phone */}
              <Input
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                helperText="Optional, but helps us reach you faster"
              />

              {/* Project Type and Package */}
              <div className="grid md:grid-cols-2 gap-5">
                <Select
                  label="Project Type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  options={projectTypes}
                  placeholder="Select project type"
                  error={errors.projectType}
                  required
                />
                <Select
                  label="Interested Package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  options={packageOptions}
                  placeholder="Select a package"
                  error={errors.package}
                  required
                />
              </div>

              {/* Budget */}
              <Select
                label="Budget Range"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                options={budgetRanges}
                placeholder="Select your budget range"
              />

              {/* Message */}
              <Textarea
                label="Message / Requirements"
                name="message"
                placeholder="Tell us about your project, requirements, timeline, and any specific features you need..."
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
                rows={5}
              />

              {/* Submit button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
