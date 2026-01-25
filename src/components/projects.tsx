"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
                   {/* Placeholder for project screenshot */}
                   <Code2 size={48} className="text-gray-400 dark:text-gray-500 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                       {project.repo && (
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors">
                                <Github size={20} className="text-black" />
                            </a>
                       )}
                       {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors">
                                <ExternalLink size={20} className="text-black" />
                            </a>
                       )}
                   </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                <p className="text-sm font-semibold text-blue-500 mb-3">{project.description}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300">
                            {t}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
