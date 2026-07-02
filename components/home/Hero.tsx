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
      
      <div className="w-full h-[120vh] relative sm:h-screen">
        <div className="w-full relative top-0 left-0 h-full " >
          <video src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            preload='metadata'
            className='w-full h-full object-cover ' />
            <div className="absolute top-[75%] left-[50%]   w-full h-full translate-y-[-50%] translate-x-[-50%]">  
         <div className="flex flex-col justify-center opacity-85 items-center py-9 text-center px-5   ">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-xs font-medium tracking-[0.25em] text-zinc-300 uppercase max-lg:text-zinc-300"
          >
            WE DESIGN
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-[0.06em] text-zinc-300 uppercase sm:text-5xl lg:text-[3.25rem] lg:leading-tight max-lg:text-white"
          >
            Spaces That Inspire
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-8 max-w-md text-base leading-relaxed text-zinc-200 max-lg:text-zinc-200"
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
              href="/offers"
              icon={<ArrowRight size={16} strokeWidth={1.5} />}
              className="max-lg:bg-white max-lg:text-zinc-900 max-lg:hover:bg-zinc-100"
            >
              EXPLORE OUR OFFERS
            </Button>
          </motion.div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
