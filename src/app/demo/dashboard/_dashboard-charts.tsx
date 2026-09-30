"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface BarDatum {
  label: string;
  value: number;
  maxValue: number;
}

interface LineDatum {
  label: string;
  value: number;
}

interface MetricCardProps {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
  sub?: string;
  delay?: number;
}

// ─── COUNT-UP ─────────────────────────────────────────────────────────────────
function CountUp({
  value,
  duration = 1200,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [count, setCount] = React.useState(reduced ? value : 0);

  React.useEffect(() => {
    if (!inView || reduced) return;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration, reduced]);

  return <span ref={ref}>{new Intl.NumberFormat("en-IN").format(count)}</span>;
}

// ─── METRIC CARD ──────────────────────────────────────────────────────────────
export function MetricCard({ label, value, suffix = "", icon, sub, delay = 0 }: MetricCardProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="bg-white rounded-[14px] border border-[#E4DFD6] p-5 sm:p-6 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-[10px] bg-[#DCEBEA] flex items-center justify-center text-[#0F5C63] flex-shrink-0">
          {icon}
        </div>
        <span className="text-[10px] text-[#9BA7AE] border border-[#E4DFD6] px-2 py-1 rounded-full">Sample</span>
      </div>
      <div>
        <p className="font-serif text-[2.6rem] text-[#16232B] font-normal leading-none">
          <CountUp value={value} />{suffix}
        </p>
        <p className="text-sm text-[#5B6870] mt-1">{label}</p>
        {sub && <p className="text-[11px] text-[#9BA7AE] mt-0.5">{sub}</p>}
      </div>
    </motion.div>
  );
}

// ─── HORIZONTAL BAR CHART ─────────────────────────────────────────────────────
export function HorizontalBars({
  data,
  delay = 0,
}: {
  data: BarDatum[];
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="space-y-4">
      {data.map((d, i) => {
        const pct = Math.round((d.value / d.maxValue) * 100);
        return (
          <div key={d.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-[#16232B]">{d.label}</span>
              <span className="text-sm font-medium text-[#0F5C63]">{d.value}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#DCEBEA]/60 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#0F5C63]"
                initial={{ width: "0%" }}
                animate={{ width: inView ? `${pct}%` : "0%" }}
                transition={{
                  duration: reduced ? 0 : 0.7,
                  delay: reduced ? 0 : delay + i * 0.08,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── VERTICAL BAR CHART ───────────────────────────────────────────────────────
export function VerticalBars({
  data,
  delay = 0,
}: {
  data: BarDatum[];
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="flex items-end gap-2 h-32">
      {data.map((d, i) => {
        const pct = Math.round((d.value / d.maxValue) * 100);
        return (
          <div key={d.label} className="flex flex-col items-center flex-1 gap-1.5">
            <span className="text-[10px] text-[#0F5C63] font-medium">{d.value}</span>
            <div className="w-full relative flex items-end" style={{ height: "96px" }}>
              <motion.div
                className="w-full rounded-t-[4px] bg-[#0F5C63]/15 hover:bg-[#0F5C63]/25 transition-colors relative overflow-hidden"
                initial={{ height: "0%" }}
                animate={{ height: inView ? `${pct}%` : "0%" }}
                transition={{
                  duration: reduced ? 0 : 0.6,
                  delay: reduced ? 0 : delay + i * 0.06,
                  ease: "easeOut",
                }}
                style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[4px] bg-[#0F5C63]" />
              </motion.div>
            </div>
            <span className="text-[10px] text-[#9BA7AE] text-center leading-tight">{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── SVG LINE CHART ───────────────────────────────────────────────────────────
export function LineChart({
  data,
  delay = 0,
}: {
  data: LineDatum[];
  delay?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const W = 480;
  const H = 100;
  const pad = 12;
  const max = Math.max(...data.map((d) => d.value), 1);

  const pts = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (W - pad * 2);
    const y = H - pad - ((d.value / max) * (H - pad * 2));
    return { x, y, ...d };
  });

  const polyline = pts.map((p) => `${p.x},${p.y}`).join(" ");
  const fill = [
    ...pts.map((p) => `${p.x},${p.y}`),
    `${pts[pts.length - 1].x},${H}`,
    `${pts[0].x},${H}`,
  ]
    .map((p) => p)
    .join(" ");

  // approximate total path length for dash animation
  const pathLength = "1";

  return (
    <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="w-full">
      <svg
        ref={ref}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto overflow-visible"
        aria-label="Weekly activity trend line chart"
      >
        {/* Grid lines */}
        {[0.25, 0.5, 0.75, 1].map((v) => (
          <line
            key={v}
            x1={pad}
            y1={H - pad - v * (H - pad * 2)}
            x2={W - pad}
            y2={H - pad - v * (H - pad * 2)}
            stroke="#E4DFD6"
            strokeWidth="1"
          />
        ))}

        {/* Fill area */}
        <motion.polygon
          points={fill}
          fill="#0F5C63"
          fillOpacity={0.06}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay + 0.4 }}
        />

        {/* Line */}
        <motion.polyline
          points={polyline}
          fill="none"
          stroke="#0F5C63"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={pathLength}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 1.0, delay: reduced ? 0 : delay, ease: "easeInOut" }}
        />

        {/* Dots */}
        {pts.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={3.5}
            fill="#0F5C63"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
            transition={{ duration: reduced ? 0 : 0.3, delay: reduced ? 0 : delay + 0.9 + i * 0.05 }}
          />
        ))}
      </svg>

      {/* X-axis labels */}
      <div className="flex justify-between mt-1">
        {pts.map((p, i) => (
          <span key={i} className="text-[10px] text-[#9BA7AE] text-center" style={{ width: `${100 / pts.length}%` }}>
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}
