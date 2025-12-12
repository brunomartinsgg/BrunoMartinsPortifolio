

export const personalInfo = {
  name: "Bruno Martins",
  role: "Estudante de Sistemas de Informação | Aspirante a Cientista de Dados e Back-End",
  subtitle: "Evolução constante na área de tecnologia",
  email: "brunnogomesgg@gmail.com",
  phone: "+55 (82) 99910-7995",
  location: "Penedo-AL",
  linkedin: "https://www.linkedin.com/in/bruno-martinsgomes/",
  github: "https://github.com/brunomartinsgg",
  resumeUrl: "/resume.pdf", // Coloque seu CV na pasta public/
};

export const aboutMe = {
  title: "Sobre",
  subtitle: "Evolução constante na área de tecnologia",
  description: `Sou estudante de Sistemas de Informação na Universidade Federal de Alagoas, com foco em Banco de Dados, Estatística, SQL, Python e BI. Atuo como líder de produção na Usina Caeté – Marituba, onde desenvolvi disciplina, organização e visão de processos. Estou direcionando minha trajetória para as áreas de Dados e Back-End, construindo projetos práticos e fortalecendo meu portfólio. Tenho afinidade com Git/GitHub, modelagem de dados e boas práticas de desenvolvimento. Busco oportunidades para evoluir tecnicamente, entregar soluções de valor e construir uma carreira sólida no setor tecnológico.`,
  highlights: [
    {
      title: "Banco de Dados",
      description: "Modelagem, consultas e otimização",
      icon: "Layers",
    },
    {
      title: "Análise de Dados",
      description: "SQL, Python e uso de bibliotecas de análise",
      icon: "Code",
    },
    {
      title: "Estatística & BI",
      description: "Power BI, Excel e visualização de dados",
      icon: "Lightbulb",
    },
    {
      title: "Boas Práticas",
      description: "Controle de versão e organização de projetos",
      icon: "Users",
    },
  ],
};

export const experiences = [
  {
    id: 1,
    company: "Usina Caeté – Unidade Marituba",
    role: "Líder de Produção",
    period: "Ago 2022 – Presente",
    location: "Igreja Nova – AL",
    description: [
      "Gestão e acompanhamento das operações de ensacamento de açúcar, garantindo produtividade, qualidade e segurança.",
      "Monitoramento de indicadores de desempenho (produção/hora, perdas, falhas operacionais).",
      "Coordenação de equipe e apoio na tomada de decisões em processos industriais.",
      "Colaboração com setores de manutenção e qualidade para resolver problemas de linha e melhorar o fluxo operacional.",
      "Documentação de ocorrências e otimização de processos rotineiros.",
    ],
    techStack: [
      "Gestão de Equipes",
      "Processos Industriais",
      "Análise Operacional",
      "Comunicação",
      "Organização",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Analise_Comercial – SQLite",
    description:
      "Sistema para análise comercial usando SQLite, Python, Pandas e Tkinter, incluindo executável com PyInstaller",
    image: "/placeholder.svg",
    techStack: ["SQLite", "Python", "Pandas", "Tkinter"],
    liveUrl: "",
    githubUrl: "https://github.com/brunomartinsgg/Analise_comercial-SQLite",
    category: "Análise de Dados",
  },
];

export const skills = {
  languages: ["SQL", "Python"],
  frontend: [""],
  backend: ["Aspirante a Back-End"],
  databases: ["Banco de Dados", "Modelagem de Dados"],
  tools: ["Git", "GitHub", "Excel", "Power BI", "Fácil aprendizagem"],
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
