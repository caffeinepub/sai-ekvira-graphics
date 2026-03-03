import { Phone, MessageCircle, FileText } from 'lucide-react';
import { type Translations } from '../hooks/useLanguage';

interface HeroProps {
  t: Translations;
}

export default function Hero({ t }: HeroProps) {
  const handleGetQuote = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1920x900.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy-dark/85" />

      {/* CMYK Color Accents */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-cyan via-brand-magenta to-brand-yellow opacity-80" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-brand-yellow via-brand-cyan to-brand-magenta opacity-80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-yellow font-heading font-semibold text-xs sm:text-sm px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse-slow" />
          Kalyan West, Mumbai · Est. Since Years
        </div>

        {/* Business Name */}
        <h1 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
          Sai Ekvira{' '}
          <span className="text-brand-orange">Graphics</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/85 font-body text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-3 leading-relaxed">
          {t.hero.tagline}
        </p>

        {/* Sub-tagline */}
        <p className="text-brand-cyan font-heading font-semibold text-sm sm:text-base mb-10 tracking-wide uppercase">
          Your Trusted Commercial Printer in Kalyan West
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <a
            href="tel:09702477181"
            className="flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white font-heading font-bold text-base px-7 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            {t.hero.callNow}
          </a>

          <a
            href="https://wa.me/919702477181"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-heading font-bold text-base px-7 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            {t.hero.whatsappUs}
          </a>

          <button
            onClick={handleGetQuote}
            className="flex items-center gap-2.5 bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-heading font-bold text-base px-7 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <FileText className="w-5 h-5" />
            {t.hero.getQuote}
          </button>
        </div>

        {/* Stats Bar */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '10+', label: 'Years Experience' },
            { value: '1000+', label: 'Projects Done' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-4 px-2"
            >
              <div className="font-heading font-black text-brand-yellow text-2xl sm:text-3xl">
                {stat.value}
              </div>
              <div className="text-white/70 text-xs sm:text-sm font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
        <span className="text-xs font-body">Scroll Down</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
