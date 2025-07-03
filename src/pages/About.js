import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, BookOpen } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { mockData, timelineItems } from "../personalData";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto pt-32 px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-10">
        <motion.div
          className="col-span-2 bg-[#161616] rounded-3xl p-6 flex justify-center items-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-xs aspect-square mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full blur-lg opacity-20"></div>
            <img
              src={mockData.personal.profileImage2}
              alt={mockData.personal.name}
              className="relative w-full h-full object-cover rounded-full border-4 border-gray-700"
            />

            {/* Floating Icons */}
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

        {/* Text Content Box */}
        <motion.div
          className="col-span-3 bg-[#161616] rounded-3xl p-6 sm:p-8 text-white w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            I’m Harsh, a Mobile App Developer
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I'm Harsh Siddhapura, a Mobile App Developer skilled in React
            Native, Flutter, and Swift. I build user-friendly Android and iOS
            apps that align with business goals. My focus is on performance,
            clean design, and real-world impact.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            As a freelance Mobile App Developer, I specialize in React Native,
            iOS Swift, and Flutter to build high-quality cross-platform apps. I
            focus on clean design, solid architecture, and smooth user
            experience. From sleek UIs to full-scale apps, I bring precision and
            creativity to every project. Let’s build something impactful
            together! 🚀
          </p>
          <button
            onClick={() => (window.location.href = "#contact")}
            className="border border-gray-600 text-white px-8 py-3 rounded-full bg-transparent transition-all duration-300 flex items-center space-x-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 hover:text-white hover:shadow-lg"
          >
            <span>Get In touch</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Experience & Education Section */}
      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Experience Card */}
        <div className="bg-[#161616] p-8 sm:p-10 rounded-3xl border border-gray-700">
          <h3 className="text-white text-3xl font-bold mb-10">Experience</h3>
          {timelineItems.map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start mb-8">
              <div className="min-w-[56px] min-h-[56px] bg-orange-500/10 rounded-xl flex items-center justify-center">
                <BookOpen className="text-orange-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">{item.year}</p>
                <h4 className="text-lg font-semibold text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education Card */}
        <div className="bg-[#161616] p-8 sm:p-10 rounded-3xl border border-gray-700">
          <h3 className="text-white text-3xl font-bold mb-10">Tech Skills</h3>
          {[
            { skill: "React Native", level: 90 },
            { skill: "C, C++", level: 75 },
            { skill: "Java", level: 65 },
            { skill: "JavaScript", level: 80 },
            { skill: "REST API", level: 85 },
          ].map((item, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{item.skill}</span>
                <span className="text-gray-400 text-sm">{item.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
