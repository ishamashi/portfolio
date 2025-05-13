// components/about/PhilosophyContent.tsx
import React from 'react';
// Impor ikon rune jika Anda membuatnya (contoh: RuneKenazIcon, RuneAnsuzIcon)

const PhilosophyContent = () => {
  const principles = [
    { rune: "ᚲ", title: "Clarity & Craft (Kenaz)", text: "Strive for code that is not just functional, but understandable, maintainable, and elegant – like a well-carved runestone." },
    { rune: "ᛗ", title: "Strength & Structure (Mannaz/Ehwaz)", text: "Build robust, scalable architectures that stand the test of time and load, reflecting the enduring strength of Dwarven construction." },
    { rune: "ᚨ", title: "Communication & Collaboration (Ansuz)", text: "Value clear communication and teamwork. Great artifacts are often forged through shared wisdom and effort." },
    { rune: "ᛞ", title: "Innovation & Adaptation (Dagaz)", text: "Embrace new technologies and approaches. Seek breakthroughs and continuously refine the craft in the ever-evolving digital landscape." },
    { rune: "ᛏ", title: "Integrity & Resilience (Tiwaz)", text: "Uphold professional integrity, deliver on promises, and face challenges with the unwavering spirit of a master smith." },
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-mono !text-2xl border-b border-border/30 pb-2 text-accent">
        The Craftsman&apos;s Code: Principles of the Forge
      </h2>
      <ul className="list-none space-y-5 pl-0">
        {principles.map((p) => (
          <li key={p.title} className="flex items-start gap-x-4">
            <span 
              className="text-3xl font-mono text-accent opacity-80 mt-1 w-8 text-center" 
              aria-hidden="true"
              title={p.rune} // Menampilkan rune asli di tooltip
            >
              {p.rune} {/* Atau gunakan komponen ikon: <RuneKenazIcon className="w-6 h-6 text-accent..." /> */}
            </span>
            <div>
              <h3 className="font-semibold text-lg text-foreground/95 mb-1">{p.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{p.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PhilosophyContent;