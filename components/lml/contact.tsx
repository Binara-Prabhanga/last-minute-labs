"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy, Facebook, Instagram } from "lucide-react";
import { FACEBOOK, INSTAGRAM, PHONE_DISPLAY, WA_NUMBER, wa } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<number>(0);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`+${WA_NUMBER}`);
      setCopied(true);
      setFailed(false);
    } catch {
      setFailed(true); // clipboard blocked: say so and show the number to copy by hand
    }
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setCopied(false);
      setFailed(false);
    }, 2200);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-ink bg-wa p-8 shadow-[0_10px_0_var(--ink)] md:p-14">
        {/* A big stopwatch cropped out of the corner: the brand mark as a texture, not a logo */}
        <svg viewBox="0 0 200 200" aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 opacity-20 md:h-[28rem] md:w-[28rem]">
          <circle cx="100" cy="100" r="86" fill="none" stroke="var(--ink)" strokeWidth="12" />
          <path d="M100 100 L100 40 M100 100 L140 124" stroke="var(--ink)" strokeWidth="12" strokeLinecap="round" />
        </svg>

        <div className="relative">
          <h2 className="max-w-[14ch] text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.025em] text-balance">
            Send us the brief.
          </h2>
          <p className="mt-5 max-w-[40ch] text-xl leading-snug">
            Share the topic, the requirements and your deadline. You&apos;ll get a quote and a straight answer on timing.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={wa("Hi Last Minute Labs, I'd like a quote for my project. My deadline is ")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ink wind-host !min-h-16 text-xl"
            >
              <WhatsAppIcon className="h-7 w-7" />
              Message us on WhatsApp
              <ArrowRight className="wind h-6 w-6" />
            </a>
            <button type="button" onClick={copy} className="btn btn--ghost !min-h-16 text-xl" aria-describedby="copy-status">
              <span key={String(copied)} className={copied ? "anim-wiggle inline-flex" : "inline-flex"}>
                {copied ? <Check className="h-6 w-6" /> : <Copy className="h-6 w-6" />}
              </span>
              {copied ? "Copied" : PHONE_DISPLAY}
            </button>
          </div>
          <p id="copy-status" role="status" className="mt-3 min-h-6 text-base font-semibold">
            {copied && "Number copied. Paste it into WhatsApp or your contacts."}
            {failed && `Couldn't copy automatically. Our number is ${PHONE_DISPLAY}.`}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="btn btn--ghost !min-h-12 !px-4 text-base">
              <Facebook className="h-5 w-5" /> Facebook
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn btn--ghost !min-h-12 !px-4 text-base">
              <Instagram className="h-5 w-5" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
