import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Skills", href: "#skills" },
];

function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
    >
      {dark ? (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.73 0-.71-.71M6.34 6.34l-.71-.71M12 7a5 5 0 100 10A5 5 0 0012 7z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center text-xs font-bold text-white">A</span>
          <span className="text-gray-900 dark:text-white font-semibold tracking-tight text-sm">
            adedolapo<span className="text-violet-500">.</span>
          </span>
        </a>

        {/* Nav + Contact + Toggle — desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${
                active === link.label
                  ? "bg-violet-100 dark:bg-violet-500/15 text-violet-600 dark:text-violet-300 font-medium"
                  : "text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <span className="w-px h-4 bg-gray-200 dark:bg-white/10 mx-2" />
          <a
            href="mailto:Kingsleyadebo@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all duration-200"
          >
            Contact me <span className="text-violet-500">↗</span>
          </a>
          <span className="w-px h-4 bg-gray-200 dark:bg-white/10 mx-2" />
          <ThemeToggle />
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-6 rounded-2xl bg-white dark:bg-[#111]/95 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none overflow-hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => { setActive(link.label); setMenuOpen(false); }}
              className="block px-5 py-3 text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:Kingsleyadebo@gmail.com"
            className="block px-5 py-3 text-sm text-violet-500 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-colors"
          >
            Contact me ↗
          </a>
        </div>
      )}
    </header>
  );
}