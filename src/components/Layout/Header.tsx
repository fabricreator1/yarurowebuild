import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border shadow-elegant">
      {/* Top bar con información de contacto */}
      <div className="gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>+58 424-123-4567</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>info@ferreteriaruro.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Horario: Lun-Sáb 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">FY</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Ferretería Yaruro</h1>
              <p className="text-xs text-muted-foreground">Tu ferretería de confianza</p>
            </div>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground transition-smooth hover:text-primary relative ${
                  isActiveRoute(item.href) 
                    ? 'text-primary font-semibold' 
                    : 'hover:text-primary'
                }`}
              >
                {item.name}
                {isActiveRoute(item.href) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 gradient-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Carrito y menú móvil */}
          <div className="flex items-center space-x-4">
            <Link to="/carrito">
              <Button variant="outline" size="sm" className="relative hover-lift">
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Menú móvil */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-foreground transition-smooth hover:bg-accent hover:text-accent-foreground rounded-md ${
                    isActiveRoute(item.href) 
                      ? 'bg-primary text-primary-foreground font-semibold' 
                      : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};