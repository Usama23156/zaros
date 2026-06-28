"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { serviceCards } from "@/lib/data/services-page";

export default function ServicesGrid() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerItem}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-slate-200" aria-hidden="true" />
            <span className="text-xs font-medium tracking-[0.25em] text-slate-500 uppercase">
              What We Do
            </span>
            <div className="h-px w-12 bg-slate-200" aria-hidden="true" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-[0.08em] text-slate-900 uppercase md:text-4xl">
            Our Services
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-500">
            We deliver end-to-end interior solutions for residential and commercial
            spaces — combining expert craftsmanship with thoughtful design at every stage.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={staggerItem}
                className="group flex flex-col border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="relative flex flex-1 flex-col px-5 pb-6 pt-8">
                  <div
                    className="absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-md"
                    aria-hidden="true"
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-2 mt-2 text-sm font-bold tracking-[0.08em] text-slate-900 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
