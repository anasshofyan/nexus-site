import { motion, useScroll, useTransform } from "framer-motion";
import { TechParticleField } from "../components/TechParticleField";
import { AdvancedNavbar } from "../components/AdvancedNavbar";
import { useState } from "react";
import { Hero } from "../sections/Hero";
import WhySponsorSection from "../sections/WhySponsor";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

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
      <Hero scrollToSection={scrollToSection} />
      <WhySponsorSection />
    </main>
  );
};
