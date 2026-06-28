/** Static placeholder products — no backend required. */

export const productsHeroImage =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80";

export const productCategories = [
  "All",
  "Furniture",
  "Lighting",
  "Textiles",
  "Decor",
  "Flooring",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const products = [
  {
    id: "milano-sofa",
    name: "Milano Sectional Sofa",
    category: "Furniture" as const,
    price: "AED 18,500",
    salePrice: "AED 14,800",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c624ea9c?w=600&q=80",
  },
  {
    id: "oak-dining-table",
    name: "Oak Dining Table",
    category: "Furniture" as const,
    price: "AED 12,800",
    salePrice: null,
    onSale: false,
    image:
      "https://images.unsplash.com/photo-1617806118773-1e6f1f792fee?w=600&q=80",
  },
  {
    id: "velvet-armchair",
    name: "Velvet Accent Armchair",
    category: "Furniture" as const,
    price: "AED 6,200",
    salePrice: "AED 4,960",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    id: "arc-floor-lamp",
    name: "Arc Floor Lamp",
    category: "Lighting" as const,
    price: "AED 3,200",
    salePrice: null,
    onSale: false,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
  },
  {
    id: "pendant-cluster",
    name: "Pendant Light Cluster",
    category: "Lighting" as const,
    price: "AED 4,750",
    salePrice: "AED 2,850",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
  },
  {
    id: "marble-table-lamp",
    name: "Marble Table Lamp",
    category: "Lighting" as const,
    price: "AED 1,950",
    salePrice: null,
    onSale: false,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
  },
  {
    id: "linen-curtain-set",
    name: "Premium Linen Curtains",
    category: "Textiles" as const,
    price: "AED 2,400",
    salePrice: "AED 1,200",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
  },
  {
    id: "wool-area-rug",
    name: "Handwoven Wool Rug",
    category: "Textiles" as const,
    price: "AED 6,900",
    salePrice: null,
    onSale: false,
    image:
      "https://images.unsplash.com/photo-1600166896085-861552ee1e83?w=600&q=80",
  },
  {
    id: "silk-cushion-set",
    name: "Silk Cushion Set (4pc)",
    category: "Textiles" as const,
    price: "AED 890",
    salePrice: "AED 623",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    id: "ceramic-vase-set",
    name: "Ceramic Vase Collection",
    category: "Decor" as const,
    price: "AED 1,850",
    salePrice: null,
    onSale: false,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80",
  },
  {
    id: "abstract-wall-art",
    name: "Abstract Wall Art",
    category: "Decor" as const,
    price: "AED 3,600",
    salePrice: "AED 2,520",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80",
  },
  {
    id: "brass-sculpture",
    name: "Brass Sculpture",
    category: "Decor" as const,
    price: "AED 2,100",
    salePrice: null,
    onSale: false,
    image:
      "https://images.unsplash.com/photo-1600121848594-a78687414566?w=600&q=80",
  },
  {
    id: "oak-parquet",
    name: "European Oak Parquet",
    category: "Flooring" as const,
    price: "AED 320 / sqm",
    salePrice: "AED 224 / sqm",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  },
  {
    id: "marble-tile",
    name: "Calacatta Marble Tile",
    category: "Flooring" as const,
    price: "AED 450 / sqm",
    salePrice: null,
    onSale: false,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: "herringbone-floor",
    name: "Herringbone Wood Floor",
    category: "Flooring" as const,
    price: "AED 380 / sqm",
    salePrice: "AED 266 / sqm",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    id: "wall-panel-set",
    name: "3D Wall Panel Set",
    category: "Decor" as const,
    price: "AED 4,200",
    salePrice: "AED 2,730",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1618221197210-5b2a5c0a0c0b?w=600&q=80",
  },
];
