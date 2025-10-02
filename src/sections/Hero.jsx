import { useState, useEffect } from "react";

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
          "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
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
      gradient: "from-cyan-400 to-blue-600",
    },
    {
      icon: "💼",
      text: "Enterprise Tech",
      color: "blue",
      gradient: "from-blue-400 to-indigo-600",
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
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              <div className="w-60 h-60 mx-auto relative">
                {/* Rotating Ring */}
                <div className="absolute inset-0 border-4 border-emerald-400/30 rounded-full animate-spin-slow" />
                <div className="absolute inset-4 border-4 border-cyan-400/20 rounded-full animate-spin-reverse" />

                {/* Logo Container */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
                    isHovered ? "scale-110 rotate-12" : "scale-100"
                  }`}>
                  <div className="text-8xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    <img
                      src="/brand-logo/nexus-green.svg"
                      alt="Nexus Logo"
                      className="w-40 h-40 mx-auto"
                    />
                  </div>
                </div>

                {/* Orbiting Dots */}
                {[0, 120, 240].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-emerald-400 rounded-full"
                    style={{
                      animation: `orbit 3s linear infinite`,
                      animationDelay: `${i * 1}s`,
                      transformOrigin: "0 0",
                    }}
                  />
                ))}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-4">
            {techItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative"
                style={{
                  animationDelay: `${idx * 0.2}s`,
                  animation: "slideUp 0.6s ease-out forwards",
                  opacity: 0,
                }}>
                {/* Card Glow */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
                />

                {/* Card Content */}
                <div className="relative bg-gray-900/90 backdrop-blur-xl border border-emerald-400/20 rounded-2xl p-6 hover:border-emerald-400/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                    {item.text}
                  </h3>

                  {/* Animated Line */}
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-500 rounded-full" />

                  {/* Hover Effect Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-${item.color}-400 rounded-full animate-particle`}
                        style={{
                          left: `${20 + i * 15}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button with Advanced Effects */}
          <div className="relative inline-block group">
            {/* Button Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse" />

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

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-scroll" />
            </div>
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

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }

          @keyframes orbit {
            from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes particle {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateY(-50px) scale(0);
              opacity: 0;
            }
          }

          @keyframes scroll {
            0% { opacity: 0; transform: translateY(0); }
            50% { opacity: 1; }
            100% { opacity: 0; transform: translateY(20px); }
          }

          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }

          .animate-spin-reverse {
            animation: spin-reverse 6s linear infinite;
          }

          .animate-blink {
            animation: blink 1s step-end infinite;
          }

          .animate-particle {
            animation: particle 2s ease-out infinite;
          }

          .animate-scroll {
            animation: scroll 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </AnimatedSection>
  );
};
