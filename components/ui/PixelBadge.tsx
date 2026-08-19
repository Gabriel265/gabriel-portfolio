import type { ReactNode } from "react";

export default function PixelBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`pixel-border-sm bg-bg text-fg text-[0.65rem] sm:text-xs px-2 py-1 inline-flex items-center gap-1.5 ${className}`}
    >
      {children}
    </span>
  );
}
