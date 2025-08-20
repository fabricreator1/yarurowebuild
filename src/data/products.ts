import { Product } from '@/hooks/useCart';

// Importar imágenes generadas

// Iluminación
import lamp from '@/assets/iluminacion/lamp.jpg';
import lamp2 from '@/assets/iluminacion/lamp2.jpg';
import lamp3 from '@/assets/iluminacion/lamp3.jpg';
import lamp4 from '@/assets/iluminacion/lamp4.jpg';
import reflect from '@/assets/iluminacion/reflect.jpg';
import reflect2 from '@/assets/iluminacion/reflect2.jpg';
// Pinturas
import pint from '@/assets/pintura/pint.jpg';
import pint2 from '@/assets/pintura/pint2.jpg';
import pint3 from '@/assets/pintura/pint3.jpg';
import pint4 from '@/assets/pintura/pint4.jpg';
import pint5 from '@/assets/pintura/pint5.jpg';
import pint6 from '@/assets/pintura/pint6.jpg';
// Plomería
import plo from '@/assets/plomeria/plo.jpg';
import plo2 from '@/assets/plomeria/plo2.jpg';
import plo3 from '@/assets/plomeria/plo3.jpg';
import plo4 from '@/assets/plomeria/plo4.jpg';
import plo5 from '@/assets/plomeria/plo5.jpg';
import plo6 from '@/assets/plomeria/plo6.jpg';
import plo7 from '@/assets/plomeria/plo7.jpg';
import plo8 from '@/assets/plomeria/plo8.jpg';
import plo9 from '@/assets/plomeria/plo9.jpg';
import plo10 from '@/assets/plomeria/plo10.jpg';
import plo11 from '@/assets/plomeria/plo11.jpg';
import plo12 from '@/assets/plomeria/plo12.jpg';
import plo13 from '@/assets/plomeria/plo13.jpg';
import plo14 from '@/assets/plomeria/plo14.jpg';
import plo15 from '@/assets/plomeria/plo15.jpg';
import plo16 from '@/assets/plomeria/plo16.jpg';
import plo17 from '@/assets/plomeria/plo17.jpg';
import plo18 from '@/assets/plomeria/plo18.jpg';
import plo19 from '@/assets/plomeria/plo18.jpg';
import plo20 from '@/assets/plomeria/plo18.jpg';
import plo21 from '@/assets/plomeria/plo18.jpg';
import plo22 from '@/assets/plomeria/plo18.jpg';
import plo23 from '@/assets/plomeria/plo18.jpg';
import plo24 from '@/assets/plomeria/plo18.jpg';


// abrasivos y corte
import cort from '@/assets/abrasivos y corte/cort.jpg';
import cort2 from '@/assets/abrasivos y corte/cort1.jpg';
import cort3 from '@/assets/abrasivos y corte/cort2.jpg';
import cort4 from '@/assets/abrasivos y corte/cort3.jpg';
import cort5 from '@/assets/abrasivos y corte/cort4.jpg';
// construccion
import co from '@/assets/construccion/co.jpg';
import co1 from '@/assets/construccion/co1.jpg';
import co2 from '@/assets/construccion/co2.jpg';
import co3 from '@/assets/construccion/co3.jpg';
import co4 from '@/assets/construccion/co4.jpg';
import co5 from '@/assets/construccion/co5.jpg';
import co6 from '@/assets/construccion/co6.jpg';
import co7 from '@/assets/construccion/co7.jpg';
// herramientas
import her from '@/assets/herramientas/her.jpg';
import her1 from '@/assets/herramientas/her1.jpg';
import her2 from '@/assets/herramientas/her2.jpg';
import her3 from '@/assets/herramientas/her3.jpg';
import her4 from '@/assets/herramientas/her4.jpg';
import her5 from '@/assets/herramientas/her5.jpg';
import her6 from '@/assets/herramientas/her6.jpg';
import her7 from '@/assets/herramientas/her7.jpg';
import her8 from '@/assets/herramientas/her8.jpg';
import her9 from '@/assets/herramientas/her9.jpg';



