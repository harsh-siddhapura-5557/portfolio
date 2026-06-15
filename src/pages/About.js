import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Palette, BookOpen, Smartphone, Brain } from "lucide-react";
import { mockData, timelineItems } from "../personalData";

export const About = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const techSkills = [
    { name: "React Native", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "iOS Native (Swift)", level: 80, color: "from-orange-500 to-red-500" },
    { name: "Flutter", level: 75, color: "from-cyan-500 to-blue-600" },
    { name: "JavaScript/TypeScript", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "UI/UX Design", level: 85, color: "from-pink-500 to-purple-500" },
    { name: "AI/ML Integration", level: 80, color: "from-purple-500 to-indigo-500" }
  ];

  const stats = [
    { label: "Years Experience", value: "3+", icon: <BookOpen size={20} /> },
    { label: "Projects Completed", value: "20+", icon: <Code size={20} /> },
    { label: "Happy Clients", value: "15+", icon: <Palette size={20} /> }
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#050505] relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-600/10 blur-3xl rounded-full"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-600/10 blur-3xl rounded-full"
          style={{ y: y2 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur-xl px-5 sm:px-6 py-2 sm:py-3 rounded-full border border-purple-500/30 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            </div>
            <span className="text-base sm:text-lg font-medium bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get to Know Me
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafting beautiful, high-performance mobile experiences that users love
          </motion.p>
        </div>

        {/* Profile Card Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-900/60 to-black/70 backdrop-blur-xl rounded-3xl border border-gray-800 shadow-2xl overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Profile Image with Floating Icons */}
              <div className="relative flex justify-center items-center">
                {/* Decorative Rings */}
                <motion.div
                  className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] rounded-full border-2 border-purple-500/20"
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div
                  className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-full border-2 border-blue-500/15"
                  animate={{ rotate: -360, scale: [1, 1.03, 1] }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                />

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-600/30 to-cyan-400/30 rounded-full blur-2xl" />
                  <img
                    src={mockData.personal.profileImage2}
                    alt={mockData.personal.name}
                    className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-gray-800 shadow-2xl shadow-purple-500/30"
                  />

                  {/* Floating Icons - Like user's screenshot */}
                  <motion.div
                    className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-br from-purple-600 to-blue-600 p-3 sm:p-4 rounded-2xl shadow-xl border border-white/20"
                    animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Smartphone className="text-white" size={20} sm={24} />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gradient-to-br from-blue-600 to-cyan-600 p-3 sm:p-4 rounded-2xl shadow-xl border border-white/20"
                    animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Brain className="text-white" size={20} sm={24} />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-10 sm:-right-16 -translate-y-1/2 bg-gradient-to-br from-cyan-600 to-blue-600 p-3 sm:p-4 rounded-2xl shadow-xl border border-white/20"
                    animate={{ x: [0, 8, 0], y: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <Code className="text-white" size={20} sm={24} />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -left-10 sm:-left-16 -translate-y-1/2 bg-gradient-to-br from-purple-600 to-pink-600 p-3 sm:p-4 rounded-2xl shadow-xl border border-white/20"
                    animate={{ x: [0, -8, 0], y: [0, 5, -5, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <Palette className="text-white" size={20} sm={24} />
                  </motion.div>
                </div>
              </div>

              {/* Right - Profile Info */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                  {mockData.personal.name}
                </h3>
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6">
                  {mockData.personal.title}
                </h4>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl mb-8">
                  {mockData.personal.description}
                </p>

                <motion.button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full lg:w-auto bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-400 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-lg sm:text-xl shadow-2xl shadow-purple-500/40 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(139, 92, 246, 0.6)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let's Connect <ArrowRight size={20} sm={24} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-800 text-center"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
            >
              <div className="text-purple-400 mx-auto mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          <motion.div
            className="bg-gradient-to-br from-gray-900/60 to-black/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-800"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
              <BookOpen className="text-purple-400" size={20} sm={24} />
              Experience Journey
            </h3>
            <div className="space-y-5 sm:space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-7 sm:pl-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                >
                  {index < timelineItems.length - 1 && (
                    <div className="absolute left-1.5 sm:left-2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent" />
                  )}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-2 border-gray-900 shadow-lg shadow-purple-500/30" />
                  <div className="bg-gray-800/60 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-700/50">
                    <div className="text-xs sm:text-sm text-purple-400 font-medium mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="bg-gradient-to-br from-gray-900/60 to-black/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-800"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
              <Code className="text-blue-400" size={20} sm={24} />
              Tech Skills
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium text-sm sm:text-base">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 sm:h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
