import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import profileImage from "./assets/Profile.jpg";
import profileImage2 from "./assets/Profile2.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { Code, Globe, Palette, Smartphone } from "lucide-react";
import RentyClub from "./assets/Rentyclub.png";
import OnsGemak from "./assets/OnsGemak.png";
import roadAlertsystem from "./assets/roadAlertsystem.png";
import organics from "./assets/organics.png";
import Kwik from "./assets/Kwik.png";

const timelineItems = [
  {
    title: "React Native Developer",
    subtitle: "Eleven-it Solution",
    year: "2024 - present",
  },
  {
    title: "React Native Developer",
    subtitle: "Eleven-it Solution",
    year: "2023 - 2024",
  },
  {
    title: "Internship",
    subtitle: "Eleven-it Solution",
    year: "2023 - 6 Months",
  },
];

const educationItems = [
  {
    title: "Bachelor of Science in Information Technology",
    subtitle: "Shree Swaminarayan College of Computer Science",
    year: "2020 - 2023",
  },
  {
    title: "Higher Secondary Education",
    subtitle: "Shree Ekta High School",
    year: "2018 - 2020",
  },
];

const testimonials = [
  {
    name: "Liana Marie",
    role: "Lead Designer Meta",
    image: "/liana.jpg", // replace with actual image
    text: "Financial planners help people gain knowledge about how to invest and save their money. Every plan helps people truly understand financial clarity.",
  },
  {
    name: "Zonathon Doe",
    role: "CEO & Founder X",
    image: "/zonathon.jpg",
    text: "Great to work with Harsh. He delivered a high-quality mobile app with smooth performance and amazing UI. Definitely recommend him!",
  },
  {
    name: "Zonathon Doe",
    role: "CEO & Founder X",
    image: "/zonathon.jpg",
    text: "Great to work with Harsh. He delivered a high-quality mobile app with smooth performance and amazing UI. Definitely recommend him!",
  },
  {
    name: "Zonathon Doe",
    role: "CEO & Founder X",
    image: "/zonathon.jpg",
    text: "Great to work with Harsh. He delivered a high-quality mobile app with smooth performance and amazing UI. Definitely recommend him!",
  },
];

