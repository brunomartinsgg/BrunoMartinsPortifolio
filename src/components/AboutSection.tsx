import { Code2, Database, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Experiência em criar aplicações web modernas e responsivas",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Conhecimento em APIs, bancos de dados e arquitetura",
  },
  {
    icon: Lightbulb,
    title: "Aprendizado",
    description: "Sempre buscando novas tecnologias e melhores práticas",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho em equipe e comunicação efetiva",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              Minha Jornada
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e inovação. 
              Minha jornada no mundo da programação começou com a curiosidade 
              de entender como as coisas funcionam por trás das telas.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Atualmente, estou focado em expandir meus conhecimentos em 
              desenvolvimento web full stack, trabalhando com tecnologias 
              modernas como React, TypeScript e Node.js.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Além da programação, acredito na importância de criar 
              soluções que realmente impactem a vida das pessoas, 
              sempre priorizando a experiência do usuário e boas práticas 
              de desenvolvimento.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
