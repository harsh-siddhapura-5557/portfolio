import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Code, Palette } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { mockData, socialLinks } from "../personalData";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" {...fadeInUp}>
            <motion.div
              className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">
                {mockData.personal.availability}
              </span>
            </motion.div>

            <div>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {mockData.personal.name}
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {mockData.personal.title}
              </motion.p>

              <motion.p
                className="text-gray-400 mt-6 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {mockData.personal.description}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <button
                onClick={() => (window.location.href = "#work")}
                className="border border-gray-600 text-white px-8 py-3 rounded-full bg-transparent transition-all duration-300 flex items-center space-x-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 hover:text-white hover:shadow-lg"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="/harsh-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 text-white px-8 py-3 rounded-full bg-transparent transition-all duration-300 flex items-center space-x-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 hover:text-white"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </motion.div>
            <div className="flex items-center gap-5 mt-4">
              {socialLinks.map(({ icon, href, label, hoverColor }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`text-gray-400 transition-all duration-300 transform hover:scale-125 ${hoverColor}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full blur-lg opacity-20"></div>
              <img
                src={mockData.personal.profileImage}
                alt={mockData.personal.name}
                className="relative w-full h-full object-cover rounded-full border-4 border-gray-700"
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gray-800/80 backdrop-blur-sm p-3 rounded-full border border-gray-700"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="text-purple-400" size={20} />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gray-800/80 backdrop-blur-sm p-3 rounded-full border border-gray-700"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Palette className="text-blue-400" size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
