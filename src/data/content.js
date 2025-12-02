// ============================================
// DATA/CONTENT.JS
// Toutes les données du site centralisées
// ============================================

export const translations = {
  en: {
    status: "OPEN FOR WORK",
    hero_1: "Creative",
    hero_2: "Developer",
    hero_3: "Portfolio",
    hero_desc: {
      text: "Specialized in",
      highlight1: "JavaScript",
      middle: "ecosystems and",
      highlight2: "WebGL",
      end: ". I build accessible, pixel-perfect, and performant web experiences.",
    },
    stack_label: "POWERED BY:",
    label_expertise: "01 / EXPERTISE",
    bio: {
      text: "My goal is to bridge the gap between",
      highlight1: "Design",
      middle: "and",
      highlight2: "Engineering",
      end: ". I pay close attention to micro-interactions and layout precision to elevate user trust.",
    },
    resume: "Download Resume",
    core_tech: "CORE TECHNOLOGIES",
    label_projects: "02 / SELECTED WORKS",
    role_dev: "Development / React",
    role_full: "Fullstack / Next.js",
    role_creat: "Creative / WebGL",
    label_contact: "03 / CONTACT",
    idea: "Have an idea?",
    talk: "Let's Talk",
    meta: {
      title: "Anas Bouarramou | Creative Developer",
      description:
        "Anas Bouarramou - Creative Developer specializing in modern web and mobile experiences. Portfolio showcasing development projects and technical expertise.",
    },
  },
  fr: {
    status: "DISPONIBLE",
    hero_1: "Développeur",
    hero_2: "Créatif",
    hero_3: "Portfolio",
    hero_desc: {
      text: "Spécialisé en écosystèmes",
      highlight1: "JavaScript",
      middle: "et",
      highlight2: "WebGL",
      end: ". Je conçois des expériences web et mobile accessibles, performantes et soignées.",
    },
    stack_label: "PROPULSÉ PAR :",
    label_expertise: "01 / EXPERTISE",
    bio: {
      text: "Mon objectif est de combler le fossé entre",
      highlight1: "Design",
      middle: "et",
      highlight2: "Ingénierie",
      end: ". J'accorde une attention particulière aux micro-interactions et à la précision pour renforcer la confiance utilisateur.",
    },
    resume: "Télécharger CV",
    core_tech: "TECHNOLOGIES CLÉS",
    label_projects: "02 / PROJETS",
    role_dev: "Développement / React",
    role_full: "Fullstack / Next.js",
    role_creat: "Créatif / WebGL",
    label_contact: "03 / CONTACT",
    idea: "Vous avez un projet ?",
    talk: "Discutons-en",
    meta: {
      title: "Anas Bouarramou | Développeur Créatif",
      description:
        "Anas Bouarramou - Développeur créatif spécialisé dans les expériences web modernes. Portfolio présentant des projets de développement et une expertise technique.",
    },
  },
};

export const projects = [
  {
    id: 1,
    name: "Video Maker Portfolio",
    role: "role_dev",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000",
    url: "#",
  },
  {
    id: 2,
    name: "Real estate agency website",
    role: "role_dev",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=1000",
    url: "#",
  },
  {
    id: 3,
    name: "Test 3",
    role: "role_creat",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
    url: "#",
  },
];

export const technologies = [
  { name: "JavaScript", icon: "javascript" },
  { name: "React / Next", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Three.js", icon: "threejs" },
  { name: "Figma", icon: "figma" },
  { name: "Git", icon: "git" },
];

export const socialLinks = [
  { name: "LinkedIn", url: "#", ariaLabel: "Visit LinkedIn profile" },
  { name: "GitHub", url: "#", ariaLabel: "Visit GitHub profile" },
  { name: "Twitter", url: "#", ariaLabel: "Visit Twitter profile" },
];

export const siteConfig = {
  name: "Anas Bouarramou",
  logo: "ANAS.B",
  email: "contact@anasbouarramou.com",
  url: "https://anasb.com",
};
