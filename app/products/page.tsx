import type { Metadata } from "next";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsHero from "@/components/products/ProductsHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse ZAROS curated collection of premium furniture, lighting, textiles, and decor for your interior.",
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <ProductsGrid />
    </main>
  );
}
