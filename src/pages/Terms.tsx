import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Terms = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-muted-foreground">
            Última actualización: Enero 2024
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Información General</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ferretería Yaruro es una empresa dedicada a la venta de herramientas, 
                materiales de construcción y productos de ferretería en general. Estos 
                términos y condiciones regulan el uso de nuestros servicios y la compra 
                de productos en nuestras instalaciones físicas y plataforma digital.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Productos y Precios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Todos los precios están expresados en dólares estadounidenses (USD) e incluyen 
                los impuestos aplicables. Los precios pueden variar sin previo aviso. 
                Nos reservamos el derecho de modificar los precios en cualquier momento.
              </p>
              <p className="text-muted-foreground">
                Las imágenes de los productos son referenciales y pueden diferir del producto real.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Garantías</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Todos nuestros productos cuentan con garantía del fabricante según las 
                especificaciones de cada marca. La garantía cubre defectos de fabricación 
                pero no el mal uso o desgaste normal del producto.
              </p>
              <p className="text-muted-foreground">
                Para hacer efectiva la garantía, es necesario presentar la factura de compra 
                y el producto en su empaque original.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Devoluciones y Cambios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Aceptamos devoluciones y cambios dentro de los 30 días posteriores a la compra, 
                siempre que el producto esté en perfectas condiciones, sin uso y en su empaque original.
              </p>
              <p className="text-muted-foreground">
                Los productos personalizados o fabricados bajo pedido no son elegibles para devolución.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Envíos y Entregas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ofrecemos servicio de entrega en el área metropolitana de San Fernando de Apure. 
                Los envíos son gratuitos para compras superiores a $50 USD.
              </p>
              <p className="text-muted-foreground">
                Los tiempos de entrega son de 24 a 48 horas hábiles. Para productos especiales 
                o bajo pedido, el tiempo puede extenderse según disponibilidad.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Métodos de Pago</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Aceptamos pagos en efectivo, transferencias bancarias, tarjetas de débito y crédito. 
                Todos los pagos deben realizarse en su totalidad antes de la entrega del producto.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Limitación de Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ferretería Yaruro no se hace responsable por daños indirectos, incidentales 
                o consecuenciales que puedan surgir del uso de nuestros productos. Nuestra 
                responsabilidad se limita al valor del producto adquirido.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Modificaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier 
                momento. Las modificaciones entrarán en vigor inmediatamente después de su 
                publicación en nuestro sitio web.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Para cualquier consulta sobre estos términos y condiciones, puedes contactarnos en:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Dirección: Av.  Centro, San Fernando, Apure 7001</p>
                <p>Teléfono: +57 300 3962579</p>
                <p>Email: info@ferreteriaruro.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};