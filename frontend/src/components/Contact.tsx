import { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import { type Translations } from '../hooks/useLanguage';

interface ContactProps {
  t: Translations;
}

const serviceOptions = [
  'Flex Banner Printing',
  'Digital Printing',
  'Visiting Cards',
  'Brochures & Pamphlets',
  'Poster Printing',
  'Signage & Shop Boards',
  'Vehicle Graphics & Branding',
  'Photo Prints & Wedding Cards',
  'Other',
];

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact({ t }: ContactProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.service) newErrors.service = 'Please select a service';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange font-heading font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
            Get In Touch
          </div>
          <h2 className="section-heading">{t.contact.heading}</h2>
          <p className="section-subheading">{t.contact.subheading}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info + Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-border space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="font-heading font-bold text-navy text-sm mb-1">{t.contact.callUs}</div>
                  <a
                    href="tel:09702477181"
                    className="text-brand-orange hover:text-brand-orange-dark font-heading font-bold text-lg transition-colors"
                  >
                    097024 77181
                  </a>
                  <div className="text-muted-foreground text-xs font-body mt-0.5">
                    Call or WhatsApp anytime
                  </div>
                </div>
              </div>

              <div className="border-t border-border" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-cyan/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <div className="font-heading font-bold text-navy text-sm mb-1">{t.contact.address}</div>
                  <p className="text-foreground/80 font-body text-sm leading-relaxed">
                    Shop No 09, Namrata Heights CHS,<br />
                    Adharwadi, Kalyan West,<br />
                    Mumbai, Maharashtra 421301
                  </p>
                </div>
              </div>

              <div className="border-t border-border" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-yellow/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <div className="font-heading font-bold text-navy text-sm mb-1">{t.contact.hours}</div>
                  <p className="text-foreground/80 font-body text-sm">Mon – Sat: 10:00 AM – 9:00 PM</p>
                  <p className="text-destructive font-body text-sm font-semibold">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Button */}
            <a
              href="https://wa.me/919702477181"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-heading font-bold text-base px-6 py-4 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 w-full"
            >
              <span className="text-2xl">💬</span>
              Chat on WhatsApp
            </a>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-border">
              <iframe
                title="Sai Ekvira Graphics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5!2d73.1234!3d19.2403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7952b5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sAdharwadi%2C%20Kalyan%20West%2C%20Maharashtra%20421301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-card border border-border">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-2xl mb-3">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-muted-foreground font-body text-base max-w-sm">
                    {t.contact.successMessage}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', phone: '', service: '', message: '' });
                    }}
                    className="mt-8 bg-brand-orange text-white font-heading font-bold px-6 py-3 rounded-lg hover:bg-brand-orange-dark transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-heading font-semibold text-navy text-sm mb-1.5">
                        {t.contact.name} <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full border rounded-lg px-4 py-3 font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all ${
                          errors.name ? 'border-destructive' : 'border-border'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-heading font-semibold text-navy text-sm mb-1.5">
                        {t.contact.phone} <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className={`w-full border rounded-lg px-4 py-3 font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all ${
                          errors.phone ? 'border-destructive' : 'border-border'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block font-heading font-semibold text-navy text-sm mb-1.5">
                      {t.contact.serviceType} <span className="text-destructive">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`w-full border rounded-lg px-4 py-3 font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all appearance-none cursor-pointer ${
                        errors.service ? 'border-destructive' : 'border-border'
                      }`}
                    >
                      <option value="">{t.contact.selectService}</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-destructive text-xs mt-1 font-body">{errors.service}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-heading font-semibold text-navy text-sm mb-1.5">
                      {t.contact.message} <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your printing requirements, quantity, size, etc."
                      className={`w-full border rounded-lg px-4 py-3 font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all resize-none ${
                        errors.message ? 'border-destructive' : 'border-border'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-heading font-bold text-base px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Send className="w-5 h-5" />
                    {t.contact.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
