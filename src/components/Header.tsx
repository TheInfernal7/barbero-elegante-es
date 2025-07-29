import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
          <h1 className="text-xl font-bold text-foreground">Barbería Clásica</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>
        <Button variant="default" className="hidden md:block">
          Reservar Cita
        </Button>
      </div>
    </header>
  );
};

export default Header;