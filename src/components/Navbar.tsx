"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/Icons";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = siteConfig.navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            isScrolled
              ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-border"
              : "bg-transparent"
          }
        `}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center"
            >
              <span
                className={`text-2xl md:text-3xl font-bold transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Web<span className="text-primary">.</span>nox
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`
                    px-4 py-2 rounded-lg font-medium text-sm
                    transition-all duration-200
                    ${
                      activeSection === link.href.slice(1)
                        ? "text-primary bg-primary/10"
                        : isScrolled
                        ? "text-foreground hover:text-primary hover:bg-primary/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-2 rounded-lg transition-colors
                  ${
                    isScrolled
                      ? "text-foreground hover:text-primary hover:bg-primary/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }
                `}
                aria-label="Instagram"
              >
                <Icons.Instagram size={20} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="px-5 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                lg:hidden p-2 rounded-lg transition-colors
                ${
                  isScrolled
                    ? "text-foreground hover:bg-surface"
                    : "text-white hover:bg-white/10"
                }
              `}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <Icons.X size={24} />
              ) : (
                <Icons.Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="text-xl font-bold text-foreground">
                    Web<span className="text-primary">.</span>nox
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-surface text-foreground"
                    aria-label="Close menu"
                  >
                    <Icons.X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {siteConfig.navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`
                        block px-6 py-3 font-medium transition-colors
                        ${
                          activeSection === link.href.slice(1)
                            ? "text-primary bg-primary/5"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }
                      `}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Footer with social and CTA */}
                <div className="p-4 border-t border-border">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    className="block w-full py-3 bg-primary text-white rounded-xl font-semibold text-center hover:bg-primary-dark transition-colors mb-4"
                  >
                    Get Quote
                  </a>
                  <div className="flex justify-center gap-4">
                    <a
                      href={siteConfig.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted hover:text-primary hover:bg-primary/5"
                      aria-label="Instagram"
                    >
                      <Icons.Instagram size={22} />
                    </a>
                    <a
                      href={siteConfig.socialLinks.email}
                      className="p-2 rounded-lg text-muted hover:text-primary hover:bg-primary/5"
                      aria-label="Email"
                    >
                      <Icons.Mail size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
