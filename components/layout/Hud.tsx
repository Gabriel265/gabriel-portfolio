"use client";

import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { navLevels } from "@/lib/data/nav";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useSound } from "@/components/providers/SoundProvider";
import PauseMenu from "@/components/layout/PauseMenu";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

export default function Hud() {
  const [docked, setDocked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { muted, toggleMuted } = useSound();
  const activeId = useActiveSection(navLevels.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`hud-bar sticky top-0 z-50 transition-shadow ${docked ? "shadow-[0_4px_0_0_var(--pixel-border-color)]" : ""}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-pixel text-[0.6rem] sm:text-xs text-accent whitespace-nowrap"
          >
            GABRIEL KADIWA
          </button>

          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto">
            {navLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => scrollToSection(level.id)}
                aria-current={activeId === level.id ? "true" : undefined}
                className={`font-pixel text-[0.55rem] px-2 py-2 whitespace-nowrap transition-colors ${
                  activeId === level.id ? "text-accent pixel-border-sm" : "text-fg/70 hover:text-fg"
                }`}
              >
                {level.hudLabel}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={theme === "night" ? "Switch to day mode" : "Switch to night mode"}
              className="pixel-border-sm p-2 text-fg hover:text-accent"
            >
              {theme === "night" ? <FaMoon /> : <FaSun />}
            </button>
            <button
              onClick={toggleMuted}
              aria-label={muted ? "Unmute sound" : "Mute sound"}
              className="pixel-border-sm p-2 text-fg hover:text-accent"
            >
              {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="pixel-border-sm p-2 text-fg hover:text-accent lg:hidden"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      <PauseMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
        onNavigate={(id) => {
          setMenuOpen(false);
          scrollToSection(id);
        }}
      />
    </>
  );
}
