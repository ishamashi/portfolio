// components/projects/MobileProjectScrollEntry.tsx
"use client"; // Karena akan ada state untuk expand/collapse

import { useState } from "react";
import Image from "next/image";
import { DetailedProject } from "@/app/projects/projectsData"; // Sesuaikan path jika perlu
import RuneDagazIcon from "@/icons/RuneDagazIcon";
import RuneKenazIcon from "@/icons/RuneKenazIcon";
// Mungkin ikon panah runic untuk tombol expand
// import ChevronDownRunicIcon from '@/components/icons/ChevronDownRunicIcon';
// import ChevronUpRunicIcon from '@/components/icons/ChevronUpRunicIcon';

interface MobileProjectScrollEntryProps {
  project: DetailedProject;
}

const MobileProjectScrollEntry: React.FC<MobileProjectScrollEntryProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className="mb-10 py-6 px-4 bg-surface/70 rounded-lg shadow-lg border border-border/30 snap-start"
      // `snap-start` untuk scroll snapping jika diaktifkan di parent
    >
      <header
        className="flex flex-col items-center text-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsExpanded(!isExpanded);
        }}
        aria-expanded={isExpanded}
        aria-controls={`project-details-${project.id}`}
      >
        <h2 className="text-2xl font-bold font-mono text-accent mb-3">{project.title}</h2>

        {project.imageUrl || project.imagePlaceholder ? (
          <div className="relative w-full max-w-xs aspect-[4/3] mb-4 rounded-md overflow-hidden border border-border/50 shadow-md">
            {project.imageUrl ? (
              <Image src={project.imageUrl} alt={project.title} layout="fill" objectFit="cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-background/50 p-2">
                <p className="font-mono text-sm text-center text-foreground/50">{project.imagePlaceholder}</p>
              </div>
            )}
          </div>
        ) : null}

        <div className="flex flex-wrap justify-center gap-1.5 mb-2">
          {project.techStack.slice(0, 4).map(
            (
              tech // Tampilkan beberapa teknologi awal
            ) => (
              <span key={tech} className="text-xs rounded bg-background px-2 py-0.5 font-medium text-accent/80 border border-border/50">
                {tech}
              </span>
            )
          )}
        </div>
        <p className="text-sm text-foreground/70 line-clamp-2 mb-3 px-2">{project.description}</p>

        {/* Tombol Expand dengan Ikon Panah */}
        <div className="inline-flex items-center gap-x-1 text-accent font-mono text-xs hover:underline">
          {isExpanded ? "Show Less" : "Unveil More Details"}
          {/* Ganti dengan ikon panah runic Anda */}
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      </header>

      {/* Konten yang bisa di-expand/collapse */}
      {isExpanded && (
        <div
          id={`project-details-${project.id}`}
          className="mt-6 pt-6 border-t border-border/20 space-y-6 text-left" // text-left untuk deskripsi panjang
        >
          <div className="prose prose-sm dark:prose-invert max-w-none text-foreground/80 leading-relaxed">
            <h3 className="font-mono text-lg text-foreground/90 border-b border-border/30 pb-1 mb-2">The Saga of Its Forging:</h3>
            <p>{project.detailedSaga || project.description}</p>
          </div>

          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:justify-start sm:space-x-4">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-x-2 h-10 px-5 rounded-md border border-accent bg-transparent text-sm font-medium text-accent shadow-sm transition-colors hover:bg-accent hover:text-white group">
                <RuneDagazIcon className="h-4 w-4 text-accent transition-transform duration-300 group-hover:text-white group-hover:rotate-[15deg]" aria-hidden="true" />
                Behold the Artifact
              </a>
            )}
            {project.sourceLink && (
              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-x-2 h-10 px-5 rounded-md border border-border bg-transparent text-sm font-medium text-foreground/70 shadow-sm transition-colors hover:border-accent hover:text-accent group">
                <RuneKenazIcon className="h-4 w-4 text-foreground/70 transition-transform duration-300 group-hover:text-accent group-hover:-rotate-[15deg]" aria-hidden="true" />
                Study the Glyphs
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default MobileProjectScrollEntry;