const mockData = {
  personal: {
    name: "Harsh Siddhapura",
    title: "React native Developer",
    tagline: "Crafting Digital Experiences",
    description:
      "I'm Harsh Siddhapura, a freelance Mobile App Developer with experience in building Android and iOS apps using React Native. Also skilled in iOS Native and Flutter for tailored, high-quality solutions. I create seamless, user-friendly apps that stand out in today’s market. Let’s turn your app idea into a powerful reality! 🚀",
    location: "Gujarat, India",
    email: "harshsiddhapura5557@gmail.com",
    profileImage: profileImage,
    profileImage2: profileImage2,
    availability: "Available for freelance",
  },

  skills: [
    { name: "UI/UX Design", level: 95, icon: Palette },
    { name: "Frontend Development", level: 90, icon: Code },
    { name: "Mobile Design", level: 85, icon: Smartphone },
    { name: "Web Development", level: 88, icon: Globe },
  ],

  experience: [
    {
      title: "Senior UI/UX Designer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description: "Leading design initiatives for mobile and web applications",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications using React and Vue.js",
    },
    {
      title: "Junior Designer",
      company: "Creative Studio",
      period: "2019 - 2020",
      description: "Assisted in creating brand identities and digital assets",
    },
  ],

  projects: [
    {
      id: 1,
      title: "RentyClub - Rental Platform",
      category: "App Development",
      description:
        "Built a property rental platform with features like search, filter, and wishlist.Enabled real-time chat functionality for seamless communication with property owners. Integrated Google Maps API for accurate and interactive location tracking",
      image: RentyClub,
      tags: ["React-native", "Firebase", "Chat"],
      link: "#",
    },
    {
      id: 2,
      title: "RoadAlertSystem - real-time incident reporting",
      category: "App Development",
      description:
        "RoadAlertSystem is a real-time incident reporting app designed for drivers. Users can quickly report road incidents such as accidents, hazards, or traffic blocks. All active reports are displayed on a map, allowing others to stay informed. When a driver passes near a reported location, they can mark the incident as resolved if it's cleared—helping keep the map accurate and the roads safer for everyone.",
      image: roadAlertsystem,
      tags: ["React-native", "google map", "redux", "firebase"],
      link: "#",
    },
    {
      id: 3,
      title: "OnsGemak - AI based bill processing app",
      category: "App Development",
      description:
        "OnsGemak is an AI-powered tool that automates invoice and bill management for businesses. Upload a photo or PDF, and the AI extracts all key data instantly — no manual entry needed. Manage, track, and validate invoices with ease, while monitoring your cash flow in real time. Stay organized and in control with this smart, fast, and accurate financial management platform.",
      image: OnsGemak,
      tags: ["React-native", "i18next", "sharing-intent"],
      link: "#",
    },
    {
      id: 4,
      title: "Organics - online grocery retail app",
      category: "App Development",
      description:
        "Organics is an online grocery retail app that connects customers with city-specific, scheduled grocery offerings. The app has two user roles: Admin and Customer. Admins create and activate product charts with prices for specific cities and delivery days. Once a chart is live, customers in that city can place their orders. After the order window closes, the admin downloads a consolidated quantity chart to prepare and deliver the items directly to customers' shops.",
      image: organics,
      tags: ["React-native", "Firebase"],
      link: "#",
    },
    {
      id: 5,
      title: "Kwik Booking - Automotive Service App",
      category: "App Development",
      description:
        "Kwik Booking is a service-based mobile app designed for easy booking of MOT, car wash, and other automotive services. It includes three modules: a Customer App for booking services, a Vendor App for managing service requests, and a Dashboard App for admin control. Users can explore service types, schedule appointments, and track booking status in real time. The platform streamlines vendor-customer interactions, making service management seamless and efficient.",
      image: Kwik,
      tags: ["React-native", "React.js"],
      link: "#",
    },
  ],

  testimonials: [
    {
      name: "Rohan Malhotra",
      role: "Co‑Founder / CTO",
      company: "FitBuddy ‑ Fitness Tracker",
      image:
        "https://images.squarespace-cdn.com/content/v1/5ec689480cc22c2d441e152f/4abb45fb-e456-4079-8076-b40ac0a89dfc/nlalor-photography-2021-06-17-Jason-Cholewa-Headshot-Web-Sized-1.jpg",
      content:
        "Harsh turned our half‑baked Figma into a polished React‑Native app in just six weeks. \
  He owned the entire pipeline — pixel‑perfect UI, smooth animations, and Firebase integration. \
  App launch day, we hit #4 on Product Hunt and onboarded 5 k+ users with zero crashes.",
      rating: 5,
    },
    {
      name: "Priya Nair",
      role: "Operations Lead",
      company: "SafeRoads Logistics",
      image: "https://i.pravatar.cc/150?img=32",
      content:
        "The RoadAlertSystem app reduced incident‑response calls by 40 %. Drivers love the one‑tap report flow and real‑time map updates; we love the rock‑solid Redux + Firebase backend.",
      rating: 4,
    },
    {
      name: "Vincent de Vries",
      role: "CFO",
      company: "Kontinu Consultancy BV",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAhd8vymCIJjDMRxule0X2R85l5aXjrd6TA&s",
      content:
        "Ons Gemak transformed invoice processing for our top clients. Upload‑to‑data in seconds, multi‑language UI, zero downtime — easily the smartest financial tool we’ve rolled out.",
      rating: 5,
    },
    {
      name: "Emily Carter",
      role: "Service Manager",
      company: "RapidAuto Garage",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/93eb3cef-79e1-486c-98d6-fba910e48358/professional-headshot-tips-for-men",
      content:
        "Kwik Booking streamlined our MOT & car‑wash slots. Customers book in two taps, vendors manage queues, and the admin dashboard keeps everything transparent.",
      rating: 3,
    },
  ],
};

const socialLinks = [
  {
    icon: <FaGithub size={24} />,
    href: "https://github.com/harsh-siddhapura-5557",
    label: "GitHub",
    hoverColor: "hover:text-[#6e5494]", // GitHub black
  },
  {
    icon: <FaLinkedinIn size={24} />,
    href: "https://www.linkedin.com/in/harsh-siddhapura-286723258/",
    label: "LinkedIn",
    hoverColor: "hover:text-[#0A66C2]", // LinkedIn blue
  },
  {
    icon: <HiOutlineMail size={24} />,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=harshsiddhapura5557@gmail.com",
    label: "Email",
    hoverColor: "hover:text-[#EA4335]", // Gmail red
  },
  {
    icon: <FaWhatsapp size={24} />,
    href: "https://wa.me/9714475575",
    label: "WhatsApp",
    hoverColor: "hover:text-[#25D366]", // WhatsApp green
  },
];

const services = [
  {
    icon: Smartphone,
    title: "Mobile Design",
    description:
      "Designing mobile-first experiences that work seamlessly across all devices and platforms.",
    features: [
      "iOS & Android",
      "React Native",
      "App Store Guidelines",
      "Performance Optimization",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, fast, and modern web applications using cutting-edge technologies.",
    features: [
      "React & Next.js",
      "Tailwind CSS",
      "Database Design",
      "API Development",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that provide exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "Transforming designs into interactive, high-performance web applications with a focus on user experience.",
    features: [
      "HTML, CSS, JavaScript",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Performance Optimization",
    ],
  },
];

export {
  timelineItems,
  educationItems,
  testimonials,
  mockData,
  socialLinks,
  services,
};
