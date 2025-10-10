/* eslint-disable no-undef */
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Handshake } from "lucide-react";

const SUPPORT_LOGOS = [
  {
    src: "/images/sponsors/sponsor-senate.svg",
    alt: "Senate of the Philippines",
    link: "https://www.senate.gov.ph",
  },
  {
    src: "/images/sponsors/sponsor-finance.png",
    alt: "Department of Finance",
    link: "https://www.dof.gov.ph",
  },
  {
    src: "/images/sponsors/sponsor-maharlika.svg",
    alt: "Maharlika Investment Corporation",
    link: "https://www.mic.gov.ph",
  },
];

const SPONSOR_LOGOS = [
  {
    src: "/images/sponsors/lmntrix.png",
    alt: "LMNTRIX",
    link: "https://www.lmntrix.com",
  },
  {
    src: "/images/sponsors/tenable.png",
    alt: "Tenable",
    link: "https://www.tenable.com",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const Section = ({ sponsors = SUPPORT_LOGOS }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"], // efek selesai saat section benar2 habis
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.25,
  });
  const barW = useTransform(progress, [0, 1], ["0%", "100%"]);
  const blobOpacity = useTransform(progress, [0, 1], [0.18, 0.35]);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden py-16 md:py-24"
      id="sponsors"
      ref={sectionRef}>
      {/* Background blobs */}
      <motion.div className="pointer-events-none absolute inset-0">
        <motion.div
          className="bg-brand-300/40 absolute top-10 -left-24 h-72 w-72 rounded-full blur-3xl"
          style={{ opacity: blobOpacity }}
        />
        <motion.div
          className="bg-brand-400/25 absolute -right-28 bottom-10 h-80 w-80 rounded-full blur-3xl"
          style={{ opacity: blobOpacity }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center">
        {/* Heading */}
        <div className="mb-12">
          <motion.div
            aria-label="Sponsors and Partners"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-200)] bg-white/90 px-5 py-2.5 text-sm font-semibold text-[var(--color-brand-700)] shadow-lg backdrop-blur-sm"
            variants={itemVariants}>
            <Handshake className="text-brand-500 h-4 w-4" />
            Proudly partnered with leading institutions
          </motion.div>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            <span className="from-brand-800 via-brand-600 to-brand-700 bg-gradient-to-r bg-clip-text text-transparent">
              Supported by
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Nexus 2025 is made possible by the support of visionary
            organizations and government agencies dedicated to advancing
            cybersecurity and digital innovation in the Philippines. Their
            commitment empowers our mission to build a safer, smarter future for
            all.
          </p>
        </div>

        {/* Supported Logos */}
        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3">
          {sponsors.map((sp, i) => (
            <li key={sp.alt}>
              <a
                aria-label={sp.alt}
                href={sp.link}
                rel="noopener noreferrer"
                tabIndex={0}
                target="_blank">
                <motion.div
                  className="group relative flex h-56 items-center justify-center rounded-4xl bg-white/95 p-8 shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:h-64"
                  initial={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView={{ scale: 1, opacity: 1 }}>
                  {/* Glow + sheen */}
                  <span className="pointer-events-none absolute inset-0 rounded-4xl bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,.55),rgba(255,255,255,0))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                    initial={{ x: "-120%" }}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                    whileHover={{ x: ["-120%", "140%"] }}
                  />

                  {/* Logo */}
                  <Image
                    alt={sp.alt}
                    className="max-h-32 w-auto object-contain md:max-h-40"
                    height={360}
                    priority={false}
                    src={sp.src}
                    width={360}
                  />
                </motion.div>
              </a>
            </li>
          ))}
        </ul>

        <h2 className="my-14 text-3xl font-bold md:text-5xl">
          <span className="from-brand-800 via-brand-600 to-brand-700 bg-gradient-to-r bg-clip-text text-transparent">
            Our Sponsors
          </span>
        </h2>

        {/* Sponsors Logos */}
        <ul className="mx-auto grid max-w-6xl grid-cols-1 place-items-center gap-10 sm:grid-cols-2">
          {SPONSOR_LOGOS.map((sp, i) => (
            <li className="flex justify-center" key={sp.alt}>
              <motion.div
                className="group relative flex h-50 items-center justify-center rounded-4xl bg-white/95 p-8 shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:h-64"
                initial={{ scale: 0.9, opacity: 0 }}
                onClick={() =>
                  window.open(sp.link, "_blank", "noopener,noreferrer")
                }
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}>
                {/* Glow + sheen */}
                <span className="pointer-events-none absolute inset-0 rounded-4xl bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,.55),rgba(255,255,255,0))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                  initial={{ x: "-120%" }}
                  transition={{ duration: 1.3, ease: "easeInOut" }}
                  whileHover={{ x: ["-120%", "140%"] }}
                />

                {/* Logo */}
                <Image
                  alt={sp.alt}
                  className="max-h-32 w-auto object-contain md:max-h-40"
                  height={360}
                  priority={false}
                  src={sp.src}
                  width={360}
                />
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
