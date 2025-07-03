import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { mockData, socialLinks } from "../personalData";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

/* animations unchanged */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

export const ContactSection = () => {
  /* ---------- state & handlers (unchanged) ---------- */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /* EmailJS params (unchanged) */
  const ownerParams = {
    to_email: "harshsiddhapura5557@gmail.com",
    from_name: formData.name,
    from_email: formData.email,
    reply_to: formData.email,
    subject: formData.subject,
    message: formData.message,
  };
  const clientParams = {
    from_name: "Harsh Siddhapura",
    from_email: "harshsiddhapura5557@gmail.com",
    to_email: formData.email,
    subject: `Thank you for contacting us, ${formData.name}!`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        ownerParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CLIENT,
        clientParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully! 🎉");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(err?.text || "Oops! Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    /* ① overflow-x-hidden guards against any tiny overflow */
    <section
      id="contact"
      className="py-16 md:py-20 bg-gray-900 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Toaster position="top-center" />

        {/* ---------- Heading ---------- */}
        <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I’d love to hear about it. Send a message
            and let’s create something amazing!
          </p>
        </motion.div>

        {/* ---------- Grid ---------- */}
        {/* ② gap only vertical on small screens */}
        <div className="grid gap-y-10 sm:gap-x-6 lg:gap-x-12 lg:grid-cols-2 overflow-x-hidden">
          {/* ===== Contact Form ===== */}
          <motion.div
            {...slideInLeft}
            className="w-full min-w-0 bg-gray-800/60 backdrop-blur-sm rounded-3xl
               p-6 sm:p-8 border border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                />
              </div>
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="How can we help you?"
              />
              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <SubmitButton sending={sending} />
            </form>
          </motion.div>

          {/* ===== Info + Social ===== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8 w-full min-w-0"
          >
            {/* Info card */}
            <div
              className="w-full min-w-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20
                    rounded-3xl p-6 sm:p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-5">
                <InfoRow Icon={Phone} label="Phone" color="yellow">
                  <a href="tel:+919714475575" className="hover:underline">
                    +91 97144 75575
                  </a>
                </InfoRow>
                <InfoRow Icon={Mail} label="Email" color="purple">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=harshsiddhapura5557@gmail.com"
                    className="hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {mockData.personal.email}
                  </a>
                </InfoRow>
                <InfoRow Icon={MapPin} label="Location" color="blue">
                  {mockData.personal.location}
                </InfoRow>
                <InfoRow
                  Icon={MessageCircle}
                  label="Response Time"
                  color="green"
                >
                  Usually within 24 hours
                </InfoRow>
              </div>
            </div>

            {/* Socials */}
            <div
              className="w-full min-w-0 bg-gray-800/60 backdrop-blur-sm rounded-3xl
                    p-6 sm:p-8 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ icon, href, label }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 transition-all"
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

/* ---------- tiny reusable inputs ---------- */
const baseInput =
  "w-full bg-gray-700/70 border border-gray-500/40 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 outline-none transition-colors";

const Input = ({ label, ...rest }) => (
  <div>
    <label className="block text-white mb-2">{label}</label>
    <input
      className={baseInput}
      placeholder={rest.placeholder || label}
      required
      {...rest}
    />
  </div>
);

const Textarea = ({ label, ...rest }) => (
  <div>
    <label className="block text-white mb-2">{label}</label>
    <textarea
      rows={5}
      className={`${baseInput} resize-none`}
      required
      {...rest}
    />
  </div>
);

const SubmitButton = ({ sending }) => (
  <motion.button
    type="submit"
    disabled={sending}
    whileHover={{ scale: sending ? 1 : 1.02 }}
    whileTap={{ scale: sending ? 1 : 0.97 }}
    className={`w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
      sending ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
    }`}
  >
    {sending ? "Sending…" : "Send Message"} <ArrowRight size={18} />
  </motion.button>
);

/* ---------- Info row helper ---------- */
/* ---------- updated InfoRow helper ---------- */
const InfoRow = ({ Icon, label, color, children }) => (
  <div className="flex items-start gap-4">
    {/* icon box – keeps its width */}
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center bg-${color}-500/20`}
    >
      <Icon size={20} className={`text-${color}-400`} />
    </div>

    {/* text column – can shrink & wrap */}
    <div className="flex-1 min-w-0">
      <p className="text-gray-400">{label}</p>
      <p className="text-white break-all">{children}</p> {/* break-all here */}
    </div>
  </div>
);
