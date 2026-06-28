"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { services } from "@/lib/data/home";

export default function Services() {
  return (
    <AnimatedSection
      id="services"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader overline="OUR SERVICES" title="WHAT WE DO" />
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={staggerItem}
                className="group flex flex-col border border-zinc-100 bg-white p-8 transition-all duration-300 hover:border-zinc-200 hover:shadow-sm"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="mb-6 text-zinc-900"
                  aria-hidden="true"
                />
                <h3 className="mb-3 text-sm font-bold tracking-[0.1em] text-zinc-900 uppercase">
                  {service.title}
                </h3>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-zinc-500">
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-zinc-900 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
