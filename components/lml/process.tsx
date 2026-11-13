"use client";

import { useEffect, useRef, useState } from "react";
import { STEPS } from "@/lib/site";
import { usePrefersReducedMotion } from "./use-reduced-motion";

// Two arcs through three markers at x = 167, 500, 833 (of 1000). The path is long enough to read as a journey.
const PATH = "M 167 70 C 250 -10, 417 -10, 500 70 C 583 150, 750 150, 833 70";
const VB_W = 1000;
const VB_H = 140;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2); // slow in, slow out

/** The one sequence on the page, so it's the one place numbers are earned. A stopwatch dot travels the arc as you scroll. */
export function Process() {
  const reduced = usePrefersReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);
  const [p, setP] = useState(0);
  const [dot, setDot] = useState({ x: 16.7, y: 50 });

  useEffect(() => {
    if (reduced) {
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh * 0.85 - r.top) / (vh * 0.5);
      setP(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const eased = ease(p);
  useEffect(() => {
    const el = path.current;
    if (!el) return;
    const len = el.getTotalLength();
    const pt = el.getPointAtLength(len * eased);
    setDot({ x: (pt.x / VB_W) * 100, y: (pt.y / VB_H) * 100 });
  }, [eased]);

  const reached = (i: number) => eased >= i * 0.5 - 0.001;

  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <h2 className="max-w-[18ch] text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.022em] text-balance">
        Three steps from panic to submitted
      </h2>

      <div ref={wrap} className="relative mt-14">
        {/* Desktop path */}
        <div className="relative mb-2 hidden h-[140px] md:block" aria-hidden="true">
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
            <path d={PATH} fill="none" stroke="var(--ink)" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            <path ref={path} d={PATH} fill="none" stroke="var(--lab-deep)" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - eased} />
          </svg>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${[16.7, 50, 83.3][i]}%`, top: "50%" }}
            >
              <span
                key={String(reached(i))}
                className={`grid h-12 w-12 place-items-center rounded-full border text-lg font-semibold shadow-soft transition-colors duration-200 ${
                  reached(i) ? "anim-pop border-lab-deep bg-lab-deep text-white" : "border-ink/15 bg-white text-ink"
                }`}
              >
                {i + 1}
              </span>
            </span>
          ))}
          {/* Follow-through: the dot lags the scroll a touch, so it trails the line instead of stapling to it */}
          <span
            className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-signal shadow-soft transition-[left,top] duration-300 [transition-timing-function:var(--ease-out)]"
            style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          />
        </div>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 md:block md:text-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink/15 bg-white text-lg font-semibold shadow-soft md:hidden">
                {i + 1}
              </span>
              <div>
                <h3 className="text-2xl font-semibold leading-tight tracking-tight">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[34ch] text-lg leading-snug text-ink/75">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
