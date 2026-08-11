"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { ExternalLink } from "lucide-react";

export const Research = () => {
  return (
    <section id="research" className="py-20 border-t border-ink-rule">
      <div className="container px-6 mx-auto">
        <SectionLabel title="Research" />

        <div className="space-y-8">
          {resumeData.research.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative"
            >
              <article className="group border-y border-ink-rule py-8 md:py-10 transition-colors duration-300 hover:border-denim">
                <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-14">
                  <div>
                    <span className="inline-flex items-center border border-denim/30 px-3 py-1 font-mono text-xs tracking-wider text-denim">
                      {item.type}
                    </span>

                    <h3 className="mt-5 max-w-3xl text-2xl font-display font-bold leading-snug text-ink md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-3xl text-ink-muted leading-relaxed">
                      {item.description}
                    </p>

                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-denim transition-colors hover:text-oxide"
                      >
                        View paper
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <dl className="grid content-start gap-5 border-l border-ink-rule pl-6 font-mono text-xs">
                    <div>
                      <dt className="mb-1 uppercase tracking-widest text-ink-muted">
                        Status
                      </dt>
                      <dd className="text-oxide">{item.status}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 uppercase tracking-widest text-ink-muted">
                        Role
                      </dt>
                      <dd className="text-ink">{item.role}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 uppercase tracking-widest text-ink-muted">
                        Domain
                      </dt>
                      <dd className="text-ink">{item.domain}</dd>
                    </div>
                    <div>
                      <dt className="mb-2 uppercase tracking-widest text-ink-muted">
                        Methods
                      </dt>
                      <dd className="flex flex-wrap gap-2">
                        {item.methods.map((method) => (
                          <span
                            key={method}
                            className="border border-ink-rule px-2 py-1 text-ink"
                          >
                            {method}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
