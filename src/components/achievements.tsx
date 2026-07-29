"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/section-label";

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 border-t border-ink-rule">
      <div className="container px-6 mx-auto">
        <SectionLabel title="Trajectory" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-mono font-bold mb-6 text-ink-muted uppercase tracking-widest">
              Competitive Programming
            </h3>
            <div className="space-y-4">
              {resumeData.achievements.map((ach, idx) => (
                <a
                  key={idx}
                  href={ach.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-ink-rule hover:border-oxide transition-colors"
                >
                  <div>
                    <h4 className="font-mono font-bold text-ink">{ach.platform}</h4>
                    <p className="text-oxide font-mono text-sm">{ach.rating}</p>
                  </div>
                  <ExternalLink size={16} className="text-ink-muted" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-mono font-bold mb-6 text-ink-muted uppercase tracking-widest">
              Activities
            </h3>
            <div className="space-y-6">
              {resumeData.volunteering.map((vol, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l border-ink-rule"
                >
                  <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-oxide rounded-full" />
                  <h4 className="font-display font-bold text-lg text-ink">
                    {vol.organization}
                  </h4>
                  <p className="text-sm font-mono text-oxide mb-1">{vol.role}</p>
                  <p className="text-ink-muted text-sm">{vol.summary}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
