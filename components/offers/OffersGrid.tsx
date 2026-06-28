"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { offers } from "@/lib/data/offers";

export default function OffersGrid() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              Special Deals
            </span>
            <div className="h-px w-12 bg-slate-200" aria-hidden="true" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-[0.08em] text-slate-900 uppercase md:text-4xl">
            Current Offers
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-500">
            Browse our active promotions and packages — each designed to deliver
            exceptional value on premium interior design services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {offers.map((offer) => (
            <motion.article
              key={offer.id}
              variants={staggerItem}
              className="group flex flex-col overflow-hidden border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-slate-900 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-white uppercase">
                  {offer.badge}
                </span>
                <span className="absolute top-4 right-4 bg-white px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-slate-900">
                  {offer.discount}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-sm font-bold tracking-[0.08em] text-slate-900 uppercase">
                  {offer.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
                  {offer.description}
                </p>

                <div className="mb-5 flex items-baseline gap-2">
                  <span className="text-xs text-slate-400 line-through">
                    {offer.originalPrice}
                  </span>
                  <span className="text-lg font-bold text-slate-900">
                    {offer.offerPrice}
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold tracking-[0.15em] text-slate-900 uppercase transition-colors hover:text-slate-600"
                >
                  Claim Offer
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
