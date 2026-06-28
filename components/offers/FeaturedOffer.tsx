"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "@/components/shared/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { featuredOffer } from "@/lib/data/offers";

export default function FeaturedOffer() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="grid grid-cols-1 overflow-hidden bg-white shadow-sm lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={featuredOffer.image}
              alt={featuredOffer.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span className="absolute top-5 left-5 bg-slate-900 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white uppercase">
              {featuredOffer.badge}
            </span>
          </div>

          <div className="flex flex-col justify-center gap-5 p-8 md:p-12 lg:p-14">
            <span className="inline-flex w-fit bg-slate-900 px-3 py-1 text-xs font-bold tracking-[0.12em] text-white">
              {featuredOffer.discount}
            </span>

            <h2 className="text-2xl font-bold tracking-[0.06em] text-slate-900 uppercase md:text-3xl">
              {featuredOffer.title}
            </h2>

            <p className="text-base leading-relaxed text-slate-500">
              {featuredOffer.description}
            </p>

            <div className="flex items-baseline gap-3">
              <span className="text-sm text-slate-400 line-through">
                {featuredOffer.originalPrice}
              </span>
              <span className="text-2xl font-bold text-slate-900">
                {featuredOffer.offerPrice}
              </span>
            </div>

            <p className="text-xs tracking-wide text-slate-400 uppercase">
              Valid until {featuredOffer.validUntil}
            </p>

            <div>
              <Button
                href="/contact"
                icon={<ArrowRight size={16} strokeWidth={1.5} />}
                className="bg-slate-900 hover:bg-slate-800"
              >
                GET THIS OFFER
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
