import { Product } from '@/hooks/useCart';

// Importar imágenes generadas
import drillImage from '@/assets/drill.jpg';
import hammerImage from '@/assets/hammer.jpg';
import paintImage from '@/assets/paint.jpg';
import electricalImage from '@/assets/electrical.jpg';
import plumbingImage from '@/assets/plumbing.jpg';
import screwdriversImage from '@/assets/screwdrivers.jpg';
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


export const products: Product[] = [
  // Herramientas
  { id: '1', name: 'Taladro Eléctrico Profesional', price: 89.99, image: drillImage, category: 'herramientas', description: 'Taladro eléctrico de alta potencia con batería recargable y función de percusión.' },
  { id: '2', name: 'Martillo de Carpintero', price: 24.99, image: hammerImage, category: 'herramientas', description: 'Martillo resistente con cabeza de acero templado y mango ergonómico de madera.' },
  { id: '3', name: 'Set de Destornilladores', price: 34.99, image: screwdriversImage, category: 'herramientas', description: 'Juego de destornilladores planos y de estrella en varios tamaños.' },

  // Pinturas
  { id: '4', name: 'Vinílico ICO galón tipo 1', price: 65000, image: pint, category: 'pinturas', description: 'Pintura vinílica tipo 1 para interiores, lavable y de alta cobertura.' },
  { id: '5', name: 'Vinilo ICO caneca', price: 260000, image: pint2, category: 'pinturas', description: 'Pintura vinílica en presentación caneca, ideal para grandes superficies exteriores.' },
  { id: '6', name: 'Vinilo ICO caneca tipo 2', price: 210000, image: pint3, category: 'pinturas', description: 'Pintura vinílica tipo 2 para exteriores, resistente a la intemperie.' },
  { id: '7', name: 'Vinilo ICO galón tipo 2', price: 60000, image: pint4, category: 'pinturas', description: 'Pintura vinílica tipo 2 para interiores o exteriores, acabado mate.' },
  { id: '8', name: 'Esmalte pintuco galón', price: 95000, image: pint5, category: 'pinturas', description: 'Esmalte sintético de alta resistencia y acabado brillante.' },
  { id: '9', name: 'Pintuco viniltex baños y cocina galón', price: 130000, image: pint6, category: 'pinturas', description: 'Pintura viniltex resistente a la humedad, ideal para baños y cocinas.' },

  // Electricidad
  { id: '10', name: 'Cable Eléctrico 12 AWG', price: 18.99, image: electricalImage, category: 'electricidad', description: 'Cable calibre 12 AWG para instalaciones eléctricas residenciales seguras.' },
  { id: '11', name: 'Kit de Herramientas Eléctricas', price: 67.99, image: electricalImage, category: 'electricidad', description: 'Kit con herramientas básicas para trabajos eléctricos domésticos.' },

  // Plomería
  { id: '12', name: 'Canastilla 4"', price: 14000, image: plo, category: 'plomeria', description: 'Canastilla metálica de 4" para lavaplatos, resistente y duradera.' },
  { id: '13', name: 'Sifón flexible completo', price: 25000, image: plo2, category: 'plomeria', description: 'Sifón flexible con accesorios completos para instalación en lavamanos.' },
  { id: '14', name: 'Sifón flexible', price: 12000, image: plo3, category: 'plomeria', description: 'Sifón flexible básico para lavamanos o lavaplatos.' },
  { id: '15', name: 'Sifón flexible push', price: 25000, image: plo4, category: 'plomeria', description: 'Sifón flexible con sistema push para apertura y cierre rápido.' },
  { id: '16', name: 'Llave lavamano doble', price: 45000, image: plo5, category: 'plomeria', description: 'Grifería doble para lavamanos, acabado cromado y diseño moderno.' },
  { id: '17', name: 'Llave lavamano sencilla', price: 36000, image: plo6, category: 'plomeria', description: 'Grifería sencilla para lavamanos, fácil instalación y resistente.' },
  { id: '18', name: 'Mezclador lavaplatos', price: 75000, image: plo7, category: 'plomeria', description: 'Mezclador para lavaplatos con dos manijas y acabado cromado.' },

  // Ferretería General
  { id: '19', name: 'Tornillos Galvanizados (Caja 100)', price: 15.99, image: screwdriversImage, category: 'ferreteria', description: 'Caja con 100 tornillos galvanizados resistentes a la corrosión.' },
  { id: '20', name: 'Candado de Seguridad', price: 22.99, image: hammerImage, category: 'ferreteria', description: 'Candado de acero endurecido con dos llaves de seguridad.' },
  { id: '21', name: 'Cinta Métrica 5 metros', price: 16.99, image: hammerImage, category: 'herramientas', description: 'Cinta métrica de 5 metros con freno automático y carcasa resistente.' },

  // Iluminación
  { id: '22', name: 'Lámpara led incrustar 18w', price: 16000, image: lamp, category: 'iluminacion', description: 'Lámpara LED de 18W para empotrar, luz blanca y bajo consumo.' },
  { id: '23', name: 'Lámpara led incrustar tipo pastel 18w', price: 13000, image: lamp2, category: 'iluminacion', description: 'Lámpara LED tipo pastel para empotrar, diseño moderno y elegante.' },
  { id: '24', name: 'Lámpara led sobreponer 18w', price: 16000, image: lamp3, category: 'iluminacion', description: 'Lámpara LED de sobreponer con luz uniforme y fácil instalación.' },
  { id: '25', name: 'Lámpara led tipo pastel 18w', price: 13000, image: lamp4, category: 'iluminacion', description: 'Lámpara LED tipo pastel para montaje superficial, bajo consumo.' },
  { id: '26', name: 'Reflector 50w', price: 35000, image: reflect, category: 'iluminacion', description: 'Reflector LED de 50W, ideal para iluminar espacios exteriores.' },
  { id: '27', name: 'Reflector 100w', price: 60000, image: reflect2, category: 'iluminacion', description: 'Reflector LED de 100W, alto rendimiento y resistencia al agua.' },
  // Abrasivos y cortes 
  { id: '28', name: 'Disco corte metal Dewalt', price: 8000, image: cort, category: 'abrasivos y cortes', description: 'Disco de corte de 4.5 pulgadas para esmeril angular, ideal para acero y metales.' },
  { id: '29', name: 'Disco diamantado 4 1/2 continuo corneta', price: 13000, image: cort2, category: 'abrasivos y cortes', description: 'Disco flap de 4.5 pulgadas, perfecto para desbaste y terminaciones.' },
  { id: '30', name: 'Disco diamantado 4 1/2 segmento corneta', price: 13000, image: cort3, category: 'abrasivos y cortes', description: 'Disco diamantado de 7 pulgadas para corte en cerámica, porcelanato y concreto.' },
  { id: '31', name: 'Disco diamantado 4 1/2 segmento ', price: 20000, image: cort4, category: 'abrasivos y cortes', description: 'Lija de banda grano 80, ideal para madera y metal.' },
  { id: '32', name: 'Disco flap ', price: 6500, image: cort5, category: 'abrasivos y cortes', description: 'Cepillo circular de alambre para limpieza de óxido y pintura en metales.' },

  // Construcción 
  { id: '33', name: 'Lámina de drywall 1.20x2.40m', price: 12000, image: drywall, category: 'construccion', description: 'Panel de yeso estándar 1.20x2.40m, ideal para tabiques y cielos.' },
  { id: '34', name: 'Perfil metálico canal drywall', price: 4500, image: perfilCanal, category: 'construccion', description: 'Perfil canal metálico galvanizado para estructura de tabiques de drywall.' },
  { id: '35', name: 'Saco de cemento 25kg', price: 7000, image: cemento25, category: 'construccion', description: 'Cemento gris de 25kg, de alta resistencia para obras de construcción.' },
  { id: '36', name: 'Bolsa de yeso 25kg', price: 6500, image: yeso25, category: 'construccion', description: 'Yeso de construcción para revestimientos y acabados interiores.' },
  { id: '37', name: 'Bloque de hormigón 15x20x40', price: 1200, image: bloqueHormigon, category: 'construccion', description: 'Bloque de hormigón macizo, ideal para muros estructurales y divisiones.' },
  { id: '38', name: 'Plancha OSB 1.22x2.44m', price: 18000, image: planchaOSB, category: 'construccion', description: 'Plancha OSB estructural 11mm, uso en cubiertas y revestimientos.' },
  { id: '39', name: 'Fierro corrugado 8mm', price: 3500, image: fierro8mm, category: 'construccion', description: 'Barra de acero corrugado de 8mm para refuerzo estructural en hormigón.' },



];

export const categories = [
  { id: 'herramientas', name: 'Herramientas', icon: '🔨' },
  { id: 'electricidad', name: 'Electricidad', icon: '⚡' },
  { id: 'iluminacion', name: 'Iluminacion', icon: '💡' },
  { id: 'plomeria', name: 'Plomería', icon: '🔧' },
  { id: 'pinturas', name: 'Pinturas', icon: '🎨' },
  { id: 'ferreteria', name: 'Ferretería General', icon: '⚙️' },
  { id: 'Abrasivos y corte', name: 'Abrasivos y corte', icon: '🟢' },
  { id: 'Construcción', name: 'Construcción', icon: '🏢' },
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
