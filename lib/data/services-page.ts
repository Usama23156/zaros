import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Hammer,
  Lamp,
  Layers,
  LayoutGrid,
  MessageSquare,
  Paintbrush,
  PanelTop,
  PenTool,
  Square,
  Wind,
} from "lucide-react";

export const servicesHeroImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80";

export const serviceCards: {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: "Curtains & Blinds",
    description:
      "Custom window treatments that balance privacy, light control, and refined aesthetic appeal.",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    title: "Interior Decoration",
    description:
      "Complete interior styling with curated furniture, fabrics, and accessories for cohesive spaces.",
    icon: LayoutGrid,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    title: "Gypsum & False Ceilings",
    description:
      "Architectural ceiling designs with integrated lighting for depth, drama, and modern elegance.",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    title: "Wall Panels & Moldings",
    description:
      "Decorative wall treatments and moldings that add character, texture, and timeless sophistication.",
    icon: PanelTop,
    image:
      "https://images.unsplash.com/photo-1618221197210-5b2a5c0a0c0b?w=600&q=80",
  },
  {
    title: "Parquet & Flooring",
    description:
      "Premium flooring solutions from hardwood parquet to engineered surfaces built to last.",
    icon: Square,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  },
  {
    title: "Painting & Finishes",
    description:
      "Expert color consultation and flawless paint application for walls, ceilings, and specialty finishes.",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  },
  {
    title: "Carpentry & Custom Joinery",
    description:
      "Bespoke built-in cabinetry, wardrobes, and woodwork crafted with precision and premium materials.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
  },
  {
    title: "Accessories & Decor",
    description:
      "Curated art, lighting, textiles, and decorative pieces that complete and elevate every room.",
    icon: Lamp,
    image:
      "https://images.unsplash.com/photo-1600121848594-a78687414566?w=600&q=80",
  },
];

export const servicesProcessSteps: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "CONSULTATION",
    description:
      "We discuss your vision, assess the space, and understand your requirements and budget.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "DESIGN",
    description:
      "Our team develops detailed concepts, 3D visualizations, and material selections for approval.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "EXECUTION",
    description:
      "Skilled craftsmen bring the design to life with quality materials and meticulous attention.",
    icon: Hammer,
  },
  {
    step: "04",
    title: "COMPLETION",
    description:
      "Final walkthrough, styling, and handover of your beautifully transformed space.",
    icon: CheckCircle2,
  },
];
