"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { brands } from "@/lib/data/home";

export default function Brands() {
  return (
    <AnimatedSection className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader overline="PARTNERS" title="TRUSTED BRANDS" />
        </div>

        <motion.div
          className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand}
              variants={staggerItem}
              className="flex items-center justify-center"
            >
              <span className="text-sm font-semibold tracking-[0.15em] text-zinc-800 uppercase transition-colors duration-300 hover:text-zinc-600">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
