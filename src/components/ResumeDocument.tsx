import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Globe, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ResumeDocument = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const resumeData = {
    pt: {
      name: "João Silva",
      title: "Desenvolvedor Full Stack Senior",
      contact: {
        email: "joao.silva@email.com",
        phone: "+55 (11) 99999-9999",
        location: "São Paulo, SP",
        github: "github.com/joaosilva",
        linkedin: "linkedin.com/in/joaosilva"
      },
      summary: "Desenvolvedor Full Stack com 5+ anos de experiência criando aplicações web modernas e escaláveis. Especializado em React, Node.js e tecnologias cloud. Apaixonado por código limpo, arquitetura sólida e experiência do usuário excepcional.",
      experience: [
        {
          title: "Desenvolvedor Full Stack Senior",
          company: "Tech Innovations Ltda",
          period: "Jan 2022 - Presente",
          description: [
            "Liderança técnica de equipe de 5 desenvolvedores",
            "Desenvolvimento de aplicações React com TypeScript",
            "Implementação de APIs REST e GraphQL com Node.js",
            "Deploy e manutenção de aplicações na AWS",
            "Melhoria de performance que resultou em 40% menos tempo de carregamento"
          ]
        },
        {
          title: "Desenvolvedor Front-end Pleno",
          company: "Digital Solutions",
          period: "Mar 2020 - Dez 2021",
          description: [
            "Desenvolvimento de interfaces responsivas para 20+ clientes",
            "Integração com APIs RESTful e implementação de estados globais",
            "Otimização de performance e SEO",
            "Mentoria de desenvolvedores juniores"
          ]
        },
        {
          title: "Desenvolvedor Junior",
          company: "StartupTech",
          period: "Jun 2019 - Fev 2020",
          description: [
            "Desenvolvimento de features para plataforma SaaS",
            "Manutenção e correção de bugs em aplicações legacy",
            "Participação ativa em metodologias ágeis (Scrum)"
          ]
        }
      ],
      education: [
        {
          degree: "Bacharelado em Ciência da Computação",
          school: "Universidade de São Paulo (USP)",
          period: "2015 - 2019",
          details: "Formação sólida em algoritmos, estruturas de dados e engenharia de software"
        }
      ],
      skills: {
        frontend: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
        tools: ["Git", "Docker", "AWS", "Jest", "Cypress", "Figma"]
      },
      languages: [
        { language: "Português", level: "Nativo" },
        { language: "Inglês", level: "Avançado" },
        { language: "Espanhol", level: "Intermediário" }
      ]
    },
    en: {
      name: "John Silva",
      title: "Senior Full Stack Developer",
      contact: {
        email: "john.silva@email.com",
        phone: "+55 (11) 99999-9999",
        location: "São Paulo, SP, Brazil",
        github: "github.com/johnsilva",
        linkedin: "linkedin.com/in/johnsilva"
      },
      summary: "Senior Full Stack Developer with 5+ years of experience creating modern and scalable web applications. Specialized in React, Node.js and cloud technologies. Passionate about clean code, solid architecture and exceptional user experience.",
      experience: [
        {
          title: "Senior Full Stack Developer",
          company: "Tech Innovations Ltd",
          period: "Jan 2022 - Present",
          description: [
            "Technical leadership of 5-developer team",
            "React applications development with TypeScript",
            "REST and GraphQL APIs implementation with Node.js",
            "AWS applications deployment and maintenance",
            "Performance improvements resulting in 40% faster loading times"
          ]
        },
        {
          title: "Mid-level Front-end Developer",
          company: "Digital Solutions",
          period: "Mar 2020 - Dec 2021",
          description: [
            "Responsive interface development for 20+ clients",
            "RESTful APIs integration and global state implementation",
            "Performance optimization and SEO",
            "Junior developers mentoring"
          ]
        },
        {
          title: "Junior Developer",
          company: "StartupTech",
          period: "Jun 2019 - Feb 2020",
          description: [
            "Feature development for SaaS platform",
            "Legacy applications maintenance and bug fixes",
            "Active participation in agile methodologies (Scrum)"
          ]
        }
      ],
      education: [
        {
          degree: "Bachelor's in Computer Science",
          school: "University of São Paulo (USP)",
          period: "2015 - 2019",
          details: "Solid formation in algorithms, data structures and software engineering"
        }
      ],
      skills: {
        frontend: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
        tools: ["Git", "Docker", "AWS", "Jest", "Cypress", "Figma"]
      },
      languages: [
        { language: "Portuguese", level: "Native" },
        { language: "English", level: "Advanced" },
        { language: "Spanish", level: "Intermediate" }
      ]
    }
  };

  const currentData = resumeData[language];

  return (
    <section id="resume" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {language === 'pt' ? 'Currículo' : 'Resume'}
          </h2>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant={language === 'pt' ? 'default' : 'outline'}
              onClick={() => setLanguage('pt')}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              Português
            </Button>
            <Button 
              variant={language === 'en' ? 'default' : 'outline'}
              onClick={() => setLanguage('en')}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              English
            </Button>
          </div>
        </div>

        {/* Resume Document */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-glow animate-fade-in">
            {/* Header */}
            <div className="border-b border-border pb-6 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {currentData.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {currentData.title}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{currentData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{currentData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{currentData.contact.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span className="story-link">{currentData.contact.github}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-3">
                {language === 'pt' ? 'Resumo Profissional' : 'Professional Summary'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {currentData.summary}
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-6">
                {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
              </h3>
              <div className="space-y-6">
                {currentData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-6 hover-scale">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                      <span className="text-sm text-accent font-medium">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                {language === 'pt' ? 'Formação Acadêmica' : 'Education'}
              </h3>
              {currentData.education.map((edu, index) => (
                <div key={index} className="hover-scale">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                    <span className="text-sm text-accent font-medium">{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.school}</p>
                  <p className="text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                {language === 'pt' ? 'Habilidades Técnicas' : 'Technical Skills'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Front-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentData.skills.frontend.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Back-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentData.skills.backend.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'pt' ? 'Ferramentas' : 'Tools'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentData.skills.tools.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {language === 'pt' ? 'Idiomas' : 'Languages'}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {currentData.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="text-foreground">{lang.language}</span>
                    <span className="text-primary text-sm font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          
          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 gap-2 animate-glow"
            >
              <Download className="w-5 h-5" />
              {language === 'pt' ? 'Baixar PDF' : 'Download PDF'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDocument;