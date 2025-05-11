// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar-forged-edge sticky top-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold font-mono brand-name-engraved transition-colors">
          {"ᛁ ᛊ ᚺ ᚨ ᛗ ᚨ ᛊ ᚺ ᛁ"}
        </Link>
        <div className="space-x-4 md:space-x-6">
          <Link href="/projects" className="nav-link-runic font-mono text-sm text-foreground/80 hover:text-accent transition-colors">
            Forgings {/* Atau Artifacts */}
          </Link>
          <Link href="/about" className="nav-link-runic font-mono text-sm text-foreground/80 hover:text-accent transition-colors">
            The Saga {/* Atau Lore */}
          </Link>
          <Link href="/contact" className="nav-link-runic font-mono text-sm text-foreground/80 hover:text-accent transition-colors">
            Send Raven {/* Atau Summon */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
