import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
