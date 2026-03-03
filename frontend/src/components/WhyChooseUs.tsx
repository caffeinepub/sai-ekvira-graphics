import { Shield, Cpu, Zap, Tag, Heart, MapPin } from 'lucide-react';
import { type Translations } from '../hooks/useLanguage';

interface WhyChooseUsProps {
  t: Translations;
}

const features = [
  {
    icon: Shield,
    title: 'High-Quality Prints',
    titleHi: 'उच्च गुणवत्ता प्रिंट',
    description: 'We use premium inks and materials to ensure every print is sharp, vibrant, and long-lasting.',
    accent: 'brand-cyan',
    iconBg: 'bg-brand-cyan/15',
    iconColor: 'text-brand-cyan',
    borderColor: 'border-brand-cyan/30',
  },
  {
    icon: Cpu,
    title: 'Latest Printing Machines',
    titleHi: 'नवीनतम प्रिंटिंग मशीनें',
    description: 'State-of-the-art digital and offset printing equipment for flawless output every time.',
    accent: 'brand-magenta',
    iconBg: 'bg-brand-magenta/15',
    iconColor: 'text-brand-magenta',
    borderColor: 'border-brand-magenta/30',
  },
  {
    icon: Zap,
    title: 'Quick Turnaround & Delivery',
    titleHi: 'त्वरित डिलीवरी',
    description: 'Same-day and next-day delivery options available for urgent printing requirements.',
    accent: 'brand-yellow',
    iconBg: 'bg-brand-yellow/15',
    iconColor: 'text-brand-yellow',
    borderColor: 'border-brand-yellow/30',
  },
  {
    icon: Tag,
    title: 'Competitive & Affordable Prices',
    titleHi: 'किफायती कीमतें',
    description: 'Best-in-class pricing for individuals, small businesses, and bulk corporate orders.',
    accent: 'brand-orange',
    iconBg: 'bg-brand-orange/15',
    iconColor: 'text-brand-orange',
    borderColor: 'border-brand-orange/30',
  },
  {
    icon: Heart,
    title: '100% Customer Satisfaction',
    titleHi: '100% ग्राहक संतुष्टि',
    description: 'We go the extra mile to ensure every customer is delighted with their final product.',
    accent: 'brand-cyan',
    iconBg: 'bg-brand-cyan/15',
    iconColor: 'text-brand-cyan',
    borderColor: 'border-brand-cyan/30',
  },
  {
    icon: MapPin,
    title: 'Trusted Local Shop in Kalyan West',
    titleHi: 'कल्याण वेस्ट में विश्वसनीय दुकान',
    description: 'Proudly serving Kalyan, Dombivli & Mumbai for over a decade with a loyal customer base.',
    accent: 'brand-magenta',
    iconBg: 'bg-brand-magenta/15',
    iconColor: 'text-brand-magenta',
    borderColor: 'border-brand-magenta/30',
  },
];

export default function WhyChooseUs({ t }: WhyChooseUsProps) {
  return (
    <section id="why-us" className="py-20 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-cyan/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full translate-x-1/3 translate-y-1/3" />

      {/* CMYK stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-magenta via-brand-yellow to-brand-orange" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 text-brand-yellow font-heading font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
            Our Advantages
          </div>
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-3">
            {t.whyUs.heading}
          </h2>
          <p className="text-white/60 font-body text-base md:text-lg max-w-2xl mx-auto">
            {t.whyUs.subheading}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group bg-white/5 hover:bg-white/10 border ${feature.borderColor} rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-white/70 font-body text-base mb-6">
            Ready to experience the difference? Get in touch today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:09702477181"
              className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-heading font-bold text-base px-7 py-3.5 rounded-lg transition-all duration-200"
            >
              📞 Call: 097024 77181
            </a>
            <a
              href="https://wa.me/919702477181"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-heading font-bold text-base px-7 py-3.5 rounded-lg transition-all duration-200"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
