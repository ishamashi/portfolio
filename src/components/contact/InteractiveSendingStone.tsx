// components/contact/InteractiveSendingStone.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // <--- TAMBAHKAN BARIS INI
// Impor ikon SVG runic Anda jika ada, atau gunakan karakter teks

import RuneEnvelopeIcon from "@/icons/RuneEnvelopeIcon";

// Definisikan tipe untuk setiap rune interaktif
interface RuneAction {
  id: string;
  label: string;
  runeChar?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  cx: number;
  cy: number;
  radius: number;
  actionType: "email" | "link";
  value: string;
}

const InteractiveSendingStone: React.FC = () => {
  const [hoveredRune, setHoveredRune] = useState<string | null>(null);
  const [activeRune, setActiveRune] = useState<string | null>(null); // State untuk rune yang diklik
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailAddress = "icho.ishamashi@gmail.com";

  const runes: RuneAction[] = [
    { id: "email", label: "Send Email", runeChar: "ᚷ", cx: 150, cy: 110, radius: 30, actionType: "email", value: emailAddress }, // Radius diperbesar
    { id: "github", label: "Visit GitHub", runeChar: "ᚠ", cx: 75, cy: 65, radius: 20, actionType: "link", value: "https://github.com/ishamashi" }, // Posisi & radius disesuaikan
    { id: "linkedin", label: "Visit LinkedIn", runeChar: "ᛗ", cx: 225, cy: 65, radius: 20, actionType: "link", value: "https://linkedin.com/in/ishamashi" }, // Posisi & radius disesuaikan
    { id: "twitter", label: "Visit Twitter", runeChar: "ᚱ", cx: 150, cy: 195, radius: 20, actionType: "link", value: "https://twitter.com/ishamashi" }, // Posisi & radius disesuaikan
  ];

  const handleRuneClick = (rune: RuneAction) => {
    setHoveredRune(null);
    setActiveRune(rune.id); // Set rune aktif untuk animasi

    // Reset animasi setelah beberapa saat
    setTimeout(() => setActiveRune(null), 600);

    if (rune.actionType === "email") {
      navigator.clipboard
        .writeText(rune.value)
        .then(() => {
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 2500);
        })
        .catch((err) => {
          console.error("Failed to copy email: ", err);
          window.location.href = `mailto:${rune.value}`;
        });
    } else if (rune.actionType === "link") {
      // Efek visual "mengirim" sebelum membuka link
      setTimeout(() => {
        window.open(rune.value, "_blank", "noopener,noreferrer");
      }, 300); // Delay sedikit
    }
  };

  // Reset copied status jika rune lain di-hover
  useEffect(() => {
    if (hoveredRune !== "email" && copiedEmail) {
      // setCopiedEmail(false); // Bisa juga di-reset saat hover rune lain
    }
  }, [hoveredRune, copiedEmail]);

  return (
    <div className="flex flex-col items-center w-full">
      <svg
        viewBox="0 0 300 300"
        className="w-full max-w-md md:max-w-lg h-auto mb-6 drop-shadow-xl" // Drop shadow lebih kuat
        aria-labelledby="sendingStoneTitle"
      >
        <title id="sendingStoneTitle">Interactive Sending Stone for Contact</title>

        <defs>
          {/* Gradient untuk tekstur batu yang lebih menarik */}
          <radialGradient id="stoneTextureEnhanced" cx="50%" cy="50%" r="65%" fx="50%" fy="40%">
            <stop offset="0%" style={{ stopColor: "var(--color-surface)", stopOpacity: 0.6 }} />
            <stop offset="60%" style={{ stopColor: "var(--color-surface)", stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: "var(--color-background)", stopOpacity: 0.7 }} />
          </radialGradient>
          {/* Filter untuk glow halus di sekitar batu */}
          <filter id="stoneSurroundGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Filter untuk glow rune saat aktif */}
          <filter id="runeActivateGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feComposite in="blur" in2="SourceGraphic" operator="out" result="glowSubtract" />
            <feFlood floodColor="var(--color-accent)" floodOpacity="0.8" result="glowColor" />
            <feComposite in="glowColor" in2="glowSubtract" operator="in" result="finalGlow" />
            <feMerge>
              <feMergeNode in="finalGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lingkaran energi latar belakang (halus) */}
        <circle cx="150" cy="100" r="100" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="3 6" className="opacity-30 animate-spin-slow" />
        <circle cx="150" cy="100" r="80" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="6 3" className="opacity-30 animate-spin-slow-reverse" />

        {/* Batu Utama dengan efek & animasi */}
        <ellipse
          cx="150"
          cy="120"
          rx="140" // Sedikit lebih kecil agar ada ruang untuk energi
          ry="100"
          fill="url(#stoneTextureEnhanced)"
          stroke="var(--color-border)"
          strokeWidth="0.5" // Lebih tipis
          className="transition-all duration-1000 ease-out animate-pulse-slow"
          filter="url(#stoneSurroundGlow)" // Glow halus di sekitar batu
        />

        {runes.map((rune) => {
          const isHovered = hoveredRune === rune.id;
          const isActivated = activeRune === rune.id; // Cek apakah rune ini yang baru diklik

          return (
            <g
              key={rune.id}
              className="sending-rune focus:outline-none cursor-pointer group"
              onClick={() => handleRuneClick(rune)}
              onMouseEnter={() => setHoveredRune(rune.id)}
              onMouseLeave={() => setHoveredRune(null)}
              aria-label={rune.label}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleRuneClick(rune);
              }}
            >
              {/* Lingkaran Area Klik */}
              <circle cx={rune.cx} cy={rune.cy} r={rune.radius + 8} fill="transparent" />

              {/* Efek Garis Energi Keluar saat Aktif */}
              {isActivated && (
                <line
                  x1={rune.cx}
                  y1={rune.cy}
                  x2={rune.cx + (rune.cx - 150) * 0.5} // Arah keluar dari pusat
                  y2={rune.cy + (rune.cy - 100) * 0.5}
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  className="pointer-events-none animate-ping-once" // Animasi ping sederhana
                />
              )}

              {/* Rune */}
              <text
                x={rune.cx}
                y={rune.cy}
                dy="0.35em"
                textAnchor="middle"
                fontSize={rune.radius * 1.4} // Font lebih besar relatif thd radius
                fontFamily="JetBrains Mono, sans-serif"
                fill={isHovered ? "white" : "var(--color-accent)"}
                stroke={isHovered ? "var(--color-accent)" : "none"} // Stroke saat hover
                strokeWidth="0.5"
                className={`transition-all duration-200 pointer-events-none ${isHovered || isActivated ? "scale-110 drop-shadow-md" : "scale-100"} ${isActivated ? "animate-ping-subtle-once" : ""}`} // Ping halus saat aktif
                style={{ transformOrigin: `${rune.cx}px ${rune.cy}px`, filter: isActivated ? "url(#runeActivateGlow)" : "none" }} // Glow saat aktif
              >
                {rune.runeChar}
              </text>

              {/* Tooltip */}
              {isHovered && (
                <motion.text
                  key={`tooltip-${rune.id}`} // Key untuk animasi AnimatePresence
                  x={rune.cx}
                  y={rune.cy - rune.radius - 0}
                  textAnchor="middle"
                  fontSize="10"
                  fill="var(--foreground)"
                  className="pointer-events-none font-sans"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }} // Perlu AnimatePresence di parent jika ingin exit
                >
                  {rune.label}
                </motion.text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Area Feedback Email */}
      <div className="h-16 flex flex-col items-center justify-center text-center">
        <AnimatePresence>
          {copiedEmail && (
            <motion.div key="copied-feedback" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <p className="text-sm text-accent font-semibold flex items-center gap-x-1">
                <RuneEnvelopeIcon className="w-4 h-4" /> Email Address Copied!
              </p>
              <p className="text-xs text-foreground/70 mt-0.5">{emailAddress}</p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Tampilkan Tombol Copy jika email di-hover & belum di-copy */}
        {!copiedEmail && hoveredRune === "email" && (
          <motion.button
            key="copy-button"
            onClick={() => handleRuneClick(runes.find((r) => r.id === "email")!)}
            className="inline-flex items-center gap-x-1.5 px-4 py-1.5 rounded-md border border-accent bg-transparent text-xs font-medium text-accent shadow-sm transition-colors hover:bg-accent/10 focus:outline-none focus:ring-1 focus:ring-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Perlu AnimatePresence
          >
            <RuneEnvelopeIcon className="w-4 h-4" /> Copy Email Address
          </motion.button>
        )}
      </div>

      {/* Fallback Teks */}
      <div className="mt-4 text-center text-xs text-foreground/60 space-y-1 border-t border-border/20 pt-4 max-w-xs mx-auto">
        <p className="font-semibold">Or reach out directly:</p>
        <p className="break-all"> {emailAddress}</p> {/* break-all agar tidak overflow */}
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
};

export default InteractiveSendingStone;
