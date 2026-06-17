"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { FlaskConical, BookOpen, User, Clock } from "lucide-react";

export const Research = () => {
  return (
    <section id="research" className="py-20">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Research experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {resumeData.research.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Glow backdrop */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />

              <div className="relative p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Type badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full">
                    <FlaskConical size={14} />
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 leading-snug text-gray-900 dark:text-white">
                  <BookOpen
                    size={20}
                    className="inline-block mr-2 text-blue-600 dark:text-blue-400 -mt-0.5"
                  />
                  {item.title}
                </h3>

                {/* Meta row */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <User size={14} className="text-blue-500" />
                    {item.role}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-amber-500" />
                    {item.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
