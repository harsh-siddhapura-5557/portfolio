/* -- ProjectModal.jsx (only the className lines changed) -- */
import { motion } from "framer-motion";
import { X } from "lucide-react";

export const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
    onClick={onClose}
  >
    <motion.div
      role="dialog"
      aria-modal="true"
      initial={{ scale: 0.92 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      onClick={(e) => e.stopPropagation()}
      className="relative bg-gray-900 rounded-3xl p-8 w-full sm:w-11/12 md:w-3/4 lg:max-w-3xl max-h-[85vh] overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={22} />
      </button>

      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

      <img
        src={project.image || project.logo}
        alt={project.title}
        className="mb-4 rounded-lg w-full max-h-80 object-cover"
      />

      <p className="text-gray-400 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white px-5 py-2 rounded-full"
      >
        Visit Site
      </a> */}
    </motion.div>
  </motion.div>
);
