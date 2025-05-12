// components/about/MobileAboutScrollSection.tsx
"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Impor ikon runic baru
import ChevronDownRunicIcon from '@/icons/ChevronDownRunicIcon';
import ChevronUpRunicIcon from '@/icons/ChevronUpRunicIcon';

interface MobileAboutScrollSectionProps {
  title: string;
  rune?: string; // Rune opsional di judul
  initialTeaser?: ReactNode; // Teks ringkasan awal
  children: ReactNode; // Konten lengkap yang akan di-expand
  initiallyOpen?: boolean; // Apakah terbuka secara default?
}

const MobileAboutScrollSection: React.FC<MobileAboutScrollSectionProps> = ({ title, rune, initialTeaser, children, initiallyOpen = false }) => {
  const [isExpanded, setIsExpanded] = useState(initiallyOpen);

  const contentVariants = {
    collapsed: { height: 0, opacity: 0, marginTop: 0 },
    expanded: { height: "auto", opacity: 1, marginTop: "1.5rem" }, // `mt-6`
  };

  return (
    // Beri border bawah sebagai pemisah "jahitan" atau pola
    <div className="border-b-2 border-dashed border-border/30 py-6 first:pt-0 last:border-b-0">
      {/* Header yang bisa diklik */}
      <button className="flex w-full justify-between items-center text-left" onClick={() => setIsExpanded(!isExpanded)} aria-expanded={isExpanded}>
        <h2 className="text-xl sm:text-2xl font-bold font-mono text-accent flex items-center gap-x-2">
          {rune && (
            <span className="text-2xl opacity-80 w-8 text-center" aria-hidden="true">
              {rune}
            </span>
          )}
          {title}
        </h2>
        {isExpanded ? <ChevronUpRunicIcon className="w-5 h-5 text-foreground/70 flex-shrink-0" /> : <ChevronDownRunicIcon className="w-5 h-5 text-foreground/70 flex-shrink-0" />}
      </button>

      {/* Teaser awal (jika ada dan belum expanded) */}
      {!isExpanded && initialTeaser && (
        <div className="mt-3 text-sm text-foreground/70 pr-8">
          {" "}
          {/* Padding kanan agar tidak nabrak ikon panah */}
          {initialTeaser}
        </div>
      )}

      {/* Konten yang bisa di-expand */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={contentVariants}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Animasi smooth
            className="overflow-hidden" // Penting untuk animasi height
          >
            {/* Wrapper tambahan untuk padding internal konten jika perlu */}
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileAboutScrollSection;
