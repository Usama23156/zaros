"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { specialDeals } from "@/lib/data/offers";

function useCountdown(endsAt: string) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(endsAt).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [endsAt]);

  return timeLeft;
}

function Countdown({ endsAt }: { endsAt: string }) {
  const { days, hours, minutes, seconds } = useCountdown(endsAt);

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hrs" },
    { value: minutes, label: "Mins" },
    { value: seconds, label: "Secs" },
  ];

  return (
    <div className="grid grid-cols-4 gap-1 border border-slate-100 bg-slate-50 py-3">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <span className="block text-sm font-bold tabular-nums text-slate-900">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] tracking-wide text-slate-400 uppercase">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function DealCard({
  badge,
  title,
  description,
  image,
  endsAt,
}: (typeof specialDeals)[number]) {
  return (
    <article className="flex flex-col overflow-hidden border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 33vw, 20vw"
        />
        <span className="absolute top-3 left-3 bg-slate-900 px-2 py-1 text-[10px] font-bold tracking-[0.1em] text-white">
          {badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-xs font-bold tracking-[0.1em] text-slate-900 uppercase">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-500">
          {description}
        </p>

        <Countdown endsAt={endsAt} />

        <Link
          href="/products"
          className="mt-4 flex w-full items-center justify-center gap-1 bg-slate-900 py-3 text-[10px] font-semibold tracking-[0.15em] text-white uppercase transition-colors hover:bg-slate-800"
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
          <span className="mb-2 block text-xs font-medium tracking-[0.25em] text-slate-500 uppercase">
            Limited Time
          </span>
          <h2 className="text-2xl font-bold tracking-[0.08em] text-slate-900 uppercase md:text-3xl">
            Special Deals
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {specialDeals.map((deal) => (
            <motion.div key={deal.id} variants={staggerItem}>
              <DealCard {...deal} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
