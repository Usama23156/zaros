import Link from "next/link";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="ZAROS Interior Decoration - Home">
      <div
        className={`flex h-10 w-10 items-center justify-center text-lg font-bold tracking-tight ${
          isDark ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
        }`}
      >
        Z
      </div>
      <div className="flex flex-col">
        <span
          className={`text-base font-bold tracking-[0.12em] ${
            isDark ? "text-zinc-900" : "text-white"
          }`}
        >
          ZAROS
        </span>
        <span
          className={`text-[10px] font-normal tracking-[0.08em] ${
            isDark ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          Interior Decoration
        </span>
      </div>
    </Link>
  );
}
