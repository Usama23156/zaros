"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import Button from "@/components/shared/Button";
import { heroFallbackImage } from "@/lib/data/home";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoError = useCallback(() => {
    setVideoFailed(true);
  }, []);

  const handleVideoLoaded = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Desktop: two-column layout */}
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[45%_55%]">
        {/* Content — mobile overlays video, desktop sits beside */}
        <div className="relative z-10 flex flex-col justify-center bg-white px-4 py-16 sm:px-6 lg:bg-transparent lg:px-8 lg:py-24 max-lg:absolute max-lg:inset-0 max-lg:justify-end max-lg:bg-gradient-to-t max-lg:from-zinc-900/80 max-lg:via-zinc-900/40 max-lg:to-transparent max-lg:pb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-xs font-medium tracking-[0.25em] text-zinc-500 uppercase max-lg:text-zinc-300"
          >
            WE DESIGN
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-[0.06em] text-zinc-900 uppercase sm:text-5xl lg:text-[3.25rem] lg:leading-tight max-lg:text-white"
          >
            Spaces That
            <br />
            Inspire
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-8 max-w-md text-base leading-relaxed text-zinc-500 max-lg:text-zinc-200"
          >
            We craft bespoke interior environments that blend timeless elegance
            with modern functionality — transforming houses into homes and spaces
            into experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Button
              href="/portfolio"
              icon={<ArrowRight size={16} strokeWidth={1.5} />}
              className="max-lg:bg-white max-lg:text-zinc-900 max-lg:hover:bg-zinc-100"
            >
              EXPLORE OUR WORK
            </Button>
          </motion.div>
        </div>

        {/* Video / Visual column */}
        <div className="relative min-h-[520px] lg:min-h-[640px]">
          <Image
            src={heroFallbackImage}
            alt="Luxury modern living room interior"
            fill
            priority
            className={`object-cover transition-opacity duration-700 ${
              videoLoaded && !videoFailed ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />

          {!videoFailed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: videoLoaded ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={heroFallbackImage}
                onLoadedData={handleVideoLoaded}
                onError={handleVideoError}
                aria-hidden="true"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            </motion.div>
          )}

          <div className="absolute inset-0 bg-zinc-900/25 max-lg:bg-zinc-900/40" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
