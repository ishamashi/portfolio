// app/about/page.tsx
export default function AboutPage() {
  const skills = ["HTML5", "CSS3", "JavaScript", "PHP", "Python", "React", "Node.js", "MySQL", "PostgreSQL", "Tailwind CSS", "Git", "Visual Studio Code", "Linux", "Docker", "AWS (Dasar)"]; // Daftar lengkap
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl">&sol;&sol; Tentang Saya: Icho Ishamashi</h1>
      <div className="mx-auto max-w-3xl space-y-6 text-left text-foreground/80">
        {" "}
        {/* Ubah ke text-left untuk bacaan panjang */}
        <p>Halo! Saya Icho Ishamashi, seorang Software Engineer dengan pengalaman lebih dari 10 tahun di dunia pengembangan web dan desain. Saya sangat antusias dengan segala hal yang berkaitan dengan teknologi, mulai dari proses perancangan antarmuka pengguna yang intuitif hingga implementasi backend yang robust dan skalabel.</p>
        <p>Perjalanan saya di dunia kode dimulai dari rasa penasaran yang besar terhadap bagaimana sebuah website atau aplikasi bisa berjalan. Sejak saat itu, saya terus belajar dan mengeksplorasi berbagai teknologi baru. Saya percaya bahwa belajar adalah proses seumur hidup, terutama di industri teknologi yang berkembang pesat ini.</p>
        <p>Saya dikenal dengan alias [SleepyHead] di beberapa komunitas developer, mungkin karena saya sering begadang untuk menyelesaikan proyek atau mempelajari konsep baru (atau mungkin karena saya suka tidur!). Namun, di balik itu, saya memiliki dedikasi tinggi dan pantang menyerah dalam menghadapi tantangan teknis. Memecahkan masalah dan melihat ide berubah menjadi produk nyata adalah kepuasan terbesar bagi saya.</p>
        <p>Filosofi saya dalam bekerja adalah selalu berusaha menulis kode yang bersih, terstruktur, dan mudah dipelihara. Saya juga sangat menghargai kolaborasi tim dan komunikasi yang efektif.</p>
        <div>
          <h2 className="mb-4 mt-10 text-3xl font-semibold tracking-tight text-foreground">Keahlian Teknis</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-accent shadow-sm border border-border hover:bg-accent hover:text-white transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Anda bisa menambahkan sub-section lain: Pengalaman Kerja, Pendidikan, dll. */}
      </div>
    </div>
  );
}
