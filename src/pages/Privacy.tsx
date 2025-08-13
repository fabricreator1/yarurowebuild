import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Privacy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground">
            Última actualización: Enero 2024
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                En Ferretería Yaruro recopilamos información personal que nos proporcionas 
                voluntariamente cuando realizas una compra, te registras en nuestro sitio web, 
                o te comunicas con nosotros. Esta información puede incluir:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Dirección física</li>
                <li>Información de pago (procesada de forma segura)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Cómo Utilizamos tu Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Utilizamos la información recopilada para los siguientes propósitos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Procesar y gestionar tus pedidos</li>
                <li>Comunicarnos contigo sobre tus compras</li>
                <li>Proporcionar atención al cliente</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Enviar ofertas promocionales (con tu consentimiento)</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Compartir Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                No vendemos, alquilamos o compartimos tu información personal con terceros, 
                excepto en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Cuando sea requerido por ley o autoridades competentes</li>
                <li>Para proteger nuestros derechos, propiedad o seguridad</li>
                <li>Con tu consentimiento explícito</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Seguridad de la Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Implementamos medidas de seguridad técnicas, administrativas y físicas 
                apropiadas para proteger tu información personal contra acceso no autorizado, 
                alteración, divulgación o destrucción.
              </p>
              <p className="text-muted-foreground">
                Sin embargo, ningún método de transmisión por internet o almacenamiento 
                electrónico es 100% seguro. No podemos garantizar la seguridad absoluta 
                de tu información.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Cookies y Tecnologías Similares</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nuestro sitio web puede utilizar cookies y tecnologías similares para 
                mejorar tu experiencia de navegación, recordar tus preferencias y 
                proporcionar contenido personalizado.
              </p>
              <p className="text-muted-foreground">
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede 
                afectar la funcionalidad del sitio web.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Tus Derechos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Tienes derecho a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de tu información</li>
                <li>Oponerte al procesamiento de tu información</li>
                <li>Solicitar la portabilidad de tus datos</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Retención de Datos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Conservamos tu información personal durante el tiempo necesario para 
                cumplir con los propósitos para los cuales fue recopilada, o según 
                lo requiera la ley aplicable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Cambios a esta Política</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Podemos actualizar esta política de privacidad periódicamente. Te 
                notificaremos sobre cambios significativos publicando la nueva política 
                en nuestro sitio web con una fecha de "última actualización" revisada.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Si tienes preguntas sobre esta política de privacidad o sobre cómo 
                manejamos tu información personal, puedes contactarnos en:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Dirección: Av. Principal Centro, San Fernando, Apure 7001</p>
                <p>Teléfono: +57 300 3962579</p>
                <p>Email: yaruro1@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};