"use client";

import { resumeData } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";
import { CodeforcesIcon, CodeChefIcon } from "./icons";
import { motion } from "framer-motion";

const letterVariants = {
  initial: { y: 60, opacity: 0 },
  whileInView: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.04,
    },
  }),
};

export const Contact = () => {
  const heading = "Correspondence.";

  return (
    <footer
      id="contact"
      className="py-20 border-t border-ink-rule"
    >
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter text-ink overflow-hidden">
              {heading.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="inline-block"
                  style={{ whiteSpace: char === " " ? "pre" : undefined }}
                >
                  {char}
                </motion.span>
              ))}
            </h2>
            <p className="max-w-xl mx-auto text-xl text-ink-muted mb-12">
              Currently looking for research opportunities and scholarships for
              higher studies.
            </p>

            <motion.a
              href={`mailto:${resumeData.basics.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 border border-ink font-mono text-ink hover:bg-ink hover:text-paper transition-colors duration-300 group"
            >
              <Mail className="group-hover:rotate-12 transition-transform" />
              {resumeData.basics.email}
            </motion.a>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 md:flex gap-8 md:gap-16">
            {resumeData.basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="p-4 border border-ink-rule group-hover:border-oxide group-hover:-translate-y-1 transition-all duration-300">
                  {profile.network === "GitHub" && <Github size={20} />}
                  {profile.network === "LinkedIn" && <Linkedin size={20} />}
                  {profile.network === "Codeforces" && (
                    <CodeforcesIcon className="w-5 h-5" />
                  )}
                  {profile.network === "CodeChef" && (
                    <CodeChefIcon className="w-5 h-5" />
                  )}
                </div>
                <span className="text-xs font-mono font-medium text-ink-muted group-hover:text-oxide transition-colors">
                  {profile.network}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-rule text-center text-ink-muted text-xs font-mono">
          <p>
            &copy; {new Date().getFullYear()} {resumeData.basics.name}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
