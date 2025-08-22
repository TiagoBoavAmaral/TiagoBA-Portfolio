import profilePhoto from "@/assets/profile-photo.jpg";
import codingGif from "@/assets/coding-background.gif";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Code,
  Palette,
  Server,
  Database,
} from "lucide-react";

const Home = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://br.linkedin.com/in/tiago-boaventura-amaral-420399304",
    },
    { name: "GitHub", icon: Github, url: "https://github.com/TiagoBoavAmaral" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated GIF Background */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${codingGif})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  Tiago Boaventura
                </h1>
                <h2 className="text-2xl lg:text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold mb-6">
                  Estudante de Engenharia de Software
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                Olá! Meu nome é Tiago, tenho 19 anos e atualmente moro em Belo Horizonte, Minas Gerais.
                Sou estudante de Engenharia de Software na PUC Minas e estou cursando o quarto período. Tenho grande interesse na área de tecnologia e estou me dedicando aos estudos de programação para desenvolver minhas habilidades e construir uma carreira sólida na área.
                </p>

                <p>
                Tenho buscado constantemente novos conhecimentos, sempre explorando ferramentas e linguagens que me ajudem a evoluir como desenvolvedor.
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Belo Horizonte, Brasil</span>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    to={social.url}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-2xl blur-xl transform rotate-6"></div>

                {/* Profile Photo Container */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden border border-border/20 bg-gradient-to-br from-primary/20 to-accent/20 animate-float shadow-strong">
                  <img
                    src={profilePhoto}
                    alt="Foto de perfil profissional"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Specialties Section */}
          <div className="mt-12 space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Especialidades
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-medium text-primary">Frontend</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  React, TypeScript, Next.js, Tailwind CSS
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="w-6 h-6 text-accent" />
                  <h4 className="text-lg font-medium text-accent">Backend</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Node.js, Python, Java, SQLite, C.
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-medium text-primary">
                    Ferramentas
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  GitHub, Git, VSCode...
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-accent" />
                  <h4 className="text-lg font-medium text-accent">Design</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  UI/UX, Figma, Design Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
