import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { type Translations } from '../hooks/useLanguage';

interface GalleryProps {
  t: Translations;
}

const galleryItems = [
  {
    src: '/assets/generated/gallery-flex-banner.dim_800x600.jpg',
    alt: 'Flex Banner Printing',
    label: 'Flex Banner',
  },
  {
    src: '/assets/generated/gallery-visiting-cards.dim_800x600.jpg',
    alt: 'Premium Visiting Cards',
    label: 'Visiting Cards',
  },
  {
    src: '/assets/generated/gallery-wedding-card.dim_800x600.jpg',
    alt: 'Elegant Wedding Card',
    label: 'Wedding Cards',
  },
  {
    src: '/assets/generated/gallery-brochure.dim_800x600.jpg',
    alt: 'Colorful Brochure',
    label: 'Brochures',
  },
  {
    src: '/assets/generated/gallery-hoarding.dim_800x600.jpg',
    alt: 'Large Outdoor Hoarding',
    label: 'Hoardings',
  },
  {
    src: '/assets/generated/gallery-vehicle-branding.dim_800x600.jpg',
    alt: 'Vehicle Branding Wrap',
    label: 'Vehicle Branding',
  },
  {
    src: '/assets/generated/gallery-signage.dim_800x600.jpg',
    alt: 'Shop Signage Board',
    label: 'Signage',
  },
  {
    src: '/assets/generated/gallery-posters.dim_800x600.jpg',
    alt: 'Colorful Poster Prints',
    label: 'Posters',
  },
];

export default function Gallery({ t }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-magenta/10 text-brand-magenta font-heading font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-brand-magenta rounded-full" />
            Our Work
          </div>
          <h2 className="section-heading">{t.gallery.heading}</h2>
          <p className="section-subheading">{t.gallery.subheading}</p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 ${
                index === 0 || index === 4 ? 'sm:col-span-2 sm:row-span-1' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <ZoomIn className="w-8 h-8 text-white" />
                  <span className="text-white font-heading font-bold text-sm">{item.label}</span>
                </div>
              </div>
              {/* Label badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent px-3 py-3">
                <span className="text-white font-heading font-semibold text-xs">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-brand-yellow transition-colors font-heading font-bold flex items-center gap-2"
            >
              <X className="w-6 h-6" />
              {t.gallery.close}
            </button>

            {/* Image */}
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />

            {/* Caption */}
            <div className="text-center mt-4">
              <span className="text-white font-heading font-bold text-lg">
                {galleryItems[lightboxIndex].label}
              </span>
              <span className="text-white/50 font-body text-sm ml-3">
                {lightboxIndex + 1} / {galleryItems.length}
              </span>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
              <button
                onClick={goPrev}
                className="pointer-events-auto bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                className="pointer-events-auto bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
