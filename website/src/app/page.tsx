import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
