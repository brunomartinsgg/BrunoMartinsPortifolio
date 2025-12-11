import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { key: "languages" as const, title: "Languages", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { key: "frontend" as const, title: "Frontend", color: "bg-green-500/10 text-green-600 dark:text-green-400" },
  { key: "backend" as const, title: "Backend", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" },
  { key: "databases" as const, title: "Databases", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400" },
  { key: "tools" as const, title: "Tools & Others", color: "bg-pink-500/10 text-pink-600 dark:text-pink-400" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="bg-muted/50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`${category.color} border-0`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
