"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { blogPosts } from "@/lib/data/blog";

export default function BlogGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={staggerItem}
              className="group flex flex-col border border-zinc-100 bg-white transition-shadow duration-300 hover:shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs tracking-[0.15em] text-zinc-500 uppercase">
                  <span>{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <time>{post.date}</time>
                </div>
                <h2 className="mb-3 text-base font-bold tracking-[0.06em] text-zinc-900 uppercase">
                  {post.title}
                </h2>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-500">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold tracking-[0.15em] text-zinc-900 uppercase transition-colors hover:text-zinc-600"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
