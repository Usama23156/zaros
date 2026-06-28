"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { aboutHeroStats, aboutImages } from "@/lib/data/about";

export default function AboutHero() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <div className="h-px w-8 bg-zinc-900" aria-hidden="true" />
            <span className="text-xs font-medium tracking-[0.25em] text-zinc-500 uppercase">
              About Us
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-[0.06em] text-zinc-900 uppercase sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Designing Spaces
            <br />
            That Tell Your Story
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-zinc-500">
            At ZAROS, we believe every space has a story waiting to be told.
            We combine creative vision with meticulous craftsmanship to transform
            interiors into environments that reflect who you are and how you live.
          </p>

          <motion.div
            className="mt-4 grid grid-cols-3 gap-6 border-t border-zinc-100 pt-8 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {aboutHeroStats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <span className="block text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[10px] font-medium tracking-[0.15em] text-zinc-500 uppercase sm:text-xs">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="relative aspect-[3/4] overflow-hidden lg:aspect-[4/5]"
        >
          <Image
            src={aboutImages.hero}
            alt="Minimalist interior with console table and abstract art"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
