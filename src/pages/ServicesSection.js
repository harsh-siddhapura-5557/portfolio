import React from "react";
import { motion } from "framer-motion";
import { services } from "../personalData";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-900" id="services">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of design and development services to
            bring your digital vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
