// components/contact/MobileConstellationMessenger.tsx
"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";

import RuneGeboEmailIcon from "@/icons/RuneGeboEmailIcon";
import RuneFehuGithubIcon from "@/icons/RuneFehuGithubIcon";
import RuneMannazLinkedinIcon from "@/icons/RuneMannazLinkedinIcon";
import RuneRaidhoTwitterIcon from "@/icons/RuneRaidhoTwitterIcon";
import RuneAnsuzSendIcon from "@/icons/RuneAnsuzSendIcon";

import { AnimatePresence } from "framer-motion";

// Definisikan tipe Rune & Posisinya
interface ConstellationRune {
  id: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  x: number; // Persentase posisi horizontal (0-100)
  y: number; // Persentase posisi vertikal (0-100)
  actionType: "email" | "link";
  value: string;
}

const runes: ConstellationRune[] = [
  { id: "email", label: "Email", Icon: RuneGeboEmailIcon, x: 25, y: 35, actionType: "email", value: "icho.ishamashi@gmail.com" },
  { id: "github", label: "GitHub", Icon: RuneFehuGithubIcon, x: 75, y: 35, actionType: "link", value: "https://github.com/ishamashi" },
  { id: "linkedin", label: "LinkedIn", Icon: RuneMannazLinkedinIcon, x: 25, y: 65, actionType: "link", value: "https://linkedin.com/in/ishamashi" },
  { id: "twitter", label: "Twitter", Icon: RuneRaidhoTwitterIcon, x: 75, y: 65, actionType: "link", value: "https://twitter.com/ishamashi" },
];

const centerRune = { id: "send", Icon: RuneAnsuzSendIcon, x: 50, y: 50 };

