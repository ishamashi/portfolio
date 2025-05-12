// app/contact/page.tsx
import InteractiveSendingStone from "@/components/contact/InteractiveSendingStone";

export default function ContactPage() {
  return (
    // Tambahkan kelas latar belakang nebula/bintang jika ada
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-fit flex flex-col justify-center">
      <header className="mb-10 md:mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight text-foreground">
          Consult the <span className="text-accent">Sending Stone</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">The runes shimmer, awaiting your intent. Activate a glyph to channel your message or connect across the digital realms.</p>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <InteractiveSendingStone />
      </main>
    </div>
  );
}
