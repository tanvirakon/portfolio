"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);

      const scrollPosition = window.scrollY + 100;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight + 200
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(targetId);
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b",
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-ink-rule"
          : "bg-transparent border-transparent",
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-mono font-bold tracking-tighter hover:scale-105 transition-transform text-ink"
        >
          TA
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center bg-ink-faint/50 backdrop-blur-md p-1.5 rounded-full border border-ink-rule">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={cn(
                    "relative px-5 py-2 text-sm font-mono rounded-full transition-colors duration-300 z-10",
                    isActive
                      ? "text-paper"
                      : "text-ink-muted hover:text-ink",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-ink rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-paper/95 backdrop-blur-md border-b border-ink-rule p-4 flex flex-col space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={cn(
                "block py-2 text-sm font-mono",
                activeSection === link.href.substring(1)
                  ? "text-oxide font-bold"
                  : "text-ink-muted",
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};
