export const productsHeroImage =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80";

export const productCategories = [
  "All",
  "Furniture",
  "Lighting",
  "Textiles",
  "Decor",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const products = [
  {
    id: "milano-sofa",
    name: "Milano Sectional Sofa",
    category: "Furniture" as const,
    price: "AED 18,500",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c624ea9c?w=600&q=80",
  },
  {
    id: "oak-dining-table",
    name: "Oak Dining Table",
    category: "Furniture" as const,
    price: "AED 12,800",
    image:
      "https://images.unsplash.com/photo-1617806118773-1e6f1f792fee?w=600&q=80",
  },
  {
    id: "arc-floor-lamp",
    name: "Arc Floor Lamp",
    category: "Lighting" as const,
    price: "AED 3,200",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
  },
  {
    id: "pendant-cluster",
    name: "Pendant Light Cluster",
    category: "Lighting" as const,
    price: "AED 4,750",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
  },
  {
    id: "linen-curtain-set",
    name: "Premium Linen Curtains",
    category: "Textiles" as const,
    price: "AED 2,400",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
  },
  {
    id: "wool-area-rug",
    name: "Handwoven Wool Rug",
    category: "Textiles" as const,
    price: "AED 6,900",
    image:
      "https://images.unsplash.com/photo-1600166896085-861552ee1e83?w=600&q=80",
  },
  {
    id: "ceramic-vase-set",
    name: "Ceramic Vase Collection",
    category: "Decor" as const,
    price: "AED 1,850",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80",
  },
  {
    id: "abstract-wall-art",
    name: "Abstract Wall Art",
    category: "Decor" as const,
    price: "AED 3,600",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80",
  },
];
