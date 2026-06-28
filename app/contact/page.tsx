import type { Metadata } from "next";
import ContactCTA from "@/components/home/ContactCTA";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ZAROS Interior Decoration for a complimentary consultation on your next interior design project.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        overline="Get In Touch"
        title="Contact Us"
        description="Ready to begin your interior design journey? Reach out and let us show you what is possible."
      />
      <ContactCTA />
    </main>
  );
}
