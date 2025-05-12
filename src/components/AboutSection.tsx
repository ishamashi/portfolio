// components/AboutSection.tsx
import Link from "next/link";
import RuneAnsuzIcon from "@/icons/RuneAnsuzIcon";

const skills = ["HTML5", "CSS3", "JavaScript", "PHP", "Python", "React", "Node.js", "MySQL", "PostgreSQL", "Tailwind CSS", "Git", "VS Code"];

const AboutSection = () => {
  return (
    <section id="about-summary" className="about-section-runic-frame my-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">The Saga of a Digital Craftsman</h2>
        <div className="mx-auto max-w-3xl space-y-4 text-center text-foreground/80">
          <p className="line-clamp-3">From the depths of the digital Niðavellir, I, Icho Ishamashi, also known as [SleepyHead], emerge. A web developer driven by an insatiable curiosity for technology&apos;s ever-shifting landscapes, from elegant design to the intricate dance of code...</p>
          <div className="mt-6">
            <Link href="/about" className=" inline-flex items-center justify-center gap-x-2 h-11 px-6 rounded-md border border-accent bg-transparent text-sm font-medium text-accent shadow-sm transition-colors duration-300 ease-out hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface group">
              <RuneAnsuzIcon className="h-4 w-4 text-accent transition-transform duration-300 group-hover:rotate-[360deg] group-hover:text-white" aria-hidden="true" />
              &nbsp; Uncover The Full Saga
            </Link>
          </div>
          <div>
            <h3 className="mb-4 mt-8 text-2xl font-semibold tracking-tight text-foreground">Runes of Power (Glimpse)</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.slice(0, 7).map((skill) => (
                <span key={skill} className="skill-badge-etched rounded-md bg-background px-3 py-1 text-xs font-medium text-accent shadow-sm border border-border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
