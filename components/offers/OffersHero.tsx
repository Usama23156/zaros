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
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
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

          <h1 className="text-3xl font-bold tracking-[0.05em] text-[#0F172A] uppercase sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            Premium Spaces
            <br />
            Better Prices
          </h1>

          <p className="max-w-md text-base leading-relaxed text-slate-500">
            Exclusive offers on premium interior solutions — from curtains and
            flooring to complete decor packages. Transform your space for less
            without compromising on quality.
          </p>

          <div>
            <Button
              href="#special-deals"
              icon={<ArrowRight size={16} strokeWidth={1.5} />}
              className="bg-[#0F172A] hover:bg-slate-800 focus-visible:outline-[#0F172A]"
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

          <div className="absolute right-5 bottom-5 flex h-[7.5rem] w-[7.5rem] flex-col items-center justify-center rounded-full bg-[#0F172A] p-3 text-center sm:right-8 sm:bottom-8 sm:h-[8.5rem] sm:w-[8.5rem]">
            <span className="text-base font-bold leading-none text-white sm:text-lg">
              UP TO 70%
            </span>
            <span className="mt-1.5 max-w-[90px] text-[8px] leading-tight font-medium tracking-wide text-white/90 uppercase sm:text-[9px]">
              OFF ON SELECTED ITEMS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
