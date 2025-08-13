import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Award, Users, Clock } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sobre Ferretería Yaruro
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 29 años siendo el aliado de confianza para constructores, 
            profesionales y familias en toda la región de Apure.
          </p>
        </div>

        {/* Historia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ferretería Yaruro fue fundada en 1995 por la familia Yaruro con el sueño 
                de crear una ferretería que combinara calidad, variedad y excelente servicio 
                al cliente en el corazón de San Fernando de Apure.
              </p>
              <p>
                Lo que comenzó como un pequeño local familiar se ha convertido en una de 
                las ferreterías más reconocidas y confiables de la región, atendiendo tanto 
                a profesionales de la construcción como a familias que buscan mejorar sus hogares.
              </p>
              <p>
                Hoy, después de casi tres décadas, seguimos comprometidos con nuestros valores 
                fundacionales: calidad, confianza y servicio excepcional.
              </p>
            </div>
          </div>

          <Card className="gradient-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Datos Importantes
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">29</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">5000+</div>
                  <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Productos disponibles</div>
                </div>
                <div className="text-center">
                  <Heart className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Dedicación</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="gradient-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Nuestra Misión
              </h3>
              <p className="text-muted-foreground">
                Proporcionar productos de ferretería de la más alta calidad y brindar 
                un servicio excepcional que supere las expectativas de nuestros clientes, 
                siendo su socio confiable en cada proyecto de construcción y mejora del hogar.
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Nuestra Visión
              </h3>
              <p className="text-muted-foreground">
                Ser la ferretería líder en la región de Apure, reconocida por nuestra 
                excelencia en productos, innovación en servicios y nuestro compromiso 
                inquebrantable con la satisfacción del cliente y el desarrollo de la comunidad.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Calidad</h4>
                <p className="text-sm text-muted-foreground">
                  Solo ofrecemos productos de las mejores marcas y con garantía completa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Confianza</h4>
                <p className="text-sm text-muted-foreground">
                  Construimos relaciones duraderas basadas en la honestidad y transparencia.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Servicio</h4>
                <p className="text-sm text-muted-foreground">
                  Nuestro equipo está siempre dispuesto a ayudar y asesorar a cada cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Compromiso</h4>
                <p className="text-sm text-muted-foreground">
                  Estamos comprometidos con la excelencia en cada aspecto de nuestro negocio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certificaciones y reconocimientos */}
        <Card className="gradient-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Reconocimientos y Certificaciones
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                Distribuidor Autorizado
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Calidad Garantizada
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Servicio de Excelencia
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Empresa Familiar
              </Badge>
            </div>
            <p className="text-muted-foreground mt-6">
              Nuestro compromiso con la calidad y el servicio nos ha valido el reconocimiento 
              de nuestros clientes y proveedores a lo largo de los años.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};