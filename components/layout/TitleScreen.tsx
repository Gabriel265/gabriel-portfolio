"use client";

import { useEffect, useState } from "react";
import PixelButton from "@/components/ui/PixelButton";

const STORAGE_KEY = "gk-title-seen";
const AUTO_DISMISS_MS = 4000;

export default function TitleScreen() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Reading sessionStorage must happen post-mount to avoid an SSR/CSR
    // hydration mismatch, so a synchronous setState here is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);

    const timer = window.setTimeout(dismiss, AUTO_DISMISS_MS);
    const onKeyDown = () => dismiss();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function dismiss() {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Intro"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-bg px-4 text-center"
      onClick={dismiss}
    >
      <div>
        <p className="font-pixel text-accent2 text-[0.6rem] mb-4">A PORTFOLIO BY</p>
        <h1 className="font-pixel text-accent text-xl sm:text-3xl leading-relaxed">GABRIEL KADIWA</h1>
        <p className="font-pixel text-fg/70 text-[0.55rem] sm:text-[0.65rem] mt-4">
          FULLSTACK DEV · IT CONSULTANT · DESIGNER · TUTOR
        </p>
      </div>
      <PixelButton
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
      >
        ▶ PRESS START
      </PixelButton>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
        className="font-sans text-sm text-fg/60 underline underline-offset-4 hover:text-fg"
      >
        Skip intro
      </button>
    </div>
  );
}
