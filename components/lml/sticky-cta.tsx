"use client";

import { useEffect, useState } from "react";
import { wa } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

/** Mobile only. The primary action is the most-used one, so it stays under the thumb once the hero is gone. */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    const contact = document.getElementById("contact");
    if (!hero) return;
    let heroOut = false;
    let contactIn = false;
    const sync = () => setShow(heroOut && !contactIn);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) heroOut = !e.isIntersecting;
        if (e.target === contact) contactIn = e.isIntersecting;
      }
      sync();
    });
    io.observe(hero);
    if (contact) io.observe(contact);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 [transition-timing-function:var(--ease-spring)] md:hidden ${
        show ? "translate-y-0" : "translate-y-[140%]"
      }`}
    >
      <a
        href={wa("Hi Last Minute Labs, I need help with a project.")}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
        className="btn w-full !min-h-14"
      >
        <WhatsAppIcon className="h-6 w-6" />
        Message us on WhatsApp
      </a>
    </div>
  );
}
