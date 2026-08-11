"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const ringX = useSpring(cursorX, ringConfig);
  const ringY = useSpring(cursorY, ringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring — follows with spring lag */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-oxide/60 z-[9999] pointer-events-none hidden md:block"
        style={{
          translateX: ringX,
          translateY: ringY,
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
          backgroundColor: isHovering
            ? "rgba(var(--color-oxide-rgb), 0.08)"
            : "rgba(var(--color-oxide-rgb), 0)",
          borderColor: isHovering
            ? "rgba(var(--color-oxide-rgb), 0.9)"
            : "rgba(var(--color-oxide-rgb), 0.5)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      {/* Inner cross — tracks instantly */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: 8,
          y: 8,
          width: 16,
          height: 16,
        }}
      >
        {/* Cross bar — horizontal */}
        <motion.div
          className="absolute top-1/2 left-0 w-full bg-oxide"
          style={{ height: 1.5, marginTop: -0.75 }}
          animate={{
            rotate: isHovering ? 45 : 0,
            scaleY: isHovering ? 0.7 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        />
        {/* Cross bar — vertical */}
        <motion.div
          className="absolute left-1/2 top-0 h-full bg-oxide"
          style={{ width: 1.5, marginLeft: -0.75 }}
          animate={{
            rotate: isHovering ? 45 : 0,
            scaleX: isHovering ? 0.7 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        />
      </motion.div>
    </>
  );
};
