"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, wa } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur transition-[border-color] duration-200 border-b-[3px] ${
        scrolled ? "border-ink" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5">
        {/* Logo on the left, links in the middle/right, action far right: the layout everyone already knows. */}
        <a href="#home" className="flex items-center gap-3" aria-label="Last Minute Labs, back to top">
          <img src="/logo-mark.png" alt="" width={56} height={35} className="h-8 w-auto sm:h-9" />
          <span className="whitespace-nowrap text-base font-extrabold tracking-tight sm:text-xl">Last Minute Labs</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-xl px-4 py-3 text-base font-semibold"
            >
              {item.label}
              <span className="absolute inset-x-4 bottom-1.5 h-[3px] origin-left scale-x-0 rounded-full bg-signal transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={wa("Hi Last Minute Labs, I need help with a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn !min-h-12 !px-3.5 text-base sm:!px-5"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="sr-only sm:not-sr-only">WhatsApp us</span>
          </a>
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-xl border-[3px] border-ink bg-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t-[3px] border-ink bg-paper md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center border-b border-ink/15 text-lg font-semibold last:border-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
