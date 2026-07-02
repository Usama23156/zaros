"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { processSteps } from "@/lib/data/home";

export default function Process() {
  return (
    <AnimatedSection className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader
            overline="OUR PROCESS"
            title="HOW WE WORK"
            description="A refined, transparent process designed to bring your vision to life with clarity and confidence."
          />
        </div>

        <motion.ol
          className="relative grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Connecting line — desktop only */}
          <div
            className="absolute top-8 right-[10%] left-[10%] hidden h-px bg-zinc-200 md:block"
            aria-hidden="true"
          />

          {processSteps.map((step) => (
            <motion.li
              key={step.step}
              variants={staggerItem}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center border border-zinc-900 bg-white">
                <span className="text-sm font-bold tracking-wider text-zinc-900">
                  {step.step}
                </span>
              </div>
              <h3 className="mb-2 text-sm font-bold tracking-widest text-zinc-900 uppercase">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </AnimatedSection>
  );
}
