export function About() {
  const promises = [
    { title: "Fast", body: "Quick turnaround, because we know your deadline is not a suggestion." },
    { title: "Original", body: "Custom work for every project, written for you and your brief." },
    { title: "In your language", body: "Support in Sinhala and English, at student-friendly prices." },
  ];
  return (
    <section id="about" className="border-y border-ink/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="max-w-[22ch] text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">
          Born out of the chaos of deadline nights
        </h2>
        <p className="mt-6 max-w-[52ch] text-xl leading-relaxed text-ink/75">
          We&apos;re a team of developers who know what students need: work that is presentable, student-friendly and
          supported from the first message to the viva.
        </p>
        <dl className="mt-14 grid gap-x-10 gap-y-8 border-t border-ink/10 pt-10 md:grid-cols-3">
          {promises.map((p) => (
            <div key={p.title}>
              <dt className="text-xl font-semibold tracking-tight text-lab-deep">{p.title}</dt>
              <dd className="mt-2 max-w-[30ch] text-lg leading-snug text-ink/70">{p.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
