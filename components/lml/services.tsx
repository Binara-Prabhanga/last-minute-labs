import { ArrowRight, Brain, Code, Database, FileText, GraduationCap, Palette } from "lucide-react";
import { SERVICES, wa } from "@/lib/site";

const ICONS = { Code, Database, GraduationCap, Brain, Palette, FileText } as const;

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[0.98] tracking-[-0.022em] text-balance">
            From a small assignment to a final year project
          </h2>
          <p className="mt-5 max-w-[36ch] text-xl leading-snug text-ink/75">
            Tap any service to message us about it. Your message is already written.
          </p>
        </div>

        {/* Whole rows are the target (Fitts's law). Hover one and the rest step back. */}
        <ul className="svc-list border-t-[3px] border-ink">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <li key={s.key} className="border-b-[3px] border-ink">
                <a
                  href={wa(`Hi Last Minute Labs, I need help with: ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc wind-host group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 py-6 outline-offset-[-3px] md:py-7"
                >
                  <span className={`svc-icon grid h-14 w-14 place-items-center rounded-2xl border-[3px] border-ink shadow-[0_4px_0_var(--ink)] ${s.tone}`}>
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-2xl font-extrabold leading-tight tracking-tight">{s.title}</span>
                    <span className="mt-1 block text-base leading-snug text-ink/75">{s.description}</span>
                    <span className="mt-3 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded-lg border-2 border-ink/80 bg-white px-2.5 py-1 text-sm font-semibold leading-none">
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-ink bg-white transition-colors duration-150 group-hover:bg-wa">
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
