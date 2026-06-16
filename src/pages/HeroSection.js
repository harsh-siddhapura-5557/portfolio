import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Code, Palette, Brain, Smartphone } from "lucide-react";
import { mockData, socialLinks } from "../personalData";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden pt-32 pb-44 sm:pb-20 flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #050505 0%, #0f0f1a 50%, #050505 100%)"
      }}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-64 h-64 bg-purple-600/15 blur-3xl rounded-full"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-64 h-64 bg-blue-600/15 blur-3xl rounded-full"
          animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-400/10 blur-2xl rounded-full"
          animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Hexagon 1 */}
        <motion.div
          className="absolute top-20 left-10 w-12 h-12 border-2 border-purple-500/20 rotate-45"
          animate={{ rotate: [45, 85, 45], y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Circle 1 */}
        <motion.div
          className="absolute top-40 right-16 w-8 h-8 border-2 border-cyan-500/20 rounded-full"
          animate={{ scale: [1, 1.3, 1], y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Triangle 1 */}
        <motion.div
          className="absolute bottom-32 left-1/4 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent border-b-purple-500/20"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Square 1 */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-6 h-6 border-2 border-blue-500/20 rotate-12"
          animate={{ rotate: [12, 45, 12], scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        {/* Hexagon 2 */}
        <motion.div
          className="absolute top-1/2 right-8 w-10 h-10 border-2 border-cyan-400/20"
          animate={{ rotate: [0, 60, 0], y: [0, 18, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: "linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)",
             backgroundSize: "50px 50px"
           }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-3 sm:space-y-5 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur-xl px-4 py-2 rounded-full border border-purple-500/30 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                {mockData.personal.availability}
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {mockData.personal.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mt-2">
              {mockData.personal.title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mt-3 max-w-2xl mx-auto lg:mx-0">
              {mockData.personal.description}
            </p>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
              {[
                { icon: <Code size={12} />, label: "React Native" },
                { icon: <Brain size={12} />, label: "AI Integration" },
                { icon: <Smartphone size={12} />, label: "Mobile Apps" },
                { icon: <Palette size={12} />, label: "UI/UX Design" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/60 border border-gray-700/50 rounded-full text-xs sm:text-sm text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.4)" }}
                >
                  <span className="text-purple-400">{skill.icon}</span>
                  {skill.label}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-5">
              <motion.button
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work <ArrowRight size={18} />
              </motion.button>

              <motion.a
                href="/HarshResume-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg bg-transparent hover:bg-gray-800/50 flex items-center gap-2"
                whileHover={{ scale: 1.05, borderColor: "#8b5cf6" }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={18} /> Download CV
              </motion.a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 mt-3 justify-center lg:justify-start">
              {socialLinks.map(({ icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800/60 border border-gray-700/50 flex items-center justify-center text-gray-400"
                  initial={{ opacity: 0, y: 20, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                    borderColor: "rgba(139, 92, 246, 0.4)"
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="relative flex justify-center items-center mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Decorative Background Blobs */}
            <motion.div
              className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 15, repeat: Infinity, ease: "linear" }
              }}
            />
            {/* Decorative Rings */}
            <motion.div
              className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] rounded-full border-2 border-purple-500/20"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute w-[250px] h-[250px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-full border-2 border-blue-500/15"
              animate={{ rotate: -360, scale: [1, 1.03, 1] }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            {/* Extra Decorative Ring */}
            <motion.div
              className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] rounded-full border border-dashed border-purple-400/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-600 to-cyan-400 rounded-full blur-3xl opacity-50 scale-125" />
              <img
                src={mockData.personal.profileImage}
                alt={mockData.personal.name}
                className="relative w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-gray-800 shadow-2xl shadow-purple-500/50"
              />

              {/* Floating Icons - Keep them but scale smaller on mobile */}
              <motion.div
                className="absolute -top-2 sm:-top-6 -right-2 sm:-right-6 bg-gray-900/90 backdrop-blur-xl border border-purple-500/40 p-1.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl"
                animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="text-purple-400" size={12} sm={20} />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 sm:-bottom-6 -left-2 sm:-left-6 bg-gray-900/90 backdrop-blur-xl border border-blue-500/40 p-1.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl"
                animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Brain className="text-blue-400" size={12} sm={20} />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 sm:-right-16 -translate-y-1/2 bg-gray-900/90 backdrop-blur-xl border border-cyan-500/40 p-1.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl"
                animate={{ x: [0, 6, 0], y: [0, -4, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Smartphone className="text-cyan-400" size={12} sm={20} />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-6 sm:-left-16 -translate-y-1/2 bg-gray-900/90 backdrop-blur-xl border border-pink-500/40 p-1.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl"
                animate={{ x: [0, -6, 0], y: [0, 4, -4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Palette className="text-pink-400" size={12} sm={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-5 h-8 border-2 border-gray-500 rounded-full flex items-start justify-center pt-1.5"
        >
          <motion.div
            className="w-1.5 h-1.5 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
};
