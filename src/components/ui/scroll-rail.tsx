"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollRail = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed left-0 top-0 bottom-0 w-px z-50 hidden md:block">
      <motion.div
        style={{ scaleY: scaleX }}
        className="w-full bg-oxide origin-top"
      />
    </div>
  );
};
