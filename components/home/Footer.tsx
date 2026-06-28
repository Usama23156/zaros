import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/shared/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
} from "@/components/shared/SocialIcons";
import { contactInfo, footerLinks } from "@/lib/data/home";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Premium interior decoration studio crafting bespoke spaces that
              inspire, comfort, and endure across the UAE.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.15em] uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.15em] uppercase">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.15em] uppercase">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-zinc-400">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                {contactInfo.address}
              </li>
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
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} ZAROS Interior Decoration. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <PinterestIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
