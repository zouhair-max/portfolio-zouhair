import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/sections/HeroSection';
import { InfoGrid } from '@/sections/InfoGrid';
import { AboutSection } from '@/sections/AboutSection';
import { StatsSection } from '@/sections/StatsSection';
import { ShowcaseText } from '@/sections/ShowcaseText';
import { WorksSection } from '@/sections/WorksSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { FAQSection } from '@/sections/FAQSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <main>
        <HeroSection />
        <InfoGrid />
        <AboutSection />
        <StatsSection />
        <ShowcaseText />
        <WorksSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
