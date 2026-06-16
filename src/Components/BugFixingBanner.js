
import React from "react";
import { motion } from "framer-motion";
import { Bug, Zap, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export const BugFixingBanner = () => {
  const features = [
    { icon: Bug, text: "Crash Debugging", color: "text-red-400" },
    { icon: Zap, text: "Performance Optimization", color: "text-yellow-400" },
    { icon: TrendingUp, text: "Speed Up Apps", color: "text-green-400" },
    { icon: CheckCircle, text: "Memory Leak Fixes", color: "text-blue-400" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-purple-900/30 via-black/95 to-blue-900/30 relative overflow-hidden"
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-purple-500/10 to-transparent h-px w-full"
            style={{ top: `${i * 25}%` }}
            animate={{ x: ["-100%", "100%"], opacity: [0, 0.5, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/40 via-black/85 to-blue-900/40 backdrop-blur-2xl rounded-3xl sm:rounded-[2rem] p-6 sm:p-10 md:p-12 lg:p-16 border border-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 shadow-2xl shadow-purple-500/20 relative overflow-hidden">
            {/* Glowing Elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-red-900/30 via-purple-900/30 to-yellow-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-red-500/20 mb-6"
                >
                  <Bug className="text-red-400 animate-pulse" size={20} />
                  <span className="text-sm sm:text-base font-semibold text-red-300">SPECIAL OFFER</span>
                  <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-black text-xs sm:text-sm font-bold px-3 py-1 rounded-full">LIMITED TIME</span>
                </motion.div>

                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">React Native App</span>
                  <br />
                  <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">Feeling Sluggish or Buggy?</span>
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8"
                >
                  I'll fix crashes, optimize performance, and make your app lightning fast! Get your app running smoother than ever before!
                </motion.p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="bg-black/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10"
                    >
                      <Icon className={feature.color} size={28} sm={32} />
                      <p className="text-white font-semibold mt-3 text-sm sm:text-base">{feature.text}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(239, 68, 68, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-black px-10 sm:px-16 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl shadow-2xl"
                >
                  Fix My App Now! <ArrowRight size={20} sm={24} className="inline-block ml-2" />
                </motion.button>
                <p className="text-gray-400 text-sm sm:text-base mt-3">Response within 24 hours</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

