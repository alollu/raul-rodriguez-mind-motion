import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Clock } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formación Académica",
      description: "Licenciado en Psicología (UAM), Máster en Psicología del Deporte, Recursos Humanos e Integración"
    },
    {
      icon: Award,
      title: "Experiencia Deportiva",
      description: "5º Dan en Karate y Técnico Deportivo Nivel I de la Federación Madrileña de Karate"
    },
    {
      icon: Users,
      title: "Especialización Clínica",
      description: "Experto en ansiedad, duelo, trauma, discapacidad intelectual y emergencias psicológicas"
    },
    {
      icon: Clock,
      title: "Modalidad de Trabajo",
      description: "Psicólogo freelance a domicilio con consultas presenciales y online personalizadas"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Mi Experiencia Profesional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Más de 15 años dedicado a la salud mental y el bienestar
          </p>
        </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Mi Compromiso Contigo
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Como Psicólogo General Sanitario colegiado con más de 15 años de experiencia, 
                  mi compromiso es ofrecer un tratamiento integral que combine la evidencia científica 
                  con un enfoque humano y personalizado.
                </p>
                <p>
                  Mi formación incluye Licenciatura en Psicología (UAM), Máster en Psicología del Deporte, 
                  Máster en Recursos Humanos y Máster en Integración de Personas con Discapacidad. 
                  Como 5º Dan en Karate y Técnico Deportivo Nivel I, aporto una perspectiva única 
                  que integra disciplina deportiva y bienestar mental.
                </p>
                <p>
                  Especializado en trastornos de ansiedad, intervención en duelo y trauma, 
                  discapacidad intelectual y optimización del rendimiento deportivo. 
                  Actualmente ofrezco terapia presencial y online con un enfoque flexible y actualizado.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <Card className="border-primary/20 shadow-xl">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6 text-primary text-center">
                    Mi Filosofía
                  </h4>
                  <blockquote className="text-center italic text-muted-foreground">
                    "La mente es el músculo más poderoso que tenemos. Cuando la entrenamos 
                    correctamente, podemos lograr cualquier objetivo que nos propongamos."
                  </blockquote>
                  <div className="text-center mt-4">
                    <p className="font-semibold text-primary">Raúl Rodríguez Otero</p>
                    <p className="text-sm text-muted-foreground">Psicólogo Sanitario y Deportivo</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon;
              return (
                <Card key={index} className="text-center border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">{credential.title}</h4>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;