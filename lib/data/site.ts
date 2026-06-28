export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Interior Design", href: "/services" },
    { label: "Space Planning", href: "/services" },
    { label: "Lighting Design", href: "/services" },
    { label: "Renovation", href: "/services" },
  ],
};
