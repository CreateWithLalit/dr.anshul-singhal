"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface TextRevealProps {
  lines: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  lineClassName?: string;
  delay?: number;
}

export function TextReveal({
  lines,
  as: Component = "h1",
  className = "",
  lineClassName = "",
  delay = 0,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const fullText = lines.join(" ");

  if (shouldReduceMotion) {
    return (
      <Component className={className}>
        {lines.map((line, idx) => (
          <span key={idx} className={`block ${lineClassName}`}>
            {line}
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component className={className} aria-label={fullText}>
      {lines.map((line, idx) => (
        <span
          key={idx}
          className="block overflow-hidden"
          aria-hidden="true"
        >
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: delay + idx * 0.12,
              ease: "easeOut",
            }}
            className={`block ${lineClassName}`}
          >
            {line}
          </motion.span>
        </span>
      ))}
      {/* Visually hidden node for assistive screen readers */}
      <span className="sr-only">{fullText}</span>
    </Component>
  );
}
