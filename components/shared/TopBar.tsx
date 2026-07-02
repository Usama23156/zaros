import { Mail, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
} from "@/components/shared/SocialIcons";
import { contactInfo } from "@/lib/data/home";

export default function TopBar() {
  return (
    <div className="bg-zinc-900 text-white">
      <div className="mx-auto flex  items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/80 transition-colors hover:text-white"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/80 transition-colors hover:text-white"
          >
            <FacebookIcon size={16} />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="text-white/80 transition-colors hover:text-white"
          >
            <PinterestIcon size={16} />
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs text-white/80 sm:gap-6">
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone size={14} strokeWidth={1.5} />
            <span className="hidden sm:inline">{contactInfo.phone}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail size={14} strokeWidth={1.5} />
            <span className="hidden md:inline">{contactInfo.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
