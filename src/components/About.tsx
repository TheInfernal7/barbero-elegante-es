import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Star } from "lucide-react";
import toolsImage from "@/assets/barber-tools.jpg";

const About = () => {
  const features = [
    {
      icon: Clock,
      title: "Más de 20 Años",
      description: "Experiencia y tradición en cada corte"
    },
    {
      icon: Users,
      title: "Equipo Profesional",
      description: "Barberos especializados y certificados"
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Solo productos de las mejores marcas"
    },
    {
      icon: Star,
      title: "Excelencia",
      description: "Comprometidos con la satisfacción total"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Maestros en el 
              <span className="text-primary block">Arte de la Barbería</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Desde hace más de dos décadas, nuestra barbería ha sido sinónimo de excelencia 
              y tradición en España. Combinamos técnicas clásicas transmitidas de generación 
              en generación con las últimas tendencias y productos de calidad premium.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cada visita es una experiencia única donde el cuidado personal se eleva a un 
              arte. Nuestro compromiso es hacer que cada cliente se sienta como en casa 
              mientras recibe el mejor servicio posible.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={toolsImage} 
                alt="Herramientas tradicionales de barbería" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
            
            <Card className="absolute -bottom-8 -left-8 bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Años de Tradición</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;