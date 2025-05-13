// components/MobileNavbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import RuneForgingsIcon from '@/icons/RuneForgingsIcon';
import RuneSagaIcon from '@/icons/RuneSagaIcon';
import RuneRavenIcon from '@/icons/RuneRavenIcon';
import RuneAlgizIcon from '@/icons/RuneAlgizIcon';
import RuneCloseIcon from '@/icons/RuneCloseIcon';

const navItems = [
  { label: "ᛁ ᛊ ᚺ ᚨ ᛗ ᚨ ᛊ ᚺ ᛁ", href: "/", Icon: '' },
  { label: "Forgings", href: "/projects", Icon: RuneForgingsIcon },
  { label: "The Saga", href: "/about", Icon: RuneSagaIcon },
  { label: "Send Raven", href: "/contact", Icon: RuneRavenIcon },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Varian animasi untuk overlay
  const overlayVariants = {
    hidden: { opacity: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  // Varian animasi untuk container menu items (misal, muncul dari bawah atau dari tombol)
  const menuContainerVariants = {
    hidden: {
      opacity: 0,
      // y: 50, // Contoh: muncul dari bawah
      scale: 0.8, // Contoh: muncul dari tombol
      originX: 1, // Anchor point di kanan
      originY: 1, // Anchor point di bawah
      transition: { duration: 0.3, ease: "easeOut", when: "afterChildren" }, // Tutup setelah children selesai
    },
    visible: {
      opacity: 1,
      // y: 0,
      scale: 1,
      originX: 1,
      originY: 1,
      transition: { duration: 0.3, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 }, // Buka sebelum children, dengan stagger
    },
  };

  // Varian animasi untuk setiap item menu
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Tombol Trigger Runic Compass */}
      <motion.button onClick={toggleMenu} className="fixed bottom-4 right-4 z-[60] w-14 h-14 rounded-full bg-surface/90 border border-border/50 shadow-lg flex items-center justify-center text-accent hover:border-accent transition-colors" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} whileTap={{ scale: 0.95 }}>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <RuneCloseIcon className="w-7 h-7" />
              {/* Ganti dengan ikon X runic kustom Anda */}
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
              <RuneAlgizIcon className="w-7 h-7" />
              {/* Ganti dengan ikon Algiz/Vegvisir kustom Anda */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Overlay dan Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay Gelap */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 z-[55] bg-black/70 backdrop-blur-sm"
              onClick={toggleMenu} // Tutup menu saat overlay diklik
            />

            {/* Container Item Menu */}
            <motion.div
              key="menu-container"
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              // Posisikan dekat tombol trigger
              className="fixed bottom-[75px] right-4 z-[60] w-48 bg-background border border-border rounded-lg shadow-xl overflow-hidden"
            >
              <nav>
                <ul className="flex flex-col">
                  {navItems.map((item) => (
                    <motion.li key={item.href} variants={menuItemVariants}>
                      <Link
                        href={item.href}
                        onClick={toggleMenu} // Tutup menu saat item diklik
                        className="flex items-center gap-x-3 px-4 py-3 text-sm font-mono text-foreground/90 hover:bg-surface transition-colors border-b border-border/20 last:border-b-0"
                      >
                        {item.Icon && <item.Icon className="w-5 h-5 text-accent flex-shrink-0" />}
                        <span className={`${item.Icon ? "" : "text-accent"}`}>{item.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
