"use client";

import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { navLevels } from "@/lib/data/nav";

interface PauseMenuProps {
  open: boolean;
  activeId: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export default function PauseMenu({ open, activeId, onClose, onNavigate }: PauseMenuProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeBtnRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 lg:hidden"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        onClick={(e) => e.stopPropagation()}
        className="pixel-border w-full max-w-xs bg-elevated p-6"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="font-pixel text-xs text-accent">PAUSED</span>
          <button ref={closeBtnRef} onClick={onClose} aria-label="Close menu" className="text-fg hover:text-accent">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {navLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => onNavigate(level.id)}
              aria-current={activeId === level.id ? "true" : undefined}
              className={`pixel-border-sm px-3 py-2 text-left font-pixel text-[0.6rem] ${
                activeId === level.id ? "bg-accent text-bg" : "bg-bg text-fg"
              }`}
            >
              {level.hudLabel}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
