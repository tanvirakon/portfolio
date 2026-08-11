"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="container px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 border border-oxide/40 font-mono text-xs tracking-widest uppercase text-oxide">
            Available for Research
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-ink">
            {resumeData.basics.name}
          </h1>

          <div>
            <p className="text-xl md:text-2xl text-denim font-medium">
              CS student exploring computer vision.
            </p>
            <p className="mt-3 font-mono text-xs md:text-sm tracking-wide text-ink-muted">
              Undergraduate researcher · RUET · Rajshahi, Bangladesh
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
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
              className="inline-flex items-center gap-2 px-5 py-3 border border-oxide text-oxide font-mono text-sm tracking-wide hover:bg-oxide hover:text-paper transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-4 border border-ink-rule overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Tanvir Akon"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center 20%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted">
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  );
};
