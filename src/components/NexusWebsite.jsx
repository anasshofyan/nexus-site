import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import * as THREE from "three";
import { TechParticleField } from "./TechParticleField";

// AnimatedSection dipisah agar lebih reusable dan tidak membuat ulang varian di setiap render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const AnimatedSection = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative z-10">
      {children}
    </motion.section>
  );
};

const NexusWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const scrollYProgress = useTransform(scrollY, [0, 300], [0, 1]);
  const navBackground = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(30, 58, 138, 0)", "rgba(30, 58, 138, 0.95)"]
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
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

  const packages = [
    {
      name: "PLATINUM",
      price: "$10,000",
      color: "from-slate-300 to-slate-100",
      textColor: "text-slate-900",
      features: [
        "1 Premium Exhibition Booth",
        "1 Dedicated Demo Session on the main demo stage",
        "1 Speaking Slot",
        "Company logo on all event branding",
        "Full list of attendee contacts",
        "5 complimentary Staff passes",
      ],
    },
    {
      name: "GOLD",
      price: "$6,000",
      color: "from-amber-400 to-amber-200",
      textColor: "text-amber-950",
      features: [
        "1 Basic Exhibition Booth",
        "1 Dedicated Demo Session on the main demo stage",
        "Company logo on all event branding and sponsor page",
        "3 complimentary Staff passes",
      ],
    },
    {
      name: "SILVER",
      price: "$3,000",
      color: "from-zinc-400 to-zinc-200",
      textColor: "text-zinc-900",
      features: [
        "1 Basic Exhibition Booth",
        "Company logo on event signage and sponsor page",
        "2 complimentary Staff passes",
      ],
    },
  ];

  const tourCities = [
    { city: "Jakarta", date: "February 4, 2026" },
    { city: "Singapore", date: "March 11, 2026" },
    { city: "Manila", date: "April 9, 2026" },
    { city: "Ho Chi Minh", date: "May 6, 2026" },
    { city: "Malaysia", date: "June 10, 2026" },
    { city: "Shenzhen", date: "July 10, 2026" },
  ];

  return (
    <div className="bg-gradient-to-br from-brand via-brand-600 to-tech-green-500 text-white min-h-screen relative overflow-hidden">
      <TechParticleField />

      {/* Navigation */}
      <motion.nav
        style={{ backgroundColor: navBackground }}
        className="fixed w-full z-50 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center space-x-3">
              <div className="text-2xl md:text-3xl font-bold tracking-wider">
                <span className="text-emerald-400">N≡XUS</span>
              </div>
              <span className="hidden md:block text-xs text-gray-300">
                By TEH GROUP
              </span>
            </motion.div>

            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["Why", "Audience", "Format", "Packages", "Tour", "Contact"].map(
                (item, idx) => (
                  <motion.button
                    key={item}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1, color: "#10b981" }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm font-medium hover:text-emerald-400 transition-colors">
                    {item}
                  </motion.button>
                )
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-[#1e3a8a]/95 backdrop-blur-md">
            <div className="px-4 pt-2 pb-4 space-y-3">
              {["Why", "Audience", "Format", "Packages", "Tour", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 hover:text-emerald-400 transition-colors">
                    {item}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero */}
      <AnimatedSection id="hero">
        <div className="min-h-screen flex items-center justify-center pt-20 px-4">
          <div className="text-center z-10">
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6">
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px #10b981",
                    "0 0 40px #10b981",
                    "0 0 20px #10b981",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-emerald-400">
                N≡XUS
              </motion.span>
            </motion.h1>

            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl sm:text-3xl md:text-4xl mb-8 font-light">
              Connecting Innovation Across the Asia-Pacific
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                {
                  text: "🤖 Artificial Intelligence",
                  color:
                    "border-emerald-400/40 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]",
                },
                {
                  text: "🔐 Cybersecurity",
                  color:
                    "border-cyan-400/40 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
                },
                {
                  text: "💼 Enterprise Tech",
                  color:
                    "border-brand-400/40 hover:border-brand-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className={`bg-brand-900/50 backdrop-blur-sm px-6 py-3 rounded-lg border-2 ${item.color} cursor-pointer transition-all duration-300`}>
                  <span className="text-lg md:text-xl font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 40px rgba(16, 185, 129, 0.6)",
              }}
              onClick={() => scrollToSection("why")}
              className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all">
              Discover More
            </motion.button>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Sponsor */}
      <AnimatedSection id="why">
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-400">
              Why Sponsor Nexus?
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {whyReasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 60px rgba(16, 185, 129, 0.3)",
                  }}
                  className="bg-brand-900/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-emerald-400/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <div className="text-5xl mb-4">{reason.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                    {reason.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Audience */}
      <AnimatedSection id="audience">
        <div className="py-20 px-4 bg-[#1e3a8a]/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-400">
              Target Audience
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  icon: "👔",
                  title: "C-Level Executive",
                  desc: "CTO, CIO, CISO, CSO, CDO",
                },
                {
                  icon: "👥",
                  title: "Director & Head of Department",
                  desc: "AI, Cybersecurity, Enterprise Technology, IT, Digital Transformation, Innovation",
                },
                {
                  icon: "✅",
                  title: "Decision-maker",
                  desc: "Actively looking for AI, Cybersecurity, and Enterprise Technology Solution",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    x: 10,
                    boxShadow: "0 10px 40px rgba(16, 185, 129, 0.3)",
                  }}
                  className="bg-gradient-to-r from-brand-900/50 to-teal-700/50 p-8 rounded-2xl border-2 border-emerald-400/30 hover:border-emerald-400/60 cursor-pointer transition-all backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="text-2xl font-bold text-emerald-400">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-200 text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Format */}
      <AnimatedSection id="format">
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-400">
              The Event Format
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                "Conference",
                "Meetings",
                "Workshop",
                "Demo Zones",
                "Exhibition",
              ].map((format, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    boxShadow: "0 15px 40px rgba(16, 185, 129, 0.4)",
                  }}
                  className="bg-brand-900/40 backdrop-blur-sm p-6 rounded-xl text-center border-2 border-emerald-400/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <div className="text-4xl mb-3">
                    {["🎤", "🤝", "🎓", "💡", "🏢"][idx]}
                  </div>
                  <h3 className="font-semibold text-lg">{format}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Packages */}
      <AnimatedSection id="packages">
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-400">
              Secure Your Spot
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`bg-gradient-to-br ${pkg.color} ${pkg.textColor} rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all`}>
                  <h3 className="text-3xl font-bold mb-2">
                    {pkg.name} SPONSOR
                  </h3>
                  <p className="text-4xl font-bold mb-6">
                    {pkg.price}
                    <span className="text-2xl">USD</span>
                  </p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <ChevronRight
                          className="flex-shrink-0 mt-1"
                          size={20}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tour */}
      <AnimatedSection id="tour">
        <div className="py-20 px-4 bg-[#1e3a8a]/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center mb-4 text-emerald-400">
              Join Us in Shaping the Future
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-2xl text-center mb-16 text-gray-200">
              APAC Tech Tour
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tourCities.map((location, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 50px rgba(16, 185, 129, 0.3)",
                  }}
                  className="bg-gradient-to-br from-brand-900/60 to-teal-700/60 rounded-2xl p-8 border-2 border-emerald-400/20 hover:border-emerald-400/60 cursor-pointer transition-all backdrop-blur-sm">
                  <h3 className="text-3xl font-bold mb-2 text-emerald-400">
                    {location.city}
                  </h3>
                  <p className="text-xl text-gray-200 flex items-center gap-2">
                    <Calendar size={20} />
                    {location.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection id="contact">
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-400">
              Contact Us Now!
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Jeffrey TEH",
                  location: "Hong Kong",
                  email: "Jeffrey.Teh@thetehgroup.com",
                  phone: "+852 68019775",
                },
                {
                  name: "Kennith Ng",
                  location: "Hong Kong",
                  email: "Kennith@thetehgroup.com",
                  phone: "+852 6109 8485",
                },
                {
                  name: "Zen Lai",
                  location: "Hong Kong",
                  email: "zen@thetehgroup.com",
                  phone: "+852 5623 2015",
                },
                {
                  name: "Johnny Chan",
                  location: "Hong Kong",
                  email: "johnny@thetehgroup.com",
                  phone: "+852 5611 4851",
                },
                {
                  name: "Harris Mak",
                  location: "Hong Kong",
                  email: "harris@thetehgroup.com",
                  phone: "+852 6778 2788",
                },
                {
                  name: "Nick Jim",
                  location: "Hong Kong",
                  email: "Nick.jim@thetehgroup.com",
                  phone: "+852 67741127",
                },
              ].map((contact, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#10b981",
                    boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
                  }}
                  className="bg-brand-900/40 backdrop-blur-sm p-6 rounded-xl border-2 border-emerald-400/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <h3 className="text-xl font-bold mb-2 text-emerald-400">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-gray-200 mb-3 flex items-center gap-2">
                    <MapPin size={16} />
                    {contact.location}
                  </p>
                  <p className="text-sm text-gray-200 mb-2 flex items-center gap-2">
                    <Mail size={16} />
                    {contact.email}
                  </p>
                  {contact.phone && (
                    <p className="text-sm text-gray-200 flex items-center gap-2">
                      <Phone size={16} />
                      {contact.phone}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-12 text-center">
              <p className="text-xl mb-4">Follow us:</p>
              <p className="text-emerald-400 font-semibold">
                #AINexusAPAC #AISponsor #Cybersecurity #EnterpriseTech
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-[#1e3a8a] py-8 px-4 relative z-10 border-t-2 border-emerald-400/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300">
            © 2026 NEXUS by TEH GROUP. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default NexusWebsite;
