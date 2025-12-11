import { Code, Layers, Lightbulb, Users } from "lucide-react";
import { aboutMe } from "@/data/portfolio";
import avatarImage from "@/assets/avatar.png";

const iconMap: Record<string, React.ElementType> = {
  Code: Code,
  Layers: Layers,
  Lightbulb: Lightbulb,
  Users: Users,
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {aboutMe.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                {/* Substitua esta imagem em src/assets/avatar.png pela sua foto */}
                <img
                  src={avatarImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 border-2 border-primary rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {aboutMe.subtitle}
            </h3>
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
              {aboutMe.description}
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutMe.highlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon] || Code;
                return (
                  <div
                    key={index}
                    className="p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
