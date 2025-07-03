import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { mockData } from "../personalData"; // Adjust the import path as necessary

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my amazing
            clients have to say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {mockData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-purple-400">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
