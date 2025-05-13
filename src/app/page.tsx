// app/page.tsx
import type { Metadata } from "next";
import JsonLdScript from "@/components/JsonLdScript";
import type { WebPage, WithContext } from "schema-dts"; // Import WebPage

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import MobileTerminalView from "@/components/MobileTerminalView";

export const metadata: Metadata = {
  title: "Icho Ishamashi - Software Engineer & Digital Craftsman", // Judul utama situs
  description: "Portofolio Icho Ishamashi ([SleepyHead]), seorang Software Engineer & Fullstack Developer berpengalaman, ahli dalam Web Development & Design, membangun solusi digital inovatif.",
  alternates: {
    canonical: "/", // URL kanonikal untuk homepage
  },
};

export default function HomePage() {
  const homePageSchema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metadata.title as string, // Asumsikan title adalah string di sini
    description: metadata.description ?? "Portofolio Icho Ishamashi.",
    url: "https://ishamashi.com", // Ganti dengan domain Anda
    isPartOf: {
      // Menghubungkan ke WebSite schema
      "@type": "WebSite",
      "@id": "https://ishamashi.com#website", // ID dari WebSite schema di layout.tsx
    },
    mainEntity: {
      // Menghubungkan ke Person schema
      "@type": "Person",
      "@id": "https://ishamashi.com#person", // ID dari Person schema di layout.tsx
    },
  };

  return (
    <>
      <JsonLdScript jsonData={homePageSchema} />
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
