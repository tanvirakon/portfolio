"use client";

import { resumeData } from "@/data/resume";
import { ParticleBackground } from "@/components/ui/particles";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <ParticleBackground />
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-700 pointer-events-none" />

      <div className="container px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
            Available for Research Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m <br />
            <span className="text-blue-600 dark:text-blue-400">
              {resumeData.basics.name}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
            {resumeData.basics.label}. Focusing on {resumeData.skills.core[0]},{" "}
            {resumeData.skills.core[1]} and Web Technologies.
          </p>
          


          <div className="flex gap-4 pt-4">
            {resumeData.basics.profiles.map((profile) => {
              const Icon = profile.network === "GitHub" ? Github : profile.network === "LinkedIn" ? Linkedin : null;
              if (!Icon) return null;
              
              return (
                <a
                  key={profile.network}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </a>
              );
            })}
            <a
               href={`mailto:${resumeData.basics.email}`}
               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
                <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full opacity-20 blur-2xl animate-spin-slow" />
             <div className="absolute inset-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden border-4 border-white dark:border-gray-950" 
                  style={{ boxShadow: "10px 0 50px -20px rgba(255, 255, 255, 0.3)" }}>
                {/* Placeholders for Image. 
                    I'd normally use next/image but I don't have the image file in the project. 
                    I'll use a placeholder or initials. */}
                <img 
                    src="/profile.jpg" 
                    alt="Tanvir Akon" 
                    className="w-full h-full object-cover"
                    style={{
                        objectPosition: "center center", // Adjust this (e.g., "50% 20%") to move the image X Y
                        transform: "scale(1.1)" // Adjust this (e.g., "scale(1.2)") to zoom in
                    }}
                />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
