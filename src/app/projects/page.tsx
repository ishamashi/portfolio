// app/projects/page.tsx
// import ProjectCard, { Project } from '@/components/ProjectCard'; // Nanti Anda akan pakai ini

// const allProjects: Project[] = [
//   // Daftar semua proyek Anda di sini
// ];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-12 text-center text-4xl font-bold tracking-tight sm:text-5xl">// Semua Proyek Saya</h1>
      <p className="text-center text-foreground/80">
        Halaman ini akan menampilkan daftar lengkap semua proyek yang pernah saya kerjakan atau sedang saya kembangkan.
        {/*
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {allProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          */}
      </p>
    </div>
  );
}
