"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { FileText, ExternalLink } from "lucide-react";

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
              <div className="group relative p-8 border border-ink-rule hover:border-oxide transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-oxide/5 via-transparent to-denim/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 font-mono text-xs tracking-wider uppercase text-oxide border border-oxide/40">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold mb-4 leading-snug text-ink relative z-10">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-4 mb-4 font-mono text-xs text-ink-muted relative z-10">
                  <span className="text-oxide">{item.role}</span>
                  <span className="w-px h-4 bg-ink-rule self-center" />
                  <span>{item.status}</span>
                </div>

                <p className="text-ink-muted leading-relaxed italic relative z-10 mb-6">
                  {item.description}
                </p>

                <div className="relative z-10 flex gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono text-oxide border border-oxide/40 hover:bg-oxide/10 transition-colors">
                    <FileText size={14} />
                    Read Abstract
                  </button>
                  <a
                    href={item.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono text-ink-muted border border-ink-rule hover:border-oxide hover:text-oxide transition-colors"
                  >
                    <ExternalLink size={14} />
                    View Paper
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
