// app/about/page.tsx
"use client";

import JsonLdScript from "@/components/JsonLdScript";
import type { ProfilePage, WithContext } from "schema-dts";

import { useState } from "react";
import type { Metadata } from "next";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveConstellation from "@/components/about/InteractiveConstellation";
import SagaContent from "@/components/about/SagaContent";
import PhilosophyContent from "@/components/about/PhilosophyContent";
import SkillsContent from "@/components/about/SkillsContent";
import InspirationContent from "@/components/about/InspirationContent";
import MusingsContent from "@/components/about/MusingsContent"; // Jika Anda menambahkannya

import MobileAboutLayout from "@/components/about/MobileAboutLayout"; // Impor layout mobile

export const metadata: Metadata = {
  title: "About Icho Ishamashi (The Saga)",
  description: "Kenali lebih dalam Icho Ishamashi [SleepyHead]: perjalanan, filosofi, keahlian, dan inspirasi di balik karyanya sebagai Digital Craftsman.",

  openGraph: {
    title: "The Saga of Icho Ishamashi - Digital Craftsman",
    description: "Jelajahi kisah, filosofi, dan keahlian Icho Ishamashi.",
    url: "https://ishamashi.com/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export type AboutFacet = "saga" | "philosophy" | "skills" | "inspiration" | "musings";

export default function AboutPage() {
  const profilePageSchema: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      // Menghubungkan ke Person schema yang sudah ada (via URL)
      "@type": "Person",
      "@id": "https://ishamashi.com#person", // Gunakan ID jika Anda definisikan di layout, atau URL
    },
    headline: (metadata.title as string) || "The Saga of Icho Ishamashi",
    description: metadata.description as string, // Ambil dari metadata halaman
    url: "https://ishamashi.com/about",
  };

  const [activeFacet, setActiveFacet] = useState<AboutFacet>("saga");

  const renderContent = () => {
    switch (activeFacet) {
      case "saga":
        return <SagaContent key="saga" />; // key penting untuk AnimatePresence
      case "philosophy":
        return <PhilosophyContent key="philosophy" />;
      case "skills":
        return <SkillsContent key="skills" />;
      case "inspiration":
        return <InspirationContent key="inspiration" />;
      case "musings":
        return <MusingsContent key="musings" />;
      default:
        // Fallback atau tampilan default jika activeFacet null/undefined
        return <SagaContent key="default-saga" />;
    }
  };

  // Animasi untuk konten
  const contentVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.98 },
  };

  return (
    // Tambahkan kelas untuk latar belakang nebula jika Anda membuatnya
    // className="bg-nebula"

    <>
      <JsonLdScript jsonData={profilePageSchema} />
      {/* --- Versi Desktop --- */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
          <header className="mb-12 md:mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight text-foreground">
              Unveiling the Runes: <span className="text-accent">The Saga of Icho Ishamashi</span>
            </h1>
            <p className="mt-3 text-lg text-foreground/70">Explore the constellation of experience, philosophy, and inspiration that shapes the digital craftsman.</p>
          </header>

          {/* Konstelasi Interaktif */}
          <section className="mb-12 md:mb-16 h-52 sm:h-64 md:h-72 flex items-center justify-center">
            {/* Tinggi disesuaikan agar pas */}
            <InteractiveConstellation onFacetSelect={setActiveFacet} activeFacet={activeFacet} />
          </section>

          {/* Area Konten Dinamis */}
          <section className="relative overflow-hidden min-h-[400px] bg-surface/50 rounded-xl shadow-lg p-6 md:p-10 border border-border/20">
            {/* Beri background & padding pada area konten */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFacet} // Trigger animasi saat facet berubah
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Custom cubic-bezier
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </div>

      {/* --- Versi Mobile --- */}
      <div className="md:hidden">
        <MobileAboutLayout />
      </div>
    </>
  );
}
