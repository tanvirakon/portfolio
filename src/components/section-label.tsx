"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  title: string;
  id?: string;
}

export const SectionLabel = ({ title, id }: SectionLabelProps) => {
  return (
    <div className="mb-16" id={id}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-ink">
            {title}
          </h2>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 h-px bg-oxide origin-left"
        />
      </motion.div>
    </div>
  );
};
