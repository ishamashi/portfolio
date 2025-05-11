// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl">return &quot;Mari Berdiskusi&quot;;</h1>
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-8 text-foreground/80 text-lg">Saya sangat senang jika bisa berdiskusi lebih lanjut mengenai proyek potensial, peluang kolaborasi, atau sekadar bertukar pikiran tentang teknologi. Silakan hubungi saya melalui salah satu cara di bawah ini.</p>

        <div className="mb-10">
          <a href="mailto:icho.ishamashi@gmail.com" className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-10 text-lg font-semibold text-white shadow transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            Kirim Email: icho.ishamashi@gmail.com
          </a>
        </div>

        <p className="mb-4 text-foreground/80">Atau temukan saya di media sosial:</p>
        <div className="flex items-center justify-center space-x-6 text-2xl">
          {" "}
          {/* Icon lebih besar */}
          <a href="https://github.com/ishamashi" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="GitHub">
            {/* Idealnya gunakan ikon SVG di sini */}
            GH
          </a>
          <a href="https://www.linkedin.com/in/ishamashi/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="LinkedIn">
            LI
          </a>
          <a href="https://twitter.com/ishamashi" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Twitter">
            TW
          </a>
          <a href="https://www.youtube.com/@ishamashi" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="YouTube">
            YT
          </a>
          <a href="https://www.instagram.com/ishamashi/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
            IG
          </a>
        </div>
        {/* Pertimbangkan untuk menambahkan formulir kontak sederhana di sini di masa mendatang */}
      </div>
    </div>
  );
}
