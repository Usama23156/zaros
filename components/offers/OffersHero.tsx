"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "@/components/shared/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { offersHeroImage } from "@/lib/data/offers";

export default function OffersHero() {
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
            Our Offers
          </span>

          <h1 className="text-3xl font-bold tracking-[0.06em] text-slate-900 uppercase sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Premium Spaces
            <br />
            Better Prices
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-slate-500">
            Exclusive offers on premium interior solutions — from curtains and
            flooring to complete decor packages. Transform your space for less
            without compromising on quality.
          </p>

          <div>
            <Button
              href="#special-deals"
              icon={<ArrowRight size={16} strokeWidth={1.5} />}
              className="bg-slate-900 hover:bg-slate-800 focus-visible:outline-slate-900"
            >
              VIEW ALL OFFERS
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
            src={offersHeroImage}
            alt="Modern living room interior"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute right-6 bottom-6 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-slate-900 p-4 text-center shadow-lg sm:right-8 sm:bottom-8 sm:h-36 sm:w-36">
            <span className="text-lg font-bold leading-tight text-white sm:text-xl">
              UP TO 70%
            </span>
            <span className="mt-1 text-[9px] leading-tight font-medium tracking-wide text-white/90 uppercase sm:text-[10px]">
              OFF ON SELECTED ITEMS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
