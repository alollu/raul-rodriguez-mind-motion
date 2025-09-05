import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Trophy, Heart, Users, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Psicología Sanitaria",
      description: "Tratamiento de trastornos de ansiedad, depresión, estrés y otros problemas de salud mental.",
      features: ["Terapia individual", "Evaluación psicológica", "Tratamiento de fobias", "Gestión del estrés"]
    },
    {
      icon: Trophy,
      title: "Psicología Deportiva",
      description: "Optimización del rendimiento deportivo y preparación mental para competiciones.",
      features: ["Preparación mental", "Control de ansiedad pre-competitiva", "Motivación deportiva", "Trabajo en equipo"]
    },
    {
      icon: Heart,
      title: "Bienestar Emocional",
      description: "Desarrollo de habilidades emocionales y mejora de la autoestima y confianza personal.",
      features: ["Inteligencia emocional", "Autoestima", "Habilidades sociales", "Mindfulness"]
    },
    {
      icon: Users,
      title: "Terapia Familiar",
      description: "Resolución de conflictos familiares y mejora de la comunicación en el hogar.",
      features: ["Comunicación familiar", "Resolución de conflictos", "Terapia de pareja", "Orientación parental"]
    },
    {
      icon: Zap,
      title: "Coaching Personal",
      description: "Desarrollo personal y profesional para alcanzar objetivos y maximizar el potencial.",
      features: ["Establecimiento de metas", "Desarrollo de habilidades", "Liderazgo personal", "Cambio de hábitos"]
    },
    {
      icon: Shield,
      title: "Prevención y Promoción",
      description: "Programas de prevención de problemas psicológicos y promoción de la salud mental.",
      features: ["Talleres grupales", "Conferencias", "Programas preventivos", "Educación en salud mental"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Servicios Profesionales
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrezco un enfoque integral y personalizado para tu bienestar mental y rendimiento óptimo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;