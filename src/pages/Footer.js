import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react";
import { socialLinks } from "../personalData";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-black to-[#050505] border-t border-gray-800 py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-white"
              whileHover={{ scale: 1.02 }}
            >
              Harsh Siddhapura
            </motion.h3>
            <p className="text-gray-400 max-w-xs leading-relaxed text-sm sm:text-base">
              Creating beautiful, high-performance mobile and web experiences that make a difference.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map(({ icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800/60 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  whileHover={{
                    y: -3,
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                    borderColor: "rgba(139, 92, 246, 0.4)",
                    boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {["About", "Work", "Services", "Contact"].map((item, index) => (
                <motion.li key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-1.5 text-gray-400 hover:text-purple-400 hover:translate-x-1 transition-all flex items-center gap-1 text-sm sm:text-base"
                  >
                    {item}
                    <ArrowUpRight size={12} sm={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Mobile App Development",
                "AI/ML Integration",
                "Web Development",
                "UI/UX Design",
              ].map((service, index) => (
                <motion.li key={service} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}>
                  <span className="text-gray-400 py-1.5 block hover:text-purple-400 transition-colors cursor-default text-sm sm:text-base">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Reach Me */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              Reach Me
            </h4>
            <div className="space-y-2 text-gray-400">
              <p className="text-sm sm:text-base">India</p>
              <a
                href={`tel:9714475575`}
                target="_blank"
                className="hover:text-purple-400 transition-colors mt-1 inline-block text-sm sm:text-base"
                rel="noreferrer"
              >
                +91 97144 75575
              </a>
              <p className="mt-2">
                <a
                  href="mailto:harshsiddhapura5557@gmail.com"
                  className="hover:text-purple-400 transition-colors mt-1 inline-block break-all text-sm sm:text-base"
                  target="_blank"
                  rel="noreferrer"
                >
                  harshsiddhapura5557@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-center sm:text-left flex items-center gap-1 flex-wrap justify-center sm:justify-start text-xs sm:text-sm">
            © {new Date().getFullYear()} Harsh Siddhapura. Made with
            <Heart size={12} sm={14} className="text-red-500 fill-red-500" />
            in India
          </p>

          <motion.button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
            <ArrowUpRight size={14} sm={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
