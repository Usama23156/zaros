import TopBar from "@/components/shared/TopBar";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Brands from "@/components/home/Brands";
import CTABanner from "@/components/home/CTABanner";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
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
      <Footer />
    </>
  );
}
