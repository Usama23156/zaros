import type { Metadata } from "next";
import DiscountBanners from "@/components/offers/DiscountBanners";
import OfferCategories from "@/components/offers/OfferCategories";
import OffersHero from "@/components/offers/OffersHero";
import OffersValueBar from "@/components/offers/OffersValueBar";
import SpecialDeals from "@/components/offers/SpecialDeals";

export const metadata: Metadata = {
  title: "Offers",
  description:
    "Exclusive offers on premium interior products — curtains, flooring, wall decor, and more at exceptional prices.",
};

export default function OffersPage() {
  return (
    <main>
      <OffersHero />
      <DiscountBanners />
      <OfferCategories />
      <OffersValueBar />
      <SpecialDeals />
    </main>
  );
}
