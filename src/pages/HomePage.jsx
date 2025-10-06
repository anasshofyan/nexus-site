import { motion, useScroll, useTransform } from "framer-motion";
import { TechParticleField } from "../components/TechParticleField";
import { AdvancedNavbar } from "../components/AdvancedNavbar";
import { useState } from "react";
import { Hero } from "../sections/Hero";
import { WhySponsor } from "../sections/WhySponsor";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const whyReasons = [
  {
    icon: "🎯",
    title: "Targeted Audience",
    desc: "Gain direct access to 200 Chief, Director, Head, and Lead-level prospects in every city.",
  },
  {
    icon: "📊",
    title: "Maximized ROI",
    desc: "Move beyond brand awareness to generate qualified leads, close deals, and build relationships in a high-intensity environment.",
  },
  {
    icon: "🌏",
    title: "Regional Dominance",
    desc: "Build your brand presence across multiple key APAC markets in a single, coordinated campaign.",
  },
  {
    icon: "✅",
    title: "Quality Over Quantity",
    desc: "Our curated matchmaking ensures your time is spent with the right people who have real budget and authority.",
  },
];

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
    <main className="bg-gradient-to-br from-brand via-brand-600 to-tech-green-500 text-white min-h-screen relative overflow-hidden">
      <TechParticleField />
      <AdvancedNavbar scrollToSection={scrollToSection} />
      <Hero />
      <WhySponsor itemVariants={itemVariants} whyReasons={whyReasons} />
    </main>
  );
};
