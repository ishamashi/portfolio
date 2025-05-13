// components/about/InspirationContent.tsx
import React from "react";

const InspirationContent = () => {
  return (
    <div className="prose prose-base dark:prose-invert max-w-none text-foreground/85 leading-relaxed space-y-5">
      <h2 className="font-mono !mb-4 !text-2xl border-b border-border/30 pb-2 text-accent">Echoes of Niðavellir: The Source of Inspiration</h2>
      <p>Beyond the logic of code lies a deep appreciation for myth and narrative. The tales of Norse mythology, particularly the realm of Niðavellir – the dark fields where masterful Dwarven smiths like Eitri and Brokkr forged legendary artifacts (Mjölnir, Draupnir, Gullinbursti) – resonate deeply with the act of software creation.</p>
      <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/70">&quot;Like Eitri and Brokkr who risked their heads on the quality of their craft, I strive to pour dedication and precision into every line of code, transforming ideas into tangible, powerful digital tools.&quot;</blockquote>
      <p>This inspiration isn&apos;t just thematic; it informs my work ethic:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>**Mastery through Practice:** Believing that true skill, like smithing, requires constant learning and refinement.</li>
        <li>**Resourcefulness:** Finding clever solutions to complex problems, much like the Dwarves used unique materials and methods.</li>
        <li>**Enduring Quality:** Aiming to build software that is not just functional for now, but reliable and valuable in the long run.</li>
      </ul>
      <h3 className="font-mono !mt-8 !text-xl text-foreground/90">The Tale of &quot;[SleepyHead]&quot;</h3>
      <p>The alias [SleepyHead] started partly in jest during long coding sessions, but it also represents a state of deep focus – a quiet intensity where the outside world fades, and the focus is solely on the &apos;digital forge&apos;. It&apos;s a reminder that sometimes, the most profound creations emerge from periods of quiet contemplation and persistent effort, even when the rest of the world sleeps.</p>
    </div>
  );
};
export default InspirationContent;
