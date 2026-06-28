"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "@/components/shared/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { servicesHeroImage } from "@/lib/data/services-page";

export default function ServicesHero() {
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
          <span className="text-xs font-medium tracking-[0.25em] text-slate-500 uppercase">
            Our Services
          </span>

          <h1 className="text-3xl font-bold tracking-[0.06em] text-slate-900 uppercase sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Tailored Solutions
            <br />
            For Every Space
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-slate-500">
            From concept to completion, we offer a comprehensive range of interior
            design and decoration services — each tailored to transform your space
            with precision, quality, and timeless style.
          </p>

          <div>
            <Button
              href="/contact"
              icon={<ArrowRight size={16} strokeWidth={1.5} />}
              className="bg-slate-900 hover:bg-slate-800 focus-visible:outline-slate-900"
            >
              LET&apos;S WORK TOGETHER
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]"
        >
          <Image
            src={servicesHeroImage}
            alt="Luxurious modern living room interior"
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
