// components/about/MusingsContent.tsx
import React from "react";

const MusingsContent = () => {
  // Anda bisa membuat ini lebih dinamis dengan mengambil data dari CMS atau file markdown di masa depan
  const musings = [
    {
      type: "quote",
      text: "The Dwarves of yore did not simply build; they imbued their creations with purpose and a piece of their very spirit. So too should we approach our digital craft.",
      source: "A Craftsman's Reflection",
    },
    {
      type: "thought",
      title: "On the Nature of [SleepyHead]",
      text: "While the moniker [SleepyHead] began with late-night coding sessions, it has come to represent more: a state of deep, quiet concentration. It's in those moments, when the world outside fades, that the most intricate problems unravel and the clearest solutions are forged. It's less about slumber, and more about the focused dream-state of creation.",
    },
    {
      type: "tech_musing",
      title: "The Allure of the New Rune (Technology)",
      text: "The digital Nine Realms are ever-expanding, with new 'runes' (technologies, frameworks, paradigms) appearing constantly. The true challenge isn't to master them all, but to discern which ones hold true power and align with the enduring principles of good craftsmanship. Wisdom lies in choosing the right tool for the forging, not just the newest.",
    },
    {
      type: "nordic_link",
      text: "Perhaps the drive to create, to solve, to build complex systems... is our modern echo of the great smiths like Eitri and Brokkr, striving to make something worthy of legend.",
      // Anda bisa menambahkan link ke artikel atau sumber tentang Eitri/Brokkr jika mau
    },
  ];

  return (
    <div className="prose prose-base dark:prose-invert max-w-none text-foreground/85 leading-relaxed space-y-8">
      <h2 className="font-mono !mb-6 !text-2xl border-b border-border/30 pb-2 text-accent text-center md:text-left">Whispers from the Forge: Musings of [SleepyHead]</h2>

      {musings.map((musing, index) => (
        <div key={index} className="p-4 rounded-md bg-background/50 border border-border/20 shadow-sm">
          {musing.type === "quote" && (
            <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/80 m-0">
              <p className="mb-1">“{musing.text}”</p>
              {musing.source && <footer className="text-xs text-foreground/60">- {musing.source}</footer>}
            </blockquote>
          )}
          {musing.type === "thought" && musing.title && (
            <>
              <h3 className="font-mono text-lg text-accent/90 !mt-0 mb-2">{musing.title}</h3>
              <p>{musing.text}</p>
            </>
          )}
          {musing.type === "tech_musing" && musing.title && (
            <>
              <h3 className="font-mono text-lg text-accent/90 !mt-0 mb-2">{musing.title}</h3>
              <p>{musing.text}</p>
            </>
          )}
          {musing.type === "nordic_link" && <p className="italic text-foreground/75">{musing.text}</p>}
        </div>
      ))}
      <p className="text-sm text-center text-foreground/60 pt-4">~ These thoughts are ever-evolving, like patterns in the forge&apos;s fire ~</p>
    </div>
  );
};

export default MusingsContent;
