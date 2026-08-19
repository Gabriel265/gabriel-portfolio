"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface SoundContextValue {
  muted: boolean;
  toggleMuted: () => void;
  /** Returns true if audio is allowed to play right now. */
  canPlay: () => boolean;
}

const SoundContext = createContext<SoundContextValue | undefined>(undefined);
const STORAGE_KEY = "gk-muted";

export function SoundProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    // Hydration-safe read of a browser-only API; must run post-mount.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored !== null) setMuted(stored === "1");
  }, []);

  const toggleMuted = () => {
    setMuted((prev) => {
      const next = !prev;
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      return next;
    });
  };

  return (
    <SoundContext.Provider value={{ muted, toggleMuted, canPlay: () => !muted }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound(): SoundContextValue {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within a SoundProvider");
  return ctx;
}
