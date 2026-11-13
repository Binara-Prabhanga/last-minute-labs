"use client";

import { useRef } from "react";

/**
 * A chunky, solid stopwatch (the brand mark, built as an object).
 * - The hand + red wedge rotate together: the wedge is the time you have left.
 * - The crown is a real button: press it and the hand re-spins.
 * - Light comes from the top-left, so the shadow ledge falls bottom-right.
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
  const R_FACE = 128;
  // Wedge = fat stroke on a half-radius circle. Dash length = fraction of a full turn.
  const wedgeR = R_FACE / 2 - 4;
  const circ = 2 * Math.PI * wedgeR;
  const remaining = (360 - angle) / 360; // from the hand, clockwise, back to 12
  const rotateStyle = {
    transform: `rotate(${angle}deg)`,
    transformOrigin: `${C}px ${CY}px`,
    transition: `transform ${durationMs}ms ${easing}`,
  } as const;

  const ticks = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="relative mx-auto aspect-[400/430] w-full max-w-[420px] select-none">
      {/* Ground shadow: grows on impact (staging, so the drop reads as weight) */}
      <div className="anim-ground absolute -bottom-3 left-[12%] right-[2%] h-6 rounded-[50%] bg-ink/30 blur-[2px]" />

      <div className="anim-watch absolute inset-0">
        {/* Side button (decorative), tucked behind the body */}
        <div className="absolute right-[13%] top-[12.5%] h-[10%] w-[7.5%] rotate-[42deg] rounded-md border-[3px] border-ink bg-lab" />

        {/* Crown: the interactive button. Pushed down on press = squash. */}
        <button
          ref={crownRef}
          type="button"
          aria-label="Restart the stopwatch"
          onClick={onCrown}
          className="absolute left-1/2 top-0 z-0 h-[22%] w-[19%] -translate-x-1/2 cursor-pointer rounded-xl border-[3px] border-ink bg-signal shadow-[0_5px_0_var(--ink)] transition-transform duration-150 [transition-timing-function:var(--ease-spring)] hover:-translate-y-0.5 active:translate-y-[9px] active:scale-x-110 active:scale-y-90"
        >
          <span className="absolute left-2 top-2 h-1.5 w-[55%] rounded-full bg-white/50" />
        </button>

        <svg viewBox="0 0 400 430" className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible" role="img" aria-label="Stopwatch showing how much time you have left">
          {/* Solid ledge shadow */}
          <circle cx={C + 10} cy={CY + 12} r="170" fill="var(--ink)" />
          {/* Rim */}
          <circle cx={C} cy={CY} r="170" fill="var(--lab)" stroke="var(--ink)" strokeWidth="6" />
          {/* Rim highlight (top-left) and core shade (bottom-right) */}
          <path d="M 78 150 A 150 150 0 0 1 150 92" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="9" strokeLinecap="round" />
          <path d="M 322 318 A 150 150 0 0 1 262 366" fill="none" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="9" strokeLinecap="round" />
          {/* Face */}
          <circle cx={C} cy={CY} r={R_FACE + 6} fill="var(--ink)" />
          <circle cx={C} cy={CY} r={R_FACE} fill="#fff" />
          <path d="M 96 232 A 104 104 0 0 1 200 128" fill="none" stroke="var(--sky)" strokeWidth="14" strokeLinecap="round" opacity="0.7" />

          {/* Ticks: 12 hour marks heavier than the 48 minute marks */}
          {ticks.map((i) => {
            const major = i % 5 === 0;
            const a = (i * 6 * Math.PI) / 180;
            const r1 = R_FACE - 8;
            const r2 = R_FACE - (major ? 24 : 15);
            return (
              <line
                key={i}
                x1={C + Math.sin(a) * r1}
                y1={CY - Math.cos(a) * r1}
                x2={C + Math.sin(a) * r2}
                y2={CY - Math.cos(a) * r2}
                stroke="var(--ink)"
                strokeWidth={major ? 5 : 2}
                strokeLinecap="round"
              />
            );
          })}

          {/* Rotating group: wedge + hand share one transform, so they never drift apart */}
          <g style={rotateStyle}>
            <circle
              cx={C}
              cy={CY}
              r={wedgeR}
              fill="none"
              stroke="var(--signal)"
              strokeOpacity="0.22"
              strokeWidth={R_FACE - 30}
              strokeDasharray={`${circ * remaining} ${circ}`}
              // dash starts at 3 o'clock by default; -90deg moves it to the hand (12 o'clock in this group)
              transform={`rotate(-90 ${C} ${CY})`}
              style={{ transition: `stroke-dasharray ${durationMs}ms ${easing}` }}
            />
            {/* Hand with a counterweight tail */}
            <line x1={C} y1={CY + 26} x2={C} y2={CY - 104} stroke="var(--ink)" strokeWidth="14" strokeLinecap="round" />
            <line x1={C} y1={CY + 26} x2={C} y2={CY - 104} stroke="var(--signal)" strokeWidth="8" strokeLinecap="round" />
            <circle cx={C} cy={CY - 104} r="9" fill="var(--signal)" stroke="var(--ink)" strokeWidth="4" />
          </g>

          {/* Hub */}
          <circle cx={C} cy={CY} r="17" fill="var(--ink)" />
          <circle cx={C} cy={CY} r="7" fill="var(--signal)" />
        </svg>
      </div>
    </div>
  );
}
