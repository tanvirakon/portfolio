"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Tilt from "react-parallax-tilt";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {resumeData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={2500}
                className="h-full"
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="20px"
              >
                <div className="h-full flex flex-col bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-lg dark:shadow-none hover:shadow-2xl transition-shadow duration-300">
                  <div className="h-52 bg-gradient-to-br from-gray-200/50 to-gray-100/50 dark:from-gray-700/50 dark:to-gray-800/50 flex items-center justify-center relative overflow-hidden group">
                    {/* Pattern Overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                        backgroundSize: "16px 16px",
                      }}
                    />

                    {/* Placeholder or Image */}
                    <Code2
                      size={56}
                      className="text-gray-400/80 dark:text-gray-500/80 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out"
                    />

                    {/* Links Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/90 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                        >
                          <Github size={20} className="text-black" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/90 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                        >
                          <ExternalLink size={20} className="text-black" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600/80 dark:text-blue-400/80 mb-4 tracking-wide uppercase text-xs">
                      {project.description}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
