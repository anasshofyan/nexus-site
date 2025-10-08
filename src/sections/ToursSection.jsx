import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  Calendar,
  Globe,
  Navigation,
  Plane,
  Users,
  ArrowRight,
} from "lucide-react";

const tourCities = [
  {
    city: "Singapore",
    date: "March 15, 2025",
    country: "Singapore",
    attendees: "200+",
    gradient: "from-red-500 to-pink-600",
    position: { top: "45%", left: "70%" },
  },
  {
    city: "Jakarta",
    date: "April 22, 2025",
    country: "Indonesia",
    attendees: "200+",
    gradient: "from-blue-500 to-cyan-600",
    position: { top: "55%", left: "65%" },
  },
  {
    city: "Manila",
    date: "May 18, 2025",
    country: "Philippines",
    attendees: "200+",
    gradient: "from-yellow-500 to-orange-600",
    position: { top: "35%", left: "75%" },
  },
  {
    city: "Bangkok",
    date: "June 10, 2025",
    country: "Thailand",
    attendees: "200+",
    gradient: "from-purple-500 to-pink-600",
    position: { top: "40%", left: "60%" },
  },
  {
    city: "Kuala Lumpur",
    date: "July 8, 2025",
    country: "Malaysia",
    attendees: "200+",
    gradient: "from-emerald-500 to-teal-600",
    position: { top: "50%", left: "62%" },
  },
  {
    city: "Ho Chi Minh",
    date: "August 5, 2025",
    country: "Vietnam",
    attendees: "200+",
    gradient: "from-indigo-500 to-purple-600",
    position: { top: "35%", left: "65%" },
  },
];

const CityCard = ({ city, index, isActive, onClick }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 20 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, rotateY: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 20 }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onClick={() => onClick(index)}
      className="relative group cursor-pointer">
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${city.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500`}
        animate={isActive ? { opacity: 0.4, scale: 1.1 } : {}}
      />

      <motion.div
        whileHover={{ y: -15, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border-2 ${
          isActive ? "border-emerald-400/80" : "border-emerald-500/30"
        } hover:border-emerald-400/70 overflow-hidden`}>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${city.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${city.gradient} rounded-bl-full opacity-20`}
        />

        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-3 -right-3 z-20">
            <div className="w-6 h-6 rounded-full bg-emerald-500 animate-ping" />
            <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-emerald-500" />
          </motion.div>
        )}

        <div className="relative p-8">
          <div className="flex items-start justify-between mb-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${city.gradient} p-3 shadow-2xl relative`}>
              <MapPin className="w-full h-full text-white" />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${city.gradient} rounded-2xl blur-xl opacity-50`}
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.15 + 0.3 }}
              className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${city.gradient} text-white text-xs font-bold shadow-lg`}>
              {city.country}
            </motion.div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            className={`h-1.5 bg-gradient-to-r ${city.gradient} mb-4 rounded-full`}
          />

          <h3
            className={`text-3xl font-bold mb-3 bg-gradient-to-r ${city.gradient} bg-clip-text text-transparent`}>
            {city.city}
          </h3>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-gray-300">
              <Calendar className={`w-5 h-5 text-emerald-400`} />
              <span className="font-medium">{city.date}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Users className={`w-5 h-5 text-emerald-400`} />
              <span className="font-medium">{city.attendees} Attendees</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 rounded-xl bg-gradient-to-r ${city.gradient} text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}>
            <span>Reserve Spot</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>

          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${city.gradient}`}
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

const TourMap = ({ activeCity }) => {
  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-emerald-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />

      {/* Simplified APAC Map */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 100 100">
        <path
          d="M30,40 Q40,30 50,35 T70,40 Q75,45 70,50 T50,65 Q40,70 35,60 T30,40 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-emerald-500/50"
        />
      </svg>

      {/* City Markers */}
      {tourCities.map((city, idx) => (
        <motion.div
          key={idx}
          initial={{ scale: 0 }}
          animate={{ scale: activeCity === idx ? 1.5 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute"
          style={{
            top: city.position.top,
            left: city.position.left,
            transform: "translate(-50%, -50%)",
          }}>
          <motion.div
            animate={{
              scale: activeCity === idx ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: activeCity === idx ? Infinity : 0,
            }}
            className="relative">
            <div
              className={`w-4 h-4 rounded-full bg-gradient-to-br ${city.gradient} shadow-2xl`}
            />
            {activeCity === idx && (
              <>
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 animate-ping" />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div
                    className={`px-3 py-1 rounded-lg bg-gradient-to-r ${city.gradient} text-white text-xs font-bold shadow-xl`}>
                    {city.city}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {tourCities.slice(0, -1).map((city, idx) => {
          const nextCity = tourCities[idx + 1];
          return (
            <motion.line
              key={idx}
              x1={city.position.left}
              y1={city.position.top}
              x2={nextCity.position.left}
              y2={nextCity.position.top}
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: idx * 0.3 }}
              className="opacity-50"
            />
          );
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-xl px-6 py-4 rounded-2xl border border-emerald-500/30">
        <div className="flex items-center gap-3">
          <Plane className="w-6 h-6 text-emerald-400" />
          <div>
            <p className="text-xs text-gray-400">Total Tour Cities</p>
            <p className="text-2xl font-bold text-white">{tourCities.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ToursSection() {
  const [activeCity, setActiveCity] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-4 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 mb-6 backdrop-blur-sm">
            <Globe
              className="w-5 h-5 text-emerald-400 animate-spin"
              style={{ animationDuration: "8s" }}
            />
            <span className="text-emerald-400 font-semibold">
              Multi-City Tour
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Join Us in Shaping the Future
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl font-bold text-white mb-4">
            APAC Tech Tour 2025
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto">
            A roadshow across 6 major APAC cities connecting innovators and
            decision-makers
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16">
          <TourMap activeCity={activeCity} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourCities.map((city, idx) => (
            <CityCard
              key={idx}
              city={city}
              index={idx}
              isActive={activeCity === idx}
              onClick={setActiveCity}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl px-10 py-6 rounded-2xl border border-emerald-500/30">
            <Navigation className="w-10 h-10 text-emerald-400" />
            <div className="text-left">
              <p className="text-gray-400 text-sm mb-1">
                Total Expected Attendees
              </p>
              <p className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                1,200+
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
