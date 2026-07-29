"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Trajectory" },
  { id: "contact", label: "Contact" },
];

export const ScrollRail = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = "";

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            current = id;
          }
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        current = "contact";
      }

      if (!current && window.scrollY < 100) {
        current = "hero";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-px z-50 hidden md:block">
      <motion.div
        style={{ scaleY }}
        className="w-full bg-oxide origin-top"
      />

      <div className="absolute left-0 top-0 bottom-0 w-full flex flex-col items-center justify-center gap-6 px-1">
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          const dotRef = useRef<HTMLButtonElement>(null);

          useEffect(() => {
            if (isActive && dotRef.current) {
              dotRef.current.focus({ preventScroll: true });
            }
          }, [isActive]);

          return (
            <motion.button
              key={id}
              ref={dotRef}
              onClick={() => scrollToSection(id)}
              className="relative group w-2 h-2 rounded-full bg-ink-rule transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-oxide focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              style={{
                scale: isActive ? 1.8 : 1,
                backgroundColor: isActive ? "var(--color-oxide)" : "var(--color-ink-rule)",
              }}
              whileHover={{ scale: isActive ? 2 : 1.5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
              aria-current={isActive ? "true" : "false"}
            >
              <span
                className="absolute left-full ml-3 whitespace-nowrap font-mono text-xs text-ink-muted opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
              >
                {label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};