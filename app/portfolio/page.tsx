import type { Metadata } from "next";
import Portfolio from "@/components/home/Portfolio";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse the ZAROS portfolio of premium residential, commercial, and hospitality interior design projects.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        overline="Our Work"
        title="Featured Projects"
        description="A curated selection of spaces we have transformed with precision, creativity, and care."
      />
      <Portfolio hideHeader hideViewAll />
    </main>
  );
}
