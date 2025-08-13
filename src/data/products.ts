import { Product } from '@/hooks/useCart';

// Importar imágenes generadas
import drillImage from '@/assets/drill.jpg';
import hammerImage from '@/assets/hammer.jpg';
import paintImage from '@/assets/paint.jpg';
import electricalImage from '@/assets/electrical.jpg';
import plumbingImage from '@/assets/plumbing.jpg';
import screwdriversImage from '@/assets/screwdrivers.jpg';

export const products: Product[] = [
  // Herramientas
  {
    id: '1',
    name: 'Taladro Eléctrico Profesional',
    price: 89.99,
    image: drillImage,
    category: 'herramientas',
    description: 'Taladro eléctrico de alta potencia con batería recargable.'
  },
  {
    id: '2',
    name: 'Martillo de Carpintero',
    price: 24.99,
    image: hammerImage,
    category: 'herramientas',
    description: 'Martillo profesional con mango de madera y cabeza de acero.'
  },
  {
    id: '3',
    name: 'Set de Destornilladores',
    price: 34.99,
    image: screwdriversImage,
    category: 'herramientas',
    description: 'Juego completo de destornilladores de diferentes tamaños.'
  },

  // Pinturas
  {
    id: '4',
    name: 'Pintura Látex Interior 4L',
    price: 45.99,
    image: paintImage,
    category: 'pinturas',
    description: 'Pintura látex lavable para interiores, alta cobertura.'
  },
  {
    id: '5',
    name: 'Pintura Exterior Antioxidante',
    price: 52.99,
    image: paintImage,
    category: 'pinturas',
    description: 'Pintura especial para exteriores con protección antioxidante.'
  },

  // Electricidad
  {
    id: '6',
    name: 'Cable Eléctrico 12 AWG',
    price: 18.99,
    image: electricalImage,
    category: 'electricidad',
    description: 'Cable eléctrico de alta calidad para instalaciones residenciales.'
  },
  {
    id: '7',
    name: 'Kit de Herramientas Eléctricas',
    price: 67.99,
    image: electricalImage,
    category: 'electricidad',
    description: 'Kit completo para instalaciones eléctricas básicas.'
  },

  // Plomería
  {
    id: '8',
    name: 'Tubería PVC 4 pulgadas',
    price: 12.99,
    image: plumbingImage,
    category: 'plomeria',
    description: 'Tubería PVC de alta resistencia para sistemas de drenaje.'
  },
  {
    id: '9',
    name: 'Conectores de Cobre',
    price: 28.99,
    image: plumbingImage,
    category: 'plomeria',
    description: 'Set de conectores de cobre para instalaciones de agua.'
  },

  // Ferretería General
  {
    id: '10',
    name: 'Tornillos Galvanizados (Caja 100)',
    price: 15.99,
    image: screwdriversImage,
    category: 'ferreteria',
    description: 'Caja de 100 tornillos galvanizados de diferentes medidas.'
  },
  {
    id: '11',
    name: 'Candado de Seguridad',
    price: 22.99,
    image: hammerImage,
    category: 'ferreteria',
    description: 'Candado de alta seguridad con llaves duplicadas.'
  },
  {
    id: '12',
    name: 'Cinta Métrica 5 metros',
    price: 16.99,
    image: hammerImage,
    category: 'herramientas',
    description: 'Cinta métrica profesional con freno automático.'
  },
  // iluminacion
  {
    id: '13',
    name: 'Lámpara led incrustar 18w ',
    price: 16000,
    image: lamp,
    category: 'iluminacion',
    description: 'Caja de 100 tornillos galvanizados de diferentes medidas.'
  },
];

export const categories = [
  { id: 'herramientas', name: 'Herramientas', icon: '🔨' },
  { id: 'electricidad', name: 'Electricidad', icon: '⚡' },
  { id: 'iluminacion', name: 'Iluminacion', icon: '💡' },
  { id: 'plomeria', name: 'Plomería', icon: '🔧' },
  { id: 'pinturas', name: 'Pinturas', icon: '🎨' },
  { id: 'ferreteria', name: 'Ferretería General', icon: '⚙️' }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 6); // Primeros 6 productos como destacados
};