// components/ProjectsSection.tsx
import Link from "next/link";
import ProjectCard, { Project } from "../ProjectCard"; // Impor ProjectCard dan tipe Project

import RuneOthalaIcon from "@/icons/RuneOthalaIcon"; // Impor ikon

// Anda akan mengisi ini dengan data proyek Anda
// Untuk homepage, kita hanya tampilkan beberapa
const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Techne Indonesia",
    description: "Platform pembelajaran pemrograman dengan berbagai metode belajar seperti materi, video, kuis, dan bootcamp.",
    imagePlaceholder: "[Logo/Gambar Techne Indonesia]",
    techStack: ["Node.js", "Tailwind CSS", "PostgreSQL"],
    liveLink: "https://techne.id",
    sourceLink: "https://github.com/ishamashi", // Sesuaikan jika ada repo spesifik
  },
  {
    id: 2,
    title: "Alchecode.com",
    description: "Salah satu proyek yang menjadi fokus untuk diselesaikan di tahun 2025, detail lebih lanjut akan ditambahkan.",
    imagePlaceholder: "[Logo/Gambar Alchecode.com]",
    techStack: ["React", "Node.js", "JavaScript"],
    liveLink: "https://alchecode.com",
    sourceLink: "https://github.com/ishamashi", // Sesuaikan
  },
  // Tambahkan 1 proyek unggulan lagi jika mau
];

const ProjectsSection = () => {
  return (
    <section id="projects-summary" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Featured Forgings from the Digital Anvil</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/projects" className="inline-flex items-center justify-center gap-x-2.5 h-12 px-8 rounded-md border-2 border-accent bg-transparent text-base font-semibold text-accent shadow-lg transition-all duration-300 ease-out hover:bg-accent hover:text-white hover:shadow-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface group">
            <RuneOthalaIcon className="h-5 w-5 text-accent transition-transform duration-500 ease-in-out group-hover:text-white group-hover:scale-110 group-hover:rotate-[180deg]" aria-hidden="true" />
            Browse All Artifacts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
