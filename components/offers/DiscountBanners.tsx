"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { discountBanners } from "@/lib/data/offers";

export default function DiscountBanners() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-xs font-medium tracking-[0.25em] text-slate-500 uppercase">
            Discounts Up To
          </span>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {discountBanners.map((banner) => (
            <motion.div key={banner.id} variants={staggerItem}>
              <Link
                href={banner.href}
                className="group relative flex min-h-[240px] flex-col justify-center overflow-hidden bg-[#0F172A] p-10 md:min-h-[280px] md:p-14"
              >
                {banner.variant === "image" && banner.image && (
                  <>
                    <Image
                      src={banner.image}
                      alt=""
                      fill
                      className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-[#0F172A]/55" aria-hidden="true" />
                  </>
                )}

                <div className="relative z-10 flex flex-col gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                    {banner.discount}
                  </span>
                  <span className="text-xs font-medium tracking-[0.2em] text-white/75 uppercase md:text-sm">
                    {banner.subtitle}
                  </span>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-transform group-hover:translate-x-1">
                    Shop Now
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
