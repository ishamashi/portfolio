// app/contact/page.tsx
"use client"; // Tambahkan jika belum ada

import InteractiveSendingStone from "@/components/contact/InteractiveSendingStone";
import MobileConstellationMessenger from "@/components/contact/MobileConstellationMessenger"; // Impor layout mobile
import { useState, useEffect } from "react"; // Impor hooks

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Jangan render apa-apa di server atau sebelum client siap
  if (!isClient) {
    return (
      <div className="container mx-auto min-h-screen flex items-center justify-center">
        <p className="font-mono text-xl text-foreground/70 animate-pulse">Preparing the Runes...</p>
      </div>
    ); // Atau null
  }

  return (
    // Wrapper utama mungkin perlu styling latar belakang nebula/bintang
    <div className="container mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8 min-h-screen flex flex-col">
      {/* Judul & Deskripsi - Sama untuk keduanya tapi mungkin ukuran berbeda */}
      <header className="mb-8 md:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-mono tracking-tight text-foreground">
          {/* Judul berbeda untuk mobile? */}
          <span className="md:hidden">
            Weave Your <span className="text-accent">Message</span>
          </span>
          <span className="hidden md:inline">
            Consult the <span className="text-accent">Sending Stone</span>
          </span>
        </h1>
        <p className="mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-lg text-foreground/70">
          <span className="md:hidden">Touch, hold, and connect the runes to the central glyph [ᚨ] to channel your intent.</span>
          <span className="hidden md:inline">The runes shimmer, awaiting your intent. Activate a glyph to channel your message or connect across the digital realms.</span>
        </p>
      </header>

      {/* Konten Utama - Conditional Rendering */}
      <main className="flex-grow flex items-center justify-center">
        {/* Versi Desktop */}
        <div className="hidden md:block w-full">
          <InteractiveSendingStone />
        </div>
        {/* Versi Mobile */}
        <div className="md:hidden w-full">
          <MobileConstellationMessenger />
        </div>
      </main>

      {/* Fallback Teks (hanya tampil di mobile bawah konstelasi) */}
      <div className="md:hidden mt-6 text-center text-xs text-foreground/60 space-y-1 border-t border-border/20 pt-4 max-w-xs mx-auto">
        <p className="font-semibold">Or reach out directly:</p>
        <p className="break-all">icho.ishamashi@gmail.com</p>
        <div className="flex justify-center space-x-3 pt-1">
          <a href="https://github.com/ishamashi" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline">
            GitHub
          </a>
          <span>|</span>
          <a href="https://linkedin.com/in/ishamashi" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline">
            LinkedIn
          </a>
          <span>|</span>
          <a href="https://twitter.com/ishamashi" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
