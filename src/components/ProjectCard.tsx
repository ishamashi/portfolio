// components/ProjectCard.tsx
import Image from "next/image"; // Jika Anda akan menggunakan gambar nyata

// Definisikan tipe untuk props proyek
export interface Project {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string; // Opsional, jika Anda punya gambar
  imagePlaceholder?: string; // Untuk placeholder teks
  techStack: string[];
  liveLink?: string;
  sourceLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-lg transition-all hover:shadow-xl hover:border-accent/50 group">
      <div className="relative h-48 w-full bg-background flex items-center justify-center overflow-hidden">
        {/* Efek hover pada gambar/placeholder */}
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
          {project.imageUrl ? (
            <Image src={project.imageUrl} alt={project.title} layout="fill" objectFit="cover" />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <p className="font-mono text-sm text-foreground/50">{project.imagePlaceholder || `[${project.title}]`}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-accent group-hover:text-accent-hover transition-colors">{project.title}</h3>
          <p className="mb-3 text-sm text-foreground/70 line-clamp-3">{project.description}</p>
          <p className="text-xs font-mono text-foreground/60 mb-1">Forged with:</p>
          <div className="mb-3 flex flex-wrap gap-1">
            {project.techStack.map((tech) => (
              <span key={tech} className="inline-block rounded-full bg-background px-2 py-0.5 text-xs font-medium text-accent/80 border border-border">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex space-x-3">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:text-accent-hover hover:underline">
              View Artifact {/* Atau Explore Realm */}
            </a>
          )}
          {project.sourceLink && (
            <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:text-accent-hover hover:underline">
              Inspect Runes {/* Atau View Blueprint */}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
