import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Clock } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formación Académica",
      description: "Licenciado en Psicología con especialización en Psicología Sanitaria y Deportiva"
    },
    {
      icon: Award,
      title: "Experiencia Profesional",
      description: "Más de 10 años de experiencia tratando pacientes y deportistas de alto rendimiento"
    },
    {
      icon: Users,
      title: "Pacientes Atendidos",
      description: "Más de 1000 personas han confiado en mi para mejorar su bienestar y rendimiento"
    },
    {
      icon: Clock,
      title: "Disponibilidad",
      description: "Consultas presenciales y online adaptadas a tu horario y necesidades"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Conoce mi trayectoria y compromiso con la salud mental
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Mi Compromiso Contigo
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Como psicólogo sanitario y deportivo colegiado, mi pasión es ayudar a las personas 
                  a superar sus dificultades y alcanzar su máximo potencial tanto en la vida personal 
                  como en el ámbito deportivo.
                </p>
                <p>
                  Mi enfoque se basa en la evidencia científica y en un trato cercano y personalizado. 
                  Creo firmemente que cada persona es única y merece un tratamiento adaptado a sus 
                  necesidades específicas.
                </p>
                <p>
                  A lo largo de mi carrera, he tenido el privilegio de trabajar con deportistas de 
                  diferentes niveles, desde amateur hasta profesional, así como con personas que 
                  buscan mejorar su bienestar mental y calidad de vida.
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