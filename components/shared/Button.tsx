import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300";

  const variants = {
    primary:
      "bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
    outline:
      "border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
    ghost:
      "text-zinc-900 hover:text-zinc-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
      {icon}
    </Link>
  );
}
