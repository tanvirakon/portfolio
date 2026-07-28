"use client";

import { resumeData } from "@/data/resume";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { useRef, useEffect, useState } from "react";

const AnimatedNumber = ({ value, decimals = 2 }: { value: number; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0.00");

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(current.toFixed(decimals));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, decimals]);

  return <span ref={ref} className="font-mono">{display}</span>;
};

export const About = () => {
  return (
    <section id="about" className="py-20 border-t border-ink-rule">
      <div className="container px-6 mx-auto">
        <SectionLabel title="Bio" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-ink leading-relaxed text-lg text-justify">
              {resumeData.basics.summary}
            </p>

            <div className="mt-8 font-mono text-sm text-ink-muted flex items-center gap-4">
              <span>CGPA <AnimatedNumber value={3.50} /></span>
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
            viewport={{ once: true, margin: "-50px" }}
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
