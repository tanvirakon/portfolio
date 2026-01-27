"use client";

import { resumeData } from "@/data/resume";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { CodeChefIcon, CodeforcesIcon } from "./icons";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className="py-20 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/40 via-purple-900/10 to-transparent blur-3xl" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
                Let&apos;s Work <br /> Together.
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-xl text-gray-400 mb-12 font-light">
              Currently looking for research opportunities and scholarships for
              higher studies. Have an interesting project or just want to say
              hi?
            </p>

            <a
              href={`mailto:${resumeData.basics.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300 group"
            >
              <Mail className="group-hover:rotate-12 transition-transform" />
              Say Hello
            </a>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 md:flex gap-8 md:gap-16">
            {resumeData.basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="p-4 bg-gray-900 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300 border border-gray-800">
                  {profile.network === "GitHub" && <Github size={24} />}
                  {profile.network === "LinkedIn" && <Linkedin size={24} />}
                  {profile.network === "Codeforces" && (
                    <CodeforcesIcon className="w-6 h-6" />
                  )}
                  {/* Fallback/Custom Icons would go here */}
                  {!["GitHub", "LinkedIn", "Codeforces"].includes(
                    profile.network,
                  ) && <ArrowUpRight size={24} />}
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                  {profile.network}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {resumeData.basics.name}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
