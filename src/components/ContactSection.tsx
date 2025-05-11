// components/ContactSection.tsx
import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact-summary" className="rounded-lg bg-surface py-16 shadow-md md:py-24 my-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">return "Summon the Craftsman";</h2>
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-6 text-foreground/80">Have a quest, a query, or a grand design? The forge is open for new commissions and collaborations.</p>
          <Link href="/contact" className="mb-8 inline-flex h-11 items-center justify-center rounded-md bg-accent px-10 text-base font-semibold text-white shadow transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            Send Your Raven
          </Link>
          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/ishamashi" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ishamashi/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/ishamashi" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
