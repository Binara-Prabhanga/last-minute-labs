"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/site";

function TiltSlab({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return; // no tilt on touch: it would fight scrolling
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.dataset.live = "true";
    el.style.setProperty("--ry", `${(px * 6).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(-py * 5).toFixed(2)}deg`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.dataset.live = "false"; // release with the springy transition: it overshoots slightly, then settles
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  };

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="slab relative flex h-full flex-col overflow-visible rounded-2xl border border-ink/15 bg-white"
    >
      {children}
    </article>
  );
}

function GradeArt() {
  // The Student Grade Predictor has no screenshot, so it gets what it's about: a scatter plot and a fitted line.
  const pts = [
    [40, 190], [70, 170], [95, 175], [120, 140], [150, 130], [175, 110], [205, 112], [235, 80], [265, 70], [300, 48],
  ];
  return (
    <svg viewBox="0 0 340 230" className="h-full w-full" role="img" aria-label="Scatter plot with a rising trend line">
      <rect width="340" height="230" fill="var(--sky)" />
      <path d="M 30 20 V 205 H 320" fill="none" stroke="var(--ink)" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="38" y1="196" x2="312" y2="44" stroke="var(--signal)" strokeWidth="3" strokeLinecap="round" />
      {pts.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="var(--lab)" stroke="#fff" strokeWidth="2" />
      ))}
    </svg>
  );
}

export function Work() {
  const track = useRef<HTMLUListElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="work" className="overflow-hidden border-y border-ink/10 bg-[#E9F0F7] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[16ch] text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.022em] text-balance">
            Things we&apos;ve shipped for students like you
          </h2>
          {/* Big, close-together arrows. No autoplay: the reader decides when the next one arrives. */}
          <div className="flex gap-3">
            <button type="button" aria-label="Previous project" onClick={() => scrollBy(-1)} className="btn btn--ghost !min-h-14 !w-14 !rounded-full !px-0">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button type="button" aria-label="Next project" onClick={() => scrollBy(1)} className="btn btn--ghost !min-h-14 !w-14 !rounded-full !px-0">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={track}
        className="mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-10 pt-6 [scrollbar-width:none] scroll-pl-5 md:px-[max(1.25rem,calc((100vw_-_72rem)/2_+_1.25rem))] md:scroll-pl-[max(1.25rem,calc((100vw_-_72rem)/2_+_1.25rem))] [&::-webkit-scrollbar]:hidden"
        aria-label="Recent projects"
      >
        {PROJECTS.map((p) => (
          <li key={p.title} className="w-[min(86vw,26rem)] shrink-0 snap-start">
            <TiltSlab>
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl border-b border-ink/10 bg-sky">
                {p.image ? (
                  <img src={p.image} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" className="h-full w-full object-cover object-left-top" />
                ) : (
                  <GradeArt />
                )}
              </div>
              {p.stamp && (
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold leading-none text-ink shadow-soft ring-1 ring-ink/10 backdrop-blur">
                  {p.stamp}
                </span>
              )}
              <div className="p-5 text-ink">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-base text-ink/75">{p.meta}</p>
              </div>
            </TiltSlab>
          </li>
        ))}
      </ul>
    </section>
  );
}
