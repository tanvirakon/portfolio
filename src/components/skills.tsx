"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { IconCloud } from "@/components/ui/icon-cloud";

export const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Skill Categories */}
          <div className="space-y-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Languages */}
              <motion.div
                variants={item}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Web Dev */}
              <motion.div
                variants={item}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  Web Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.web.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Core */}
                <motion.div
                  variants={item}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    Core
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.core.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Tools */}
                <motion.div
                  variants={item}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center relative order-first lg:order-last"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <IconCloud />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
