"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="container px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 border border-oxide/40 font-mono text-xs tracking-widest uppercase text-oxide">
            Available for Research
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight text-ink"
            >
              {resumeData.basics.name}
            </motion.h1>
          </div>

          <div className="text-xl md:text-2xl text-ink-muted font-mono h-20">
            <span className="inline-block text-oxide">
              <Typewriter
                options={{
                  strings: [
                    "CS Student @RUET",
                    "Full Stack Developer",
                    "Research Enthusiast",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </div>

          <div className="flex gap-4">
            {resumeData.basics.profiles.map((profile) => {
              const Icon =
                profile.network === "GitHub"
                  ? Github
                  : profile.network === "LinkedIn"
                    ? Linkedin
                    : null;
              if (!Icon) return null;

              return (
                <a
                  key={profile.network}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-ink-rule hover:border-oxide transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="p-3 border border-ink-rule hover:border-oxide transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 border border-oxide text-oxide font-mono text-sm tracking-wide hover:bg-oxide hover:text-white transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-4 border border-ink-rule overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Tanvir Akon"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center 20%",
                  transform: "scale(1.1)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};
