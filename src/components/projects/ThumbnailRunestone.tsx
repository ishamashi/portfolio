// components/projects/ThumbnailRunestone.tsx
import Image from "next/image";
import { DetailedProject } from "@/app/projects/projectsData"; // Tipe data

interface ThumbnailRunestoneProps {
  project: DetailedProject;
  isSelected: boolean;
  onSelect: () => void;
}

const ThumbnailRunestone: React.FC<ThumbnailRunestoneProps> = ({ project, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      aria-label={`View details for ${project.title}`}
      className={`
        flex-shrink-0 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 
        bg-surface rounded-lg shadow-md overflow-hidden 
        border-2 transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background
        group relative
        ${isSelected ? "border-accent shadow-accent/30 scale-105" : "border-border/50 hover:border-accent/70 hover:shadow-lg"}
      `}
    >
      {/* Gambar atau Placeholder */}
      <div className="relative w-full h-2/3 bg-background/30">
        {project.imageUrl || project.imagePlaceholder ? (
          project.imageUrl ? (
            <Image src={project.imageUrl} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-110" />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-2">
              <p className="font-mono text-xs text-center text-foreground/50">{project.imagePlaceholder}</p>
            </div>
          )
        ) : (
          <div className="w-full h-full bg-background/50"></div>
        )}
        {/* Overlay saat hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Info di bawah */}
      <div className="p-3 h-1/3 flex flex-col justify-between">
        <h3 className={`font-mono text-sm font-semibold truncate transition-colors duration-300 ${isSelected ? "text-accent" : "text-foreground/80 group-hover:text-accent"}`}>{project.title}</h3>
        {/* Mungkin 1-2 rune teknologi utama */}
        <div className="flex space-x-1 mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
          {project.techStack.slice(0, 2).map((tech) => (
            <span key={tech} className="text-xs px-1.5 py-0.5 rounded bg-background/70 text-foreground/60 border border-border/30">
              {tech.substring(0, 3)} {/* Singkatan atau ikon rune */}
            </span>
          ))}
        </div>
      </div>

      {/* Indikator Rune Terpilih (jika isSelected) */}
      {isSelected && (
        <div className="absolute top-2 right-2 p-1.5 bg-accent rounded-full shadow-md">
          {/* Ganti dengan ikon rune 'mata' atau 'fokus' */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default ThumbnailRunestone;
