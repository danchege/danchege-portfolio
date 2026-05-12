// ============================================================
//  portfolioData.js  —  Single source of truth for all content
// ============================================================

import {
  FaWrench,
  FaShieldHalved,
  FaSeedling,
  FaHandshake,
  FaGraduationCap,
  FaCode,
  FaRobot,
  FaLeaf,
  FaGamepad,
  FaComments,
  FaBrain,
  FaCalendarDays,
  FaFlask,
  FaDownload,
  FaFileCode,
  FaDatabase,
} from "react-icons/fa6";

export const PERSONAL = {
  name: "Daniel Chege",
  initials: "DC",
  taglines: [
    "Software Developer",
    "Full-Stack MERN Developer",
    "Cyber Security Enthusiast",
    "Web Designer",
    "Tech Innovator",
  ],
  bio: `I'm a self-driven developer with a strong foundation in full-stack development
using the MERN stack. I build lightweight, efficient applications focused on
solving real-world problems and enhancing user experience. Beyond development,
I have a keen interest in cybersecurity — with hands-on knowledge in ethical hacking
and penetration testing. Comfortable in both Linux and Windows environments, I'm
constantly exploring new technologies and committed to continuous learning.`,
  location: "Nairobi, Kenya",
  email: "danychege28@gmail.com",
  phone: "+254 716 563 774",
  github: "https://github.com/danchege",
  linkedin: "https://www.linkedin.com/in/dan-chege-296b56351/",
  twitter: "https://twitter.com/dan_chege_",
  facebook: "https://www.facebook.com/danny.chei.1",
  whatsapp: "https://wa.me/254716563774",
  cvUrl: "/Daniel Chege cv.pdf",
  emailjsServiceId: "service_jwceu8t",
  emailjsTemplateId: "template_ycqpqm9",
  emailjsPublicKey: "-qO9nsFXC7nNbxi74",
};

export const STATS = [
  { number: "25+", label: "Projects Built" },
  { number: "3+", label: "Certifications" },
  { number: "10+", label: "Technologies" },
  { number: "3+", label: "Years Experience" },
];

export const TRAITS = [
  { icon: FaWrench, title: "Problem Solver", desc: "I build lightweight, efficient apps focused on solving real-world challenges." },
  { icon: FaShieldHalved, title: "Security Mindset", desc: "Hands-on experience in ethical hacking and penetration testing." },
  { icon: FaSeedling, title: "Continuous Learner", desc: "Always exploring new technologies and committed to constant growth." },
  { icon: FaHandshake, title: "Community Driven", desc: "Building tools that bring people together and empower communities." },
];

