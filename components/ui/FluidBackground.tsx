"use client";

import { useEffect, useRef } from "react";

/** Parses a "#rrggbb" hex string into 0–1 float RGB, as webgl-fluid expects. */
function hexToRgbFloat(hex: string): { r: number; g: number; b: number } {
  const normalized = hex.replace("#", "");
  const int = parseInt(normalized, 16);
  return {
    r: ((int >> 16) & 255) / 255,
    g: ((int >> 8) & 255) / 255,
    b: (int & 255) / 255,
  };
}

/**
 * Full-viewport, cursor-reactive liquid/dye trail sitting behind all page
 * content (fixed + negative z-index) — decorative only, never intercepts
 * clicks. Skipped for reduced-motion users and on touch-only devices (no
 * hover input to react to), and only loaded when it will actually be used.
 */
export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (prefersReducedMotion || !hasFinePointer) return;

    // No module-level "already initialized" guard here on purpose: React
    // Strict Mode's dev-only mount→cleanup→mount double-invoke means a guard
    // like that lets the throwaway first run's promise "win" while its own
    // cleanup already flipped its `cancelled` closure to true — so the real
    // run's setup silently never happens. Each effect run gets its own
    // `cancelled` var and its own dynamic import (cheap/cached by the
    // bundler), which is exactly what Strict Mode expects.
    let cancelled = false;

    import("webgl-fluid").then(({ default: WebGLFluid }) => {
      if (cancelled || !canvasRef.current) return;

      // Cyan reads as "water"; orange (the primary accent) would read more like fire.
      const waterHex = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-2")
        .trim();

      WebGLFluid(canvasRef.current, {
        TRIGGER: "hover",
        IMMEDIATE: false,
        AUTO: false,
        TRANSPARENT: true,
        SPLAT_COLOR: hexToRgbFloat(waterHex || "#4ecdc4"),
        // Kept close to the simulation's own defaults — this is what actually
        // makes it read as liquid sloshing in a basin (lingering, swirling)
        // rather than a quick spark trail. Perf gets measured with Lighthouse
        // next, and only gets tuned down from here if the numbers say so.
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        SPLAT_RADIUS: 0.3,
        SPLAT_FORCE: 6000,
        DENSITY_DISSIPATION: 1,
        VELOCITY_DISSIPATION: 0.3,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        BLOOM: false,
        SUNRAYS: false,
      });

      // webgl-fluid listens for "mousemove" on the canvas itself and reads
      // offsetX/offsetY from that event. Our canvas is `pointer-events-none`
      // (so it never steals real clicks from content on top of it), which
      // means it can never be the native hit-test target of a mousemove —
      // so the library's own listener would never fire. Forward real cursor
      // movement from the window down onto the canvas ourselves via a
      // dispatched event; dispatchEvent bypasses pointer-events entirely
      // since that CSS property only affects native hit-testing.
      const canvas = canvasRef.current;
      const forwardMouseMove = (e: MouseEvent) => {
        canvas.dispatchEvent(
          new MouseEvent("mousemove", {
            clientX: e.clientX,
            clientY: e.clientY,
          })
        );
      };
      window.addEventListener("mousemove", forwardMouseMove);
      cleanupRef.current = () => window.removeEventListener("mousemove", forwardMouseMove);
    });

    return () => {
      cancelled = true;
      cleanupRef.current?.();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen"
    />
  );
}
