// components/ContactSection.tsx
import Link from "next/link";

import RavenRuneIcon from "@/icons/RavenRuneIcon"; // Impor ikon baru

const ContactSection = () => {
  return (
    <section
      id="contact-summary"
      // Ganti kelas styling dasar dengan kelas bingkai runic baru
      className="contact-section-runic-sides my-16 py-16 md:py-24"
      // Hapus bg-surface, rounded-lg, shadow-md dari sini jika sudah ada di .contact-section-runic-sides
      // py-16 md:py-24 adalah padding vertikal dari kelas Tailwind sebelumnya, bisa dipertahankan atau diatur di CSS.
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">return &quot;Summon the Craftsman&quot; ;</h2>
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-6 text-foreground/80">Have a quest, a query, or a grand design? The forge is open for new commissions and collaborations.</p>
          <Link href="/contact" className="mb-12 inline-flex items-center justify-center gap-x-2.5 h-12 px-8 rounded-md border-2 border-accent bg-accent text-base font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:bg-accent-hover hover:shadow-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface group">
            <RavenRuneIcon className="h-5 w-5 text-white transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-[-45deg]" aria-hidden="true" />
            Send Your Raven
          </Link>
          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/ishamashi" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors duration-200 font-mono text-sm">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ishamashi/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors duration-200 font-mono text-sm">
              LinkedIn
            </a>
            <a href="https://twitter.com/ishamashi" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors duration-200 font-mono text-sm">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
