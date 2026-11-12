import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Link } from '../router';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Check, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  Clock, 
  Package, 
  ExternalLink, 
  MessageCircle, 
  Info, 
  Award,
  ChevronRight
} from 'lucide-react';
import { getAffiliationWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const product = PRODUCTS.find((p) => p.slug === slug || p.id === slug || p.code === slug);

  if (!product) {
    return (
      <div className="py-24 text-center bg-stone-50 min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 mb-4">
          <Info className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mb-2">Producto no encontrado</h2>
        <p className="text-stone-600 mb-6 max-w-md">El producto que buscas no existe en el catálogo oficial de HGW Costa Rica o fue retirado.</p>
        <Link to="/productos" className="px-6 py-3 bg-[#00795F] hover:bg-[#004d3c] text-white font-black rounded-xl transition-all shadow-md">
          Volver al Catálogo Oficial
        </Link>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'usage'>('benefits');
  const whatsappUrl = getAffiliationWhatsAppUrl(product.name);
  const registrationUrl = "https://www.healthgreenworld.com/?userName=Yamilka507";

  return (
    <div className="py-6 sm:py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-[#00795F] transition-colors font-bold">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-300 shrink-0" />
          <Link to="/productos" className="hover:text-[#00795F] transition-colors font-bold">Productos Costa Rica</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-300 shrink-0" />
          <span className="text-[#00795F] font-bold truncate">{product.categoryLabel}</span>
          <ChevronRight className="w-3.5 h-3.5 text-stone-300 shrink-0" />
          <span className="text-stone-900 font-black truncate">{product.name}</span>
        </nav>

        {/* Top Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start">
          
          {/* Left Column: Product Image Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-gradient-to-b from-stone-50 to-stone-100/70 rounded-[2.5rem] overflow-hidden border border-stone-200/80 shadow-md aspect-square flex items-center justify-center p-8 sm:p-14 group relative">
              {/* Official Code Badge */}
              {product.code && (
                <div className="absolute top-6 left-6 px-3.5 py-1.5 bg-stone-900/90 text-white text-xs font-black rounded-xl tracking-wider shadow-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00A550]" />
                  <span>CÓDIGO: {product.code}</span>
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                {product.inStock ? (
                  <span className="px-3.5 py-1.5 bg-emerald-100 text-[#00795F] text-xs font-black rounded-xl uppercase tracking-wider border border-emerald-200 shadow-2xs">
                    En Stock Costa Rica
                  </span>
                ) : (
                  <span className="px-3.5 py-1.5 bg-amber-100 text-amber-800 text-xs font-black rounded-xl uppercase tracking-wider border border-amber-200">
                    Bajo Pedido
                  </span>
                )}
              </div>

              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://media.academiahgw.online/wp-content/uploads/2026/11/productos-hgw-1024x683.webp";
                }}
              />
            </div>

            {/* Quick Guarantee Bar */}
            <div className="grid grid-cols-3 gap-2 p-3 bg-stone-50 rounded-2xl border border-stone-200 text-center text-xs">
              <div className="p-2">
                <ShieldCheck className="w-4 h-4 text-[#00795F] mx-auto mb-1" />
                <span className="font-bold text-stone-800">100% Original</span>
              </div>
              <div className="p-2 border-x border-stone-200">
                <Award className="w-4 h-4 text-[#00795F] mx-auto mb-1" />
                <span className="font-bold text-stone-800">Calidad Green World</span>
              </div>
              <div className="p-2">
                <Package className="w-4 h-4 text-[#00795F] mx-auto mb-1" />
                <span className="font-bold text-stone-800">Sello HGW Latam</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information, Pricing & Actions */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-xs font-black text-[#00795F] uppercase tracking-[0.2em] bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">
                {product.categoryLabel}
              </span>
              {product.code && (
                <span className="text-xs font-bold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-lg">
                  Ref: {product.code}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-stone-900 mb-4 leading-tight">
              {product.name}
            </h1>
            
            {/* Price section with Costa Rican currency */}
            <div className="flex items-baseline gap-4 mb-6 border-b border-stone-100 pb-6">
              <div>
                <span className="text-xs font-bold text-stone-500 block uppercase tracking-wider">Precio Oficial Costa Rica:</span>
                <p className="text-3xl sm:text-4xl font-black text-[#00795F] tabular-nums">
                  {product.priceFormatted}
                </p>
              </div>
              <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1.5 rounded-xl">
                Moneda local: Colones (CRC)
              </span>
            </div>

            {/* Short Description */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              {product.shortDescription}
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 sm:p-5 bg-stone-50 rounded-2xl border border-stone-200/80 mb-6">
              {product.netContent && (
                <div>
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">Contenido Neto</span>
                  <span className="text-sm font-extrabold text-stone-900">{product.netContent}</span>
                </div>
              )}
              {product.servingsOrUnits && (
                <div>
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">Porciones / Unidades</span>
                  <span className="text-sm font-extrabold text-stone-900">{product.servingsOrUnits}</span>
                </div>
              )}
              {product.shelfLife && (
                <div>
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">Vida Útil</span>
                  <span className="text-sm font-extrabold text-stone-900">{product.shelfLife}</span>
                </div>
              )}
              {product.presentation && (
                <div>
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">Presentación</span>
                  <span className="text-sm font-extrabold text-stone-900">{product.presentation}</span>
                </div>
              )}
            </div>

            {/* Key Advantages Summary Pill List */}
            {product.advantages && product.advantages.length > 0 && (
              <div className="mb-6 p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl">
                <span className="text-xs font-black text-[#00795F] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#00A550]" />
                  Ventajas Principales del Catálogo:
                </span>
                <ul className="space-y-1.5">
                  {product.advantages.map((adv, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-stone-800 font-semibold flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A550] mt-1.5 shrink-0" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons Area */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl shadow-2xs">
                <div className="flex items-center text-amber-900 font-black mb-0.5 text-sm">
                  <AlertTriangle className="mr-2 w-4 h-4 shrink-0 text-amber-600" /> Disponibilidad en Costa Rica
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-medium">
                  Coordine su pedido o entrega en San José y provincias con la distribuidora autorizada vía WhatsApp.
                </p>
              </div>

              {/* Primary WhatsApp Action */}
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#00795F] hover:bg-[#004d3c] text-white font-black text-base sm:text-lg rounded-2xl shadow-lg shadow-[#00795F]/20 flex items-center justify-center gap-3 transition-all active:scale-95 uppercase tracking-wider"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pedir o Consultar por WhatsApp (+507 6778-8375)</span>
              </a>

              {/* Pre-Registration & Official Registration Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link 
                  to="/preregistro"
                  className="py-3.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-900 font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-wider border border-stone-200 text-center"
                >
                  <FileText className="w-4 h-4 text-[#00795F]" />
                  <span>Formulario Pre-registro</span>
                </Link>

                <a 
                  href={registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-wider shadow-sm text-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Activar Cuenta HGW</span>
                </a>
              </div>
            </div>

          </div>
        </div>
        
        {/* Technical Documentation Callout */}
        {product.technicalDocId && (
          <div className="mb-14 p-6 sm:p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#00795F] shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-lg text-stone-900">Ficha Técnica Oficial del Producto</h3>
                <p className="text-sm text-stone-600">Revisa la documentación analítica, certificaciones y registro en la sección de documentos.</p>
              </div>
            </div>
            <Link 
              to={`/documentos/${product.technicalDocId}`}
              className="px-8 py-3.5 bg-[#00795F] hover:bg-[#004d3c] text-white font-black text-xs sm:text-sm rounded-xl shadow-sm transition-all active:scale-95 whitespace-nowrap uppercase tracking-wider"
            >
              Ver Ficha Técnica
            </Link>
          </div>
        )}

        {/* Detailed Tabs: Propiedades, Ingredientes, Modo de Uso */}
        <div className="border-t border-stone-200 pt-10">
          <div className="flex flex-wrap gap-4 sm:gap-8 border-b border-stone-200 mb-8">
            <button
              onClick={() => setActiveTab('benefits')}
              className={`pb-4 text-xs sm:text-sm font-black uppercase tracking-widest transition-all relative ${
                activeTab === 'benefits' ? 'text-black border-b-2 border-[#00795F]' : 'text-stone-400 hover:text-black'
              }`}
            >
              Propiedades y Beneficios
            </button>
            <button
              onClick={() => setActiveTab('ingredients')}
              className={`pb-4 text-xs sm:text-sm font-black uppercase tracking-widest transition-all relative ${
                activeTab === 'ingredients' ? 'text-black border-b-2 border-[#00795F]' : 'text-stone-400 hover:text-black'
              }`}
            >
              Ingredientes Naturales y Vegetales
            </button>
            <button
              onClick={() => setActiveTab('usage')}
              className={`pb-4 text-xs sm:text-sm font-black uppercase tracking-widest transition-all relative ${
                activeTab === 'usage' ? 'text-black border-b-2 border-[#00795F]' : 'text-stone-400 hover:text-black'
              }`}
            >
              Modo de Uso y Cuidados
            </button>
          </div>

          <div className="max-w-5xl min-h-[300px]">
            {/* TAB 1: Propiedades y Beneficios Detallados */}
            {activeTab === 'benefits' && (
              <div className="space-y-10 animate-fade-in">
                {/* Detailed Breakdown per Component if available in catalog */}
                {product.benefitsDetailed && product.benefitsDetailed.length > 0 && (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#00A550]" />
                      Acción Detallada por Componente Activo (Catálogo Oficial)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.benefitsDetailed.map((item, idx) => (
                        <div key={idx} className="p-5 bg-stone-50 rounded-2xl border border-stone-200 hover:border-[#00795F]/40 transition-all">
                          <span className="text-xs font-black text-[#00795F] uppercase tracking-wider block mb-1.5">
                            {item.title}
                          </span>
                          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* General Benefits List */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-900 mb-4">
                    Beneficios Principales
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-3.5 p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100">
                        <div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#00A550]" />
                        </div>
                        <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-semibold">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Catalog Advantages if present */}
                {product.advantages && (
                  <div className="p-6 bg-stone-50 rounded-3xl border border-stone-200">
                    <h4 className="font-black text-base text-stone-900 mb-3 uppercase tracking-wide">
                      Ventajas Destacadas por HGW Costa Rica
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.advantages.map((adv, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-stone-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-[#00795F] shrink-0" />
                          <span>{adv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: Ingredientes de Origen Natural, Orgánico y Vegetal */}
            {activeTab === 'ingredients' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                      Ingredientes de Origen Natural, Orgánico y Vegetal
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-[#00795F] rounded-xl text-xs font-black border border-emerald-200 shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-[#00A550]" />
                      <span>Fórmula Botánica y Mineral Pura</span>
                    </div>
                  </div>
                  <p className="text-stone-600 text-sm mb-5">
                    Selección exclusiva de principios activos botánicos, extractos herbales, frutos silvestres y minerales naturales de alta pureza:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {product.ingredients?.map((ing, i) => (
                      <div key={i} className="px-4 py-2.5 bg-emerald-50 text-[#00795F] font-bold text-sm rounded-xl border border-emerald-100 flex items-center gap-2 shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-[#00A550] shrink-0" />
                        <span>{ing}</span>
                      </div>
                    )) || (
                      <p className="text-stone-500 italic">Consulte el desglose botánico en la ficha técnica oficial.</p>
                    )}
                  </div>
                </div>

                {/* Precautions */}
                {product.precautions && (
                  <div className="p-6 bg-stone-50 rounded-3xl border border-stone-200">
                    <h4 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4 text-stone-600" />
                      Precauciones de Uso
                    </h4>
                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
                      {product.precautions}
                    </p>
                  </div>
                )}

                {/* Contraindications Warning Box */}
                {product.contraindications && (
                  <div className="p-6 bg-red-50/80 rounded-3xl border-2 border-red-200">
                    <h4 className="text-base font-black text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                      Contraindicaciones Importantes
                    </h4>
                    <p className="text-sm sm:text-base text-red-800 leading-relaxed font-medium">
                      {product.contraindications}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: Modo de Uso */}
            {activeTab === 'usage' && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 mb-4">
                  ¿Cómo utilizar este producto de forma óptima?
                </h3>
                <div className="bg-[#00795F] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute -bottom-8 -right-8 p-6 opacity-10">
                    <Check className="w-48 h-48" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-black rounded-lg uppercase tracking-wider inline-block">
                      Instrucción Oficial HGW
                    </span>
                    <p className="text-lg sm:text-xl leading-relaxed font-bold">
                      {product.usage || "Consulte la ficha técnica o a su distribuidora autorizada para las dosis recomendadas."}
                    </p>
                  </div>
                </div>

                {product.contraindications && (
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-900 font-medium">
                    <span className="font-bold">Nota de seguridad: </span>
                    {product.contraindications}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Callout: Technical Documents Library */}
        <div className="mt-20 p-8 sm:p-12 bg-stone-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">¿Deseas descargar la ficha técnica en PDF?</h2>
            <p className="text-stone-300 text-sm sm:text-base max-w-xl">
              Explora nuestra sección de documentos oficiales de Costa Rica con todas las especificaciones y respaldo de la compañía.
            </p>
          </div>
          <Link 
            to="/documentos" 
            className="px-8 py-4 bg-[#00795F] hover:bg-[#00A550] text-white font-black text-sm rounded-xl shadow-lg transition-all active:scale-95 whitespace-nowrap relative z-10 uppercase tracking-wider"
          >
            Ir a Documentos Oficiales
          </Link>
        </div>

      </div>
    </div>
  );
};

