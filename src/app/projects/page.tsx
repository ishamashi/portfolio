// app/projects/page.tsx
"use client";

import { useState, useEffect } from "react";
import { allMyProjects, DetailedProject } from "./projectsData";
import GrandRunestone from "@/components/projects/GrandRunestone";
import ThumbnailRunestone from "@/components/projects/ThumbnailRunestone";
import MobileProjectScrollEntry from "@/components/projects/MobileProjectScrollEntry"; // Impor komponen mobile

export default function ProjectsPage() {
  const [selectedProjectDesktop, setSelectedProjectDesktop] = useState<DetailedProject | null>(null);
  const [currentIndexDesktop, setCurrentIndexDesktop] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading awal

  useEffect(() => {
    if (allMyProjects.length > 0) {
      setSelectedProjectDesktop(allMyProjects[0]);
      setCurrentIndexDesktop(0);
    }
    setIsLoading(false); // Selesai loading data
  }, []);

  const handleSelectProjectDesktop = (project: DetailedProject, index: number) => {
    setSelectedProjectDesktop(project);
    setCurrentIndexDesktop(index);
  };

  const navigateProjectDesktop = (direction: "prev" | "next") => {
    let newIndex = currentIndexDesktop;
    if (direction === "prev") {
      newIndex = (currentIndexDesktop - 1 + allMyProjects.length) % allMyProjects.length;
    } else {
      newIndex = (currentIndexDesktop + 1) % allMyProjects.length;
    }
    setSelectedProjectDesktop(allMyProjects[newIndex]);
    setCurrentIndexDesktop(newIndex);
  };

  if (isLoading) {
    // Tampilkan loader saat data belum siap
    return (
      <div className="container mx-auto min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <p className="font-mono text-2xl text-foreground/70 animate-pulse">Awakening the Forge... Retrieving Artifacts...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-0 sm:px-6 lg:px-8 min-h-screen">
      {" "}
      {/* Hapus padding horizontal untuk mobile agar bisa full-width */}
      {/* --- Versi Desktop --- */}
      <div className="hidden md:block py-12">
        {" "}
        {/* Padding vertikal untuk desktop */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight text-foreground">
            The Hall of <span className="text-accent">Forged Runes</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">Behold the artifacts forged in the digital fires, each etched with runes of power and tales of their creation.</p>
        </header>
        {selectedProjectDesktop && (
          <section className="mb-16">
            <GrandRunestone project={selectedProjectDesktop} />
          </section>
        )}
        {allMyProjects.length > 1 && (
          <div className="flex justify-center items-center space-x-6 mb-12">
            <button onClick={() => navigateProjectDesktop("prev")} aria-label="Previous Artifact" className="p-2 rounded-full border border-border hover:bg-surface hover:border-accent text-accent transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-accent-hover" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <p className="font-mono text-sm text-foreground/80">
              Artifact {currentIndexDesktop + 1} of {allMyProjects.length}
            </p>
            <button onClick={() => navigateProjectDesktop("next")} aria-label="Next Artifact" className="p-2 rounded-full border border-border hover:bg-surface hover:border-accent text-accent transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-accent-hover" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
        <section className="pb-12">
          <h2 className="text-2xl font-mono font-semibold text-center mb-8 text-foreground/90">Browse the Carved Offerings</h2>
          <div className="flex overflow-x-auto space-x-4 md:space-x-6 px-5 py-4 scrollbar-thin scrollbar-thumb-surface scrollbar-track-transparent scrollbar-thumb-rounded-full">
            {allMyProjects.map((project, index) => (
              <ThumbnailRunestone key={project.id} project={project} isSelected={selectedProjectDesktop?.id === project.id} onSelect={() => handleSelectProjectDesktop(project, index)} />
            ))}
          </div>
        </section>
      </div>
      {/* --- Versi Mobile --- */}
      <div className="md:hidden py-8 px-2">
        {" "}
        {/* Padding vertikal dan sedikit horizontal untuk mobile */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold font-mono tracking-tight text-foreground">
            The Dwarf's <span className="text-accent">Ledger</span>
          </h1>
          <p className="mt-2 text-sm text-foreground/70">Scroll to unveil artifacts from the forge. Tap to inspect deeper.</p>
        </header>
        {/* Untuk scroll snapping (opsional):
            <div className="snap-y snap-mandatory h-[calc(100vh-10rem)] overflow-y-scroll"> 
        */}
        <div>
          {allMyProjects.map((project) => (
            <MobileProjectScrollEntry key={`mobile-${project.id}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
