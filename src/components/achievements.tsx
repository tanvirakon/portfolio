"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Trophy, Heart, ExternalLink } from "lucide-react";

export const Achievements = () => {
  return (
    <section className="py-20">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* CP */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <Trophy className="text-yellow-500" /> Competitive Programming
                </h3>
                <div className="space-y-4">
                    {resumeData.achievements.map((ach, idx) => (
                        <a 
                            key={idx} 
                            href={ach.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold">{ach.platform}</h4>
                                    <p className="text-blue-600 font-medium">{ach.rating}</p>
                                </div>
                                <ExternalLink size={18} className="text-gray-400" />
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>

            {/* Volunteering */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <Heart className="text-red-500" /> Activities
                </h3>
                <div className="space-y-6">
                    {resumeData.volunteering.map((vol, idx) => (
                        <div key={idx} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                             <div className="absolute top-0 left-[-7px] w-3 h-3 bg-red-500 rounded-full" />
                             <h4 className="font-bold text-lg">{vol.organization}</h4>
                             <p className="text-sm font-medium text-gray-500 mb-2">{vol.role}</p>
                             <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {vol.summary}
                             </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
