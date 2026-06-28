"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { stats } from "@/lib/data/home";

export default function Stats() {
  return (
    <section className="bg-zinc-900 py-16 text-white md:py-20">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={staggerItem}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="text-4xl font-bold tracking-tight md:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm tracking-wide text-zinc-400">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
