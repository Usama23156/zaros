import type { LucideIcon } from "lucide-react";
import {
  Award,
  Clock,
  Grid3x3,
  Layers,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Square,
  Wind,
} from "lucide-react";

export const offersHeroImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80";

export const discountBanners = [
  {
    id: "banner-50",
    discount: "50% OFF",
    subtitle: "ON SELECTED ITEMS",
    variant: "solid" as const,
    image: null,
    href: "/products",
  },
  {
    id: "banner-70",
    discount: "70% OFF",
    subtitle: "ON SELECTED ITEMS",
    variant: "image" as const,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",
    href: "/products",
  },
];

export const offerCategories: {
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: "Curtains & Blinds",
    description: "Premium fabrics and custom fittings for every window style.",
    tag: "UP TO 50% OFF",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=300&q=80",
  },
  {
    title: "Wall Decor",
    description: "Panels, moldings, and art to elevate your walls with character.",
    tag: "UP TO 40% OFF",
    icon: Square,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=300&q=80",
  },
  {
    title: "Flooring",
    description: "Hardwood, parquet, and engineered surfaces built to last.",
    tag: "UP TO 35% OFF",
    icon: Grid3x3,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&q=80",
  },
  {
    title: "Gypsum & Ceilings",
    description: "Architectural ceiling designs with integrated lighting solutions.",
    tag: "UP TO 45% OFF",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80",
  },
  {
    title: "Paints & Finishes",
    description: "Expert color palettes and flawless application for every surface.",
    tag: "UP TO 30% OFF",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&q=80",
  },
  {
    title: "Decor & Accessories",
    description: "Curated vases, cushions, rugs, and pieces that complete your space.",
    tag: "UP TO 55% OFF",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1600121848594-a78687414566?w=300&q=80",
  },
];

export const valuePropositions = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "Products you can trust.",
  },
  {
    icon: Award,
    title: "Best Prices",
    description: "Unbeatable offers.",
  },
  {
    icon: Sparkles,
    title: "Expert Guidance",
    description: "Personalized support.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Right on time too.",
  },
];

export const specialDeals = [
  {
    id: "linen-curtains",
    badge: "50% OFF",
    title: "Linen Curtains",
    description: "Premium linen drapes with custom sizing and installation.",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=500&q=80",
    endsAt: "2026-12-31T23:59:59",
  },
  {
    id: "oak-flooring",
    badge: "40% OFF",
    title: "Oak Parquet Flooring",
    description: "Solid oak parquet panels with professional fitting included.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&q=80",
    endsAt: "2026-11-30T23:59:59",
  },
  {
    id: "wall-panels",
    badge: "35% OFF",
    title: "Wall Panel Set",
    description: "Decorative wall panels with premium finish and easy install.",
    image:
      "https://images.unsplash.com/photo-1618221197210-5b2a5c0a0c0b?w=500&q=80",
    endsAt: "2026-10-15T23:59:59",
  },
  {
    id: "pendant-lights",
    badge: "60% OFF",
    title: "Pendant Light Pair",
    description: "Designer pendant lights for dining and living spaces.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&q=80",
    endsAt: "2026-09-20T23:59:59",
  },
  {
    id: "decor-bundle",
    badge: "70% OFF",
    title: "Decor Bundle Pack",
    description: "Curated vases, cushions, and accessories for any room.",
    image:
      "https://images.unsplash.com/photo-1600121848594-a78687414566?w=500&q=80",
    endsAt: "2026-08-31T23:59:59",
  },
];
