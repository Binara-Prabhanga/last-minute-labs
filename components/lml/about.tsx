export function About() {
  const promises = [
    { title: "Fast", body: "Quick turnaround, because we know your deadline is not a suggestion." },
    { title: "Original", body: "Custom work for every project, written for you and your brief." },
    { title: "In your language", body: "Support in Sinhala and English, at student-friendly prices." },
  ];
  return (
    <section id="about" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="max-w-[22ch] text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-[1.02] tracking-[-0.022em] text-balance">
          Born out of the chaos of deadline nights
        </h2>
        <p className="mt-6 max-w-[52ch] text-xl leading-relaxed text-white/80">
          We&apos;re a team of developers who know what students need: work that is presentable, student-friendly and
          supported from the first message to the viva.
        </p>
        <dl className="mt-14 grid gap-x-10 gap-y-8 border-t-[3px] border-white/25 pt-10 md:grid-cols-3">
          {promises.map((p) => (
            <div key={p.title}>
              <dt className="text-2xl font-extrabold tracking-tight text-sky">{p.title}</dt>
              <dd className="mt-2 max-w-[30ch] text-lg leading-snug text-white/75">{p.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
