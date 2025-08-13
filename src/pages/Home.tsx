import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/ProductCard';
import { getFeaturedProducts, categories } from '@/data/products';
import { ArrowRight, Shield, Truck, Clock, Star } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

export const Home = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Ferretería Yaruro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Ferretería Yaruro
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 animate-slide-up">
              Tu ferretería de confianza desde 1995. Herramientas, materiales y todo lo que necesitas para tus proyectos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover-glow transition-smooth"
              >
                <Link to="/productos">
                  Ver Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link to="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Características principales */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Calidad Garantizada</h3>
                <p className="text-sm text-muted-foreground">
                  Productos de las mejores marcas con garantía completa
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Envío Gratis</h3>
                <p className="text-sm text-muted-foreground">
                  Envío gratuito en compras superiores a $50
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Entrega Rápida</h3>
                <p className="text-sm text-muted-foreground">
                  Entrega en 24-48 horas en el área metropolitana
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">29 Años de Experiencia</h3>
                <p className="text-sm text-muted-foreground">
                  Atendiendo con excelencia desde 1995
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categorías principales */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestras Categorías
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encuentra todo lo que necesitas para tus proyectos organizados por categorías
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/productos?categoria=${category.id}`}
                className="group"
              >
                <Card className="text-center hover-lift transition-smooth gradient-card group-hover:shadow-glow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Productos Destacados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los productos más populares y mejor valorados por nuestros clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="hover-lift">
              <Link to="/productos">
                Ver Todos los Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesitas ayuda con tu proyecto?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para asesorarte y ayudarte a encontrar 
            las mejores soluciones para tu proyecto.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 hover-glow transition-smooth"
          >
            <Link to="/contacto">
              Contáctanos Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};