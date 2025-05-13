// components/about/InteractiveConstellation.tsx
"use client";

import React from "react";
import type { AboutFacet } from "@/app/about/page"; // Impor tipe facet

interface InteractiveConstellationProps {
  onFacetSelect: (facet: AboutFacet) => void;
  activeFacet: AboutFacet;
}

// Posisi Node (sesuaikan agar terlihat bagus di viewBox)
const nodePositions: Record<NonNullable<AboutFacet>, { cx: number; cy: number; label: string; rune?: string }> = {
  saga: { cx: 50, cy: 50, label: "The Saga", rune: "ᛊ" }, // Sowilo (Sun/Success)
  philosophy: { cx: 150, cy: 30, label: "Philosophy", rune: "ᛏ" }, // Tiwaz (Justice/Integrity)
  skills: { cx: 250, cy: 50, label: "Skills", rune: "ᚦ" }, // Thurisaz (Thor/Power)
  inspiration: { cx: 100, cy: 120, label: "Inspiration", rune: "ᚨ" }, // Ansuz (Inspiration/Message)
  musings: { cx: 200, cy: 120, label: "[SleepyHead]", rune: "ᛉ" }, // Algiz (Protection/Higher Self) - bisa diubah
};

const connections: [NonNullable<AboutFacet>, NonNullable<AboutFacet>][] = [
  ["saga", "philosophy"],
  ["saga", "inspiration"],
  ["philosophy", "skills"],
  ["skills", "musings"],
  ["inspiration", "musings"],
  ["inspiration", "philosophy"], // Tambahkan koneksi lain sesuai keinginan
];

const InteractiveConstellation: React.FC<InteractiveConstellationProps> = ({ onFacetSelect, activeFacet }) => {
  return (
    <svg
      viewBox="0 0 300 150" // Sesuaikan viewBox agar pas
      className="w-full h-full max-w-lg mx-auto" // Ukuran responsif
      aria-labelledby="constellationTitle"
    >
      <title id="constellationTitle">Interactive Constellation of Icho Ishamashi&apos;s Profile</title>

      {/* Garis Koneksi */}
      <g className="connections opacity-30">
        {connections.map(([start, end], index) => {
          const startNode = nodePositions[start];
          const endNode = nodePositions[end];
          return <line key={`line-${index}`} x1={startNode.cx} y1={startNode.cy} x2={endNode.cx} y2={endNode.cy} stroke="var(--color-border)" strokeWidth="1" />;
        })}
      </g>

      {/* Node dan Label */}
      {(Object.keys(nodePositions) as NonNullable<AboutFacet>[]).map((facet) => {
        const { cx, cy, label, rune } = nodePositions[facet];
        const isActive = activeFacet === facet;

        return (
          <g
            key={facet}
            className="constellation-node cursor-pointer focus:outline-none group"
            onClick={() => onFacetSelect(facet)}
            aria-label={`Select ${label} section`}
            tabIndex={0} // Membuatnya focusable
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onFacetSelect(facet);
            }}
          >
            {/* Lingkaran luar untuk area klik & efek hover */}
            <circle
              cx={cx}
              cy={cy}
              r="18" // Lebih besar dari lingkaran dalam
              fill="transparent"
            />
            {/* Lingkaran Dalam (Node Utama) */}
            <circle
              cx={cx}
              cy={cy}
              r="12" // Ukuran node
              fill={isActive ? "var(--color-accent)" : "var(--color-surface)"}
              stroke={isActive ? "var(--color-accent-hover)" : "var(--color-accent)"}
              strokeWidth="1.5"
              className={`transition-all duration-300 ease-in-out ${isActive ? "shadow-accent/40" : "group-hover:fill-accent/20 group-hover:stroke-accent-hover group-hover:scale-110"}`}
              style={{ transformOrigin: `${cx}px ${cy}px`, filter: isActive ? "drop-shadow(0 0 5px var(--color-accent))" : "none" }} // Animasi scale & glow
            />
            {/* Teks Rune di dalam Node */}
            {rune && (
              <text
                x={cx}
                y={cy}
                dy="0.35em" // Vertical alignment
                textAnchor="middle"
                fontSize="14"
                fontFamily="JetBrains Mono, sans-serif" // Pastikan font support rune
                fill={isActive ? "white" : "var(--color-accent)"}
                className={`transition-colors duration-300 pointer-events-none ${isActive ? "" : "group-hover:fill-accent-hover"}`}
              >
                {rune}
              </text>
            )}
            {/* Label Teks di bawah Node */}
            <text
              x={cx}
              y={cy + 28} // Posisi di bawah node
              textAnchor="middle"
              fontSize="10"
              fontFamily="Inter, sans-serif"
              fill="var(--color-foreground)"
              className={`transition-colors duration-300 opacity-80 ${isActive ? "opacity-100 font-semibold fill-accent" : "group-hover:opacity-100 group-hover:fill-accent"}`}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default InteractiveConstellation;
