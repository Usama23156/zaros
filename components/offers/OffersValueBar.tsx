"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { valuePropositions } from "@/lib/data/offers";

export default function OffersValueBar() {
  return (
    <section className="border-y border-slate-200 bg-[#F8FAFC] py-10 md:py-14">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-12 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {valuePropositions.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="flex items-start gap-3"
            >
              <Icon
                size={20}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#0F172A]"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-xs font-bold tracking-[0.08em] text-[#0F172A] uppercase">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm text-slate-500">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
