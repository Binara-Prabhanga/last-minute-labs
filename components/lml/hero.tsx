"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { DEADLINES, wa } from "@/lib/site";
import { Stopwatch } from "./stopwatch";
import { WhatsAppIcon } from "./whatsapp-icon";
import { usePrefersReducedMotion } from "./use-reduced-motion";

const SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)";
const WIND = "cubic-bezier(0.3, 0, 0.5, 1)";

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(1);
  const target = DEADLINES[index].angle;
  // Start one full turn early (same visual position) so the intro is a clean forward spin.
  const [angle, setAngle] = useState(target - 360);
  const [dur, setDur] = useState(0);
  const [ease, setEase] = useState(SPRING);
  const timers = useRef<number[]>([]);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };
  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  // Intro: after the watch lands, the hand spins a full turn and settles with overshoot.
  useEffect(() => {
    if (reduced) {
      setAngle(target);
      return;
    }
    later(() => {
      setDur(1250);
      setAngle(target);
    }, 750);
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  /** Pose to pose: wind back (anticipation), swing past (overshoot), settle (follow-through). */
  const moveTo = (next: number) => {
    const to = DEADLINES[next].angle;
    clear();
    setIndex(next);
    if (reduced) {
      setDur(0);
      setAngle(to);
      return;
    }
    const dir = Math.sign(to - angle) || 1;
    setEase(WIND);
    setDur(130);
    setAngle(angle - dir * 14);
    later(() => {
      setEase(SPRING);
      setDur(720);
      setAngle(to);
    }, 130);
  };

  const replay = () => {
    clear();
    if (reduced) return;
    setEase(WIND);
    setDur(0);
    setAngle(target - 360);
    later(() => {
      setEase(SPRING);
      setDur(1100);
      setAngle(target);
    }, 40);
  };

  const d = DEADLINES[index];
  const message = `Hi Last Minute Labs, my deadline is ${d.label.toLowerCase()}. I need help with: `;

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Stage: one flat circle behind the watch gives it a place to land */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-sky lg:right-[-6rem] lg:top-[-4rem] lg:h-[46rem] lg:w-[46rem]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-x-12 gap-y-6 px-5 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-16">
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <h1 className="text-balance text-[clamp(2.75rem,7.2vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.025em]">
            <span className="anim-rise block" style={{ animationDelay: "650ms" }}>
              Deadline close?
            </span>
            <span className="anim-rise block" style={{ animationDelay: "780ms" }}>
              We&apos;ll build it.
            </span>
          </h1>
          <p
            className="anim-rise mt-6 max-w-[34ch] text-xl leading-snug text-ink/80 sm:text-2xl"
            style={{ animationDelay: "920ms" }}
          >
            We help university students finish their toughest IT projects, on time and with confidence.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Stopwatch angle={angle} durationMs={dur} easing={ease} onCrown={replay} />
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          {/* Deadline picker */}
          <div className="anim-rise max-w-xl" style={{ animationDelay: "1050ms" }}>
            <fieldset>
              <legend className="mb-3 text-lg font-bold">How long do you have?</legend>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {DEADLINES.map((opt, i) => (
                  <label key={opt.id} className="block">
                    <input
                      type="radio"
                      name="deadline"
                      value={opt.id}
                      checked={i === index}
                      onChange={() => moveTo(i)}
                      className="peer sr-only"
                    />
                    <span className="chip">
                      <span className="text-lg font-extrabold leading-none">{opt.label}</span>
                      <span className="text-sm leading-tight opacity-70">{opt.hint}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Answer panel: swaps instantly (well under 400ms) and pops so the change is seen */}
            <div
              key={d.id}
              aria-live="polite"
              className="anim-pop mt-6 rounded-2xl border-[3px] border-ink bg-white p-5 shadow-[0_6px_0_var(--ink)]"
            >
              <p className="text-xl font-extrabold leading-tight">{d.title}</p>
              <p className="mt-1.5 max-w-[46ch] text-base leading-relaxed text-ink/80">{d.body}</p>
            </div>

            <a
              href={wa(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn wind-host mt-7 w-full sm:w-auto sm:min-w-[19rem]"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Message us on WhatsApp
              <ArrowRight className="wind h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
