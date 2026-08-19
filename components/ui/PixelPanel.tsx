import type { ElementType, HTMLAttributes, ReactNode } from "react";

interface PixelPanelProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function PixelPanel({ children, as: Tag = "div", className = "", ...rest }: PixelPanelProps) {
  return (
    <Tag
      className={`pixel-border bg-elevated text-fg p-4 sm:p-6 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
