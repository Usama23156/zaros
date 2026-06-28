interface PageHeroProps {
  overline: string;
  title: string;
  description?: string;
}

export default function PageHero({ overline, title, description }: PageHeroProps) {
  return (
    <section className="bg-zinc-900 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="mb-4 block text-xs font-medium tracking-[0.25em] text-zinc-400 uppercase">
          {overline}
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-[0.08em] uppercase md:text-5xl">
          {title}
        </h1>
        <div className="mb-6 h-px w-12 bg-white/40" aria-hidden="true" />
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
