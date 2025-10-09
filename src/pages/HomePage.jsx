/* eslint-disable no-undef */
import { useState } from "react";

import { TechParticleField } from "../components/TechParticleField";
import { AdvancedNavbar } from "../components/AdvancedNavbar";
import { HeroSection } from "../sections/HeroSection";
import WhySponsorSection from "../sections/WhySponsorSection";
import AudienceSection from "../sections/AudienceSection";
import EventFormatSection from "../sections/EventFotmatSection";
import PackagesSection from "../sections/PackagesSection";
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
      <WhySponsorSection />
      <AudienceSection />
      <EventFormatSection />
      <PackagesSection />
      <ToursSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};
