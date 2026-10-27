"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  className = "",
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const revealWhenInView = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      if (rect.top < window.innerHeight - 40 && rect.bottom > 40) {
        setIsVisible(true);
        window.removeEventListener("scroll", revealWhenInView);
        window.removeEventListener("resize", revealWhenInView);
      }
    };

    revealWhenInView();
    window.addEventListener("scroll", revealWhenInView, { passive: true });
    window.addEventListener("resize", revealWhenInView);
    return () => {
      window.removeEventListener("scroll", revealWhenInView);
      window.removeEventListener("resize", revealWhenInView);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isVisible ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
