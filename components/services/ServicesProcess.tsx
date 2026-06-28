"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { servicesProcessSteps } from "@/lib/data/services-page";

export default function ServicesProcess() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="flex flex-col gap-5 lg:col-span-4"
          >
            <span className="text-xs font-medium tracking-[0.25em] text-slate-500 uppercase">
              Our Process
            </span>
            <h2 className="text-2xl font-bold tracking-[0.06em] text-slate-900 uppercase md:text-3xl">
              From Concept
              <br />
              To Completion
            </h2>
            <p className="text-base leading-relaxed text-slate-500">
              Our streamlined four-step process ensures every project is delivered
              on time, on budget, and beyond expectations — with full transparency
              at every stage.
            </p>
          </motion.div>

          {/* Right — steps */}
          <motion.ol
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 lg:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {servicesProcessSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === servicesProcessSteps.length - 1;

              return (
                <motion.li
                  key={step.step}
                  variants={staggerItem}
                  className="relative flex flex-col"
                >
                  {!isLast && (
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="absolute top-4 -right-2 hidden text-slate-300 lg:block xl:-right-4"
                      aria-hidden="true"
                    />
                  )}

                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="mb-4 text-slate-900"
                    aria-hidden="true"
                  />
                  <span className="mb-2 text-xs font-bold tracking-wider text-slate-400">
                    {step.step}
                  </span>
                  <h3 className="mb-2 text-sm font-bold tracking-[0.1em] text-slate-900 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
