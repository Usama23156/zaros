import Link from "next/link";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className="group flex items-center relative" aria-label="ZAROS Interior Decoration - Home">
      
      <div className=" bg-white py-5 rounded-xl ">
        <img src="/logo.png" alt="" className="max-w-24" />
        <span
          className={`text-[10px] font-normal tracking-[0.08em] absolute  left-3  ${
            isDark ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          Interior Desgin
        </span>
      </div>
    </Link>
  );
}
