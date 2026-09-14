import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ContactSection } from '@/features/landing/sections/ContactSection';
import { HeroSection } from '@/features/landing/sections/HeroSection';
import { ProcessSection } from '@/features/landing/sections/ProcessSection';
import { ProjectsSection } from '@/features/landing/sections/ProjectsSection';
import { ServicesSection } from '@/features/landing/sections/ServicesSection';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
