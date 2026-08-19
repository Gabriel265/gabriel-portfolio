import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type PixelButtonProps = ButtonAsButton | ButtonAsAnchor;

const base =
  "pixel-border-sm font-pixel text-[0.65rem] sm:text-xs uppercase tracking-wide px-3 py-2 sm:px-4 sm:py-3 inline-flex items-center gap-2 transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  solid: "bg-accent text-bg",
  ghost: "bg-elevated text-fg",
};

export default function PixelButton({ children, variant = "solid", className = "", ...rest }: PixelButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
