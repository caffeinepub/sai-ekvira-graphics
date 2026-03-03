import { type Translations } from '../hooks/useLanguage';

interface ServicesProps {
  t: Translations;
}

const services = [
  {
    icon: '🖨️',
    name: 'Flex Banner Printing',
    nameHi: 'फ्लेक्स बैनर प्रिंटिंग',
    description: 'High-resolution flex banners for shops, events & promotions.',
    color: 'brand-cyan',
    bgClass: 'bg-brand-cyan/10',
    borderClass: 'border-brand-cyan/30',
    hoverClass: 'hover:border-brand-cyan hover:bg-brand-cyan/15',
    iconBg: 'bg-brand-cyan/20',
  },
  {
    icon: '🖥️',
    name: 'Digital Printing',
    nameHi: 'डिजिटल प्रिंटिंग',
    description: 'Vibrant digital prints on paper, vinyl, canvas & more.',
    color: 'brand-magenta',
    bgClass: 'bg-brand-magenta/10',
    borderClass: 'border-brand-magenta/30',
    hoverClass: 'hover:border-brand-magenta hover:bg-brand-magenta/15',
    iconBg: 'bg-brand-magenta/20',
  },
  {
    icon: '💼',
    name: 'Visiting Cards',
    nameHi: 'विजिटिंग कार्ड',
    description: 'Premium matte, glossy & UV-coated business cards.',
    color: 'brand-orange',
    bgClass: 'bg-brand-orange/10',
    borderClass: 'border-brand-orange/30',
    hoverClass: 'hover:border-brand-orange hover:bg-brand-orange/15',
    iconBg: 'bg-brand-orange/20',
  },
  {
    icon: '📄',
    name: 'Brochures & Pamphlets',
    nameHi: 'ब्रोशर और पैम्फलेट',
    description: 'Tri-fold, bi-fold & custom brochures for your business.',
    color: 'brand-yellow',
    bgClass: 'bg-brand-yellow/10',
    borderClass: 'border-brand-yellow/30',
    hoverClass: 'hover:border-brand-yellow hover:bg-brand-yellow/15',
    iconBg: 'bg-brand-yellow/20',
  },
  {
    icon: '🎨',
    name: 'Poster Printing',
    nameHi: 'पोस्टर प्रिंटिंग',
    description: 'Eye-catching A3/A2/A1 posters for events & advertising.',
    color: 'brand-cyan',
    bgClass: 'bg-brand-cyan/10',
    borderClass: 'border-brand-cyan/30',
    hoverClass: 'hover:border-brand-cyan hover:bg-brand-cyan/15',
    iconBg: 'bg-brand-cyan/20',
  },
  {
    icon: '🏪',
    name: 'Signage & Shop Boards',
    nameHi: 'साइनेज और शॉप बोर्ड',
    description: 'Illuminated & non-lit signboards for shops & offices.',
    color: 'brand-magenta',
    bgClass: 'bg-brand-magenta/10',
    borderClass: 'border-brand-magenta/30',
    hoverClass: 'hover:border-brand-magenta hover:bg-brand-magenta/15',
    iconBg: 'bg-brand-magenta/20',
  },
  {
    icon: '🚗',
    name: 'Vehicle Graphics & Branding',
    nameHi: 'वाहन ग्राफिक्स और ब्रांडिंग',
    description: 'Full-body wraps, decals & fleet branding solutions.',
    color: 'brand-orange',
    bgClass: 'bg-brand-orange/10',
    borderClass: 'border-brand-orange/30',
    hoverClass: 'hover:border-brand-orange hover:bg-brand-orange/15',
    iconBg: 'bg-brand-orange/20',
  },
  {
    icon: '💒',
    name: 'Photo Prints & Wedding Cards',
    nameHi: 'फोटो प्रिंट और शादी के कार्ड',
    description: 'Elegant wedding invitations & high-quality photo prints.',
    color: 'brand-yellow',
    bgClass: 'bg-brand-yellow/10',
    borderClass: 'border-brand-yellow/30',
    hoverClass: 'hover:border-brand-yellow hover:bg-brand-yellow/15',
    iconBg: 'bg-brand-yellow/20',
  },
];

export default function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-navy/10 text-navy font-heading font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-navy rounded-full" />
            What We Offer
          </div>
          <h2 className="section-heading">{t.services.heading}</h2>
          <p className="section-subheading">{t.services.subheading}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.name}
              className={`group bg-white rounded-2xl p-6 border-2 ${service.borderClass} ${service.hoverClass} transition-all duration-300 shadow-card hover:shadow-card-hover cursor-default`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Name */}
              <h3 className="font-heading font-bold text-navy text-base mb-2 leading-tight">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/919702477181"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-heading font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            💬 Enquire About a Service
          </a>
        </div>
      </div>
    </section>
  );
}
