import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FY</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Ferretería Yaruro</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Tu ferretería de confianza desde 1995. Ofrecemos productos de alta calidad 
              para construcción, reparación y mejoras del hogar.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Inicio
              </Link>
              <Link to="/productos" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Productos
              </Link>
              <Link to="/sobre-nosotros" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Sobre Nosotros
              </Link>
              <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Categorías */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Categorías</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/productos?categoria=herramientas" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Herramientas
              </Link>
              <Link to="/productos?categoria=electricidad" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Electricidad
              </Link>
              <Link to="/productos?categoria=plomeria" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Plomería
              </Link>
              <Link to="/productos?categoria=pinturas" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Pinturas
              </Link>
            </nav>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Av. Principal Centro<br />
                    San Fernando, Apure 7001<br />
                    Venezuela
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">+58 424-123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">info@ferreteriaruro.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Lun - Sáb: 8:00 AM - 6:00 PM<br />
                    Dom: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Ferretería Yaruro. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <Link to="/terminos" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Términos y Condiciones
              </Link>
              <Link to="/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};