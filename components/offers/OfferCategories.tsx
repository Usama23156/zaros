"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { offerCategories } from "@/lib/data/offers";

export default function OfferCategories() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerItem}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold tracking-[0.1em] text-[#0F172A] uppercase md:text-3xl">
            What&apos;s On Offer?
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {offerCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.title}
                variants={staggerItem}
                className="flex flex-col border border-slate-100 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md lg:p-5"
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="mb-3 text-[#0F172A]"
                  aria-hidden="true"
                />

                <h3 className="mb-3 min-h-[2rem] text-[10px] font-bold leading-snug tracking-[0.08em] text-[#0F172A] uppercase lg:text-[11px]">
                  {category.title}
                </h3>

                <div className="relative mb-3 aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>

                <p className="mb-4 flex-1 text-[11px] leading-relaxed text-slate-500 lg:text-xs">
                  {category.description}
                </p>

                <Link
                  href="/products"
                  className="text-[10px] font-bold tracking-[0.1em] text-[#0F172A] uppercase hover:text-slate-600"
                >
                  {category.tag}
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
