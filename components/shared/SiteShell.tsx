import Footer from "@/components/home/Footer";
import Navbar from "@/components/shared/Navbar";
import TopBar from "@/components/shared/TopBar";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
