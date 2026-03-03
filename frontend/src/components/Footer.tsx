import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import { SiInstagram, SiFacebook } from 'react-icons/si';
import { type Translations } from '../hooks/useLanguage';

interface FooterProps {
  t: Translations;
}

const navLinks = (t: Translations) => [
  { label: t.nav.about, href: '#about' },
  { label: t.nav.services, href: '#services' },
  { label: t.nav.gallery, href: '#gallery' },
  { label: t.nav.whyUs, href: '#why-us' },
  { label: t.nav.contact, href: '#contact' },
];

export default function Footer({ t }: FooterProps) {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'sai-ekvira-graphics'
  );

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-white">
      {/* CMYK top stripe */}
      <div className="h-1 bg-gradient-to-r from-brand-cyan via-brand-magenta via-brand-yellow to-brand-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-black text-lg">S</span>
              </div>
              <div>
                <div className="font-heading font-black text-white text-xl leading-tight">
                  Sai Ekvira Graphics
                </div>
                <div className="text-brand-yellow font-heading font-semibold text-xs tracking-widest uppercase">
                  Commercial Printing
                </div>
              </div>
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed max-w-xs mb-5">
              {t.footer.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-brand-magenta rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919702477181"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <span className="text-sm">💬</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 pb-2 border-b border-white/10">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {navLinks(t).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-brand-yellow font-body text-sm transition-colors duration-200 text-left"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 pb-2 border-b border-white/10">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/60 font-body text-sm leading-relaxed">
                  Shop No 09, Namrata Heights CHS,<br />
                  Adharwadi, Kalyan West,<br />
                  Mumbai 421301
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href="tel:09702477181"
                  className="text-white/60 hover:text-brand-yellow font-body text-sm transition-colors"
                >
                  097024 77181
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 font-body text-sm">Mon–Sat: 10 AM – 9 PM</p>
                  <p className="text-white/40 font-body text-xs">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 font-body text-xs text-center sm:text-left">
            © {year} Sai Ekvira Graphics. {t.footer.rights}
          </p>
          <p className="text-white/40 font-body text-xs flex items-center gap-1">
            {t.footer.builtWith}{' '}
            <Heart className="w-3 h-3 text-brand-orange inline" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-yellow hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
