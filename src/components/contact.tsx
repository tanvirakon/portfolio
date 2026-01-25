"use client";

import { resumeData } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";
import { CodeChefIcon, CodeforcesIcon } from "./icons";

export const Contact = () => {
  return (
    <footer id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container px-6 mx-auto text-center">
         <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
         <p className="max-w-xl mx-auto text-gray-400 mb-12">
            I&apos;m currently looking for research opportunities and scholarships for higher studies. 
            If you have any questions or just want to say hi, feel free to reach out!
         </p>

         <div className="flex justify-center gap-8 mb-12">
            {resumeData.basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                {profile.network === "GitHub" && <Github size={24} />}
                {profile.network === "LinkedIn" && <Linkedin size={24} />}
                {profile.network === "Codeforces" && <CodeforcesIcon className="w-6 h-6" />}
                {profile.network === "CodeChef" && <img src="/codechef.png" alt="CodeChef" className="w-6 h-6 rounded-full" />}
              </a>
            ))}
            <a
               href={`mailto:${resumeData.basics.email}`}
               className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
            >
                <Mail size={24} />
            </a>
         </div>

         <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.</p>
            <p className="mt-2 text-xs">Built with Next.js, Tailwind CSS & Framer Motion</p>
         </div>
      </div>
    </footer>
  );
};
