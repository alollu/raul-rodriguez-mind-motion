import { Button } from "@/components/ui/button";
import logoPrimary from "@/assets/logo-primary.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Psicólogo Sanitario
              </span>
              <br />
              <span className="text-primary">y Deportivo</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Psicólogo General Sanitario con más de 15 años de experiencia en salud mental, 
              psicoterapia y evaluación diagnóstica. Especialista en psicología deportiva 
              y 5º Dan en Karate. Te ayudo con un enfoque integrador basado en evidencia científica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="gradient-primary text-primary-foreground hover:opacity-90 text-lg px-8 py-6"
              >
                Reservar Consulta
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up lg:order-first">
            <div className="relative">
              <img
                src={logoPrimary}
                alt="Raúl Rodríguez Otero - Psicólogo Sanitario y Deportivo"
                className="w-full max-w-sm mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;