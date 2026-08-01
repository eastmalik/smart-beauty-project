/**
 * Navbar — Rose Petal design
 * Transparent over hero, transitions to white/blush on scroll
 * Pink brand color, Playfair Display wordmark
 */
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Our Mission", href: "#mission" },
    { label: "Free Resource", href: "#free-resource" },
    { label: "eBook", href: "#ebook" },
    { label: "Donate", href: "#donate" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm shadow-[oklch(0.62_0.18_0/0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/manus-storage/logo-icon_caa36e32.png"
              alt="The Smart Beauty Project logo"
              className="w-9 h-9 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span
                className={`font-display font-bold text-base leading-none transition-colors ${
                  scrolled ? "text-[oklch(0.22_0.04_350)]" : "text-white"
                }`}
              >
                The Smart Beauty
              </span>
              <span
                className={`font-display italic text-sm leading-none transition-colors ${
                  scrolled ? "text-[oklch(0.62_0.18_0)]" : "text-[oklch(0.90_0.07_0)]"
                }`}
              >
                Project
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors hover:text-[oklch(0.62_0.18_0)] ${
                  scrolled ? "text-[oklch(0.35_0.06_350)]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#donate">
              <Button
                size="sm"
                className="bg-[oklch(0.62_0.18_0)] text-white hover:bg-[oklch(0.55_0.18_0)] active:scale-[0.97] transition-all duration-150 font-body font-medium rounded-full px-5"
              >
                Donate Now
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[oklch(0.22_0.04_350)]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-[oklch(0.88_0.04_0)] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-body text-sm font-medium text-[oklch(0.35_0.06_350)] hover:text-[oklch(0.62_0.18_0)] py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#donate" onClick={() => setMenuOpen(false)}>
            <Button className="w-full bg-[oklch(0.62_0.18_0)] text-white hover:bg-[oklch(0.55_0.18_0)] font-body font-medium rounded-full">
              Donate Now
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
