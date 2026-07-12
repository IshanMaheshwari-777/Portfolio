"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values update the cursor position directly on the compositor —
  // no React re-render per mousemove.
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 1200, damping: 30, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 1200, damping: 30, mass: 0.1 });

  useEffect(() => {
    // Only take over the cursor for mouse users who haven't asked for reduced motion.
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    document.body.style.cursor = "none";

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          !!target.closest("button") ||
          !!target.closest("a") ||
          !!target.dataset.magnetic
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 flex items-center justify-center mix-blend-screen"
      style={{ x: springX, y: springY }}
      animate={{
        scale: isHovered ? 1.5 : 1,
        backgroundColor: isHovered ? "rgba(124, 58, 237, 0.4)" : "rgba(124, 58, 237, 0)",
        border: isHovered ? "1px solid rgba(124, 58, 237, 0)" : "1px solid rgba(124, 58, 237, 0.8)",
      }}
    >
      <motion.div
        className="w-1.5 h-1.5 bg-accent2 rounded-full"
        animate={{ scale: isHovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
