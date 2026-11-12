import React, { useState, useMemo } from 'react';
import { Search, Eye, Sparkles, Filter, ArrowRight, MessageCircle } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';
import { Link } from '../router';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface CatalogProps {
  isHomeView?: boolean;
}

export const Catalog: React.FC<CatalogProps> = ({ isHomeView = false }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'in-stock' | 'coming-soon'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'cafes-bebidas', label: 'Cafés y Bebidas' },
    { id: 'candies-snacks', label: 'Candies y Snacks' },
    { id: 'cuidado-bucal', label: 'Cuidado Bucal' },
    { id: 'turmalina', label: 'Turmalina y Bienestar' },
    { id: 'nutricion', label: 'Nutrición y Colágeno' },
    { id: 'cuidado-personal', label: 'Cuidado Personal' },
    { id: 'hogar-accesorios', label: 'Hogar y Accesorios' },
  ];

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Availability filter
      if (availabilityFilter === 'in-stock' && (item.isComingSoon || !item.inStock)) {
        return false;
      }
      if (availabilityFilter === 'coming-soon' && !item.isComingSoon) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesCode = item.code?.toLowerCase().includes(query);
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription.toLowerCase().includes(query);
        const matchesIngredients = item.ingredients?.some(i => i.toLowerCase().includes(query));
        const matchesBenefits = item.benefits.some(b => b.toLowerCase().includes(query));

        if (!matchesCode && !matchesName && !matchesDesc && !matchesIngredients && !matchesBenefits) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      // 'featured'
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [searchQuery, selectedCategory, availabilityFilter, sortBy]);

  const displayedProducts = isHomeView ? filteredProducts.slice(0, 8) : filteredProducts;

  return (
    <section id="catalogo" className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00795F] uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A550]" />
              <span>Línea Original de Bienestar</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>HGW Costa Rica</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              {isHomeView ? 'Productos Destacados' : 'Catálogo de Productos Oficiales'}
            </h2>
            <p className="text-base sm:text-lg text-stone-700 mt-2 max-w-2xl font-normal leading-relaxed">
              Explora nuestras fórmulas botánicas, cafés funcionales de arándano y ganoderma, tecnología de nanoturmalina y suplementos con precios oficiales en Costa Rica. Cada producto cuenta con su ficha técnica completa.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="text-sm sm:text-base text-stone-700 font-semibold shrink-0">
            Mostrando{' '}
            <span className="text-black font-extrabold tabular-nums">{displayedProducts.length}</span>{' '}
            de{' '}
            <span className="text-black font-extrabold tabular-nums">{PRODUCTS.length}</span>{' '}
            productos
          </div>
        </div>

        {/* Controls: Search Bar & Segmented Filters */}
        <div className="bg-stone-50 p-4 sm:p-6 rounded-3xl border border-stone-200 mb-8 space-y-4 shadow-2xs">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-7 flex gap-2">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por nombre, código o ingrediente (arándano, turmalina, 0134...)"
                  className="w-full pl-11 pr-4 py-3.5 text-sm sm:text-base bg-white border border-stone-300 rounded-xl text-black placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#00795F]/30 focus:border-[#00795F] transition-all font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-500 hover:text-black"
                  >
                    Limpiar
                  </button>
                )}
              </div>
              <button className="px-6 py-3.5 bg-[#00795F] hover:bg-[#004d3c] text-white font-black text-sm rounded-xl transition-all shadow-sm active:scale-95 whitespace-nowrap uppercase">
                BUSCAR
              </button>
            </div>

            {/* Availability Filter Buttons */}
            <div className="md:col-span-5 flex items-center justify-between sm:justify-end gap-1.5 p-1 bg-stone-200/80 rounded-xl">
              <button
                onClick={() => setAvailabilityFilter('all')}
                className={`flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  availabilityFilter === 'all'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-stone-700 hover:text-black'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setAvailabilityFilter('in-stock')}
                className={`flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  availabilityFilter === 'in-stock'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-stone-700 hover:text-black'
                }`}
              >
                Disponibles
              </button>
              <button
                onClick={() => setAvailabilityFilter('coming-soon')}
                className={`flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  availabilityFilter === 'coming-soon'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-stone-700 hover:text-black'
                }`}
              >
                Próximamente
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-2 border-t border-stone-200">
            {categories.map((cat) => {
              const count = PRODUCTS.filter(p => cat.id === 'all' || p.category === cat.id).length;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'bg-[#00795F] text-white shadow-xs'
                      : 'bg-white text-stone-800 hover:text-black border border-stone-300 hover:border-stone-400'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1.5 text-xs tabular-nums ${isActive ? 'text-emerald-200 font-extrabold' : 'text-stone-500'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Grid */}
        {displayedProducts.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-3xl border border-stone-200 max-w-xl mx-auto px-4">
            <h3 className="text-xl font-black text-black mb-2">No se encontraron productos</h3>
            <p className="text-sm text-stone-600 mb-6">No hay productos que coincidan con los filtros seleccionados.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setAvailabilityFilter('all');
              }}
              className="px-6 py-3 bg-[#00795F] text-white font-bold text-sm rounded-xl"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {displayedProducts.map((product) => {
              const productUrl = `/producto/${product.slug}`;
              const whatsappLink = getProductWhatsAppUrl(product.name, product.priceFormatted);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  
                  {/* Top Image Box with Badge */}
                  <Link to={productUrl} className="relative aspect-square bg-gradient-to-b from-stone-50 to-stone-100/60 p-6 overflow-hidden flex items-center justify-center border-b border-stone-100">
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      {product.inStock && !product.isComingSoon ? (
                        <span className="px-2.5 py-1 bg-emerald-100 text-[#00795F] text-xs font-black rounded-lg uppercase tracking-wider border border-emerald-200 shadow-2xs">
                          En Stock
                        </span>
                      ) : product.isComingSoon ? (
                        <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-black rounded-lg uppercase tracking-wider border border-amber-200">
                          Próximamente
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-stone-100 text-stone-700 text-xs font-black rounded-lg uppercase tracking-wider border border-stone-200">
                          Bajo Pedido
                        </span>
                      )}
                    </div>

                    {product.featured && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 bg-[#00795F] text-white text-xs font-black rounded-lg uppercase tracking-wider shadow-xs flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-200" />
                          <span>Destacado</span>
                        </span>
                      </div>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-500 drop-shadow-md"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://media.academiahgw.online/wp-content/uploads/2026/11/productos-hgw-1024x683.webp";
                      }}
                    />
                  </Link>

                  {/* Body Content with Increased Font Sizes */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category label & Official Catalog Code */}
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className="text-xs sm:text-sm font-extrabold text-[#00795F] uppercase tracking-wider line-clamp-1">
                          {product.categoryLabel}
                        </span>
                        {product.code && (
                          <span className="text-xs font-black text-stone-700 bg-stone-100 px-2 py-0.5 rounded shrink-0">
                            Cód: {product.code}
                          </span>
                        )}
                      </div>

                      {/* Product Title linking to /producto/:slug */}
                      <h3 className="text-sm sm:text-base font-black text-black group-hover:text-[#00795F] transition-colors leading-snug line-clamp-2">
                        <Link to={productUrl} title={product.name}>
                          {product.name}
                        </Link>
                      </h3>

                      {/* Short Description - Increased text size */}
                      <p className="text-sm sm:text-base text-stone-700 mt-2 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {product.presentation && (
                        <div className="text-xs sm:text-sm text-stone-600 mt-2 font-medium truncate">
                          {product.presentation}
                        </div>
                      )}
                    </div>

                    {/* Price and Action Bar */}
                    <div className="mt-4 pt-3.5 border-t border-stone-100">
                      <div className="flex items-baseline justify-between mb-3">
                        <span className="text-xs sm:text-sm text-stone-600 font-bold">Precio</span>
                        <span className="text-base sm:text-xl font-black text-black tabular-nums">
                          {product.priceFormatted}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {/* Ver Ficha (Navigates to product detail page) */}
                        <Link
                          to={productUrl}
                          className="w-full py-2.5 px-2 text-xs sm:text-sm font-extrabold text-[#00795F] bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-all border border-emerald-200 flex items-center justify-center gap-1.5 active:scale-95"
                          title="Ficha técnica"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Ficha</span>
                        </Link>

                        {/* WhatsApp Consultation Button with dynamic product page URL */}
                        <a
                          href={whatsappLink}
                          onClick={(e) => {
                            if (typeof window !== 'undefined') {
                              const dynamicFullUrl = `${window.location.origin}/producto/${product.slug}`;
                              e.currentTarget.href = getProductWhatsAppUrl(product.name, product.priceFormatted, dynamicFullUrl);
                            }
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-2 text-xs sm:text-sm font-extrabold text-white bg-[#00A550] hover:bg-[#008f44] rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs active:scale-95"
                          title="Consultar por WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Consultar</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Complete Catalog Button (if on home view) */}
        {isHomeView && (
          <div className="mt-12 text-center">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#00795F] hover:bg-[#004d3c] text-white font-black text-sm sm:text-base rounded-2xl shadow-lg shadow-[#00795F]/20 transition-all active:scale-95 uppercase tracking-wider"
            >
              <span>Ver Catálogo Completo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
