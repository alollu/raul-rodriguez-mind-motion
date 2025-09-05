import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Calendar, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensaje enviado",
      description: "Te contactaré pronto para programar tu cita. ¡Gracias!",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tupsicologo.domicilio@gmail.com",
      href: "mailto:tupsicologo.domicilio@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/raulrodriguezotero",
      href: "https://www.linkedin.com/in/raulrodriguezotero"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 XXX XXX XXX",
      href: "tel:+34XXXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Consulta presencial y online",
      href: "#"
    },
    {
      icon: Calendar,
      title: "Horario",
      value: "Lun-Vie: 9:00-20:00",
      href: "#"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Contacta Conmigo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Da el primer paso hacia tu bienestar. Estoy aquí para ayudarte
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-up">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Información de Contacto
                  </CardTitle>
                  <CardDescription>
                    Ponte en contacto conmigo para reservar tu cita o resolver cualquier duda
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{info.title}</p>
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">
                    ¿Por qué elegir mis servicios?
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Atención personalizada y profesional</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Consultas presenciales y online</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Enfoque basado en evidencia científica</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Experiencia en psicología sanitaria y deportiva</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="animate-fade-in border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Reserva tu Cita
                </CardTitle>
                <CardDescription>
                  Completa el formulario y te contactaré para programar tu consulta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="apellidos">Apellidos *</Label>
                      <Input
                        id="apellidos"
                        name="apellidos"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="servicio">Servicio de Interés</Label>
                    <select
                      id="servicio"
                      name="servicio"
                      className="w-full p-2 border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="psicologia-sanitaria">Psicología Sanitaria</option>
                      <option value="psicologia-deportiva">Psicología Deportiva</option>
                      <option value="bienestar-emocional">Bienestar Emocional</option>
                      <option value="terapia-familiar">Terapia Familiar</option>
                      <option value="coaching-personal">Coaching Personal</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      placeholder="Cuéntame brevemente qué te lleva a buscar ayuda psicológica..."
                      className="border-border focus:border-primary min-h-[100px]"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-primary-foreground hover:opacity-90"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;