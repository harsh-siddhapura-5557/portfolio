import React from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { mockData } from "../personalData";

export const TestimonialsSection = () => {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0a0a1a] via-[#050505] to-[#0a0a1a] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-600/10 blur-3xl rounded-full"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-600/10 blur-3xl rounded-full"
          animate={{
            x: [0, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
            <MessageSquare className="text-purple-400" size={12} sm={14} />
            <span className="text-sm text-purple-300 font-medium">Testimonials</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Clients Say
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't just take my word for it. Here's what some of my amazing
            clients have to say about working with me
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {mockData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="group bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-800 shadow-2xl h-full"
                whileHover={{
                  borderColor: "rgba(139, 92, 246, 0.4)",
                  boxShadow: "0 0 40px rgba(139, 92, 246, 0.15)"
                }}
              >
                {/* Rating Stars */}
                <div className="flex mb-4 sm:mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18} sm={20}
                        className={i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"}
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-5 sm:mb-8">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-800">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-700"
                    whileHover={{ scale: 1.1, borderColor: "#8b5cf6" }}
                  />
                  <div>
                    <h4 className="text-white font-semibold text-base sm:text-lg">
                      {testimonial.name}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <p className="text-purple-400 font-medium text-sm sm:text-base">
                        {testimonial.role}
                      </p>
                      {testimonial.company && (
                        <span className="text-gray-500 text-xs sm:text-sm">
                          {testimonial.company}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
