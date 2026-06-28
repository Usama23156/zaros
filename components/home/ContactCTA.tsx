"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { contactInfo } from "@/lib/data/home";

export default function ContactCTA() {
  return (
    <AnimatedSection className="bg-zinc-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <span className="mb-4 block text-xs font-medium tracking-[0.25em] text-zinc-500 uppercase">
              Get In Touch
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-[0.08em] text-zinc-900 uppercase md:text-4xl">
              Start Your Project
            </h2>
            <div className="mb-6 h-px w-12 bg-zinc-900" aria-hidden="true" />
            <p className="mb-8 max-w-md text-base leading-relaxed text-zinc-500">
              Ready to begin your interior design journey? Reach out for a
              complimentary consultation and let us show you what is possible.
            </p>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  <Phone size={18} strokeWidth={1.5} className="shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  <Mail size={18} strokeWidth={1.5} className="shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-600">
                <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                {contactInfo.address}
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-5 bg-white p-8 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="first-name" className="text-xs font-medium tracking-wide text-zinc-600 uppercase">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="John"
                  className="border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="last-name" className="text-xs font-medium tracking-wide text-zinc-600 uppercase">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                  className="border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium tracking-wide text-zinc-600 uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium tracking-wide text-zinc-600 uppercase">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="resize-none border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 bg-zinc-900 px-7 py-3.5 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-all duration-300 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 sm:w-auto"
            >
              SEND MESSAGE
            </button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}
