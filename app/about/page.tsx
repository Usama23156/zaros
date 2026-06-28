import type { Metadata } from "next";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ZAROS Interior Decoration — our story, team, and commitment to premium interior design across the UAE.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        overline="Our Story"
        title="About ZAROS"
        description="A premium interior decoration studio dedicated to crafting spaces that inspire, comfort, and endure."
      />
      <About hideHeader hideCta />
      <WhyChooseUs />
      <Stats />
    </main>
  );
}
