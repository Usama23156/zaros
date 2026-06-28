"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { features } from "@/lib/data/home";

export default function Features() {
  return (
    <section className="bg-zinc-900 py-12 text-white md:py-16">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left"
            >
              <Icon
                size={32}
                strokeWidth={1.5}
                className="text-white"
                aria-hidden="true"
              />
              <h3 className="text-sm font-bold tracking-[0.12em] uppercase">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-400">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
