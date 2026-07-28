"use client";

import { resumeData } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";
import { CodeforcesIcon, CodeChefIcon } from "./icons";
import { motion } from "framer-motion";

export const Contact = () => {
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
            <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter text-ink">
              Correspondence.
            </h2>
            <p className="max-w-xl mx-auto text-xl text-ink-muted mb-12">
              Currently looking for research opportunities and scholarships for
              higher studies.
            </p>

            <a
              href={`mailto:${resumeData.basics.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 border border-ink font-mono text-ink hover:bg-ink hover:text-paper transition-all duration-300 group"
            >
              <Mail className="group-hover:rotate-12 transition-transform" />
              {resumeData.basics.email}
            </a>
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
                <div className="p-4 border border-ink-rule group-hover:border-oxide transition-colors duration-300">
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
