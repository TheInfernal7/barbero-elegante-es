import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, ShoppingBag, User, Crown } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte Clásico",
      description: "Cortes tradicionales con técnicas maestras perfeccionadas durante décadas",
      price: "25€"
    },
    {
      icon: ShoppingBag,
      title: "Afeitado Tradicional",
      description: "Afeitado con navaja tradicional, toallas calientes y productos premium",
      price: "20€"
    },
    {
      icon: User,
      title: "Arreglo de Barba",
      description: "Perfilado y cuidado de barba con productos especializados",
      price: "15€"
    },
    {
      icon: Crown,
      title: "Servicio Completo",
      description: "Corte + afeitado + arreglo de barba. La experiencia completa",
      price: "45€"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Servicios profesionales con la calidad y tradición que nos caracteriza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-primary">{service.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;