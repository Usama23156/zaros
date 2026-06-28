export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "OFFERS", href: "/offers" },
  { label: "PRODUCTS", href: "/products" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  offers: [
    { label: "Curtains & Blinds", href: "/offers" },
    { label: "Wall Decor", href: "/offers" },
    { label: "Flooring", href: "/offers" },
    { label: "Gypsum & Ceilings", href: "/offers" },
    { label: "Paints & Finishes", href: "/offers" },
    { label: "Decor & Accessories", href: "/offers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
