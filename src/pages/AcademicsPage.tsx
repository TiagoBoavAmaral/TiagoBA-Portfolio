import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import codingGif from "@/assets/coding-background.gif";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AcademicsPage = () => {
  const firstSemesterCourses = [
    { name: "Algoritmos e Estruturas de Dados I", hours: 120, modality: "Presencial", grade: 96 },
    { name: "Cálculo I", hours: 80, modality: "Presencial", grade: 68 },
    { name: "Desenvolvimento de Interface Web", hours: 80, modality: "Híbrido", grade: 96 },
    { name: "Fundamentos de Engenharia de Software", hours: 80, modality: "Presencial", grade: 90 },
    { name: "Introdução à Computação", hours: 70, modality: "Híbrido", grade: 85 },
    { name: "Projeto Interdisciplinar: Aplicações Web", hours: 50, modality: "Presencial", grade: 98 },
  ];

  const secondSemesterCourses = [
    { name: "Arquitetura de Computadores", hours: 40, modality: "Presencial", grade: 94 },
    { name: "Banco de Dados", hours: 80, modality: "Híbrido", grade: 95 },
    { name: "Cálculo II", hours: 80, modality: "Presencial", grade: null },
    { name: "Filosofia: Razão e Modernidade", hours: 40, modality: "Presencial", grade: 80 },
    { name: "Laboratório de Programação Modular", hours: 40, modality: "Presencial", grade: 89 },
    { name: "Modelagem de Processos de Negócio", hours: 60, modality: "Híbrido", grade: 92 },
    { name: "Programação Modular", hours: 80, modality: "Presencial", grade: 92 },
    { name: "Projeto Interdisciplinar: Aplicações de Processos de Negócio", hours: 50, modality: "Presencial", grade: 93 },
  ];

  const firstSemesterStats = {
    totalHours: 480,
    completedHours: 480,
    gradeAvg: 89
  };

  const secondSemesterStats = {
    totalHours: 470,
    completedHours: 390,
    gradeAvg: 91
  };

  const progressPercentage = 64;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated GIF Background */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${codingGif})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/95" />
      
      <div className="relative z-10 py-12 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">ACADEMICS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Check my grades
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A detailed list of all courses and grades from my Software
            Engineering degree at PUC Minas.
          </p>
        </div>

        {/* Progress Timeline */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">Janeiro 2023</span>
            <span className="text-sm font-semibold text-orange-400">Julho 2025</span>
            <span className="text-sm text-muted-foreground">Dezembro 2026</span>
          </div>
          <Progress value={progressPercentage} className="h-2 mb-2" />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">{progressPercentage}% completo</span>
            <span className="text-sm text-muted-foreground">~18 meses restantes</span>
          </div>
        </div>

        {/* Semesters Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1st Semester */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/30">
            <h2 className="text-2xl font-bold text-foreground mb-6">1º Semestre</h2>
            
            <Table>
              <TableHeader>
                <TableRow className="border-border/20">
                  <TableHead className="text-muted-foreground">Nome</TableHead>
                  <TableHead className="text-muted-foreground text-center">Horas</TableHead>
                  <TableHead className="text-muted-foreground text-center">Modalidade</TableHead>
                  <TableHead className="text-muted-foreground text-center">Nota</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {firstSemesterCourses.map((course, index) => (
                  <TableRow key={index} className="border-border/10">
                    <TableCell className="font-medium">{course.name}</TableCell>
                    <TableCell className="text-center">{course.hours}</TableCell>
                    <TableCell className="text-center">{course.modality}</TableCell>
                    <TableCell className="text-center font-semibold">{course.grade}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-orange-400 font-bold text-lg">Horas</p>
                <p className="text-foreground text-sm">{firstSemesterStats.completedHours}/{firstSemesterStats.totalHours}</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-orange-400 font-bold text-lg">Média</p>
                <p className="text-foreground text-sm">{firstSemesterStats.gradeAvg}/100</p>
              </div>
            </div>
          </Card>

          {/* 2nd Semester */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/30">
            <h2 className="text-2xl font-bold text-foreground mb-6">2º Semestre</h2>
            
            <Table>
              <TableHeader>
                <TableRow className="border-border/20">
                  <TableHead className="text-muted-foreground">Nome</TableHead>
                  <TableHead className="text-muted-foreground text-center">Horas</TableHead>
                  <TableHead className="text-muted-foreground text-center">Modalidade</TableHead>
                  <TableHead className="text-muted-foreground text-center">Nota</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {secondSemesterCourses.map((course, index) => (
                  <TableRow key={index} className="border-border/10">
                    <TableCell className="font-medium">{course.name}</TableCell>
                    <TableCell className="text-center">{course.hours}</TableCell>
                    <TableCell className="text-center">{course.modality}</TableCell>
                    <TableCell className="text-center font-semibold">
                      {course.grade || "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-orange-400 font-bold text-lg">Horas</p>
                <p className="text-foreground text-sm">{secondSemesterStats.completedHours}/{secondSemesterStats.totalHours}</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-orange-400 font-bold text-lg">Média</p>
                <p className="text-foreground text-sm">{secondSemesterStats.gradeAvg}/100</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;