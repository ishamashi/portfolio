// components/about/SkillsContent.tsx
import React from "react";
import SkillRuneCard from "./SkillRuneCard";

const skillsData = {
  languages: ["JavaScript", "TypeScript", "PHP", "Python", "HTML5", "CSS3"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS" /* "Laravel", "Vue.js" */],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Supabase" /* "Redis" */],
  tools: ["Git", "Docker", "VS Code", "Linux", "Figma (Basics)", "pnpm"],
  concepts: ["REST APIs", "Agile Dev", "CI/CD (Basics)", "UI/UX Principles", "Testing"],
};

type SkillCategory = keyof typeof skillsData;

const categoryTitles: Record<SkillCategory, string> = {
  languages: "Ancient Tongues & Scripts",
  frameworks: "Masterwork Frameworks & Libraries",
  databases: "Vaults of Knowledge (Databases)",
  tools: "Tools of the Digital Forge",
  concepts: "Core Runes (Concepts & Methods)",
};

const SkillsContent = () => {
  return (
    <div className="space-y-10">
      <h2 className="font-mono !text-2xl border-b border-border/30 pb-2 text-accent text-center">Runes of Power: The Skill Set</h2>
      {(Object.keys(skillsData) as SkillCategory[]).map((category) => (
        <div key={category}>
          <h3 className="font-mono text-xl font-semibold text-foreground/90 mb-4 text-center md:text-left">{categoryTitles[category]}</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {skillsData[category].map((skill) => (
              <SkillRuneCard key={skill} skillName={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SkillsContent;
