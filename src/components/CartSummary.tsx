import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export const CartSummary = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-VE', {
      style: 'currency',
      currency: 'COP',
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Tu carrito está vacío</h3>
        <p className="text-muted-foreground">¡Agrega algunos productos para comenzar!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Lista de productos */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md border border-border"
                />
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {formatPrice(item.price)} c/u
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  
                  <span className="w-8 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-foreground">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 mt-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resumen del carrito */}
      <Card className="gradient-card">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Resumen del Pedido</span>
            <Button
              variant="outline"
              size="sm"
              onClick={clearCart}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              Vaciar Carrito
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Productos ({getTotalItems()})</span>
            <span className="text-foreground">{formatPrice(getTotalPrice())}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Envío</span>
            <span className="text-secondary font-medium">Gratis</span>
          </div>
          
          <div className="border-t border-border pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span className="text-foreground">Total</span>
              <span className="text-primary">{formatPrice(getTotalPrice())}</span>
            </div>
          </div>

          <Button 
            className="w-full gradient-primary text-primary-foreground hover-glow transition-smooth"
            size="lg"
          >
            Proceder al Pago
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Los precios incluyen IVA. Envío gratuito en pedidos superiores a $50.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};