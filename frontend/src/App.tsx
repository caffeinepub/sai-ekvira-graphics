import { useLanguage } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar language={language} toggleLanguage={toggleLanguage} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Gallery t={t} />
        <WhyChooseUs t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <FloatingWhatsApp />
    </div>
  );
}
