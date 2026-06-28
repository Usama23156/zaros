"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { specialDeals } from "@/lib/data/offers";

function CountdownDisplay({
  countdown,
}: {
  countdown: { days: number; hours: number; minutes: number; seconds: number };
}) {
  const units = [
    { value: countdown.days, label: "Days" },
    { value: countdown.hours, label: "Hrs" },
    { value: countdown.minutes, label: "Mins" },
    { value: countdown.seconds, label: "Secs" },
  ];

  return (
    <div className="grid grid-cols-4 divide-x divide-slate-200 border border-slate-200 bg-[#F8FAFC]">
      {units.map((unit) => (
        <div key={unit.label} className="py-2.5 text-center">
          <span className="block text-sm font-bold tabular-nums text-[#0F172A]">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[8px] font-medium tracking-wide text-slate-400 uppercase">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function DealCard({ deal }: { deal: (typeof specialDeals)[number] }) {
  return (
    <article className="flex h-full flex-col overflow-hidden border border-slate-100 bg-white shadow-sm">
      <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 20vw, 240px"
        />
        <span className="absolute top-3 left-3 bg-[#0F172A] px-2 py-1 text-[9px] font-bold tracking-[0.1em] text-white">
          {deal.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-[11px] font-bold tracking-[0.1em] text-[#0F172A] uppercase">
          {deal.title}
        </h3>
        <p className="mb-4 flex-1 text-[11px] leading-relaxed text-slate-500">
          {deal.description}
        </p>

        <CountdownDisplay countdown={deal.countdown} />

        <Link
          href="/products"
          className="mt-4 flex w-full items-center justify-center gap-1 bg-[#0F172A] py-2.5 text-[10px] font-semibold tracking-[0.15em] text-white uppercase transition-colors hover:bg-slate-800"
        >
          Shop Now
          <ArrowRight size={12} strokeWidth={1.5} />
        </Link>
      </div>
    </article>
  );
}

export default function SpecialDeals() {
  return (
    <section id="special-deals" className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerItem}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-xs font-medium tracking-[0.25em] text-slate-500 uppercase">
            Limited Time
          </p>
          <h2 className="text-2xl font-bold tracking-[0.1em] text-[#0F172A] uppercase md:text-3xl">
            Special Deals
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {specialDeals.map((deal) => (
            <motion.div key={deal.id} variants={staggerItem} className="h-full">
              <DealCard deal={deal} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
