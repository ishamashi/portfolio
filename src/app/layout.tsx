// app/layout.tsx
import React from "react"; // Hapus import React jika tidak digunakan langsung
import type { Metadata } from "next";
import JsonLdScript from "@/components/JsonLdScript";
import type { Person, WebSite, WithContext } from "schema-dts";
// Hapus import usePathname, Navbar, MobileNavbar dari sini
import "./globals.css";
import MainLayoutWrapper from "@/components/MainLayoutWrapper"; // Impor wrapper baru

// Metadata tetap di sini (Server Component)

export const metadata: Metadata = {
  // Judul Default (Akan di-override oleh halaman)
  title: {
    default: "Icho Ishamashi - Software Engineer | Digital Craftsman",
    template: "%s | Icho Ishamashi Portfolio", // %s akan diganti judul halaman
  },
  // Deskripsi Default (Sangat Penting!)
  description: "Portofolio Icho Ishamashi [SleepyHead], seorang Software Engineer & Fullstack Developer berpengalaman lebih dari 10 tahun, ahli dalam Web Development & Design, menciptakan solusi digital inovatif.",
  // Tambahkan Keywords (Meskipun Google kurang memperhatikannya, tidak ada salahnya)
  keywords: ["Icho Ishamashi", "Software Engineer", "Fullstack Developer", "Web Development", "Portfolio", "Next.js", "React", "TypeScript", "SleepyHead", "Niðavellir", "Digital Craftsman"],
  // Metadata Open Graph (Untuk Sharing di Media Sosial seperti Facebook, LinkedIn)
  openGraph: {
    title: "Icho Ishamashi - Software Engineer Portfolio",
    description: "Jelajahi karya dan keahlian Icho Ishamashi, seorang Digital Craftsman.",
    url: "https://ishamashi.com", // Ganti dengan domain Anda!
    siteName: "Icho Ishamashi Portfolio",
    images: [
      {
        url: "https://ishamashi.com/logo.png", // Buat gambar preview yang menarik!
        width: 1200,
        height: 630,
        alt: "Icho Ishamashi Portfolio Hero Image",
      },
    ],
    locale: "id_ID", // Atau 'en_US' jika target utama bahasa Inggris
    type: "website",
  },
  // Metadata Twitter Card (Untuk Sharing di Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Icho Ishamashi - Software Engineer Portfolio",
    description: "Portofolio Web Icho Ishamashi ([SleepyHead]), ahli Web Development & Design.",
    creator: "@ishamashi", // Handle Twitter Anda (jika ada)
    images: ["https://ishamashi.com/logo.png"], // Bisa sama atau beda dengan OG image
  },
  // Metadata Robots (Penting untuk Crawler)
  robots: {
    index: true, // Izinkan Google meng-index situs
    follow: true, // Izinkan Google mengikuti link di situs
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Tambahkan ikon Favicon
  icons: {
    icon: "/favicon.ico", // Path ke favicon Anda di folder public
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // (Opsional) Manifest untuk PWA
  // manifest: '/site.webmanifest',
  // (Opsional) Tema Warna Browser
  // themeColor: '#121212', // Sesuaikan dengan warna tema gelap Anda
};

// RootLayout sekarang menjadi Server Component murni
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Icho Ishamashi Portfolio",
    url: "https://ishamashi.com", // Ganti!
    potentialAction: [
      // Beri tahu Google tentang navigasi utama
      {
        "@type": "ReplaceAction",
        name: "Explore Forgings", // Gunakan nama link Anda
        target: "https://ishamashi.com/projects", // URL Lengkap
      },
      {
        "@type": "ReplaceAction",
        name: "Read The Saga",
        target: "https://ishamashi.com/about",
      },
      {
        "@type": "ReplaceAction",
        name: "Send a Raven",
        target: "https://ishamashi.com/contact",
      },
    ],
    // (Opsional) Search Action untuk Sitelinks Search Box
    // potentialAction: {
    //  "@type": "SearchAction",
    //  "target": "https://ishamashi.com/search?q={search_term_string}",
    //  "query-input": "required name=search_term_string"
    // },
  };

  const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ishamashi.com#person", // ID unik untuk entitas ini
    name: "Icho Ishamashi",
    alternateName: "[SleepyHead]",
    url: "https://ishamashi.com", // URL Portfolio Anda
    jobTitle: "Software Engineer / Digital Craftsman",
    description: "Experienced Fullstack Developer specializing in Web Development & Design.",
    knowsAbout: ["Web Development", "Software Engineering", "React", "Node.js", "Next.js", "TypeScript", "PHP", "Python", "PostgreSQL", "MySQL", "Tailwind CSS", "UI/UX Design", "Norse Mythology"], // Keahlian/Minat
    sameAs: [
      // Tautan ke profil sosial media/profesional
      "https://github.com/ishamashi",
      "https://linkedin.com/in/ishamashi",
      "https://twitter.com/ishamashi",
      // Tambahkan yang lain
    ],
  };
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Sisipkan JSON-LD di head */}
        <JsonLdScript jsonData={websiteSchema} />
        <JsonLdScript jsonData={personSchema} />
      </head>
      <body>
        {/* Render komponen wrapper klien, yang akan menangani navbar dan main */}
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </body>
    </html>
  );
}
