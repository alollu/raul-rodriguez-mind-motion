import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  // Publicaciones destacadas basadas en tu experiencia
  const publications = [
    {
      title: "Gestión de la Ansiedad en el Deporte de Alto Rendimiento",
      excerpt: "Técnicas específicas para atletas que enfrentan presión competitiva y cómo mantener el control emocional durante las competiciones más importantes.",
      date: "2024-02-15",
      category: "Psicología Deportiva",
      readTime: "8 min"
    },
    {
      title: "Trastornos de Ansiedad: Identificación y Tratamiento Temprano",
      excerpt: "Guía completa sobre los diferentes tipos de trastornos de ansiedad, sus síntomas y las estrategias terapéuticas más efectivas basadas en evidencia.",
      date: "2024-01-28",
      category: "Psicología Clínica",
      readTime: "12 min"
    },
    {
      title: "Psicología del Duelo: Acompañando el Proceso de Pérdida",
      excerpt: "Comprende las etapas del duelo y cómo la terapia psicológica puede facilitar un proceso de sanación saludable y adaptativo.",
      date: "2024-01-10",
      category: "Terapia",
      readTime: "10 min"
    },
    {
      title: "Discapacidad Intelectual y Salud Mental: Un Enfoque Integrador",
      excerpt: "Estrategias especializadas para el abordaje terapéutico en personas con discapacidad intelectual, adaptando las técnicas a sus necesidades específicas.",
      date: "2023-12-20",
      category: "Psicología Especializada",
      readTime: "15 min"
    },
    {
      title: "Mindfulness y Karate: La Disciplina Mental en las Artes Marciales",
      excerpt: "Cómo la práctica del karate desarrolla habilidades mentales que pueden aplicarse tanto en el deporte como en la vida cotidiana.",
      date: "2023-11-15",
      category: "Psicología Deportiva",
      readTime: "6 min"
    },
    {
      title: "Intervención Psicológica en Situaciones de Crisis y Emergencias",
      excerpt: "Protocolos y técnicas de intervención inmediata para brindar apoyo psicológico efectivo en momentos críticos.",
      date: "2023-10-30",
      category: "Psicología de Emergencias",
      readTime: "11 min"
    }
  ];

  const stats = [
    { number: "420+", label: "Artículos Publicados" },
    { number: "15+", label: "Años de Experiencia" },
    { number: "130+", label: "Proyectos Completados" },
    { number: "280+", label: "Visitas Mensuales" }
  ];

  return (
    <section id="publicaciones" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Publicaciones y Blog
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comparto conocimiento sobre psicología, salud mental y deporte basado en mi experiencia profesional
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {publications.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {post.readTime} de lectura
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary-foreground hover:bg-primary group/btn"
                    >
                      Leer más 
                      <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="border-primary/20 bg-gradient-to-r from-accent/50 to-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  ¿Quieres acceder a todas mis publicaciones?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Explora más de 420 artículos sobre psicología sanitaria, deportiva, 
                  técnicas terapéuticas y casos clínicos en mi blog completo.
                </p>
                <Button 
                  size="lg"
                  className="gradient-primary text-primary-foreground hover:opacity-90"
                >
                  Ver Todas las Publicaciones
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;