import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';
import { type Translations } from '../hooks/useLanguage';

interface AboutProps {
  t: Translations;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange font-heading font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
            Who We Are
          </div>
          <h2 className="section-heading">{t.about.heading}</h2>
          <p className="section-subheading">{t.about.subheading}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/generated/about-printer-machine.dim_900x600.jpg"
                alt="Modern printing machine at Sai Ekvira Graphics"
                className="w-full h-80 lg:h-96 object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-navy/90 backdrop-blur-sm text-white rounded-xl px-4 py-3">
                <div className="font-heading font-bold text-brand-yellow text-lg">10+ Years</div>
                <div className="text-white/80 text-xs font-body">of Printing Excellence</div>
              </div>
            </div>
            {/* Decorative CMYK dots */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-brand-cyan/20 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-brand-orange/20 -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-foreground/80 font-body text-base leading-relaxed">
              {t.about.description}
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Digital & Offset Printing',
                'Flex & Banner Printing',
                'Visiting Cards & Brochures',
                'Wedding Invitations',
                'Signage & Hoardings',
                'Vehicle Branding',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span className="text-sm font-body text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Hours */}
              <div className="bg-muted rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span className="font-heading font-bold text-navy text-sm">{t.about.hoursTitle}</span>
                </div>
                <p className="text-sm font-body text-foreground/80">{t.about.hours}</p>
                <p className="text-sm font-body text-destructive font-semibold mt-1">{t.about.sunday}</p>
              </div>

              {/* Address */}
              <div className="bg-muted rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span className="font-heading font-bold text-navy text-sm">{t.about.addressTitle}</span>
                </div>
                <p className="text-sm font-body text-foreground/80 leading-relaxed">
                  Shop No 09, Namrata Heights CHS,<br />
                  Adharwadi, Kalyan West,<br />
                  Mumbai, Maharashtra 421301
                </p>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:09702477181"
              className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-dark font-heading font-bold text-base transition-colors"
            >
              <Phone className="w-5 h-5" />
              097024 77181
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
