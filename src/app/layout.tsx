// app/layout.tsx
import React from "react"; // Hapus import React jika tidak digunakan langsung
import type { Metadata } from "next";
// Hapus import usePathname, Navbar, MobileNavbar dari sini
import "./globals.css";
import MainLayoutWrapper from "@/components/MainLayoutWrapper"; // Impor wrapper baru

// Metadata tetap di sini (Server Component)
export const metadata: Metadata = {
  title: "Icho Ishamashi - Software Engineer Portofolio",
  description: "Portofolio Web Icho Ishamashi, seorang Software Engineer yang berfokus pada solusi digital inovatif.",
  openGraph: {
    title: "Icho Ishamashi - Software Engineer",
    description: "Portofolio Web Icho Ishamashi...",
    type: "website",
    url: "https://ishamashi.com",
    images: [
      {
        url: "https://ishamashi.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hero Image Portofolio Icho Ishamashi",
      },
    ],
  },
};

// RootLayout sekarang menjadi Server Component murni
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Hapus usePathname dan isHomePage dari sini
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        {/* Render komponen wrapper klien, yang akan menangani navbar dan main */}
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </body>
    </html>
  );
}
