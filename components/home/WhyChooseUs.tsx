"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { whyChooseUs } from "@/lib/data/home";

export default function WhyChooseUs() {
  return (
    <AnimatedSection className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader
            overline="WHY ZAROS"
            title="WHY CHOOSE US"
            description="We combine creative excellence with disciplined execution to deliver interiors that stand the test of time."
          />
        </div>

        <motion.div
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group flex flex-col gap-4"
              >
                <div className="flex h-14 w-14 items-center justify-center border border-zinc-200 transition-colors duration-300 group-hover:border-zinc-900 group-hover:bg-zinc-900">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-zinc-900 transition-colors duration-300 group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-sm font-bold tracking-[0.1em] text-zinc-900 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
