import { useState, useEffect } from 'react';
import { Menu, X, Printer } from 'lucide-react';
import { type Language, type Translations } from '../hooks/useLanguage';

interface NavbarProps {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const navLinks = (t: Translations) => [
  { label: t.nav.about, href: '#about' },
  { label: t.nav.services, href: '#services' },
  { label: t.nav.gallery, href: '#gallery' },
  { label: t.nav.whyUs, href: '#why-us' },
  { label: t.nav.contact, href: '#contact' },
];

export default function Navbar({ language, toggleLanguage, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-navy shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-brand-orange rounded-md flex items-center justify-center flex-shrink-0">
              <Printer className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-heading font-bold text-white text-sm leading-tight">
                Sai Ekvira
              </div>
              <div className="font-heading font-semibold text-brand-yellow text-xs leading-tight tracking-wide">
                GRAPHICS
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks(t).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/90 hover:text-brand-yellow font-heading font-semibold text-sm px-3 py-2 rounded transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side: Language toggle + mobile menu */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-bold text-xs px-3 py-1.5 rounded-full transition-all duration-200"
              title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            >
              <span className="text-base leading-none">{language === 'en' ? '🇮🇳' : '🇬🇧'}</span>
              <span>{language === 'en' ? 'हिंदी' : 'EN'}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white p-1.5 rounded"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks(t).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/90 hover:text-brand-yellow font-heading font-semibold text-sm px-3 py-3 rounded text-left transition-colors duration-200 border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:09702477181"
              className="mt-2 bg-brand-orange text-white font-heading font-bold text-sm px-4 py-3 rounded text-center"
            >
              📞 {t.hero.callNow}: 097024 77181
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
