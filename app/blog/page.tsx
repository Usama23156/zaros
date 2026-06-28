import type { Metadata } from "next";
import BlogGrid from "@/components/blog/BlogGrid";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Design insights, trends, and tips from the ZAROS Interior Decoration team.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        overline="Insights"
        title="Design Journal"
        description="Thoughts on interior design, materials, trends, and the art of living beautifully."
      />
      <BlogGrid />
    </main>
  );
}
