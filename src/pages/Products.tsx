import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products, categories } from '@/data/products';
import { Filter, Grid, List } from 'lucide-react';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Leer la categoría de la URL al cargar
  useEffect(() => {
    const categoryParam = searchParams.get('categoria');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: category });
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nuestros Productos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra herramientas, materiales y todo lo que necesitas para tus proyectos
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros */}
          <aside className="lg:w-64 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Categorías
                </h3>
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => handleCategoryChange('all')}
                  >
                    Todas las categorías
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Contenido principal */}
          <main className="flex-1">
            {/* Controles de vista y contador */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Grid de productos */}
            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-muted-foreground">
                  No hay productos en esta categoría. Prueba con otra categoría.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => handleCategoryChange('all')}
                >
                  Ver todos los productos
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};





