import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Visítanos o Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ofrecerte la mejor experiencia de barbería
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-card-foreground">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Ubicación</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Calle Mayor 123<br />
                  28001 Madrid, España
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-card-foreground">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>Teléfono</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+34 91 123 45 67</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-card-foreground">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@barberiaclasica.es</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-card-foreground">
                  <Clock className="w-6 h-6 text-primary" />
                  <span>Horarios</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes - Viernes:</span>
                  <span className="text-foreground">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábados:</span>
                  <span className="text-foreground">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingos:</span>
                  <span className="text-foreground">Cerrado</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Reserva tu Cita</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Nombre Completo
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Teléfono
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+34 123 456 789"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Servicio
                </label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Corte Clásico</option>
                  <option>Afeitado Tradicional</option>
                  <option>Arreglo de Barba</option>
                  <option>Servicio Completo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Fecha Preferida
                </label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Mensaje (Opcional)
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Cuéntanos cualquier preferencia especial..."
                ></textarea>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;