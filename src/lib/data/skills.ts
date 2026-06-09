export type SkillCategory = "Frontend" | "Backend" | "Mobile" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "HTML / CSS", category: "Frontend" },
  { name: "Styled Components", category: "Frontend" },
  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },
  { name: "Bcrypt", category: "Backend" },
  { name: "Mongoose", category: "Backend" },
  // Mobile
  { name: "React Native", category: "Mobile" },
  { name: "React Navigation", category: "Mobile" },
  // Tools
  { name: "Git / GitHub", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Vite", category: "Tools" },
  { name: "Python", category: "Tools" },
];

export const CATEGORY_COLORS: Record<SkillCategory, string> = {
  Frontend: "text-indigo-300 bg-indigo-500/10 ring-indigo-500/20",
  Backend: "text-emerald-300 bg-emerald-500/10 ring-emerald-500/20",
  Mobile: "text-purple-300 bg-purple-500/10 ring-purple-500/20",
  Tools: "text-amber-300 bg-amber-500/10 ring-amber-500/20",
};
