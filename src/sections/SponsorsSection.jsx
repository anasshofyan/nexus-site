/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Handshake } from "lucide-react";

import { PARTNERS } from "../constants";

const SPEED_PARTNERS_MARQUEE = 42000;

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function SponsorsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.25,
  });
  const blobOpacity = useTransform(progress, [0, 1], [0.18, 0.35]);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden py-16 md:py-24"
      id="sponsors"
      ref={sectionRef}>
      {/* Background blobs */}
      <motion.div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-10 -left-24 h-72 w-72 rounded-full bg-[var(--color-brand-300)]/40 blur-3xl"
          style={{ opacity: blobOpacity }}
        />
        <motion.div
          className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-[var(--color-brand-400)]/25 blur-3xl"
          style={{ opacity: blobOpacity }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center">
        {/* Heading */}
        <div className="mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 mb-6 backdrop-blur-sm"
            initial={{ scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            whileInView={{ scale: 1, rotate: 0 }}>
            <Handshake
              className="w-5 h-5 text-emerald-400 animate-spin"
              style={{ animationDuration: "8s" }}
            />
            <span className="text-emerald-400 font-semibold">
              Proudly partnered with leading institutions
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Our Sponsors
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileInView={{ opacity: 1 }}>
            Join a prestigious group of sponsors and partners who are shaping
            the future of technology and innovation. Elevate your brand by
            collaborating with us.
          </motion.p>
        </div>

        {/* Logos */}

        {/* Partners Marquee */}
        <div className="mt-14">
          <PartnersMarquee logos={PARTNERS} speedMs={SPEED_PARTNERS_MARQUEE} />
        </div>
      </div>
    </section>
  );
}

function PartnersMarquee({ logos = [], speedMs = 42000 }) {
  const trackTop = [...logos, ...logos];
  const offset = 1;
  const trackBottom = [
    ...logos.slice(offset),
    ...logos.slice(0, offset),
    ...logos.slice(offset),
    ...logos.slice(0, offset),
  ];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
      <div
        className="group/marquee pointer-events-auto flex gap-6"
        style={{ ["--speed"]: `${speedMs * 2}ms` }}>
        <ul className="marquee-row will-change-transform">
          {trackTop.map((l, i) => (
            <li className="marquee-item" key={`row1-${i}`}>
              <LogoSmall {...l} />
            </li>
          ))}
        </ul>
      </div>

      <div
        className="group/marquee pointer-events-auto mt-8 flex gap-6"
        style={{ ["--speed"]: `${Math.round(speedMs * 2.1)}ms` }}>
        <ul className="marquee-row marquee-reverse will-change-transform">
          {trackBottom.map((l, i) => (
            <li className="marquee-item" key={`row2-${i}`}>
              <LogoSmall {...l} small />
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .marquee-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          min-width: max-content;
          padding: 0.5rem 0;
          animation: marquee var(--speed) linear infinite;
        }
        .marquee-reverse {
          animation-name: marquee-rev;
        }
        .group\/marquee:hover .marquee-row {
          animation-play-state: paused;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 60px;
          min-width: 140px;
          padding: 0.75rem 1rem;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-rev {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-row {
            animation: none;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function LogoSmall({ src, alt }) {
  return (
    <div
      className="flex items-center justify-center rounded-lg px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105  bg-white/90 hover:bg-white/100 border border-white/20 shadow-md hover:shadow-lg"
      title={alt}>
      <img
        alt={alt}
        className="h-auto max-h-12 w-auto max-w-[120px] object-contain opacity-85 contrast-125 grayscale filter transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        loading="lazy"
        src={src}
      />
    </div>
  );
}
