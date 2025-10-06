import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export const WhySponsor = ({ itemVariants, whyReasons }) => {
  return (
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
  );
};
