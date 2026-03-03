import { useState } from 'react';

export type Language = 'en' | 'hi';

export interface Translations {
  nav: {
    about: string;
    services: string;
    gallery: string;
    whyUs: string;
    contact: string;
  };
  hero: {
    tagline: string;
    callNow: string;
    whatsappUs: string;
    getQuote: string;
  };
  about: {
    heading: string;
    subheading: string;
    description: string;
    hoursTitle: string;
    addressTitle: string;
    hours: string;
    sunday: string;
  };
  services: {
    heading: string;
    subheading: string;
  };
  gallery: {
    heading: string;
    subheading: string;
    close: string;
  };
  whyUs: {
    heading: string;
    subheading: string;
  };
  contact: {
    heading: string;
    subheading: string;
    name: string;
    phone: string;
    serviceType: string;
    message: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    callUs: string;
    address: string;
    hours: string;
    selectService: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactInfo: string;
    rights: string;
    builtWith: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      whyUs: 'Why Us',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Quality Printing Solutions in Kalyan – Fast, Affordable & Reliable',
      callNow: 'Call Now',
      whatsappUs: 'WhatsApp Us',
      getQuote: 'Get Quote',
    },
    about: {
      heading: 'About Us',
      subheading: 'Your Trusted Printing Partner in Kalyan West',
      description:
        'Leading commercial printing service in Kalyan offering top-quality digital & offset printing, banner printing, flex printing, visiting cards, pamphlets, wedding invitations, and custom branding solutions with fast turnaround and affordable prices. We are committed to delivering excellence with every print, serving businesses and individuals across Kalyan, Dombivli, and the greater Mumbai region.',
      hoursTitle: 'Business Hours',
      addressTitle: 'Our Location',
      hours: 'Monday – Saturday: 10:00 AM – 9:00 PM',
      sunday: 'Sunday: Closed',
    },
    services: {
      heading: 'Our Services',
      subheading: 'Comprehensive printing solutions for every need — from business cards to large-format hoardings.',
    },
    gallery: {
      heading: 'Gallery',
      subheading: 'A showcase of our finest print work — quality you can see.',
      close: 'Close',
    },
    whyUs: {
      heading: 'Why Choose Sai Ekvira Graphics?',
      subheading: 'We combine cutting-edge technology with local expertise to deliver prints that stand out.',
    },
    contact: {
      heading: 'Contact Us',
      subheading: 'Get in touch for a free quote or any enquiry. We respond quickly!',
      name: 'Your Name',
      phone: 'Phone Number',
      serviceType: 'Service Type',
      message: 'Your Message',
      submit: 'Send Message',
      successTitle: 'Message Sent!',
      successMessage: 'Thank you for reaching out. We will contact you shortly.',
      callUs: 'Call / WhatsApp',
      address: 'Our Address',
      hours: 'Business Hours',
      selectService: 'Select a service',
    },
    footer: {
      tagline: 'Quality Printing Solutions in Kalyan – Fast, Affordable & Reliable',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      rights: 'All Rights Reserved.',
      builtWith: 'Built with',
    },
  },
  hi: {
    nav: {
      about: 'हमारे बारे में',
      services: 'हमारी सेवाएं',
      gallery: 'गैलरी',
      whyUs: 'हमें क्यों चुनें',
      contact: 'संपर्क करें',
    },
    hero: {
      tagline: 'कल्याण में गुणवत्तापूर्ण प्रिंटिंग – तेज़, किफायती और विश्वसनीय',
      callNow: 'अभी कॉल करें',
      whatsappUs: 'व्हाट्सएप करें',
      getQuote: 'कोटेशन लें',
    },
    about: {
      heading: 'हमारे बारे में',
      subheading: 'कल्याण वेस्ट में आपका विश्वसनीय प्रिंटिंग पार्टनर',
      description:
        'कल्याण में अग्रणी व्यावसायिक प्रिंटिंग सेवा, जो उच्च गुणवत्ता वाली डिजिटल और ऑफसेट प्रिंटिंग, बैनर प्रिंटिंग, फ्लेक्स प्रिंटिंग, विजिटिंग कार्ड, पैम्फलेट, शादी के निमंत्रण और कस्टम ब्रांडिंग समाधान प्रदान करती है।',
      hoursTitle: 'व्यापार के घंटे',
      addressTitle: 'हमारा स्थान',
      hours: 'सोमवार – शनिवार: सुबह 10:00 – रात 9:00',
      sunday: 'रविवार: बंद',
    },
    services: {
      heading: 'हमारी सेवाएं',
      subheading: 'हर ज़रूरत के लिए व्यापक प्रिंटिंग समाधान।',
    },
    gallery: {
      heading: 'गैलरी',
      subheading: 'हमारे बेहतरीन प्रिंट कार्य की झलक।',
      close: 'बंद करें',
    },
    whyUs: {
      heading: 'साई एकवीरा ग्राफिक्स को क्यों चुनें?',
      subheading: 'हम अत्याधुनिक तकनीक और स्थानीय विशेषज्ञता को मिलाकर बेहतरीन प्रिंट देते हैं।',
    },
    contact: {
      heading: 'संपर्क करें',
      subheading: 'मुफ्त कोटेशन या किसी भी जानकारी के लिए संपर्क करें।',
      name: 'आपका नाम',
      phone: 'फोन नंबर',
      serviceType: 'सेवा का प्रकार',
      message: 'आपका संदेश',
      submit: 'संदेश भेजें',
      successTitle: 'संदेश भेजा गया!',
      successMessage: 'संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।',
      callUs: 'कॉल / व्हाट्सएप',
      address: 'हमारा पता',
      hours: 'व्यापार के घंटे',
      selectService: 'सेवा चुनें',
    },
    footer: {
      tagline: 'कल्याण में गुणवत्तापूर्ण प्रिंटिंग – तेज़, किफायती और विश्वसनीय',
      quickLinks: 'त्वरित लिंक',
      contactInfo: 'संपर्क जानकारी',
      rights: 'सर्वाधिकार सुरक्षित।',
      builtWith: 'के साथ बनाया गया',
    },
  },
};

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = translations[language];

  return { language, toggleLanguage, t };
}
