import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AutoGest",
      description:
        "Software para otimizar a gestão de uma autoescola, englobando cadastros de alunos, veículos e instrutores além do controle de aulas.",
      image: "src/assets/autogest.png",
      technologies: ["React", "TailwindCSS", "SQLite", "Express"],
      github:
        "https://github.com/ICEI-PUC-Minas-PMGES-TI/ProjetoReal-AutoEscola",
      featured: true,
    },

    {
      title: "QuickStock",
      description:
        "Sistema para melhorar os processos de gestão de estoque em pequenas empresas, proporcionando uma solução eficiente que minimize desperdícios e garanta a disponibilidade de produtos.",
      image: "src/assets/quickstock.png",
      technologies: ["React", "Node.js", "SQLite", "TypeScript"],
      github:
        "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-2-ti2-3687100-quickstock.git",
      featured: true,
    },

    {
      title: "Pluszzle",
      description:
        "um site de jogos diários em português, trazendo desafios como Cruzadinha, Descubra a Palavra e Sudoku.",
      image: "/figmas/pluszzle.png",
      technologies: ["TypeScript", "Next.js", "React", "Node.js"],
      github: "https://github.com/TiagoBoavAmaral/pluszzle.git",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">
            Projetos em Destaque
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-2 flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
      </div>
    </section>
  );
};

export default Projects;
