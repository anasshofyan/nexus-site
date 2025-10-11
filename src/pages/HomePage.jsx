/* eslint-disable no-undef */
import { useState } from "react";

import { TechParticleField } from "../components/TechParticleField";
import { AdvancedNavbar } from "../components/AdvancedNavbar";
import { HeroSection } from "../sections/HeroSection";
import WhySponsorSection from "../sections/WhySponsorSection";
import AudienceSection from "../sections/AudienceSection";
import { EventFormatsSection } from "../sections/EventFormatsSection";
import { SponsorsSection } from "../sections/SponsorsSection";
import ToursSection from "../sections/ToursSection";
import ContactSection from "../sections/ContactSections";
import { FooterSection } from "../sections/FooterSection";

export const HomePage = () => {
  const [, setIsMenuOpen] = useState(false);

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
      <SponsorsSection />
      <WhySponsorSection />
      <ToursSection />
      <AudienceSection />
      <EventFormatsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};
