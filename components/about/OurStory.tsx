"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "@/components/shared/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { aboutImages } from "@/lib/data/about";

export default function OurStory() {
  return (
    <section className="bg-zinc-50 py-16 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="order-2 flex flex-col gap-6 lg:order-1"
        >
          <span className="text-xs font-medium tracking-[0.25em] text-zinc-500 uppercase">
            Our Story
          </span>

          <p className="text-base leading-relaxed text-zinc-500">
            Founded in the heart of the UAE, ZAROS Interior Decoration began with
            a simple belief: great design should feel personal, purposeful, and
            enduring. What started as a small studio has grown into a trusted
            name for premium residential and commercial interiors across Dubai
            and beyond.
          </p>

          <p className="text-base leading-relaxed text-zinc-500">
            Today, our multidisciplinary team brings together designers,
            architects, and craftsmen who share one commitment — to deliver
            spaces that exceed expectations in both beauty and functionality.
            Every project is a partnership built on trust, transparency, and
            an unwavering dedication to quality.
          </p>

          <div>
            <Button
              href="/offers"
              icon={<ArrowRight size={16} strokeWidth={1.5} />}
            >
              VIEW OFFERS
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="relative order-1 aspect-[16/10] overflow-hidden lg:order-2 lg:aspect-[4/3]"
        >
          <Image
            src={aboutImages.story}
            alt="Luxurious modern living room with neutral tones"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
