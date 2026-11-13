import { NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white pb-28 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <img src="/logo-mark.png" alt="" width={56} height={35} className="h-8 w-auto" />
            <span className="text-xl font-semibold tracking-tight">Last Minute Labs</span>
          </div>
          <p className="mt-3 text-base leading-snug text-ink/75">
            Helping students succeed with quality academic project support.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-flex min-h-11 items-center rounded-lg px-3 text-base font-semibold hover:underline">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-ink/15">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm leading-relaxed text-ink/70">
          © {new Date().getFullYear()} Last Minute Labs. <strong>Disclaimer:</strong> we provide academic support
          services for educational use only.
        </p>
      </div>
    </footer>
  );
}