export const EDUCATION = [
  {
    icon: FaGraduationCap,
    degree: "BSc. Community Health & Development",
    institution: "Jaramogi Oginga Odinga University of Science and Technology",
    period: "2016 – 2020",
    description:
      "Studied epidemiology, health communication, project management, and environmental health — building a strong foundation in community-centred problem solving.",
  },
  {
    icon: FaShieldHalved,
    degree: "Cyber Security Certification",
    institution: "Alison Academy",
    period: "2023",
    description:
      "Specialized training in modern cyber security practices, penetration testing, ethical hacking, cyber threats and prevention against attacks.",
  },
  {
    icon: FaCode,
    degree: "Software Development Certification",
    institution: "PLP Academy",
    period: "2024 – 2025",
    description:
      "Specialized in Full-Stack MERN, Python, Database Design, SQL, Web Development, Git & GitHub, and modern programming practices.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Alchemist",
    icon: FaFlask,
    tag: "Data",
    category: "Data Science / Web Tool",
    description:
      "A web-based data cleaning and transformation tool built with Python Flask backend and modern JavaScript frontend. Upload, clean, transform, visualize, and export datasets from CSV, Excel, JSON, and SQLite with session management and case-insensitive filtering.",
    demo: "https://alchemist-6qfo.onrender.com/",
    github: "https://github.com/danchege/Alchemist",
    stack: ["Python", "Flask", "JavaScript", "Data Processing"],
    featured: true,
  },
  {
    id: 2,
    name: "Ultimate YouTube Downloader",
    icon: FaDownload,
    tag: "Desktop",
    category: "Desktop Application / Python",
    description:
      "A powerful, modern YouTube downloader with a beautiful dark/light mode interface, built with Python and Tkinter. Features download history, statistics tracking, system notifications, and advanced download options. Used by many users - available as executable download from releases.",
    demo: "#",
    github: "https://github.com/danchege/youtube_downloader",
    stack: ["Python", "Tkinter", "Desktop App", "GUI"],
    featured: true,
  },
  {
    id: 3,
    name: "YT ULTIMATE DOWNLOADER",
    icon: FaFileCode,
    tag: "Script",
    category: "Windows Script / Automation",
    description:
      "A powerful, user-friendly Windows batch script for downloading YouTube videos and audio with advanced features and automatic dependency management. Lightweight and efficient solution for YouTube content downloading.",
    demo: "#",
    github: "https://github.com/danchege/YT-ULTIMATE-DOWNLOADER",
    stack: ["Batch Script", "Windows", "Automation", "CLI"],
    featured: true,
  },
  {
    id: 4,
    name: "Aegis",
    icon: FaShieldHalved,
    tag: "Security",
    category: "Security / Web Tool",
    description:
      "Aegis is a minimal, production-grade, browser-based encryption tool. All cryptographic operations are performed entirely in your browser using Web Crypto API. No data ever leaves your device, ensuring complete privacy and security.",
    demo: "#",
    github: "https://github.com/danchege/Aegis-2.0",
    stack: ["JavaScript", "Web Crypto API", "Browser", "Security"],
    featured: true,
  },
  {
    id: 5,
    name: "MySQL Navigator",
    icon: FaDatabase,
    tag: "Database",
    category: "Database / Desktop Application",
    description:
      "A modern, GUI-based MySQL management tool built with Python, Tkinter, and ttkbootstrap. Designed as a clean replacement for legacy batch scripts and command-line workflows, providing a professional desktop application similar in spirit to MySQL Workbench.",
    demo: "#",
    github: "https://github.com/danchege/mysql_python_navigator",
    stack: ["Python", "Tkinter", "MySQL", "GUI"],
    featured: true,
  },
  {
    id: 6,
    name: "Farmbot",
    icon: FaRobot,
    tag: "AI",
    category: "AI / Agriculture",
    description:
      "A modern interactive live bot that helps farmers manage their farms, featuring a clean design and smooth user experience.",
    demo: "https://farm-bot.vercel.app/",
    github: "https://github.com/danchege/FarmBot.git",
    stack: ["React", "Node.js", "AI/NLP"],
    featured: true,
  },
  {
    id: 7,
    name: "Tushikane",
    icon: FaHandshake,
    tag: "Full-Stack",
    category: "Community / Full-Stack",
    description:
      "A full-stack web application connecting volunteers, donors, and community members to support humanitarian initiatives and community projects.",
    demo: "http://tushikane.vercel.app/",
    github: "https://github.com/danchege/Tushikane.git",
    stack: ["MERN Stack", "Vercel"],
    featured: true,
  },
  {
    id: 8,
    name: "AgriConnect",
    icon: FaLeaf,
    tag: "Platform",
    category: "Agriculture / Platform",
    description:
      "A platform that bridges the gap between farmers and markets, enabling direct trade and cutting out unnecessary middlemen.",
    demo: "https://agriconnect-e8ef7.web.app/",
    github: "https://github.com/danchege",
    stack: ["Firebase", "React", "Marketplace"],
    featured: true,
  },
  {
    id: 9,
    name: "CtrlZone",
    icon: FaGamepad,
    tag: "Web",
    category: "Gaming / Web",
    description:
      "CtrlZone Gaming Center website — a vibrant, fully responsive site for a modern gaming center business.",
    demo: "https://ctrlzone-ac391.web.app/",
    github: "https://github.com/danchege",
    stack: ["Firebase", "HTML/CSS/JS"],
    featured: false,
  },
  {
    id: 10,
    name: "Dev Dan Mingle",
    icon: FaComments,
    tag: "Real-time",
    category: "Chat / Real-time",
    description:
      "A responsive web chat for peer interaction and discussions, built for developer communities.",
    demo: "https://dev-dan-mingle.web.app/",
    github: "https://github.com/danchege",
    stack: ["Firebase", "Real-time DB", "React"],
    featured: false,
  },
  {
    id: 11,
    name: "Dev Quiz",
    icon: FaBrain,
    tag: "Education",
    category: "Education / Frontend",
    description:
      "A frontend-based quiz platform for learners to test their knowledge in web development topics.",
    demo: "https://danchege.github.io/dev-quiz/",
    github: "https://github.com/danchege/dev-quiz.git",
    stack: ["JavaScript", "HTML", "CSS"],
    featured: false,
  },
  {
    id: 12,
    name: "Study Plan Generator",
    icon: FaCalendarDays,
    tag: "Tools",
    category: "Productivity / Tools",
    description:
      "A study planner that helps schedule studies with a modern design and alerts users on upcoming events.",
    demo: "https://danchege.github.io/my-study-planner/",
    github: "https://github.com/danchege",
    stack: ["JavaScript", "LocalStorage", "CSS"],
    featured: false,
  },
];

export const SKILLS = {
  Frontend: [
    { name: "HTML5", level: 92 },
    { name: "CSS3", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 78 },
  ],
  Backend: [
    { name: "Node.js", level: 78 },
    { name: "Python", level: 72 },
    { name: "SQL", level: 75 },
    { name: "MongoDB", level: 76 },
    { name: "Express.js", level: 78 },
  ],
  "Tools & Platforms": [
    { name: "Git & GitHub", level: 88 },
    { name: "Linux", level: 80 },
    { name: "Firebase", level: 74 },
    { name: "Supabase", level: 68 },
    { name: "Cyber Security", level: 70 },
  ],
};

export const NAV_ITEMS = ["Home", "About", "Education", "Projects", "Skills", "Contact"];
