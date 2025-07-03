import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

/* ------------- config ------------- */
const menuItems = ["Home", "About", "Work", "Services", "Contact"];
const SCROLL_OFFSET = 0.4; // 40% visibility threshold

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    const sections = menuItems.map((id) =>
      document.getElementById(id.toLowerCase())
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
  const handleMenuClick = (item) => {
    setActiveItem(item);
    setMobileMenuOpen(false);
    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {menuItems.map((item) => (
              <div
                key={item}
                className="relative"
                ref={(el) => (menuRefs.current[item] = el)}
              >
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`text-base font-semibold pb-1.5 transition-colors ${
                    activeItem === item
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>

                {/* underline lives INSIDE the same box */}
                {activeItem === item && (
                  <motion.div
                    layoutId="nav-underline" /* shared id → animate between boxes */
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA btn */}
          <motion.button
            onClick={() => handleMenuClick("Contact")}
            className="hidden md:inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 px-4 py-6 flex flex-col space-y-4 rounded-xl bg-black/80 backdrop-blur-[10px] shadow-lg"
            >
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`text-base font-medium text-left ${
                    activeItem === item
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
              <motion.button
                onClick={() => handleMenuClick("Contact")}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-full"
              >
                Let's Talk
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
