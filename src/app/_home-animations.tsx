"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";

// Animated hero draw illustration (jaw/facial profile)
export function HeroIllustration() {
  const prefersReduced = useReducedMotion();

  const draw = (delay: number, duration: number) =>
    prefersReduced
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration, delay, ease: "easeInOut" as const },
        };

  return (
    <motion.svg
      viewBox="0 0 380 420"
      fill="none"
      stroke="#0F5C63"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-auto"
      initial="hidden"
      animate="visible"
      aria-label="Monoline illustration of a dental implant treatment cycle"
    >
      {/* Soft accent background circles */}
      <circle cx="190" cy="200" r="165" fill="#DCEBEA" opacity="0.35" stroke="none" />
      <circle cx="190" cy="200" r="130" fill="#DCEBEA" opacity="0.2" stroke="none" />

      {/* Outer cranial/skull silhouette */}
      <motion.path
        d="M110 320 C80 280 60 230 65 180 C70 110 125 55 190 50 C255 55 310 110 315 180 C320 230 300 280 270 320"
        strokeWidth="1.8"
        {...draw(0.1, 1.4)}
      />

      {/* Lower jaw / mandible arc */}
      <motion.path
        d="M110 320 C120 355 150 380 190 385 C230 380 260 355 270 320"
        strokeWidth="1.8"
        {...draw(0.8, 0.9)}
      />

      {/* Upper teeth row - simplified */}
      <motion.path
        d="M135 290 C145 260 175 248 190 248 C205 248 235 260 245 290"
        strokeWidth="1.6"
        {...draw(1.2, 0.6)}
      />

      {/* 3 upper tooth outlines */}
      <motion.path
        d="M152 290 L148 265 C148 258 156 252 162 254 L170 254 C176 252 180 258 180 265 L176 290"
        strokeWidth="1.4"
        {...draw(1.5, 0.5)}
      />
      <motion.path
        d="M182 290 L180 262 C180 255 188 250 192 250 C196 250 204 255 204 262 L202 290"
        strokeWidth="1.4"
        {...draw(1.6, 0.5)}
      />
      <motion.path
        d="M208 290 L210 265 C210 258 218 252 224 254 L232 254 C238 252 242 258 242 265 L238 290"
        strokeWidth="1.4"
        {...draw(1.7, 0.5)}
      />

      {/* Lower gum baseline */}
      <motion.path
        d="M140 300 C155 310 175 314 192 314 C209 314 229 310 244 300"
        stroke="#D9C7A8"
        strokeWidth="2"
        {...draw(1.8, 0.5)}
      />

      {/* Dental implant in lower jaw — screw body */}
      <motion.line x1="192" y1="314" x2="192" y2="358"
        strokeWidth="3"
        stroke="#0F5C63"
        {...draw(2.0, 0.4)}
      />
      <motion.line x1="183" y1="322" x2="201" y2="322"
        strokeWidth="1.5" {...draw(2.2, 0.3)} />
      <motion.line x1="184" y1="330" x2="200" y2="330"
        strokeWidth="1.5" {...draw(2.3, 0.3)} />
      <motion.line x1="186" y1="338" x2="198" y2="338"
        strokeWidth="1.5" {...draw(2.4, 0.3)} />
      <motion.line x1="188" y1="346" x2="196" y2="346"
        strokeWidth="1.5" {...draw(2.5, 0.3)} />

      {/* Crown on top of implant */}
      <motion.path
        d="M178 314 L176 298 C176 289 184 284 192 284 C200 284 208 289 208 298 L206 314"
        fill="#DCEBEA" fillOpacity="0.5"
        strokeWidth="1.6"
        {...draw(2.6, 0.5)}
      />

      {/* Verification check mark — upper right */}
      <motion.path
        d="M290 90 C300 78 320 78 320 90 L320 130 C320 142 300 148 290 136 Z"
        fill="#DCEBEA" fillOpacity="0.5"
        strokeWidth="1.4"
        {...draw(0.5, 0.5)}
      />
      <motion.path
        d="M300 112 L308 120 L322 102"
        strokeWidth="2"
        stroke="#0F5C63"
        {...draw(2.8, 0.35)}
      />

      {/* Small decorative dots */}
      <motion.circle cx="80" cy="160" r="3.5" fill="#D9C7A8" stroke="none"
        {...(prefersReduced ? {} : { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 1.0, duration: 0.3 } })}
      />
      <motion.circle cx="300" cy="240" r="2.5" fill="#D9C7A8" stroke="none"
        {...(prefersReduced ? {} : { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 1.2, duration: 0.3 } })}
      />
    </motion.svg>
  );
}

// CountUp: increments to target when in view
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();
  const [count, setCount] = React.useState(prefersReduced ? value : 0);

  React.useEffect(() => {
    if (!inView || prefersReduced) return;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration, prefersReduced]);

  return (
    <span ref={ref}>
      {prefix}
      {new Intl.NumberFormat("en-IN").format(count)}
      {suffix}
    </span>
  );
}

// Animated timeline connector line
export function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  return (
    <div
      ref={ref}
      className="hidden md:block absolute top-8 left-0 right-0 h-[1.5px] bg-[#E4DFD6] overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="h-full bg-[#0F5C63] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView && !prefersReduced ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  );
}
