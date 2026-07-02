"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { projects } from "@/lib/data/home";

export default function Portfolio({
  hideHeader = false,
  hideViewAll = false,
}: {
  hideHeader?: boolean;
  hideViewAll?: boolean;
}) {
  return (
    <AnimatedSection className="bg-zinc-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="mb-14 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <SectionHeader
              overline="OUR WORK"
              title="FEATURED PROJECTS"
              align="left"
            />
            {!hideViewAll && (
              <Button href="/offers" variant="outline" className="shrink-0">
                VIEW ALL
              </Button>
            )}
          </div>
        )}

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={staggerItem}
              className="group relative aspect-4/3 overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-zinc-900/0 transition-colors duration-500 group-hover:bg-zinc-900/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="mb-1 font-bold text-lg tracking-[0.2em] text-zinc-300 uppercase">
                  {project.category}
                </span>
                <h3 className="  text-xs tracking-[0.06em] text-white uppercase">
                  {project.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
