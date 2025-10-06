import { useScroll } from "framer-motion";
import { TechParticleField } from "../components/TechParticleField";
import { AdvancedNavbar } from "../components/AdvancedNavbar";
import { useState } from "react";
import { HeroSection } from "../sections/HeroSection";
import WhySponsorSection from "../sections/WhySponsorSection";
import AudienceSection from "../sections/AudienceSection";

export const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <main
      className="
   bg-gradient-to-br from-brand-800 via-tech-green-900 to-brand-800 text-white min-h-screen relative overflow-hidden">
      <TechParticleField />
      <AdvancedNavbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <WhySponsorSection />
      <AudienceSection />
    </main>
  );
};
