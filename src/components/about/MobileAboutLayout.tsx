// components/about/MobileAboutLayout.tsx
import React from "react";
import MobileAboutScrollSection from "./MobileAboutScrollSection";
import SagaContent from "./SagaContent";
import PhilosophyContent from "./PhilosophyContent";
import SkillsContent from "./SkillsContent";
import InspirationContent from "./InspirationContent";
import MusingsContent from "./MusingsContent";

// Impor gambar ujung gulungan jika Anda membuatnya
// import ScrollTopEdge from '@/public/decorations/scroll-top.svg';
// import ScrollBottomEdge from '@/public/decorations/scroll-bottom.svg';

const MobileAboutLayout = () => {
  return (
    // Wrapper utama dengan padding dan mungkin tekstur background
    <div className="py-8 px-4 bg-parchment-texture">
      {" "}
      {/* Ganti bg-parchment-texture dengan kelas CSS Anda */}
      <header className="mb-8 text-center">
        {/* <ScrollTopEdge className="w-full h-auto mb-4 opacity-50" /> */}
        <h1 className="text-3xl font-bold font-mono tracking-tight text-foreground">
          The Runic Scroll: <span className="text-accent">About Icho</span>
        </h1>
        <p className="mt-2 text-sm text-foreground/70">Unfolding the saga of the digital craftsman. Tap sections to delve deeper.</p>
      </header>
      <div className="space-y-0">
        {" "}
        {/* space-y-0 karena padding sudah di handle border di ScrollSection */}
        <MobileAboutScrollSection
          title="The Saga"
          rune="ᛊ" // Sowilo
          initialTeaser="Tracing the path from the first spark of curiosity to the seasoned craftsman of today..."
        >
          <SagaContent />
        </MobileAboutScrollSection>
        <MobileAboutScrollSection
          title="The Craftsman's Code"
          rune="ᛏ" // Tiwaz
          initialTeaser="The guiding principles and values etched into the core of the work..."
        >
          <PhilosophyContent />
        </MobileAboutScrollSection>
        <MobileAboutScrollSection
          title="Runes of Power"
          rune="ᚦ" // Thurisaz
          initialTeaser="A glimpse into the arsenal of languages, tools, and frameworks wielded..."
        >
          {/* Modifikasi SkillsContent agar lebih mobile friendly jika perlu */}
          <SkillsContent />
        </MobileAboutScrollSection>
        <MobileAboutScrollSection
          title="Echoes of Niðavellir"
          rune="ᚨ" // Ansuz
          initialTeaser="Understanding the myths and inspirations that fuel the digital forge..."
        >
          <InspirationContent />
        </MobileAboutScrollSection>
        {/* Tambahkan section [SleepyHead]'s Musings jika ada */}
        {/* Bagian Musings Baru */}
        <MobileAboutScrollSection
          title="[SleepyHead]"
          rune="ᛗ" // Mannaz
          initialTeaser="Quiet reflections and whispers from the forge..."
        >
          <MusingsContent />
        </MobileAboutScrollSection>
      </div>
      <footer className="mt-10 text-center">
        {/* <ScrollBottomEdge className="w-full h-auto mt-4 opacity-50" /> */}
        <p className="text-xs font-mono text-foreground/50 mt-4">~ End of Scroll ~</p>
      </footer>
    </div>
  );
};

export default MobileAboutLayout;
