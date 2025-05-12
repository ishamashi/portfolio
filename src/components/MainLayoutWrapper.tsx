// components/MainLayoutWrapper.tsx
"use client"; // Tandai ini sebagai Client Component

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Navbar Desktop - selalu tampil di md ke atas */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Navbar Mobile - Tampil di mobile, KECUALI homepage */}
      {!isHomePage && (
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      )}

      {/* Konten Utama (main tag & children) */}
      {/* Beri padding-bottom di mobile agar tidak tertutup tombol navbar */}
      <main className="container mx-auto min-h-[90vh] px-4 py-8 sm:px-6 lg:px-8 md:py-12 pb-24 md:pb-12">{children}</main>
      {/* Anda bisa meletakkan Footer di sini jika ada */}
      {/* <Footer /> */}
    </>
  );
}
