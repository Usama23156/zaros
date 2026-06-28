import type { Metadata } from "next";
import CTABanner from "@/components/home/CTABanner";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ZAROS interior design services — interior design, space planning, lighting design, and full renovation management.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        overline="What We Do"
        title="Our Services"
        description="Comprehensive interior design solutions tailored to residential, commercial, and hospitality spaces."
      />
      <Services hideHeader />
      <Process />
      <WhyChooseUs />
      <CTABanner />
    </main>
  );
}
