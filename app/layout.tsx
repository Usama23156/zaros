import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import SiteShell from "@/components/shared/SiteShell";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ZAROS Interior Decoration | Premium Interior Design",
    template: "%s | ZAROS Interior Decoration",
  },
  description:
    "ZAROS Interior Decoration crafts bespoke interior environments that blend timeless elegance with modern functionality across the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-zinc-900">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
