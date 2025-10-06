import { useState, useEffect } from "react";
import TechGrid from "../components/TechGrid";

// AnimatedSection Component
const AnimatedSection = ({ id, children, containerVariants }) => {
  return (
    <section id={id} className="relative">
      {children}
    </section>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ))}
    </div>
  );
};

// Grid Background Component
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
          animation: "gridMove 20s linear infinite",
        }}
      />
    </div>
  );
};

// Glowing Orb Component
const GlowingOrb = ({ delay = 0 }) => {
  return (
    <div
      className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
      style={{
        background:
          "radial-gradient(circle, var(--color-brand-400-alpha) 0%, transparent 70%)",
        animationDelay: `${delay}s`,
        animationDuration: "4s",
      }}
    />
  );
};

export const Hero = ({ scrollToSection, containerVariants, itemVariants }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Connecting Innovation Across the Asia-Pacific";

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const techItems = [
    {
      icon: "🤖",
      text: "Artificial Intelligence",
      color: "emerald",
      gradient: "from-emerald-400 to-green-600",
    },
    {
      icon: "🔐",
      text: "Cybersecurity",
      color: "cyan",
      gradient: "from-cyan-400 to-brand-600",
    },
    {
      icon: "💼",
      text: "Enterprise Tech",
      color: "blue",
      gradient: "from-brand-400 to-indigo-600",
    },
  ];

  return (
    <AnimatedSection id="hero" containerVariants={containerVariants}>
      <div className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900">
        {/* Animated Background Elements */}
        <GridBackground />
        <FloatingParticles />

        {/* Glowing Orbs */}
        <GlowingOrb delay={0} />
        <div className="absolute top-1/4 right-1/4 transform translate-x-1/2">
          <GlowingOrb delay={2} />
        </div>
        <div className="absolute bottom-1/4 left-1/4">
          <GlowingOrb delay={1} />
        </div>

        {/* Main Content */}
        <div
          className="relative z-10 text-center max-w-6xl mx-auto"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}>
          {/* Logo with Advanced Animation */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-emerald-400 blur-3xl opacity-30 animate-pulse" />
            <div className="relative">
              <div className="w-[22rem] h-[18rem] md:w-[28rem] md:h-[22rem] lg:w-[32rem] lg:h-[15rem] mx-auto relative">
                {/* Logo Container */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 scale-110"
    `}>
                  <div className="relative">
                    {/* Main Logo */}
                    <img
                      src="/brand-logo/nexus-green.svg"
                      alt="Nexus Logo"
                      className="w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] mx-auto relative z-10 drop-shadow-[0_0_30px_rgba(16,185,129,0.8)]"
                    />
                    {/* Horizontal Light Streaks */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] md:w-[28rem] lg:w-[50rem] mx-auto h-1 opacity-100 transition-opacity duration-500">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typewriter Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-12 font-light text-gray-100 min-h-[4rem]">
            <span className="inline-block">
              {typedText}
              <span className="animate-blink ml-1 text-emerald-400">|</span>
            </span>
          </h2>
          {/* Tech Cards with 3D Effect */}
          <TechGrid techItems={techItems} />
          {/* CTA Button with Advanced Effects */}
          <div className="relative inline-block group">
            {/* Button Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-brand-400 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse" />

            {/* Main Button */}
            <button
              onClick={() => scrollToSection("why")}
              className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 px-10 py-5 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-110 group">
              <span className="relative z-10 flex items-center gap-3">
                Discover More
                <svg
                  className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>

              {/* Ripple Effect */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:animate-ping bg-emerald-400/50" />
            </button>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-40px) translateX(-10px); }
            75% { transform: translateY(-20px) translateX(5px); }
          }

          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    </AnimatedSection>
  );
};
