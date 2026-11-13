import { ArrowRight, Brain, Clapperboard, Code, Database, FileText, Globe, GraduationCap, Palette, Video } from "lucide-react";
import { SERVICES, wa } from "@/lib/site";

const ICONS = { Code, Database, GraduationCap, Brain, Palette, FileText, Globe, Video, Clapperboard } as const;

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.022em] text-balance">
            From a small assignment to a final year project
          </h2>
          <p className="mt-5 max-w-[36ch] text-xl leading-snug text-ink/75">
            Tap any service to message us about it. Your message is already written.
          </p>
        </div>

        {/* Whole rows are the target (Fitts's law). Hover one and the rest step back. */}
        <ul className="svc-list border-t border-ink/10">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <li key={s.key} className="border-b border-ink/10">
                <a
                  href={wa(`Hi Last Minute Labs, I need help with: ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc wind-host group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 py-6 outline-offset-[-3px] md:py-7"
                >
                  <span className="svc-icon grid h-12 w-12 place-items-center rounded-xl bg-sky text-lab-deep ring-1 ring-inset ring-lab/15">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xl font-semibold leading-tight tracking-tight sm:text-2xl">{s.title}</span>
                    <span className="mt-1 block text-base leading-snug text-ink/75">{s.description}</span>
                    <span className="mt-3 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded-md border border-ink/15 bg-white px-2.5 py-1 text-sm font-medium leading-none text-ink/80">
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white transition-colors duration-150 group-hover:border-wa group-hover:bg-wa group-hover:text-white">
                    <ArrowRight className="wind h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Ask about {s.title}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
