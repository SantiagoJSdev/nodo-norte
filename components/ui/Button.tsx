import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-sm hover:bg-accent",
  secondary:
    "bg-white text-ink border border-line hover:border-ink hover:bg-panel",
  ghost: "text-muted hover:text-primary",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  children: ReactNode;
}

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