export const products: Product[] = [
// Herramientas
{ id: '1', name: 'Corta tubo cobre', price: 22000, image: her, category: 'herramientas', description: 'Cortatubo para cobre, resistente y preciso.' },
{ id: '2', name: 'Corta tubo económico', price: 22000, image: her1, category: 'herramientas', description: 'Cortatubo económico para trabajos básicos de plomería.' },
{ id: '3', name: 'Corta tubo Truper', price: 32000, image: her2, category: 'herramientas', description: 'Cortatubo marca Truper, alta calidad y durabilidad.' },
{ id: '4', name: 'Pela cable Total', price: 35000, image: her3, category: 'herramientas', description: 'Pelacables de precisión marca Total, ergonómico y duradero.' },
{ id: '5', name: 'Pinza de presión Pretul 7"', price: 20000, image: her4, category: 'herramientas', description: 'Pinza de presión Pretul de 7 pulgadas, resistente y ajustable.' },
{ id: '6', name: 'Pinza de presión Pretul 10"', price: 28000, image: her5, category: 'herramientas', description: 'Pinza de presión Pretul de 10 pulgadas, ideal para trabajos exigentes.' },
{ id: '7', name: 'Pinza de presión Truper', price: 42000, image: her6, category: 'herramientas', description: 'Pinza de presión marca Truper, de gran resistencia y agarre.' },
{ id: '8', name: 'Tenaza Truper 8"', price: 30000, image: her7, category: 'herramientas', description: 'Tenaza Truper de 8 pulgadas, ideal para corte y sujeción.' },
{ id: '9', name: 'Tenaza Truper 10"', price: 38000, image: her8, category: 'herramientas', description: 'Tenaza Truper de 10 pulgadas, mayor capacidad de trabajo.' },
{ id: '10', name: 'Tijera corta metal Pretul', price: 37000, image: her9, category: 'herramientas', description: 'Tijera Pretul para corte de lámina metálica, precisa y duradera.' },

// Pinturas
{ id: '11', name: 'Vinílico ICO galón tipo 1', price: 65000, image: pint, category: 'pinturas', description: 'Pintura vinílica tipo 1 para interiores, lavable y de alta cobertura.' },
{ id: '12', name: 'Vinilo ICO caneca', price: 260000, image: pint2, category: 'pinturas', description: 'Pintura vinílica en presentación caneca, ideal para exteriores.' },
{ id: '13', name: 'Vinilo ICO caneca tipo 2', price: 210000, image: pint3, category: 'pinturas', description: 'Pintura vinílica tipo 2 para exteriores, resistente a la intemperie.' },
{ id: '14', name: 'Vinilo ICO galón tipo 2', price: 60000, image: pint4, category: 'pinturas', description: 'Pintura vinílica tipo 2 para interiores y exteriores, acabado mate.' },
{ id: '15', name: 'Esmalte Pintuco galón', price: 95000, image: pint5, category: 'pinturas', description: 'Esmalte sintético Pintuco, acabado brillante y alta resistencia.' },
{ id: '16', name: 'Pintuco Viniltex baños y cocina galón', price: 130000, image: pint6, category: 'pinturas', description: 'Pintura resistente a la humedad, ideal para baños y cocinas.' },

// Plomería
{ id: '17', name: 'Canastilla 4"', price: 14000, image: plo, category: 'plomeria', description: 'Canastilla metálica de 4 pulgadas para lavaplatos, resistente y duradera.' },
{ id: '18', name: 'Sifón flexible completo', price: 25000, image: plo2, category: 'plomeria', description: 'Sifón flexible completo con accesorios para instalación en lavamanos.' },
{ id: '19', name: 'Sifón flexible', price: 12000, image: plo3, category: 'plomeria', description: 'Sifón flexible básico para lavamanos o lavaplatos.' },
{ id: '20', name: 'Sifón flexible push', price: 25000, image: plo4, category: 'plomeria', description: 'Sifón con sistema push para apertura y cierre rápido.' },
{ id: '21', name: 'Llave lavamanos doble', price: 45000, image: plo5, category: 'plomeria', description: 'Grifería doble para lavamanos, acabado cromado y diseño moderno.' },
{ id: '22', name: 'Llave lavamanos sencilla', price: 36000, image: plo6, category: 'plomeria', description: 'Grifería sencilla para lavamanos, práctica y resistente.' },
{ id: '23', name: 'Mezclador lavaplatos', price: 75000, image: plo7, category: 'plomeria', description: 'Mezclador cromado para lavaplatos, con dos manijas.' },
{ id: '24', name: 'Manguera de lavadora', price: 10000, image: plo8, category: 'plomeria', description: 'Manguera resistente para conexión de lavadora.' },
{ id: '25', name: 'Manguera desagüe 3 bocas lavadora', price: 18000, image: plo9, category: 'plomeria', description: 'Manguera flexible de 3 bocas para desagüe de lavadora.' },
{ id: '26', name: 'Manguera desagüe lavadora', price: 18000, image: plo10, category: 'plomeria', description: 'Manguera de desagüe estándar para lavadora, fácil instalación.' },
{ id: '27', name: 'Manguera llenado lavadora', price: 18000, image: plo11, category: 'plomeria', description: 'Manguera de llenado para lavadora, conexión estándar.' },
{ id: '28', name: 'Manguera llenado lavadora reforzada', price: 25000, image: plo12, category: 'plomeria', description: 'Manguera reforzada para mayor durabilidad y seguridad.' },
{ id: '29', name: 'Yee lavadora cobre', price: 15000, image: plo13, category: 'plomeria', description: 'Conector en Y de cobre para lavadora, durable y resistente.' },
{ id: '30', name: 'Yee lavadora Truper', price: 15000, image: plo14, category: 'plomeria', description: 'Yee marca Truper para conexión de lavadora, calidad garantizada.' },
{ id: '31', name: 'Silicona Unifer 85 gr', price: 70000, image: plo15, category: 'plomeria', description: 'Silicona Unifer de 85 gramos, sellador de alta calidad.' },
{ id: '32', name: 'Sintesolda', price: 13000, image: plo16, category: 'plomeria', description: 'Sintesolda para reparaciones rápidas de plomería.' },
{ id: '33', name: 'Sintesolda adhesivo epóxico', price: 20000, image: plo17, category: 'plomeria', description: 'Adhesivo epóxico de alta resistencia para múltiples aplicaciones.' },
{ id: '34', name: 'Silicona Golden 50g', price: 7000, image: plo18, category: 'plomeria', description: 'Silicona Golden de 50 gramos, sellador económico y funcional.' },
{ id: '35', name: 'Válvula de bola para agua de 1/2"', price: 25000, image: plo19, category: 'plomeria', description: 'Válvula de bola metálica de media pulgada para agua.' },
{ id: '36', name: 'Kit inserto', price: 35000, image: plo20, category: 'plomeria', description: 'Kit de inserto para instalaciones de plomería.' },
{ id: '37', name: 'Llave galápago', price: 25000, image: plo21, category: 'plomeria', description: 'Llave tipo galápago, resistente y duradera.' },
{ id: '38', name: 'Polea de lavadora', price: 25000, image: plo22, category: 'plomeria', description: 'Polea para lavadora, repuesto de alta resistencia.' },
{ id: '39', name: 'Sello lavadora', price: 25000, image: plo23, category: 'plomeria', description: 'Sello de repuesto para lavadora, resistente a la presión.' },
{ id: '40', name: 'Uniones 1/4x1/4 - 1/4x5/16', price: 4000, image: plo24, category: 'plomeria', description: 'Uniones metálicas para instalaciones de plomería y gas.' },

// Iluminación
{ id: '41', name: 'Lámpara LED empotrar 18W', price: 16000, image: lamp, category: 'iluminacion', description: 'Lámpara LED de 18W para empotrar, bajo consumo de energía.' },
{ id: '42', name: 'Lámpara LED pastel empotrar 18W', price: 13000, image: lamp2, category: 'iluminacion', description: 'Lámpara LED tipo pastel de 18W para interiores modernos.' },
{ id: '43', name: 'Lámpara LED sobreponer 18W', price: 16000, image: lamp3, category: 'iluminacion', description: 'Lámpara LED de 18W de sobreponer, luz uniforme y eficiente.' },
{ id: '44', name: 'Lámpara LED pastel superficie 18W', price: 13000, image: lamp4, category: 'iluminacion', description: 'Lámpara LED pastel para montaje superficial, 18W.' },
{ id: '45', name: 'Reflector LED 50W', price: 35000, image: reflect, category: 'iluminacion', description: 'Reflector LED de 50W, ideal para exteriores.' },
{ id: '46', name: 'Reflector LED 100W', price: 60000, image: reflect2, category: 'iluminacion', description: 'Reflector LED de 100W, alto rendimiento y durabilidad.' },

// Abrasivos y corte
{ id: '47', name: 'Disco corte metal Dewalt', price: 8000, image: cort, category: 'abrasivos y corte', description: 'Disco Dewalt de 4.5 pulgadas para corte de metal.' },
{ id: '48', name: 'Disco diamantado 4.5 continuo Corneta', price: 13000, image: cort2, category: 'abrasivos y corte', description: 'Disco diamantado continuo para cerámica y porcelanato.' },
{ id: '49', name: 'Disco diamantado 4.5 segmento Corneta', price: 13000, image: cort3, category: 'abrasivos y corte', description: 'Disco diamantado segmentado para concreto y mampostería.' },
{ id: '50', name: 'Disco diamantado 4.5 segmento', price: 20000, image: cort4, category: 'abrasivos y corte', description: 'Disco diamantado segmentado de alta duración para piedra y cemento.' },
{ id: '51', name: 'Disco flap', price: 6500, image: cort5, category: 'abrasivos y corte', description: 'Disco flap de 4.5 pulgadas, ideal para desbaste y acabado en metales.' },

// Construcción
{ id: '52', name: 'Ángulo metálico', price: 6000, image: co, category: 'construcción', description: 'Ángulo metálico galvanizado para refuerzos estructurales.' },
{ id: '53', name: 'Canal base drywall', price: 11000, image: co1, category: 'construcción', description: 'Canal base metálico galvanizado de 3m para drywall.' },
{ id: '54', name: 'Canal base 9 drywall', price: 13000, image: co2, category: 'construcción', description: 'Canal base de 9cm para estructuras metálicas de drywall.' },
{ id: '55', name: 'Lámina drywall', price: 48000, image: co3, category: 'construcción', description: 'Lámina de yeso drywall 1.20x2.40m, ideal para tabiques.' },
{ id: '56', name: 'Omega drywall', price: 7000, image: co4, category: 'construcción', description: 'Perfil Omega galvanizado, soporte en estructuras drywall.' },
{ id: '57', name: 'Paral base 6 drywall', price: 12000, image: co5, category: 'construcción', description: 'Perfil paral de 6cm galvanizado, para muros livianos.' },
{ id: '58', name: 'Paral base 9 drywall', price: 13000, image: co6, category: 'construcción', description: 'Perfil paral de 9cm galvanizado, usado en muros estructurales.' },
{ id: '59', name: 'Vigueta metálica', price: 7000, image: co7, category: 'construcción', description: 'Vigueta metálica liviana para entrepiso y cubierta.' },
];

export const categories = [
  { id: 'herramientas', name: 'Herramientas', icon: '🔨' },
  { id: 'electricidad', name: 'Electricidad', icon: '⚡' },
  { id: 'iluminacion', name: 'Iluminacion', icon: '💡' },
  { id: 'plomeria', name: 'Plomería', icon: '🔧' },
  { id: 'pinturas', name: 'Pinturas', icon: '🎨' },
  { id: 'ferreteria', name: 'Ferretería General', icon: '⚙️' },
  { id: 'abrasivos y corte', name: 'Abrasivos y corte', icon: '🟢' },
  { id: 'construcción', name: 'Construcción', icon: '🏢' },
];

// Nueva versión optimizada
export const getProductsByCategory = (category: string, limit?: number) => {
  const filtered = products
    .filter(product => product.category === category)
    .sort((a, b) => a.name.localeCompare(b.name));

  return limit ? filtered.slice(0, limit) : filtered;
};

export const getFeaturedProducts = () => {
  return products.slice(0, 6); // Primeros 6 productos como destacados
};
