"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { offerCategories } from "@/lib/data/offers";

export default function OfferCategories() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerItem}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold tracking-[0.08em] text-slate-900 uppercase md:text-3xl">
            What&apos;s On Offer?
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
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
                className="flex flex-col bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="mb-4 text-slate-900"
                  aria-hidden="true"
                />

                <h3 className="mb-3 text-xs font-bold tracking-[0.1em] text-slate-900 uppercase">
                  {category.title}
                </h3>

                <div className="relative mb-4 aspect-square overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 33vw, 16vw"
                  />
                </div>

                <p className="mb-5 flex-1 text-xs leading-relaxed text-slate-500">
                  {category.description}
                </p>

                <Link
                  href="/products"
                  className="text-[10px] font-bold tracking-[0.12em] text-slate-900 uppercase transition-colors hover:text-slate-600"
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
