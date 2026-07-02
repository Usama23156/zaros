"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/shared/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";



export default function About({
  hideHeader = false,
  hideCta = false,
}: {
  hideHeader?: boolean;
  hideCta?: boolean;
}) {
  return (
    <AnimatedSection className="bg-zinc-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative aspect-4/5 overflow-hidden"
        >
          <Image
            src="/about-home.jpeg"
            alt="ZAROS interior design studio workspace"
            fill
            className="object-cover mask-[linear-gradient(to_bottom,blue_50%,transparent)] md:mask-[linear-gradient(to_right,blue_70%,transparent)]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          {!hideHeader && (
            <>
              <span className="text-xs font-medium tracking-[0.25em] text-zinc-500 uppercase">
                About Company
              </span>
              <h2 className="text-3xl font-bold tracking-[0.08em] text-zinc-900 uppercase md:text-4xl">
                About ZAROS
              </h2>
              <div className="h-px w-12 bg-zinc-900" aria-hidden="true" />
            </>
          )}
          <p className="text-base leading-relaxed text-zinc-500">
            Founded with a passion for creating extraordinary living environments,
            ZAROS Interior Decoration has become a trusted name in premium design
            across the UAE. We believe every space tells a story — and we are
            dedicated to making yours unforgettable.
          </p>
          <p className="text-base leading-relaxed text-zinc-500">
            Our multidisciplinary team combines architectural precision with
            artistic vision, delivering bespoke interiors that balance beauty,
            comfort, and functionality. From concept to completion, we manage
            every detail so you can enjoy the transformation.
          </p>
          {!hideCta && (
            <div>
              <Button href="/about" variant="outline">
                READ MORE
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
