"use client";

interface ToastProps {
  message: string;
  tone: "success" | "error";
  onDismiss: () => void;
}

export default function Toast({ message, tone, onDismiss }: ToastProps) {
  return (
    <div
      role="status"
      className={`pixel-border fixed bottom-4 right-4 z-[70] max-w-xs bg-elevated px-4 py-3 text-sm font-sans ${
        tone === "success" ? "text-accent2" : "text-danger"
      }`}
    >
      <p>{message}</p>
      <button
        onClick={onDismiss}
        className="mt-2 font-pixel text-[0.6rem] uppercase tracking-wide text-fg opacity-70 hover:opacity-100"
      >
        Close
      </button>
    </div>
  );
}
