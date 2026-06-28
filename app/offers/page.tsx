import type { Metadata } from "next";
import FeaturedOffer from "@/components/offers/FeaturedOffer";
import OffersBenefits from "@/components/offers/OffersBenefits";
import OffersGrid from "@/components/offers/OffersGrid";
import OffersHero from "@/components/offers/OffersHero";

export const metadata: Metadata = {
  title: "Offers",
  description:
    "Explore exclusive ZAROS interior design packages and seasonal promotions at exceptional value.",
};

export default function OffersPage() {
  return (
    <main>
      <OffersHero />
      <FeaturedOffer />
      <OffersGrid />
      <OffersBenefits />
    </main>
  );
}
