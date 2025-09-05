import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Raúl Rodríguez Otero</h3>
            <p className="text-primary-foreground/80 mb-4">
              Psicólogo Sanitario y Deportivo colegiado. Especialista en el bienestar mental 
              y la optimización del rendimiento deportivo.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Número de colegiado: XXXXX
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <a 
                  href="mailto:tupsicologo.domicilio@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  tupsicologo.domicilio@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-primary-foreground/80">+34 XXX XXX XXX</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3" />
                <span className="text-primary-foreground/80">Consulta presencial y online</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Psicología Sanitaria</li>
              <li>• Psicología Deportiva</li>
              <li>• Bienestar Emocional</li>
              <li>• Terapia Familiar</li>
              <li>• Coaching Personal</li>
              <li>• Programas de Prevención</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Raúl Rodríguez Otero. Todos los derechos reservados. | 
            <span className="ml-2">Psicólogo Sanitario y Deportivo</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;