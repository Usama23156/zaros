"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import {
  productCategories,
  products,
  type ProductCategory,
} from "@/lib/data/products";

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="bg-slate-50 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerItem}
          className="mb-10 flex flex-col items-center gap-6"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-slate-200" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.25em] text-slate-500 uppercase">
                Collection
              </span>
              <div className="h-px w-12 bg-slate-200" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold tracking-[0.08em] text-slate-900 uppercase md:text-4xl">
              Shop Products
            </h2>
          </div>

          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Product categories"
          >
            {productCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase transition-colors ${
                  activeCategory === category
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-900 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {filtered.map((product) => (
            <motion.article
              key={product.id}
              variants={staggerItem}
              className="group flex flex-col overflow-hidden border border-slate-100 bg-white transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-1 text-[10px] font-medium tracking-[0.15em] text-slate-400 uppercase">
                  {product.category}
                </span>
                <h3 className="mb-2 text-sm font-bold tracking-[0.06em] text-slate-900 uppercase">
                  {product.name}
                </h3>
                <p className="mb-4 text-base font-semibold text-slate-900">
                  {product.price}
                </p>
                <Link
                  href="/contact"
                  className="mt-auto text-xs font-semibold tracking-[0.15em] text-slate-900 uppercase transition-colors hover:text-slate-600"
                >
                  Inquire →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
