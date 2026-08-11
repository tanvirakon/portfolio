"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { useSkillHighlight } from "@/components/ui/skill-highlight-context";

export const Projects = () => {
  const { highlightedSkill } = useSkillHighlight();

  return (
    <section id="projects" className="py-20 border-t border-ink-rule">
      <div className="container px-6 mx-auto">
        <SectionLabel title="Featured Projects" />

        <div className="grid md:grid-cols-2 gap-10">
          {resumeData.projects.map((project, idx) => {
            const isHighlighted = highlightedSkill
              ? project.tech.some((t) =>
                  t.toLowerCase().includes(highlightedSkill.toLowerCase()),
                )
              : false;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <div
                  className={`group h-full flex flex-col bg-paper dark:bg-ink-faint border border-ink-rule hover:border-denim transition-colors duration-300 ${
                    isHighlighted
                      ? "ring-2 ring-oxide/50 shadow-[0_0_30px_rgba(var(--color-oxide-rgb),0.15)]"
                      : ""
                  }`}
                >
                  <div className="h-52 bg-ink-faint flex items-center justify-center relative overflow-hidden">
                    <span className="font-display text-6xl text-ink-muted/20 transition-transform duration-500 group-hover:scale-110">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-paper border border-ink-rule hover:border-oxide transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                        >
                          <Github size={16} className="text-ink" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-paper border border-ink-rule hover:border-oxide transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 [transition-delay:75ms]"
                        >
                          <ExternalLink size={16} className="text-ink" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-display font-bold mb-2 text-ink">
                      {project.name}
                    </h3>
                    <p className="font-mono text-xs text-oxide mb-4 tracking-wide uppercase">
                      {project.description}
                    </p>
                    <p className="text-ink-muted text-base leading-relaxed mb-6 line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 border border-ink-rule font-mono text-ink-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
