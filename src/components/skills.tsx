"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";

export const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Languages</h3>
                <div className="flex flex-wrap gap-2">
                    {resumeData.skills.languages.map(skill => (
                        <motion.span 
                            key={skill} 
                            variants={item}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Web Dev */}
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                    {resumeData.skills.web.map(skill => (
                        <motion.span 
                            key={skill} 
                            variants={item}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Core */}
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Core Concepts</h3>
                <div className="flex flex-wrap gap-2">
                    {resumeData.skills.core.map(skill => (
                        <motion.span 
                            key={skill} 
                            variants={item}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

             {/* Tools */}
             <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 md:col-span-2 lg:col-span-3"
            >
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                    {resumeData.skills.tools.map(skill => (
                        <motion.span 
                            key={skill} 
                            variants={item}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
