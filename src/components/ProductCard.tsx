import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useCart, Product } from '@/hooks/useCart';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Producto agregado",
      description: `${product.name} se agregó al carrito`,
      duration: 2000,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-VE', {
      style: 'currency',
      currency: 'COP',
    }).format(price);
  };

  const getCategoryLabel = (category: string) => {
    const categories: { [key: string]: string } = {
      'herramientas': 'Herramientas',
      'electricidad': 'Electricidad',
      'plomeria': 'Plomería',
      'pinturas': 'Pinturas',
      'ferreteria': 'Ferretería General'
    };
    return categories[category] || category;
  };

  return (
    <Card className="group hover-lift transition-smooth gradient-card border-border/50 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">

          {/* 🔹 CAMBIO REALIZADO AQUÍ */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain p-2 bg-white transition-smooth group-hover:scale-105"
          />
          {/* 🔹 FIN DEL CAMBIO */}

          <Badge 
            variant="secondary" 
            className="absolute top-2 left-2 bg-secondary/90 backdrop-blur-sm"
          >
            {getCategoryLabel(product.category)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {product.name}
        </CardTitle>
        {product.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground hover-glow transition-smooth"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};