const MobileConstellationMessenger: React.FC = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [draggingRune, setDraggingRune] = useState<ConstellationRune | null>(null);
  const [isConnecting, setIsConnecting] = useState(false); // Untuk animasi garis
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false); // Untuk gaya feedback

  // Motion values untuk garis energi
  const lineStartX = useMotionValue(0);
  const lineStartY = useMotionValue(0);
  const lineEndX = useMotionValue(0);
  const lineEndY = useMotionValue(0);

  const handleDragStart = (rune: ConstellationRune, event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDraggingRune(rune);
    setIsConnecting(true);
    setFeedbackMessage(null);

    if (constraintsRef.current) {
      const rect = constraintsRef.current.getBoundingClientRect();

      const startXRelativeToContainer = info.point.x - rect.left;
      const startYRelativeToContainer = info.point.y - rect.top;

      // Set motion value garis berdasarkan posisi aktual ini
      lineStartX.set(startXRelativeToContainer);
      lineStartY.set(startYRelativeToContainer);
      // Awalnya, titik akhir sama dengan titik awal
      lineEndX.set(startXRelativeToContainer);
      lineEndY.set(startYRelativeToContainer);
    }
  };

  // == PERBAIKAN DI SINI ==
  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Update titik akhir garis berdasarkan offset dari titik awal AKTUAL
    // info.offset adalah perpindahan {x, y} dari titik drag dimulai
    lineEndX.set(lineStartX.get() + info.offset.x);
    lineEndY.set(lineStartY.get() + info.offset.y);
  };

  // == PERBAIKAN DI SINI ==
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsConnecting(false);
    if (draggingRune && constraintsRef.current) {
      const rect = constraintsRef.current.getBoundingClientRect();
      const targetX = rect.width * (centerRune.x / 100);
      const targetY = rect.height * (centerRune.y / 100);

      // Hitung posisi akhir drag berdasarkan titik awal AKTUAL dan offset
      const endX = lineStartX.get() + info.offset.x;
      const endY = lineStartY.get() + info.offset.y;

      const distance = Math.sqrt(Math.pow(endX - targetX, 2) + Math.pow(endY - targetY, 2));
      const targetRadius = 35; // Mungkin perbesar sedikit radius target

      if (distance <= targetRadius) {
        // Koneksi Berhasil!
        console.log(`Connected ${draggingRune.label} to Send!`);
        setIsSuccess(true);
        // --- Lakukan Aksi ---
        if (draggingRune.actionType === "email") {
          navigator.clipboard
            .writeText(draggingRune.value)
            .then(() => {
              setFeedbackMessage("Email Address Copied!");
              setTimeout(() => setFeedbackMessage(null), 3000);
            })
            .catch(() => {
              setFeedbackMessage("Error copying email.");
              setTimeout(() => setFeedbackMessage(null), 3000);
            });
        } else if (draggingRune.actionType === "link") {
          setFeedbackMessage(`Opening ${draggingRune.label}...`);
          setTimeout(() => {
            window.open(draggingRune.value, "_blank", "noopener,noreferrer");
            setFeedbackMessage(null); // Hapus pesan setelah delay
          }, 800); // Delay agar user lihat pesan
        }
        // --- Akhir Aksi ---
      } else {
        // Koneksi Gagal
        console.log("Connection missed.");
        setIsSuccess(false);
        setFeedbackMessage("Connection broken.");
        setTimeout(() => setFeedbackMessage(null), 1500);
      }
    }
    setDraggingRune(null); // Reset rune yang di-drag
  };

  // Transformasi untuk garis (jika diperlukan, misal untuk gradien)
  // const gradientAngle = useTransform([lineStartX, lineStartY, lineEndX, lineEndY], ([sx, sy, ex, ey]) => {
  //   return Math.atan2(ey - sy, ex - sx) * (180 / Math.PI);
  // });

  return (
    // Wrapper utama dengan background & ref untuk constraints drag
    <div
      ref={constraintsRef}
      className="relative w-full h-[60vh] max-h-[500px] bg-gradient-to-b from-background to-surface/50 overflow-hidden rounded-lg shadow-xl border border-border/10 mt-8 mb-8"
      // Beri tinggi tetap agar posisi % bekerja
    >
      {/* Partikel Bintang (Placeholder) */}
      {/* Anda bisa menggunakan library partikel JS atau CSS murni */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/50 animate-pulse-very-slow"
            style={{
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Garis Energi (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "var(--color-accent)", stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: "var(--color-accent)", stopOpacity: 0.8 }} />
          </linearGradient>
          <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="var(--color-accent)" floodOpacity="0.7" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
            </feMerge>
          </filter>
        </defs>
        {isConnecting && (
          <motion.line
            x1={lineStartX}
            y1={lineStartY}
            x2={lineEndX} // Gunakan motion value
            y2={lineEndY} // Gunakan motion value
            stroke="url(#energyGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.9 }}
            exit={{ opacity: 0 }} // Perlu AnimatePresence
            transition={{ duration: 0.2 }}
            filter="url(#lineGlow)"
          />
        )}
      </svg>

      {/* Rune Tengah (Target) */}
      <div
        className="absolute w-16 h-16 rounded-full bg-surface/80 border border-accent shadow-lg flex items-center justify-center pointer-events-none" // Target tidak perlu interaktif
        style={{
          left: `${centerRune.x}%`,
          top: `${centerRune.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <centerRune.Icon className="w-7 h-7 text-accent opacity-90" />
      </div>

      {/* Rune Kontak (Draggable) */}
      {runes.map((rune) => (
        <motion.div
          key={rune.id}
          className="absolute w-12 h-12 rounded-full bg-background/80 border border-border/50 shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{
            left: `${rune.x}%`,
            top: `${rune.y}%`,
            x: "-50%", // Center horizontally
            y: "-50%", // Center vertically
            touchAction: "none", // Penting untuk drag di touch device
          }}
          drag // Aktifkan drag
          dragConstraints={constraintsRef} // Batasi drag di dalam parent
          dragElastic={0.3} // Sedikit efek 'mental' saat dilepas
          onDragStart={(e, i) => handleDragStart(rune, e, i)}
          onDrag={(e, i) => handleDrag(e, i)}
          onDragEnd={(e, i) => handleDragEnd(e, i)}
          whileTap={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(var(--accent-rgb), 0.5)" }}
          animate={draggingRune?.id === rune.id ? { scale: 1.1 } : { scale: 1 }}
        >
          <rune.Icon className="w-6 h-6 text-accent pointer-events-none" />
        </motion.div>
      ))}

      {/* Area Feedback Teks */}
      <AnimatePresence>
        {feedbackMessage && (
          <motion.div key="feedback" className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md text-xs font-medium shadow-lg ${isSuccess ? "bg-accent text-white" : "bg-red-600 text-white"}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3 }}>
            {feedbackMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileConstellationMessenger;

// CSS tambahan untuk animasi bintang
