import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold text-foreground">Barbería Clásica</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Más de 20 años ofreciendo servicios de barbería tradicional con la máxima 
              calidad y profesionalismo en España.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Corte Clásico</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Afeitado Tradicional</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Arreglo de Barba</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Servicio Completo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">Calle Mayor 123, 28001 Madrid</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">+34 91 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">info@barberiaclasica.es</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Barbería Clásica. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;