// Contoh di app/projects/projectsData.ts
import { Project } from "@/components/ProjectCard"; // Anda mungkin perlu tipe yang lebih detail

export interface DetailedProject extends Project {
  coverImageLarge?: string; // Untuk GrandRunestone
  detailedSaga: string; // Deskripsi panjang
  // Tambahan lain jika perlu
}

export const allMyProjects: DetailedProject[] = [
  {
    id: 1,
    title: "Techne Indonesia",
    description: "Platform pembelajaran pemrograman...", // Deskripsi singkat untuk thumbnail
    detailedSaga: "Techne Indonesia adalah sebuah visi untuk demokratisasi pendidikan teknologi di Indonesia. Dibangun dengan semangat kolaborasi, platform ini menghadapi tantangan dalam menyajikan materi yang kompleks menjadi mudah dicerna. Kami menggunakan arsitektur modular dengan Node.js di backend untuk skalabilitas, dan Tailwind CSS untuk UI yang responsif dan cepat dikembangkan. PostgreSQL dipilih karena robust dan kemampuannya menangani relasi data yang kompleks...",
    imagePlaceholder: "[Logo/Gambar Techne Indonesia]",
    coverImageLarge: "/images/projects/techne-large.jpg", // Contoh
    techStack: ["Node.js", "Tailwind CSS", "PostgreSQL", "Next.js"],
    liveLink: "https://techne.id",
    sourceLink: "https://github.com/ishamashi/techne", // Ganti
},
{
    id: 2,
    title: "Alchecode.com",
    description: "Salah satu proyek yang menjadi fokus untuk diselesaikan di tahun 2025, detail lebih lanjut akan ditambahkan.",
    detailedSaga: "Techne Indonesia adalah sebuah visi untuk demokratisasi pendidikan teknologi di Indonesia. Dibangun dengan semangat kolaborasi, platform ini menghadapi tantangan dalam menyajikan materi yang kompleks menjadi mudah dicerna. Kami menggunakan arsitektur modular dengan Node.js di backend untuk skalabilitas, dan Tailwind CSS untuk UI yang responsif dan cepat dikembangkan. PostgreSQL dipilih karena robust dan kemampuannya menangani relasi data yang kompleks...",
    imagePlaceholder: "[Logo/Gambar Alchecode.com]",
    coverImageLarge: "/images/projects/techne-large.jpg", // Contoh
    techStack: ["React", "Node.js", "JavaScript"],
    liveLink: "https://alchecode.com",
    sourceLink: "https://github.com/ishamashi", // Sesuaikan
  },
  // ... proyek lainnya
];
