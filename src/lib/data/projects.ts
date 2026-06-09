import type { Project } from "@/types";

export const projects: (Project & { caseStudySlug?: string })[] = [
  {
    id: 1,
    title: "iClothes E-commerce",
    description:
      "Full-stack e-commerce platform with secure JWT auth, cart management, and a MongoDB/Express backend. Deployed on Vercel.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Express", "JWT", "Axios"],
    imageUrl: "/images/iClothes.png",
    link: "https://iclothes.vercel.app",
    caseStudySlug: "iclothes",
    featured: true,
  },
  {
    id: 2,
    title: "Movideux",
    description:
      "Netflix-style movie platform. Users can browse, search, and discover films via a dynamic, data-driven interface.",
    technologies: ["React", "Node.js", "React Router", "REST API"],
    imageUrl: "/images/moviedux.png",
    link: "https://github.com/rayancmorais/moviedeux",
  },
  {
    id: 3,
    title: "Chronos — Pomodoro Timer",
    description:
      "Web-based Pomodoro timer designed to help users manage focus intervals and breaks for maximum productivity.",
    technologies: ["React", "JavaScript", "CSS"],
    imageUrl: "/images/chronos2.png",
    link: "https://github.com/rayancmorais/chronos-pomodoro",
  },
  {
    id: 4,
    title: "Map Tracker",
    description:
      "Cross-platform mobile app with real-time GPS tracking, secure authentication, and a Node.js/MongoDB backend.",
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "React Navigation"],
    imageUrl: "/images/Gemini_Generated_Image_e3h9zhe3h9zhe3h9.png",
    link: "https://github.com/rayancmorais/tracks_reactNative",
  },
  {
    id: 5,
    title: "Portfolio Landing Page",
    description:
      "Personal portfolio built to showcase projects, skills, and professional experience with multilingual support.",
    technologies: ["React", "Vite", "i18next", "Styled Components"],
    imageUrl: "/images/website.png",
    link: "https://github.com/rayancmorais/myportfolioficial",
  },
];
