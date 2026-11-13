// The proof, said as a sentence. Four stat tiles are what every template does; this reads like a person talking.
export function Statement() {
  const n = "font-extrabold text-lab-deep";
  return (
    <section aria-label="Track record" className="border-y-[3px] border-ink bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <p className="max-w-[28em] text-[clamp(1.6rem,3.6vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-balance">
        <span className={n}>30+</span> projects delivered for <span className={n}>20+</span> students, with a{" "}
        <span className={n}>98%</span> success rate and someone answering on WhatsApp <span className={n}>24/7</span>.
      </p>
      </div>
    </section>
  );
}
