"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";

export const Research = () => {
  return (
    <section id="research" className="py-20 border-t border-ink-rule">
      <div className="container px-6 mx-auto">
        <SectionLabel title="Research" />

        <div className="max-w-3xl space-y-8">
          {resumeData.research.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="p-8 border border-ink-rule hover:border-oxide transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 font-mono text-xs tracking-wider uppercase text-oxide border border-oxide/40">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold mb-4 leading-snug text-ink">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-4 mb-4 font-mono text-xs text-ink-muted">
                  <span className="text-oxide">{item.role}</span>
                  <span className="w-px h-4 bg-ink-rule self-center" />
                  <span>{item.status}</span>
                </div>

                <p className="text-ink-muted leading-relaxed italic">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
