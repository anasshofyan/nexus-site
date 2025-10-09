/* eslint-disable no-undef */
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

// Three.js Footer Background
const ThreeFooterBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Wave particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const posArray = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i + 1] = (Math.random() - 0.5) * 3;
      posArray[i + 2] = (Math.random() - 0.5) * 10;

      colors[i] = 0.06 + Math.random() * 0.2;
      colors[i + 1] = 0.73 + Math.random() * 0.1;
      colors[i + 2] = 0.51 + Math.random() * 0.2;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Animated grid
    const gridSize = 20;
    const gridGeometry = new THREE.PlaneGeometry(10, 10, gridSize, gridSize);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.rotation.x = -Math.PI / 2;
    grid.position.y = -1;
    scene.add(grid);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      const positions = particlesGeometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] = Math.sin(positions[i - 1] * 0.5 + time) * 0.5;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      const gridPositions = gridGeometry.attributes.position.array;
      for (let i = 0; i < gridPositions.length; i += 3) {
        const x = gridPositions[i];
        const y = gridPositions[i + 1];
        gridPositions[i + 2] =
          Math.sin(x * 0.5 + time) * 0.3 + Math.cos(y * 0.5 + time) * 0.3;
      }
      gridGeometry.attributes.position.needsUpdate = true;

      particlesMesh.rotation.y += 0.0005;
      grid.rotation.z += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 pointer-events-none" />
  );
};

// Social Link Component
const SocialLink = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800/50 border border-emerald-400/20 hover:border-emerald-400 transition-all duration-500 hover:scale-110"
      aria-label={label}>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
      <span className="relative text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
        {icon}
      </span>

      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 border border-emerald-400/30 rounded-lg text-xs text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
        {label}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-b border-emerald-400/30 rotate-45" />
      </div>
    </a>
  );
};

// Newsletter Component
const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = () => {
    if (email) {
      console.log("Newsletter signup:", email);
      setEmail("");
    }
  };

  return (
    <div className="relative">
      <div
        className={`relative transition-all duration-500 ${
          focused ? "scale-105" : ""
        }`}>
        <div
          className={`absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur opacity-0 ${
            focused ? "opacity-50" : ""
          } transition-opacity duration-500`}
        />

        <div className="relative flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 bg-gray-800/80 border border-emerald-400/30 rounded-l-full text-gray-100 placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors duration-300"
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 rounded-r-full font-semibold text-gray-900 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            Subscribe
            <svg
              className="w-4 h-4"
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
          </button>
        </div>
      </div>
    </div>
  );
};

// Footer Link
const FooterLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="group relative inline-block text-gray-400 hover:text-emerald-400 transition-colors duration-300">
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-500" />
      </span>
    </a>
  );
};

export const AdvancedFooter = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const footerSections = [
    {
      title: "Event",
      links: [
        { text: "About Summit", href: "#about" },
        { text: "Speakers", href: "#speakers" },
        { text: "Schedule", href: "#schedule" },
        { text: "Venue", href: "#venue" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", href: "#docs" },
        { text: "Blog", href: "#blog" },
        { text: "Case Studies", href: "#cases" },
        { text: "Whitepapers", href: "#papers" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "#help" },
        { text: "Contact Us", href: "#contact" },
        { text: "FAQ", href: "#faq" },
        { text: "Feedback", href: "#feedback" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "#privacy" },
        { text: "Terms of Service", href: "#terms" },
        { text: "Cookie Policy", href: "#cookies" },
        { text: "Code of Conduct", href: "#conduct" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "🐦", href: "https://twitter.com", label: "Twitter" },
    { icon: "💼", href: "https://linkedin.com", label: "LinkedIn" },
    { icon: "📘", href: "https://facebook.com", label: "Facebook" },
    { icon: "📸", href: "https://instagram.com", label: "Instagram" },
    { icon: "📺", href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black border-t border-emerald-400/20 overflow-hidden">
      <div className="absolute inset-0 h-full">
        <ThreeFooterBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="group mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-2xl text-gray-900 shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                  N
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    NEXUS
                  </div>
                  <div className="text-xs text-gray-400">Tech Summit 2025</div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting innovation leaders across Asia-Pacific. Join us for the
              most transformative tech summit of 2025.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, idx) => (
                <div
                  key={idx}
                  style={{
                    animation: "fadeInUp 0.6s ease-out forwards",
                    animationDelay: `${idx * 0.1}s`,
                    opacity: 0,
                  }}>
                  <SocialLink {...social} />
                </div>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, idx) => (
                <div
                  key={idx}
                  style={{
                    animation: "fadeInUp 0.6s ease-out forwards",
                    animationDelay: `${(idx + 5) * 0.1}s`,
                    opacity: 0,
                  }}>
                  <h3 className="text-emerald-400 font-bold mb-4 text-lg">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <FooterLink href={link.href}>{link.text}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-16 p-8 bg-gray-800/30 backdrop-blur-sm border border-emerald-400/20 rounded-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates and exclusive
              content
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Nexus Tech Summit. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>Made with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>for innovators</span>
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 group w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 z-50"
            aria-label="Scroll to top">
            <svg
              className="w-6 h-6 text-gray-900 transform group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>

            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-0 group-hover:animate-ping" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};
