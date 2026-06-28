export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PRODUCTS", href: "/products" },
  { label: "OFFERS", href: "/offers" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Offers", href: "/offers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Curtains & Blinds", href: "/services" },
    { label: "Interior Decoration", href: "/services" },
    { label: "Gypsum & Ceilings", href: "/services" },
    { label: "Carpentry & Joinery", href: "/services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
