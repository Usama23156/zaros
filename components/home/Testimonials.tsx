"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { testimonials } from "@/lib/data/home";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent((index + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <AnimatedSection className="bg-zinc-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader
            overline="TESTIMONIALS"
            title="CLIENT STORIES"
            description="Hear from the clients who have experienced the ZAROS difference."
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative text-center"
        >
          <Quote
            size={48}
            strokeWidth={1}
            className="mx-auto mb-8 text-zinc-300"
            aria-hidden="true"
          />

          <div className="relative min-h-[180px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mb-8 text-lg leading-relaxed text-zinc-600 italic md:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="block text-sm font-bold tracking-[0.08em] text-zinc-900 uppercase">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-sm text-zinc-500">
                      {testimonial.title}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center border border-zinc-200 text-zinc-900 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === current}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-zinc-900"
                      : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(current + 1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center border border-zinc-200 text-zinc-900 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
