"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionLabelProps {
  title: string;
  id?: string;
}

export const SectionLabel = ({ title, id }: SectionLabelProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const underlineScaleX = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.2, 0.5], [20, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  return (
    <div className="mb-16" id={id} ref={ref}>
      <div>
        <div className="flex items-center gap-4 overflow-hidden">
          <motion.h2
            style={{ y: headingY, opacity: headingOpacity }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight text-ink"
          >
            {title}
          </motion.h2>
        </div>
        <motion.div
          style={{ scaleX: underlineScaleX }}
          className="mt-4 h-px bg-oxide origin-left"
        />
      </div>
    </div>
  );
};
