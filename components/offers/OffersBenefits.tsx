"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { offerBenefits } from "@/lib/data/offers";

export default function OffersBenefits() {
  return (
    <section className="bg-slate-900 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerItem}
          className="mb-12 text-center"
        >
          <span className="mb-3 block text-xs font-medium tracking-[0.25em] text-slate-400 uppercase">
            Why Our Offers
          </span>
          <h2 className="text-2xl font-bold tracking-[0.08em] uppercase md:text-3xl">
            More Than Just Savings
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {offerBenefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={staggerItem}
              className="flex flex-col gap-3 border-t border-slate-700 pt-6 text-center lg:text-left"
            >
              <h3 className="text-sm font-bold tracking-[0.12em] uppercase">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
