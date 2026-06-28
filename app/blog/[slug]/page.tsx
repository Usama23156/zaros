import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/shared/Button";
import { blogPosts } from "@/lib/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <main>
      <article>
        <div className="relative aspect-[21/9] w-full bg-zinc-900">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-zinc-900/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
              <div className="mb-4 flex items-center gap-3 text-xs tracking-[0.15em] text-zinc-300 uppercase">
                <span>{post.category}</span>
                <span aria-hidden="true">·</span>
                <time>{post.date}</time>
              </div>
              <h1 className="text-3xl font-bold tracking-[0.06em] text-white uppercase md:text-4xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-8 text-lg leading-relaxed text-zinc-600">{post.excerpt}</p>
          <p className="mb-6 text-base leading-relaxed text-zinc-500">
            At ZAROS, we believe great design begins with understanding how people
            live, work, and feel within a space. This article explores ideas and
            approaches we use every day when crafting interiors for our clients
            across the UAE.
          </p>
          <p className="mb-10 text-base leading-relaxed text-zinc-500">
            Whether you are planning a full renovation or refining a single room,
            thoughtful design choices in materials, lighting, and layout can
            transform everyday living into something extraordinary.
          </p>
          <Button href="/blog" variant="outline">
            Back to Blog
          </Button>
        </div>
      </article>
    </main>
  );
}
