"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/shared/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
} from "@/components/shared/SocialIcons";
import { contactInfo } from "@/lib/data/home";
import { footerLinks } from "@/lib/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1C20] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo variant="light" />
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Premium interior decoration studio crafting bespoke spaces that
              inspire, comfort, and endure across the UAE.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-white hover:text-white"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-white hover:text-white"
              >
                <FacebookIcon size={14} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-white hover:text-white"
              >
                <PinterestIcon size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-bold tracking-[0.15em] uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xs font-bold tracking-[0.15em] uppercase">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-5 text-xs font-bold tracking-[0.15em] uppercase">
                Contact Us
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <Phone size={16} strokeWidth={1.5} />
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <Mail size={16} strokeWidth={1.5} />
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  {contactInfo.address}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-bold tracking-[0.15em] uppercase">
                Newsletter
              </h3>
              <p className="mb-4 text-sm text-zinc-400">
                Subscribe for design inspiration and updates.
              </p>
              <form
                className="flex border border-zinc-700"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter signup"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email address"
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex items-center justify-center px-4 text-zinc-400 transition-colors hover:text-white"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} ZAROS Interior Decoration. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-zinc-500 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
