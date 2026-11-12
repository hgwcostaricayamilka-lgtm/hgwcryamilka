import React, { useState, useMemo } from 'react';
import { Search, Eye, Sparkles, Filter, ArrowRight, MessageCircle } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';
import { Link } from '../router';
import { getProductWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface CatalogProps {
  isHomeView?: boolean;
}

export const Catalog: React.FC<CatalogProps> = ({ isHomeView = false }) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'in-stock' | 'coming-soon'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  const categories = [
    { id: 'all', label: t('cat.all', 'Todos') },
    { id: 'cafes-bebidas', label: t('cat.cafes-bebidas', 'Cafés y Bebidas') },
    { id: 'candies-snacks', label: t('cat.candies-snacks', 'Candies y Snacks') },
    { id: 'cuidado-bucal', label: t('cat.cuidado-bucal', 'Cuidado Bucal') },
    { id: 'turmalina', label: t('cat.turmalina', 'Turmalina y Bienestar') },
    { id: 'nutricion', label: t('cat.nutricion', 'Nutrición y Colágeno') },
    { id: 'cuidado-personal', label: t('cat.cuidado-personal', 'Cuidado Personal') },
    { id: 'hogar-accesorios', label: t('cat.hogar-accesorios', 'Hogar y Accesorios') },
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
            <div className="flex items-center gap-2 text-xs font-bold text-[#00795F] uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A550]" />
              <span>{t('catalog.badge', 'Línea Original de Bienestar')}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>HGW Costa Rica</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              {isHomeView ? t('catalog.title_home', 'Productos Destacados') : t('catalog.title_all', 'Catálogo de Productos Oficiales')}
            </h2>
            <p className="text-base text-stone-700 mt-2 max-w-2xl font-normal leading-relaxed">
              {t('catalog.desc', 'Explora nuestras fórmulas botánicas, cafés funcionales de arándano y ganoderma, tecnología de nanoturmalina y suplementos con precios oficiales en Costa Rica. Cada producto cuenta con su ficha técnica completa.')}
            </p>
          </div>

          {/* Quick Counter */}
          <div className="text-sm text-stone-700 font-semibold shrink-0">
            {t('catalog.showing', 'Mostrando')}{' '}
            <span className="text-black font-extrabold tabular-nums">{displayedProducts.length}</span>{' '}
            {t('catalog.of', 'de')}{' '}
            <span className="text-black font-extrabold tabular-nums">{PRODUCTS.length}</span>{' '}
            {t('catalog.products_count', 'productos')}
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
                  placeholder={t('catalog.search_placeholder', 'Buscar por nombre, código o ingrediente...')}
                  className="w-full pl-11 pr-4 py-3 text-sm bg-white border border-stone-300 rounded-xl text-black placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#00795F]/30 focus:border-[#00795F] transition-all font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-500 hover:text-black"
                  >
                    {t('catalog.search_clear', 'Limpiar')}
                  </button>
                )}
              </div>
              <button className="px-6 py-3 bg-[#00795F] hover:bg-[#004d3c] text-white font-black text-sm rounded-xl transition-all shadow-sm active:scale-95 whitespace-nowrap uppercase">
                {t('catalog.search_btn', 'BUSCAR')}
              </button>
            </div>

            {/* Availability Filter Buttons */}
            <div className="md:col-span-5 flex items-center justify-between sm:justify-end gap-1.5 p-1 bg-stone-200/80 rounded-xl">
              <button
                onClick={() => setAvailabilityFilter('all')}
                className={`flex-1 sm:flex-none px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                  availabilityFilter === 'all'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-stone-700 hover:text-black'
                }`}
              >
                {t('catalog.filter_all', 'Todos')}
              </button>
              <button
                onClick={() => setAvailabilityFilter('in-stock')}
                className={`flex-1 sm:flex-none px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                  availabilityFilter === 'in-stock'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-stone-700 hover:text-black'
                }`}
              >
                {t('catalog.filter_stock', 'Disponibles')}
              </button>
              <button
                onClick={() => setAvailabilityFilter('coming-soon')}
                className={`flex-1 sm:flex-none px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                  availabilityFilter === 'coming-soon'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-stone-700 hover:text-black'
                }`}
              >
                {t('catalog.filter_coming', 'Próximamente')}
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
                  className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap shrink-0 transition-all ${
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
          <div className="text-center py-16 px-4 bg-stone-50 rounded-3xl border border-dashed border-stone-300">
            <Filter className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="text-lg font-extrabold text-black">No se encontraron productos</h3>
            <p className="text-sm text-stone-600 mt-1 max-w-sm mx-auto">
              No hay productos que coincidan con &ldquo;{searchQuery}&rdquo; en la categoría seleccionada.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setAvailabilityFilter('all');
              }}
              className="mt-4 px-5 py-2.5 text-xs font-bold text-[#00795F] bg-white border border-[#00795F]/40 rounded-xl hover:bg-stone-50 transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {displayedProducts.map((product) => {
              const productUrl = `/producto/${product.slug}`;
              const fullProductUrl = typeof window !== 'undefined'
                ? `${window.location.origin}/producto/${product.slug}`
                : `https://hgwcostarica.com/producto/${product.slug}`;
              const whatsappLink = getProductWhatsAppUrl(product.name, product.priceFormatted, fullProductUrl);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl sm:rounded-3xl border border-stone-200 hover:border-[#00795F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative isolate"
                >
                  {/* Top image container linking directly to product page with subtle zoom on hover */}
                  <Link
                    to={productUrl}
                    className="relative aspect-square w-full bg-stone-50 p-3 sm:p-6 flex items-center justify-center overflow-hidden border-b border-stone-100 block isolate"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain transform group-hover:scale-108 transition-transform duration-300 ease-out drop-shadow-xs"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://media.academiahgw.online/wp-content/uploads/2026/11/productos-hgw-1024x683.webp";
                      }}
                    />

                    {/* Status Badge in corner */}
                    {product.isComingSoon ? (
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-amber-500 text-white text-[9px] sm:text-[11px] font-black px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-md sm:rounded-lg shadow-xs">
                        {t('catalog.coming_badge', 'Próximamente')}
                      </span>
                    ) : product.featured ? (
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#00795F] text-white text-[9px] sm:text-[11px] font-black px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-md sm:rounded-lg flex items-center gap-1 shadow-xs">
                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#00A550]" />
                        <span className="hidden xs:inline">{t('catalog.featured_badge', 'Destacado')}</span>
                      </span>
                    ) : null}

                    {/* Quick view icon badge */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-white/95 text-stone-800 group-hover:text-[#00795F] rounded-lg sm:rounded-xl shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category label & Official Catalog Code */}
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] sm:text-xs font-bold text-[#00795F] uppercase tracking-wider line-clamp-1">
                          {product.categoryLabel}
                        </span>
                        {product.code && (
                          <span className="text-[9px] sm:text-[10px] font-extrabold text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded shrink-0">
                            Cód: {product.code}
                          </span>
                        )}
                      </div>

                      {/* Product Title linking to /producto/:slug */}
                      <h3 className="text-xs sm:text-base font-extrabold text-black group-hover:text-[#00795F] transition-colors leading-snug line-clamp-2 sm:line-clamp-1">
                        <Link to={productUrl} title={product.name}>
                          {product.name}
                        </Link>
                      </h3>

                      {/* Short Description */}
                      <p className="text-[17px] text-stone-700 mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {product.presentation && (
                        <div className="text-[10px] sm:text-xs text-stone-500 mt-1.5 font-medium truncate">
                          {product.presentation}
                        </div>
                      )}
                    </div>

                    {/* Price and Action Bar */}
                    <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-3.5 border-t border-stone-100">
                      <div className="flex items-baseline justify-between mb-2 sm:mb-3">
                        <span className="text-[10px] sm:text-xs text-stone-500 font-semibold">{t('catalog.price', 'Precio')}</span>
                        <span className="text-sm sm:text-xl font-black text-black tabular-nums">
                          {product.priceFormatted}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                        {/* Ver Ficha (Navigates to product detail page) */}
                        <Link
                          to={productUrl}
                          className="w-full py-1.5 sm:py-2.5 px-2 text-[11px] sm:text-xs font-bold text-[#00795F] bg-emerald-50 hover:bg-emerald-100 rounded-lg sm:rounded-xl transition-all border border-emerald-200 flex items-center justify-center gap-1 active:scale-95"
                          title={t('catalog.btn_details', 'Ficha')}
                        >
                          <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>{t('catalog.btn_details', 'Ficha')}</span>
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
                          className="w-full py-1.5 sm:py-2.5 px-2 text-[11px] sm:text-xs font-bold text-white bg-[#00A550] hover:bg-[#008f44] rounded-lg sm:rounded-xl transition-all flex items-center justify-center gap-1 shadow-2xs active:scale-95"
                          title={t('catalog.btn_inquire', 'Consultar')}
                        >
                          <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>{t('catalog.btn_inquire', 'Consultar')}</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* If in Home view, add button to go to full /productos */}
        {isHomeView && (
          <div className="mt-12 text-center">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 hover:bg-black text-white text-sm font-extrabold rounded-2xl shadow-md transition-all active:scale-95"
            >
              <span>{t('catalog.view_all', 'Ver Catálogo Completo')} ({PRODUCTS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

