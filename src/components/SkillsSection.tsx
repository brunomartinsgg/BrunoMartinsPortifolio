const skills = [
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 75 },
  { name: "HTML/CSS", level: 95 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git", level: 80 },
  { name: "SQL", level: 70 },
];

const technologies = [
  "React", "TypeScript", "JavaScript", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Git", "Docker", "AWS",
  "Tailwind CSS", "Next.js", "REST APIs", "GraphQL", "Figma"
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Principais Tecnologias
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: "var(--gradient-primary)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Tags */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Tecnologias & Ferramentas
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
