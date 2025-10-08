import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mic2,
  Handshake,
  GraduationCap,
  Lightbulb,
  Building2,
  Sparkles,
  Calendar,
} from "lucide-react";

const formatData = [
  {
    icon: Mic2,
    title: "Conference",
    desc: "Expert keynotes and industry insights",
    gradient: "from-pink-500 to-rose-600",
    emoji: "🎤",
    features: ["Keynote Speakers", "Panel Discussions", "Industry Insights"],
    duration: "Full Day",
  },
  {
    icon: Handshake,
    title: "Meetings",
    desc: "1-on-1 curated matchmaking sessions",
    gradient: "from-blue-500 to-indigo-600",
    emoji: "🤝",
    features: ["Pre-Scheduled", "AI Matchmaking", "Private Rooms"],
    duration: "30 mins each",
  },
  {
    icon: GraduationCap,
    title: "Workshop",
    desc: "Hands-on training and skill building",
    gradient: "from-purple-500 to-violet-600",
    emoji: "🎓",
    features: ["Interactive Sessions", "Practical Learning", "Expert Trainers"],
    duration: "2-3 hours",
  },
  {
    icon: Lightbulb,
    title: "Demo Zones",
    desc: "Live product demonstrations",
    gradient: "from-amber-500 to-orange-600",
    emoji: "💡",
    features: ["Live Demos", "Product Testing", "Q&A Sessions"],
    duration: "All Day",
  },
  {
    icon: Building2,
    title: "Exhibition",
    desc: "Showcase your solutions",
    gradient: "from-emerald-500 to-teal-600",
    emoji: "🏢",
    features: ["Premium Booths", "Brand Visibility", "Lead Generation"],
    duration: "Full Event",
  },
];

const FormatCard = ({ format, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  const Icon = format.icon;

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      initial={{ opacity: 0, y: 100, rotate: -15 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotate: 0 }
          : { opacity: 0, y: 100, rotate: -15 }
      }
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative group">
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${format.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500`}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        whileHover={{
          y: -20,
          rotateY: 10,
        }}
        style={{ rotate }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-emerald-500/30 hover:border-emerald-400/70 overflow-hidden cursor-pointer h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${format.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />

        <div className="relative p-8 h-full flex flex-col">
          <motion.div
            whileHover={{
              rotate: 360,
              scale: 1.2,
            }}
            transition={{ duration: 0.6 }}
            className="relative mb-6">
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${format.gradient} p-4 shadow-2xl relative z-10`}>
              <Icon className="w-full h-full text-white" />
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${format.gradient} rounded-2xl blur-xl opacity-50`}
            />

            <motion.div
              className="absolute -bottom-2 -right-2 text-4xl"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}>
              {format.emoji}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "60px" } : { width: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            className={`h-1 bg-gradient-to-r ${format.gradient} mb-4 rounded-full`}
          />

          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
            {format.title}
          </h3>

          <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
            {format.desc}
          </p>

          <div className="space-y-2 mb-6">
            {format.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: index * 0.15 + 0.4 + idx * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${format.gradient}`}
                />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
            <span className="text-sm text-gray-500">Duration</span>
            <span
              className={`text-sm font-semibold bg-gradient-to-r ${format.gradient} bg-clip-text text-transparent`}>
              {format.duration}
            </span>
          </div>

          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${format.gradient}`}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            style={{ originX: 0 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function EventFormatSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-4 overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-20">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 mb-6 backdrop-blur-sm">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold">
              Diverse Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
              The Event Format
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto">
            Multiple engagement opportunities designed to maximize value and
            networking
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {formatData.slice(0, 3).map((format, idx) => (
            <FormatCard key={idx} format={format} index={idx} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {formatData.slice(3).map((format, idx) => (
            <FormatCard key={idx + 3} format={format} index={idx + 3} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl px-8 py-5 rounded-2xl border border-purple-500/30">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <div className="text-left">
              <p className="text-gray-400 text-sm">All Formats Included</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                One Ticket Access
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
