/** Decorative, static (non-animated) CRT scanline texture. Safe under reduced-motion. */
export default function ScanlineOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 scanlines opacity-40 ${className}`}
    />
  );
}
