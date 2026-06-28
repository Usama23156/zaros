import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import OurValues from "@/components/about/OurValues";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ZAROS Interior Decoration — our story, values, and team dedicated to designing spaces that tell your story.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <OurValues />
      <OurTeam />
    </main>
  );
}
