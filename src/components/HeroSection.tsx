// components/HeroSection.tsx
import Link from "next/link";
import NidavellirAnimation from "./NidavellirAnimation";

const HeroSection = () => {
  return (
    <section id="home" className="flex min-h-[calc(100vh-8rem)] items-center py-12 md:py-0">
      <div className="w-full grid items-center gap-8 xl:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            <span className="block text-foreground/70">&gt; Icho Ishamashi_</span>
            <span className="block text-accent animation-text-typing">Digital Wordsmith</span> {/* Atau "Rune Carver of Code" */}
          </h1>
          <p className="max-w-xl text-foreground/80 md:text-lg">
            A seasoned Software Engineer, known also as <span className="text-accent font-medium">[SleepyHead]</span>, with over a decade of experience. I forge innovative digital solutions in the heart of the web, inspired by the master craftsmen of Niðavellir.
          </p>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Link href="/projects" className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-white shadow transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50">
              Explore My Forgings
            </Link>
            <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-8 text-sm font-medium text-accent shadow-sm transition-colors hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50">
              Send a Raven
            </Link>
          </div>
        </div>
        <div className="hidden md:block h-96 w-full rounded-lg bg-background overflow-hidden"> {/* Beri tinggi lebih agar animasi lebih terlihat */}
          <NidavellirAnimation />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;