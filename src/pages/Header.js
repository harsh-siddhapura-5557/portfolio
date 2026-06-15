import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Code, MessageSquare } from "lucide-react";
import logo from "../assets/logo.png";

/* ------------- config ------------- */
const menuItems = [
  { name: "Home", icon: <Home size={16} /> },
  { name: "About", icon: <User size={16} /> },
  { name: "Work", icon: <Briefcase size={16} /> },
  { name: "Services", icon: <Code size={16} /> },
  { name: "Contact", icon: <MessageSquare size={16} /> }
];
const SCROLL_OFFSET = 0.4; // 40% visibility threshold

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* refs for underline positioning */
  const menuRefs = useRef({});
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });

  /* ----- change header bg on scroll ----- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ----- underline follows active tab ----- */
  useEffect(() => {
    const el = menuRefs.current[activeItem];
    if (el) {
      const { left, width } = el.getBoundingClientRect();
      const containerLeft = el.parentNode.getBoundingClientRect().left;
      setUnderlineProps({ left: left - containerLeft, width });
    }
  }, [activeItem]);

  /* ----- IntersectionObserver to auto‑set tab on scroll ----- */
  useEffect(() => {
    const sections = menuItems.map((item) =>
      document.getElementById(item.name.toLowerCase())
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > SCROLL_OFFSET) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveItem(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: SCROLL_OFFSET }
    );
    sections.forEach((sec) => sec && observer.observe(sec));
    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

  /* ----- click nav helper ----- */
  const handleMenuClick = (itemName) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);
    document
      .getElementById(itemName.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-gray-800/50 shadow-xl"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="relative flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-400 rounded-full blur opacity-50 animate-pulse" />
            <motion.div
              className="relative bg-black/80 rounded-full p-2 border border-purple-500/30"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={logo} alt="Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </motion.div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                ref={(el) => (menuRefs.current[item.name] = el)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <motion.button
                  onClick={() => handleMenuClick(item.name)}
                  className={`text-base font-semibold pb-1.5 transition-colors flex items-center gap-2 ${
                    activeItem === item.name
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={activeItem === item.name ? "text-purple-400" : ""}>{item.icon}</span>
                  {item.name}
                </motion.button>

                {/* underline lives INSIDE the same box */}
                {activeItem === item.name && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-400 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA btn */}
          <motion.button
            onClick={() => handleMenuClick("Contact")}
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-400 text-white px-7 py-2.5 rounded-full hover:shadow-2xl hover:shadow-purple-500/30 transition-all"
            whileHover={{ scale: 1.08, x: 3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <MessageSquare size={18} />
            Let's Talk
          </motion.button>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.9, rotateX: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="md:hidden mt-4 px-4 py-6 flex flex-col space-y-4 rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-2xl shadow-2xl border border-gray-800"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={`text-base font-medium text-left px-3 py-3 rounded-xl flex items-center gap-3 ${
                    activeItem === item.name
                      ? "text-white bg-gradient-to-r from-purple-500/20 via-blue-600/20 to-cyan-400/20 border border-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 8, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                >
                  <span className={activeItem === item.name ? "text-purple-400" : "text-gray-400"}>{item.icon}</span>
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleMenuClick("Contact")}
                className="w-full bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-400 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <MessageSquare size={18} />
                Let's Talk
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
