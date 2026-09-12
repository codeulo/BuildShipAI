"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
  event?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed";

const sizes = {
  md: "px-5 py-2.5 text-[0.95rem] rounded-xl",
  lg: "px-6 py-3.5 text-base rounded-xl",
};

const variants = {
  primary:
    "bg-accent text-[#06110C] hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(22,199,132,0.3)]",
  secondary:
    "bg-transparent text-text border border-border-strong hover:border-white/25",
  ghost: "bg-transparent text-muted hover:text-text",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  event,
  href,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const handleClick = () => {
    if (event) trackEvent(event);
    onClick?.();
  };

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        onClick={handleClick}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
        {showArrow && <ArrowUpRight size={18} strokeWidth={2.25} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} disabled={disabled} className={classes}>
      {children}
      {showArrow && <ArrowUpRight size={18} strokeWidth={2.25} />}
    </button>
  );
}
