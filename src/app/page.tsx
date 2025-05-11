// app/page.tsx
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import MobileTerminalView from "@/components/MobileTerminalView";

export default function HomePage() {
  return (
    <>
      {/* Tampilan Mobile - Hanya muncul di layar kecil */}
      <MobileTerminalView />

      {/* Tampilan Desktop - Hanya muncul di layar medium ke atas */}
      <div className="hidden md:block">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
