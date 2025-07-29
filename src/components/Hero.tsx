import { Button } from "@/components/ui/button";
import heroImage from "@/assets/barbershop-hero.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Tradición y 
          <span className="text-primary block">Elegancia</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Más de 20 años ofreciendo el mejor servicio de barbería en España. 
          Donde el arte clásico se encuentra con la maestría moderna.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Reservar Cita
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Servicios
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-primary">20+</h3>
            <p className="text-muted-foreground">Años de Experiencia</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">5000+</h3>
            <p className="text-muted-foreground">Clientes Satisfechos</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">100%</h3>
            <p className="text-muted-foreground">Satisfacción Garantizada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;