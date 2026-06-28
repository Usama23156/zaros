import About from "@/components/home/About";
import Brands from "@/components/home/Brands";
import CTABanner from "@/components/home/CTABanner";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <About />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Stats />
      <Testimonials />
      <Brands />
      <CTABanner />
      <ContactCTA />
    </main>
  );
}
