import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ scale: 0.9, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 30, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl sm:rounded-3xl p-0 w-full sm:w-11/12 md:w-3/4 lg:max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl shadow-purple-500/20"
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={18} sm={22} />
          </motion.button>

          {/* Project Image */}
          <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
            <img
              src={project.image || project.logo}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          </div>

          {/* Modal Content */}
          <div className="p-5 sm:p-6 md:p-8">
            {/* Title & Category */}
            <div className="mb-5 sm:mb-6">
              <span className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 rounded-full border border-purple-500/30 mb-3 font-medium">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-2 sm:mb-3">
                About this project
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-2 sm:mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/60 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-700/50"
                    whileHover={{
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      borderColor: "rgba(139, 92, 246, 0.4)"
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Actions */}
            {project.link && project.link !== "#" && (
              <div className="pt-3 sm:pt-4 border-t border-gray-800">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit Project <ExternalLink size={16} sm={18} />
                </motion.a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
