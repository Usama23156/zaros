"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { aboutValues } from "@/lib/data/about";

export default function OurValues() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerItem}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="mb-3 text-xs font-medium tracking-[0.25em] text-zinc-500 uppercase">
            Our Values
          </span>
          <div className="h-px w-8 bg-zinc-900" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 divide-y divide-zinc-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {aboutValues.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="flex flex-col items-center px-6 py-8 text-center sm:py-0 lg:px-8"
              >
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="mb-5 text-zinc-900"
                  aria-hidden="true"
                />
                <h3 className="mb-3 text-sm font-bold tracking-[0.12em] text-zinc-900 uppercase">
                  {value.title}
                </h3>
                <p className="max-w-[220px] text-sm leading-relaxed text-zinc-500">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
