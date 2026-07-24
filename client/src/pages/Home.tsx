import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FreeResourceSection from "@/components/FreeResourceSection";
import EbookSection from "@/components/EbookSection";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

/**
 * Home — The Smart Beauty Project landing page
 * Design: Rooted Radiance (Warm Terracotta Editorial)
 * Sections: Hero → Mission → Free Resource → eBook → Donate → Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <FreeResourceSection />
        <EbookSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
