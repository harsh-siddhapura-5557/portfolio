import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { socialLinks } from "../personalData";

export const Footer = () => {
  const iconVariants = {
    hover: { y: -2, scale: 1.15 },
    tap: { scale: 0.95 },
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4 max-w-sm">
            <h3 className="text-2xl font-bold text-white">Harsh Siddhapura</h3>
            <p className="text-gray-400 max-w-[24ch] leading-relaxed">
              Creating beautiful digital experiences that make a difference.
            </p>

            {/* social icons */}
            <div className="flex items-center gap-5 pt-2">
              {socialLinks.map(({ icon, href, label, hoverColor }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 rounded ${hoverColor}`}
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {["About", "Work", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-1.5 text-gray-400 hover:text-white hover:underline focus:text-white focus:underline focus:outline-none"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Design",
                "Branding",
              ].map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Reach Me</h4>
            <p className="text-gray-400">
              India
              <br />
              <a
                href={`tel:9714475575`}
                target="_blank"
                className="hover:underline mt-1 inline-block"
                rel="noreferrer"
              >
                +91 9714475575
              </a>
            </p>
            <p className="text-gray-400">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=harshsiddhapura5557@gmail.com`}
                target="_blank"
                className="hover:underline mt-1 inline-block"
                rel="noreferrer"
              >
                harshsiddhapura5557@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} Harsh Siddhapura. Made with{" "}
            <Heart size={14} className="text-red-500 fill-current inline" /> in
            India
          </p>
        </div>
      </div>
    </footer>
  );
};
