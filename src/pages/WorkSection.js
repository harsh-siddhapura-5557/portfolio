import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, X } from "lucide-react";
import { mockData } from "../personalData";
import { ProjectModal } from "../Components/ProjectModal";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const ProjectMedia = ({ project }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
    );
  }

  const defaultBg =
    "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(37,99,235,0.15) 100%)";

  return (
    <div
      className="flex items-center justify-center h-48 sm:h-56 w-full"
      style={{
        background: project.gradient
          ? `linear-gradient(135deg, ${project.gradient})`
          : defaultBg,
      }}
    >
      <motion.img
        src={project.logo}
        alt={`${project.title} logo`}
        className="w-20 h-20 object-contain"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 250 }}
      />
    </div>
  );
};

export const WorkSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openProject, setOpenProject] = useState(null);

  console.log("openProject", openProject);

  useEffect(() => {
    document.body.style.overflow = openProject ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [openProject]);

  const categories = [
    "All",
    "Web Development",
    "Mobile Design",
    "Branding",
    "UI Design",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? mockData.projects
      : mockData.projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section className="py-20 bg-black" id="work">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Filter pills */}
        {/* <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div> */}

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Media + overlay CTA */}
                <div className="relative overflow-hidden">
                  <ProjectMedia project={project} />

                  {/* overlay visible by default on mobile, hover-only on md+ */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent
               opacity-100 md:opacity-0 md:group-hover:opacity-100
               transition-opacity duration-300"
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center md:justify-start">
                      <button
                        onClick={() => setOpenProject(project)}
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm
                   text-white px-4 py-2 rounded-full
                   hover:bg-white/20 md:hover:scale-105 transition-transform"
                      >
                        <span>View Project</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-purple-400 font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {openProject && (
          <ProjectModal
            project={openProject}
            onClose={() => setOpenProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
