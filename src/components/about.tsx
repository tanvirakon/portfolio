"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-6 mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
           <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
           >
              <h3 className="text-2xl font-semibold mb-6">Biography</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-justify">
                {resumeData.basics.summary}
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <span className="text-4xl font-bold text-blue-600 block mb-1">3.50</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Current CGPA (Out of 4.00)</span>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <span className="text-4xl font-bold text-blue-600 block mb-1">5+</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</span>
                  </div>
              </div>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
           >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <GraduationCap className="text-blue-600" /> Education
              </h3>
              
              <div className="space-y-8">
                  {resumeData.education.map((edu, idx) => (
                      <div key={idx} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                          <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-600 rounded-full ring-4 ring-blue-100 dark:ring-blue-900/30" />
                          <h4 className="text-xl font-bold">{edu.institution}</h4>
                          <p className="text-lg text-gray-700 dark:text-gray-200">{edu.studyType} in {edu.area}</p>
                          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="flex items-center gap-1"><Calendar size={14} /> {edu.startDate} - {edu.endDate}</span>
                              <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                          </div>
                      </div>
                  ))}
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
