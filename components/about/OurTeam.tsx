"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Button from "@/components/shared/Button";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { teamMembers, teamQuote } from "@/lib/data/about";

export default function OurTeam() {
  return (
    <section className="bg-zinc-50 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left — intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="flex flex-col justify-center gap-6 lg:col-span-3"
          >
            <span className="text-xs font-medium tracking-[0.25em] text-zinc-500 uppercase">
              Our Team
            </span>
            <p className="text-base leading-relaxed text-zinc-500">
              A passionate collective of designers, architects, and project
              specialists united by a shared pursuit of exceptional interiors.
            </p>
            <div>
              <Button
                href="/contact"
                icon={<ArrowRight size={16} strokeWidth={1.5} />}
              >
                MEET THE TEAM
              </Button>
            </div>
          </motion.div>

          {/* Center — portraits */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-5 lg:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {teamMembers.map((member) => (
              <motion.figure
                key={member.name}
                variants={staggerItem}
                className="group relative aspect-[3/5] overflow-hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 50vw, 20vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-900/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="block text-xs font-bold tracking-wide text-white uppercase">
                    {member.name}
                  </span>
                  <span className="text-[10px] text-zinc-300">{member.role}</span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>

          {/* Right — quote callout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center bg-zinc-900 p-8 md:p-10 lg:col-span-4 lg:min-h-[420px] lg:p-12"
          >
            <Quote
              size={40}
              strokeWidth={1}
              className="mb-8 text-white/30"
              aria-hidden="true"
            />
            <blockquote className="text-xl leading-relaxed font-light text-white md:text-2xl lg:text-[1.65rem] lg:leading-snug">
              &ldquo;{teamQuote}&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
