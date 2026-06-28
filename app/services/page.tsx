import type { Metadata } from "next";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesProcess from "@/components/services/ServicesProcess";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ZAROS interior decoration services — curtains, gypsum, flooring, carpentry, painting, and complete turnkey solutions.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
    </main>
  );
}
