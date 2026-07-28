"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";

const containerVariants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const categoryVariants = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const pillVariants = {
  initial: { opacity: 0, scale: 0.85, y: 8 },
  whileInView: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export const Skills = () => {
  const categories = [
    { label: "Languages", items: resumeData.skills.languages },
    { label: "Web", items: resumeData.skills.web },
    { label: "Core", items: resumeData.skills.core },
    { label: "ML", items: resumeData.skills.ml },
    { label: "Tools", items: resumeData.skills.tools },
    { label: "App", items: resumeData.skills.app },
  ];

  return (
    <section id="skills" className="py-20 border-t border-ink-rule">
      <div className="container px-6 mx-auto">
        <SectionLabel title="Technical Skills" />

        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.label}
                variants={categoryVariants}
                className={`grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 py-4 ${
                  idx < categories.length - 1 ? "border-b border-ink-rule" : ""
                }`}
              >
                <span className="font-mono text-xs text-ink-muted uppercase tracking-widest self-start pt-1">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={pillVariants}
                      className="text-sm px-2.5 py-1 border border-ink-rule text-ink font-body transition-all duration-200 hover:border-oxide hover:-translate-y-0.5 hover:shadow-sm cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
