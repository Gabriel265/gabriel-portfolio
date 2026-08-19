"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaTimes, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/+265995375405?text=Hello%20Gabriel,%20I'm%20interested%20in%20your%20services!";
const RE_SHOW_DELAY_MS = 30000;

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const dismissWhatsApp = () => {
    setShowWhatsApp(false);
    window.setTimeout(() => setShowWhatsApp(true), RE_SHOW_DELAY_MS);
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`pixel-border-sm fixed bottom-4 left-4 z-40 bg-elevated text-fg p-3 transition-opacity ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <FaArrowUp />
      </button>

      {showWhatsApp && (
        <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
          <button
            onClick={dismissWhatsApp}
            aria-label="Dismiss WhatsApp button"
            className="pixel-border-sm bg-elevated text-fg p-1.5 text-xs"
          >
            <FaTimes />
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="pixel-border-sm flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white"
          >
            <FaWhatsapp />
          </a>
        </div>
      )}
    </>
  );
}
