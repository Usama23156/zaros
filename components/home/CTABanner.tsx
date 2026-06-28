"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/shared/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";

const ctaBackground =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80";

export default function CTABanner() {
  return (
    <section className="relative min-h-[400px] overflow-hidden md:min-h-[480px]">
      <Image
        src={ctaBackground}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-zinc-900/70" aria-hidden="true" />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <h2 className="mb-4 text-3xl font-bold tracking-[0.08em] text-white uppercase md:text-4xl lg:text-5xl">
          Ready to Transform
          <br />
          Your Space?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base text-zinc-300">
          Let us bring your vision to life with a bespoke interior design
          experience tailored exclusively to you.
        </p>
        <Button href="#contact" className="bg-white text-zinc-900 hover:bg-zinc-100">
          CONTACT US
        </Button>
      </motion.div>
    </section>
  );
}
