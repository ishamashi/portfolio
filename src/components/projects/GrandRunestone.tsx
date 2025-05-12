// components/projects/GrandRunestone.tsx
import Image from "next/image";
import { DetailedProject } from "@/app/projects/projectsData"; // Tipe data proyek
import RuneDagazIcon from "@/icons/RuneDagazIcon";
import RuneKenazIcon from "@/icons/RuneKenazIcon";

interface GrandRunestoneProps {
  project: DetailedProject;
}

const GrandRunestone: React.FC<GrandRunestoneProps> = ({ project }) => {
  return (
    <article className="bg-surface p-6 md:p-8 rounded-xl shadow-2xl border border-border/50 overflow-hidden">
      {/* Area Visual dengan Bingkai Runic */}
      {project.coverImageLarge || project.imagePlaceholder ? (
        <div className="relative aspect-video mb-6 md:mb-8 rounded-lg overflow-hidden border-2 border-accent/30 shadow-inner">
          {project.coverImageLarge ? (
            <Image src={project.coverImageLarge} alt={`Cover image for ${project.title}`} layout="fill" objectFit="cover" className="transition-transform duration-500 hover:scale-105" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-background/50">
              <p className="font-mono text-lg text-foreground/50">{project.imagePlaceholder}</p>
            </div>
          )}
          {/* Overlay atau elemen dekoratif runic di sudut-sudut gambar */}
        </div>
      ) : null}

      <header className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-accent mb-3">{project.title}</h2>
        <p className="text-sm font-mono text-foreground/60">Etched with Runes of Power:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="skill-badge-etched text-xs rounded-md bg-background px-2.5 py-1 font-medium text-accent shadow-sm border border-border/70">
              {tech}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground/80 mb-8 leading-relaxed">
        <h3 className="font-mono text-xl text-foreground/90 border-b border-border/30 pb-1 mb-3">The Saga of Its Forging:</h3>
        {/* Gunakan dangerouslySetInnerHTML jika deskripsi punya HTML, atau render paragraf */}
        <p>{project.detailedSaga || project.description}</p>
      </div>

      <footer className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-border/30">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-x-2 h-10 px-6 rounded-md border border-accent bg-transparent text-sm font-medium text-accent shadow-sm transition-colors hover:bg-accent hover:text-white group">
            <RuneDagazIcon className="h-4 w-4 text-accent transition-transform duration-300 group-hover:text-white group-hover:rotate-[15deg]" aria-hidden="true" />
            Behold the Artifact
          </a>
        )}
        {project.sourceLink && (
          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-x-2 h-10 px-6 rounded-md border border-border bg-transparent text-sm font-medium text-foreground/70 shadow-sm transition-colors hover:border-accent hover:text-accent group">
            <RuneKenazIcon className="h-4 w-4 text-foreground/70 transition-transform duration-300 group-hover:text-accent group-hover:-rotate-[15deg]" aria-hidden="true" />
            Study the Glyphs
          </a>
        )}
      </footer>
    </article>
  );
};

export default GrandRunestone;
