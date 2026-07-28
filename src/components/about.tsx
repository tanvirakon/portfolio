"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";

export const About = () => {
  return (
    <section id="about" className="py-20 border-t border-ink-rule">
      <div className="container px-6 mx-auto">
        <SectionLabel title="Bio" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-ink leading-relaxed text-lg text-justify">
              {resumeData.basics.summary}
            </p>

            <div className="mt-8 font-mono text-sm text-ink-muted flex items-center gap-4">
              <span>CGPA {resumeData.education[0].score}</span>
              <span className="w-px h-4 bg-ink-rule" />
              <span>{resumeData.education[0].institution}</span>
              <span className="w-px h-4 bg-ink-rule" />
              <span>
                {resumeData.education[0].startDate}–{resumeData.education[0].endDate}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-mono font-bold mb-6 text-ink-muted uppercase tracking-widest">
              Education
            </h3>

            <div className="space-y-8">
              {resumeData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 border-l border-ink-rule"
                >
                  <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-oxide rounded-full" />
                  <h4 className="text-xl font-display font-bold">
                    {edu.institution}
                  </h4>
                  <p className="text-lg text-ink-muted mt-1">
                    {edu.studyType} in {edu.area}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2 font-mono text-xs text-ink-muted">
                    <span>
                      {edu.startDate} – {edu.endDate}
                    </span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
