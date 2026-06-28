import type { ReactNode } from "react";

interface SectionHeaderProps {
  overline: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeader({
  overline,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span
        className={`text-xs font-medium tracking-[0.25em] uppercase ${
          dark ? "text-zinc-400" : "text-zinc-500"
        }`}
      >
        {overline}
      </span>
      <h2
        className={`text-3xl font-bold tracking-[0.08em] uppercase md:text-4xl ${
          dark ? "text-white" : "text-zinc-900"
        }`}
      >
        {title}
      </h2>
      {align === "center" && (
        <div
          className={`h-px w-12 ${dark ? "bg-white/40" : "bg-zinc-900"}`}
          aria-hidden="true"
        />
      )}
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            dark ? "text-zinc-300" : "text-zinc-500"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
