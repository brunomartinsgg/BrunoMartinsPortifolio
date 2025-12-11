// ========================================
// DADOS DO PORTFÓLIO - EDITE AQUI!
// ========================================

export const personalInfo = {
  name: "Bruno Martins",
  role: "Software Engineer",
  subtitle: "Building innovative solutions with modern technologies",
  email: "seu.email@exemplo.com",
  phone: "+55 (11) 99999-9999",
  location: "São Paulo, Brazil",
  linkedin: "https://linkedin.com/in/seu-perfil",
  github: "https://github.com/seu-usuario",
  resumeUrl: "/resume.pdf", // Coloque seu CV na pasta public/
};

export const aboutMe = {
  title: "About Me",
  subtitle: "My Journey",
  description: `I am a passionate Software Engineer with experience in building modern web applications. 
  My journey in tech began with a curiosity about how software could solve complex problems, 
  leading me to pursue a career where I've developed applications that deliver real business value.
  
  I'm constantly learning and improving my skills, staying up-to-date with the latest technologies 
  and best practices in software development.`,
  highlights: [
    {
      title: "Software Engineering",
      description: "Experience in building enterprise software",
      icon: "Code",
    },
    {
      title: "Full Stack Development",
      description: "End-to-end development from UI/UX to backend systems",
      icon: "Layers",
    },
    {
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions",
      icon: "Lightbulb",
    },
    {
      title: "Team Collaboration",
      description: "Effective communication and teamwork",
      icon: "Users",
    },
  ],
};

export const experiences = [
  {
    id: 1,
    company: "Nome da Empresa",
    role: "Software Engineer",
    period: "Jan 2023 - Present",
    location: "São Paulo, Brazil",
    description: [
      "Desenvolvi aplicações web modernas usando React e TypeScript",
      "Implementei APIs RESTful com Node.js e Express",
      "Colaborei com equipes multidisciplinares em projetos ágeis",
    ],
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    company: "Outra Empresa",
    role: "Junior Developer",
    period: "Jun 2021 - Dec 2022",
    location: "São Paulo, Brazil",
    description: [
      "Participei do desenvolvimento de sistemas internos",
      "Aprendi boas práticas de desenvolvimento de software",
      "Contribuí para a melhoria contínua dos processos",
    ],
    techStack: ["JavaScript", "React", "CSS", "Git"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição do seu projeto incrível. Explique o que ele faz e qual problema resolve.",
    image: "https://via.placeholder.com/400x250", // Substitua pela sua imagem
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://seu-projeto.com",
    githubUrl: "https://github.com/seu-usuario/projeto",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Outro projeto interessante que você desenvolveu.",
    image: "https://via.placeholder.com/400x250",
    techStack: ["Node.js", "Express", "MongoDB"],
    liveUrl: "https://outro-projeto.com",
    githubUrl: "https://github.com/seu-usuario/outro-projeto",
    category: "Backend",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Mais um projeto para mostrar suas habilidades.",
    image: "https://via.placeholder.com/400x250",
    techStack: ["Python", "FastAPI", "PostgreSQL"],
    liveUrl: "",
    githubUrl: "https://github.com/seu-usuario/projeto-3",
    category: "Backend",
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java"],
  frontend: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Node.js", "Express", "FastAPI", "Spring Boot"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  tools: ["Git", "Docker", "AWS", "Linux", "VS Code"],
};

export const education = [
  {
    id: 1,
    institution: "Universidade XYZ",
    degree: "Bacharelado em Ciência da Computação",
    period: "2018 - 2022",
    location: "São Paulo, Brazil",
  },
];

export const certifications = [
  {
    id: 1,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://link-do-certificado.com",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
