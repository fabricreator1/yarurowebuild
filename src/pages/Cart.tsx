import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CartSummary } from '@/components/CartSummary';
import { ArrowLeft } from 'lucide-react';

export const Cart = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/productos">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Seguir Comprando
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            Carrito de Compras
          </h1>
          <p className="text-muted-foreground mt-2">
            Revisa tus productos seleccionados antes de continuar
          </p>
        </div>

        {/* Contenido del carrito */}
        <div className="max-w-4xl mx-auto">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};