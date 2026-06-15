import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, X, ArrowUpRight } from "lucide-react";
import { mockData } from "../personalData";
import { ProjectModal } from "../Components/ProjectModal";

export const WorkSection = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section
      id="work"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0a0a1a] via-[#050505] to-[#0a0a1a] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-600/10 blur-3xl rounded-full"
          animate={{
            x: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-600/10 blur-3xl rounded-full"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-blue-900/30 px-4 py-2 rounded-full border border-purple-500/20 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Star className="text-yellow-400" size={12} sm={14} />
            <span className="text-sm text-purple-300 font-medium">Featured Work</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of projects that showcase my skills and passion for
            creating exceptional digital experiences
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mockData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="group bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-800 overflow-hidden shadow-2xl h-full flex flex-col"
                whileHover={{
                  borderColor: "rgba(139, 92, 246, 0.4)",
                  boxShadow: "0 0 40px rgba(139, 92, 246, 0.2)"
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Action Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <motion.button
                      onClick={() => setOpenProject(project)}
                      className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center gap-2 text-sm sm:text-base shadow-xl shadow-purple-500/40"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project <ExternalLink size={16} sm={18} />
                    </motion.button>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-black/60 backdrop-blur-md text-purple-300 text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 rounded-full border border-white/10 font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-2.5 sm:px-3 py-1.5 bg-gray-800/50 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-700/50"
                        whileHover={{
                          backgroundColor: "rgba(139, 92, 246, 0.2)",
                          borderColor: "rgba(139, 92, 246, 0.4)"
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    onClick={() => setOpenProject(project)}
                    className="w-full flex items-center justify-center gap-2 text-purple-400 hover:text-white font-medium py-2 rounded-lg transition-colors text-sm sm:text-base"
                    whileHover={{ gap: 3 }}
                  >
                    View Details <ArrowUpRight size={14} sm={16} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {openProject && (
          <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
