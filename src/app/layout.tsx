// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Ini akan mengimpor semua gaya termasuk Google Fonts dan definisi tema Tailwind
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer"; // Jika Anda memutuskan untuk menambahkannya

export const metadata: Metadata = {
  title: "Icho Ishamashi - Software Engineer Portofolio", // Judul yang lebih deskriptif
  description: "Portofolio Web Icho Ishamashi, seorang Software Engineer yang berfokus pada solusi digital inovatif.",
  // Tambahkan Open Graph dan Twitter card metadata di sini untuk sharing yang lebih baik
  // contoh:
  openGraph: {
    title: "Icho Ishamashi - Software Engineer",
    description: "Portofolio Web Icho Ishamashi...",
    type: "website",
    url: "https://ishamashi.com", // Ganti dengan domain Anda nanti
    images: [
      {
        url: "https://ishamashi.com/og-image.png", // URL ke gambar Open Graph
        width: 1200,
        height: 630,
        alt: "Hero Image Portofolio Icho Ishamashi",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `suppressHydrationWarning` seringkali berguna jika ada potensi mismatch client/server styling,
    // meskipun dengan `prefers-color-scheme` dan CSS variables, ini seharusnya minim.
    <html lang="id" suppressHydrationWarning>
      {/*
        Kelas `bg-background text-foreground font-sans` sudah diterapkan ke body
        melalui @apply di globals.css. Jadi, body di sini tidak perlu kelas tambahan
        untuk styling dasar tersebut.
      */}
      <body>
        <Navbar />
        {/* Menggunakan kelas 'container' bawaan Tailwind untuk konsistensi responsif,
            dan padding standar untuk halaman. */}
        <main className="container mx-auto min-h-screen px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
