import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { mockData, socialLinks } from "../personalData";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      // Send to owner
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_email: mockData.personal.email,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      // Send confirmation to client (optional)
      if (process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CLIENT) {
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CLIENT,
          {
            to_email: formData.email,
            from_name: mockData.personal.name,
            from_email: mockData.personal.email,
            subject: `Thank you for contacting me, ${formData.name}!`,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
      }

      toast.success("Message sent successfully! 🎉");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(err?.text || "Oops! Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#050505] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-600/10 blur-3xl rounded-full"
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-600/10 blur-3xl rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
            <Send className="text-blue-400" size={12} sm={14} />
            <span className="text-sm text-purple-300 font-medium">Get in Touch</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together!
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-800 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-white mb-2 font-medium text-sm sm:text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/60 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/60 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all text-sm sm:text-base"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium text-sm sm:text-base">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/60 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all text-sm sm:text-base"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/60 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.02, boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
                {!sending && <ArrowRight size={18} sm={20} />}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Info Cards */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6">
                Get in Touch
              </h3>
              <div className="space-y-5 sm:space-y-6">
                <InfoItem
                  Icon={Phone}
                  label="Phone"
                  color="yellow"
                >
                  <a href="tel:+919714475575" className="hover:text-purple-400 transition-colors text-sm sm:text-base">
                    +91 97144 75575
                  </a>
                </InfoItem>

                <InfoItem
                  Icon={Mail}
                  label="Email"
                  color="purple"
                >
                  <a
                    href={`mailto:${mockData.personal.email}`}
                    className="hover:text-purple-400 transition-colors break-all text-sm sm:text-base"
                  >
                    {mockData.personal.email}
                  </a>
                </InfoItem>

                <InfoItem
                  Icon={MapPin}
                  label="Location"
                  color="blue"
                >
                  {mockData.personal.location}
                </InfoItem>

                <InfoItem
                  Icon={MessageCircle}
                  label="Response Time"
                  color="green"
                >
                  Usually within 24 hours
                </InfoItem>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-800">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map(({ icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/60 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
                    initial={{ opacity: 0, y: 20, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    whileHover={{
                      y: -5,
                      scale: 1.15,
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      borderColor: "rgba(139, 92, 246, 0.4)",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper component for info items
const InfoItem = ({ Icon, label, color, children }) => {
  const colorClasses = {
    yellow: "from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/30",
    purple: "from-purple-500/20 to-blue-500/20 text-purple-400 border-purple-500/30",
    blue: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
    green: "from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30",
  };

  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center border`}>
        <Icon size={24} sm={28} />
      </div>
      <div className="flex-1 pt-1">
        <p className="text-gray-500 text-xs sm:text-sm mb-1">{label}</p>
        <p className="text-white text-sm sm:text-base">{children}</p>
      </div>
    </div>
  );
};
