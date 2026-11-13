"use client";

import { useRef } from "react";

/**
 * A refined stopwatch (the brand mark, built as an object).
 * - The hand + faint wedge rotate together: the wedge is the time you have left.
 * - The crown is a real button: press it and the hand re-spins.
 * - Light comes from the top-left; the body is a soft gradient with a thin highlight.
 */
export function Stopwatch({
  angle,
  durationMs,
  easing,
  onCrown,
}: {
  angle: number;
  durationMs: number;
  easing: string;
  onCrown: () => void;
}) {
  const crownRef = useRef<HTMLButtonElement>(null);
  const C = 200; // centre x
  const CY = 232; // centre y
  const R_FACE = 130;
  const wedgeR = R_FACE / 2 - 4;
  const circ = 2 * Math.PI * wedgeR;
  const remaining = (360 - angle) / 360; // from the hand, clockwise, back to 12
  const rotateStyle = {
    transform: `rotate(${angle}deg)`,
    transformOrigin: `${C}px ${CY}px`,
    transition: `transform ${durationMs}ms ${easing}`,
  } as const;

  const ticks = Array.from({ length: 60 }, (_, i) => i);
  const numerals: [string, number][] = [
    ["12", 0],
    ["3", 90],
    ["6", 180],
    ["9", 270],
  ];

  return (
    <div className="relative mx-auto aspect-[400/430] w-full max-w-[420px] select-none">
      {/* Ground shadow: grows on impact so the landing reads as weight */}
      <div className="anim-ground absolute -bottom-4 left-[14%] right-[6%] h-6 rounded-[50%] bg-ink/40 blur-lg" />

      <div className="anim-watch absolute inset-0">
        {/* Side pusher, tucked behind the body */}
        <div className="absolute right-[13.5%] top-[13%] h-[9%] w-[6%] rotate-[42deg] rounded-[5px] bg-gradient-to-b from-[#3a4f66] to-ink shadow-soft" />

        {/* Crown: the interactive button, brushed steel. Pressing it sinks it into the case. */}
        <button
          ref={crownRef}
          type="button"
          aria-label="Restart the stopwatch"
          onClick={onCrown}
          className="absolute left-1/2 top-[1%] z-0 h-[21%] w-[17%] -translate-x-1/2 cursor-pointer rounded-lg bg-gradient-to-r from-[#1b2f45] via-[#46607b] to-[#1b2f45] shadow-soft transition-transform duration-150 [transition-timing-function:var(--ease-spring)] hover:-translate-y-0.5 active:translate-y-2 active:scale-x-105 active:scale-y-95"
        >
          <span className="absolute inset-x-1.5 top-1.5 h-[3px] rounded-full bg-white/25" />
        </button>

        <svg
          viewBox="0 0 400 430"
          className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
          role="img"
          aria-label="Stopwatch showing how much time you have left"
        >
          <defs>
            <linearGradient id="sw-body" x1="0.15" y1="0" x2="0.85" y2="1">
              <stop offset="0" stopColor="#4a8fc7" />
              <stop offset="0.5" stopColor="#2a6fa8" />
              <stop offset="1" stopColor="#123f66" />
            </linearGradient>
            <radialGradient id="sw-face" cx="0.38" cy="0.32" r="0.9">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#eef3f8" />
            </radialGradient>
            <filter id="sw-drop" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#0b1b2b" floodOpacity="0.28" />
            </filter>
          </defs>

          {/* Case */}
          <circle cx={C} cy={CY} r="170" fill="url(#sw-body)" filter="url(#sw-drop)" />
          <circle cx={C} cy={CY} r="169" fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1.5" />
          <circle cx={C} cy={CY} r="140" fill="none" stroke="#0b1b2b" strokeOpacity="0.35" strokeWidth="2" />
          {/* Polished highlight along the upper-left edge */}
          <path d="M 84 150 A 150 150 0 0 1 160 92" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="5" strokeLinecap="round" />

          {/* Face */}
          <circle cx={C} cy={CY} r={R_FACE} fill="url(#sw-face)" />
          <circle cx={C} cy={CY} r={R_FACE} fill="none" stroke="#0b1b2b" strokeOpacity="0.12" strokeWidth="1.5" />

          {/* Minute + hour ticks, hairline weight */}
          {ticks.map((i) => {
            const major = i % 5 === 0;
            const a = (i * 6 * Math.PI) / 180;
            const r1 = R_FACE - 7;
            const r2 = R_FACE - (major ? 20 : 13);
            return (
              <line
                key={i}
                x1={C + Math.sin(a) * r1}
                y1={CY - Math.cos(a) * r1}
                x2={C + Math.sin(a) * r2}
                y2={CY - Math.cos(a) * r2}
                stroke="#0b1b2b"
                strokeOpacity={major ? 0.85 : 0.35}
                strokeWidth={major ? 3 : 1.5}
                strokeLinecap="round"
              />
            );
          })}
          {numerals.map(([n, deg]) => {
            const a = (deg * Math.PI) / 180;
            return (
              <text
                key={n}
                x={C + Math.sin(a) * 88}
                y={CY - Math.cos(a) * 88 + 8}
                textAnchor="middle"
                fontSize="23"
                fontWeight="500"
                fill="#0b1b2b"
                fillOpacity="0.75"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                {n}
              </text>
            );
          })}

          {/* Rotating group: wedge + hand share one transform, so they never drift apart */}
          <g style={rotateStyle}>
            <circle
              cx={C}
              cy={CY}
              r={wedgeR}
              fill="none"
              stroke="#d9442b"
              strokeOpacity="0.13"
              strokeWidth={R_FACE - 34}
              strokeDasharray={`${circ * remaining} ${circ}`}
              transform={`rotate(-90 ${C} ${CY})`}
              style={{ transition: `stroke-dasharray ${durationMs}ms ${easing}` }}
            />
            {/* Slim hand with a counterweight tail */}
            <line x1={C} y1={CY + 28} x2={C} y2={CY - 110} stroke="#d9442b" strokeWidth="3.5" strokeLinecap="round" />
          </g>

          {/* Hub */}
          <circle cx={C} cy={CY} r="11" fill="#0b1b2b" />
          <circle cx={C} cy={CY} r="4" fill="#d9442b" />
        </svg>
      </div>
    </div>
  );
}
