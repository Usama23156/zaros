"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/shared/Button";
import Logo from "@/components/shared/Logo";
import { navLinks } from "@/lib/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white">
      <nav
        className="mx-auto flex  items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo />

        <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`relative text-xs font-medium tracking-[0.15em] transition-colors hover:text-zinc-900 ${
                  isActive(pathname, link.href)
                    ? "text-zinc-900 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-zinc-900"
                    : "text-zinc-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact">GET A QUOTE</Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-zinc-900 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-100 bg-white px-4 py-6 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`block text-sm font-medium tracking-[0.15em] ${
                    isActive(pathname, link.href) ? "text-zinc-900" : "text-zinc-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="/contact" className="w-full">
                GET A QUOTE
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
