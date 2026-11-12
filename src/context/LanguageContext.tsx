import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.products': 'Productos',
    'nav.memberships': 'Membresías',
    'nav.business': 'Oportunidad de Negocio',
    'nav.preregister': 'Pre-registro',
    'nav.documents': 'Documentos PDF',
    'nav.contact': 'Contacto',
    'nav.contact_shipping': 'Contacto y Envíos',
    'nav.offices': 'Oficinas HGW LATAM',
    'nav.lang': 'Idioma',

    // Notice Banner
    'banner.site': 'Sitio de Distribuidores Independientes:',
    'banner.whatsapp_info': 'WhatsApp comercial +507 6778-8375 exclusivo para ventas y nuevas afiliaciones.',
    'banner.partner_question': '¿Ya eres socio registrado?',
    'banner.partner_action': 'Contacta a tu patrocinador o a oficinas principales:',

    // Hero
    'hero.badge': 'Distribuidor Independiente Autorizado en Costa Rica',
    'hero.title_pre': 'BIENESTAR Y SALUD CON',
    'hero.title_brand': 'HGW COSTA RICA',
    'hero.subtitle': 'Descubre la línea oficial de cafés funcionales con ganoderma y arándanos, tecnología de nanoturmalina y suplementos botánicos con despacho garantizado en todo Costa Rica.',
    'hero.cta_catalog': 'VER CATÁLOGO OFICIAL',
    'hero.cta_whatsapp': 'CONSULTAR POR WHATSAPP',
    'hero.guarantee_1': '100% Originales',
    'hero.guarantee_2': 'Entrega en Provincias',
    'hero.guarantee_3': 'Precios en Colones',

    // Catalog
    'catalog.badge': 'Línea Original de Bienestar',
    'catalog.title_home': 'Productos Destacados',
    'catalog.title_all': 'Catálogo de Productos Oficiales',
    'catalog.desc': 'Explora nuestras fórmulas botánicas, cafés funcionales de arándano y ganoderma, tecnología de nanoturmalina y suplementos con precios oficiales en Costa Rica.',
    'catalog.search_placeholder': 'Buscar por nombre, código o ingrediente (arándano, turmalina, 0134...)',
    'catalog.search_btn': 'BUSCAR',
    'catalog.search_clear': 'Limpiar',
    'catalog.showing': 'Mostrando',
    'catalog.of': 'de',
    'catalog.products_count': 'productos',
    'catalog.filter_all': 'Todos',
    'catalog.filter_stock': 'Disponibles',
    'catalog.filter_coming': 'Próximamente',
    'catalog.btn_details': 'Ficha',
    'catalog.btn_inquire': 'Consultar',
    'catalog.price': 'Precio',
    'catalog.empty_title': 'No se encontraron productos',
    'catalog.empty_desc': 'No hay productos que coincidan con los filtros seleccionados.',
    'catalog.btn_reset': 'Restablecer filtros',
    'catalog.view_all': 'Ver Catálogo Completo',
    'catalog.featured_badge': 'Destacado',
    'catalog.coming_badge': 'Próximamente',

    // Categories
    'cat.all': 'Todos',
    'cat.cafes-bebidas': 'Cafés y Bebidas',
    'cat.candies-snacks': 'Candies y Snacks',
    'cat.cuidado-bucal': 'Cuidado Bucal',
    'cat.turmalina': 'Turmalina y Bienestar',
    'cat.nutricion': 'Nutrición y Colágeno',
    'cat.cuidado-personal': 'Cuidado Personal',
    'cat.hogar-accesorios': 'Hogar y Accesorios',

    // Product Details
    'p.code': 'CÓDIGO:',
    'p.in_stock': 'En Stock Costa Rica',
    'p.on_demand': 'Bajo Pedido',
    'p.price_label': 'Precio Oficial Costa Rica:',
    'p.currency_note': 'Moneda local: Colones (CRC)',
    'p.net_content': 'Contenido Neto',
    'p.servings': 'Porciones / Unidades',
    'p.shelf_life': 'Vida Útil',
    'p.presentation': 'Presentación',
    'p.advantages_title': 'Ventajas Principales del Catálogo:',
    'p.notice_title': 'Disponibilidad en Costa Rica',
    'p.notice_text': 'Coordine su pedido o entrega en San José y provincias con la distribuidora autorizada vía WhatsApp.',
    'p.btn_order_whatsapp': 'Pedir o Consultar por WhatsApp (+507 6778-8375)',
    'p.btn_preregister': 'Formulario Pre-registro',
    'p.btn_activate': 'Activar Cuenta HGW',
    'p.tech_sheet_title': 'Ficha Técnica Oficial del Producto',
    'p.tech_sheet_desc': 'Revisa la documentación analítica, certificaciones y registro en la sección de documentos.',
    'p.btn_view_tech': 'Ver Ficha Técnica',
    'p.tab_benefits': 'Propiedades y Beneficios',
    'p.tab_ingredients': 'Ingredientes Naturales y Vegetales',
    'p.tab_usage': 'Modo de Uso y Cuidados',
    'p.detailed_benefits_title': 'Acción Detallada por Componente Activo (Catálogo Oficial)',
    'p.general_benefits_title': 'Beneficios Principales',
    'p.catalog_advantages_title': 'Ventajas Destacadas por HGW Costa Rica',
    'p.ingredients_title': 'Ingredientes de Origen Natural, Orgánico y Vegetal',
    'p.ingredients_badge': 'Fórmula Botánica y Mineral Pura',
    'p.ingredients_subtitle': 'Selección exclusiva de principios activos botánicos, extractos herbales, frutos silvestres y minerales naturales de alta pureza:',
    'p.precautions_title': 'Precauciones de Uso',
    'p.contraindications_title': 'Contraindicaciones Importantes',
    'p.usage_title': '¿Cómo utilizar este producto de forma óptima?',
    'p.official_instruction': 'Instrucción Oficial HGW',
    'p.security_note': 'Nota de seguridad:',
    'p.bottom_callout_title': '¿Deseas descargar la ficha técnica en PDF?',
    'p.bottom_callout_desc': 'Explora nuestra sección de documentos oficiales de Costa Rica con todas las especificaciones y respaldo de la compañía.',
    'p.bottom_callout_btn': 'Ir a Documentos Oficiales',
    'p.not_found_title': 'Producto no encontrado',
    'p.not_found_desc': 'El producto que buscas no existe en el catálogo oficial de HGW Costa Rica o fue retirado.',
    'p.btn_back_catalog': 'Volver al Catálogo Oficial',

    // Floating Button
    'float.title': 'WhatsApp Distribuidor Independiente',
    'float.desc': 'Este número (+507 6778-8375) es atendido por un Distribuidor Independiente para consultas sobre productos, compras y afiliaciones.',
    'float.partner_alert': '¿Ya eres socio registrado de HGW?',
    'float.partner_text': 'Si ya te encuentras afiliado en HGW, debes comunicarte directamente con tu patrocinador o llamar a oficinas principales: +506 7185-5885.',
    'float.btn_chat': 'Chatear con el Distribuidor',
    'float.tooltip_title': 'WhatsApp Distribuidor:',
    'float.tooltip_sub': '¿Deseas información sobre afiliación o pedidos?',

    // Footer
    'footer.company': 'HGW Costa Rica',
    'footer.brand_text': 'Distribuidores Independientes autorizados de Health Green World en Costa Rica. Bienestar holístico mediante productos formulados con extractos ancestrales de arándano, turmalina, ganoderma y fitonutrientes.',
    'footer.links_title': 'Navegación del Sitio',
    'footer.contact_title': 'Oficinas Principales y Envíos Costa Rica',
    'footer.address': 'San José El Carmen, Avenida 5 Calle 1, San José, Costa Rica.',
    'footer.office_phone': 'Oficina Principal: +506 7185-5885 (Atención Corporativa)',
    'footer.whatsapp_phone': 'WhatsApp Distribuidor: +507 6778-8375',
    'footer.email': 'Email: hgwcostarica@gmail.com',
    'footer.hours': 'Horario: Lun - Vie 9:00 am a 5:30 pm | Sáb 10:00 am a 2:00 pm. Envíos por Correos de Costa Rica a todo el país.',
    'footer.support_title': 'Soporte a Socios Registrados:',
    'footer.support_text': 'Si ya es socio activo de HGW, debe comunicarse directamente con su patrocinador o con el teléfono corporativo +506 7185-5885. El WhatsApp de este sitio corresponde a distribuidores independientes.',
    'footer.legal_notice': 'Aviso Legal y de Independencia: Este sitio web es de carácter informativo y comercial, operado de manera autónoma por Distribuidores Independientes autorizados de Health Green World (HGW) en Costa Rica. No constituye la página web corporativa oficial ni la sede principal de Health Green World Inc. Las marcas registradas, logotipos y nombres comerciales mostrados pertenecen a sus respectivos propietarios y se utilizan únicamente con fines ilustrativos e informativos.',
    'footer.medical_disclaimer': 'Descargo de Responsabilidad Nutricional y de Salud: Los productos presentados en este sitio corresponden a alimentos funcionales, infusiones, suplementos nutricionales y artículos de cuidado personal. No son medicamentos y no han sido formulados para diagnosticar, mitigar, tratar, curar ni prevenir ninguna enfermedad o padecimiento. Consulte siempre a su médico o especialista de confianza ante cualquier inquietud de salud o antes de iniciar el consumo de cualquier suplemento si se encuentra en estado de embarazo, lactancia o bajo medicación médica.',
    'footer.rights': 'Todos los derechos reservados. Sitio de distribuidores independientes.',
    'footer.country': 'Costa Rica, República de Costa Rica',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.memberships': 'Memberships',
    'nav.business': 'Business Opportunity',
    'nav.preregister': 'Pre-registration',
    'nav.documents': 'PDF Documents',
    'nav.contact': 'Contact',
    'nav.contact_shipping': 'Contact & Shipping',
    'nav.offices': 'HGW LATAM Offices',
    'nav.lang': 'Language',

    // Notice Banner
    'banner.site': 'Independent Distributors Website:',
    'banner.whatsapp_info': 'Commercial WhatsApp +507 6778-8375 exclusively for sales and new affiliations.',
    'banner.partner_question': 'Already a registered partner?',
    'banner.partner_action': 'Contact your sponsor or corporate headquarters:',

    // Hero
    'hero.badge': 'Authorized Independent Distributor in Costa Rica',
    'hero.title_pre': 'HEALTH & WELLNESS WITH',
    'hero.title_brand': 'HGW COSTA RICA',
    'hero.subtitle': 'Discover the official line of functional coffees with ganoderma and blueberries, nano-tourmaline technology, and botanical supplements with guaranteed delivery across Costa Rica.',
    'hero.cta_catalog': 'VIEW OFFICIAL CATALOG',
    'hero.cta_whatsapp': 'INQUIRE VIA WHATSAPP',
    'hero.guarantee_1': '100% Original',
    'hero.guarantee_2': 'Nationwide Delivery',
    'hero.guarantee_3': 'Prices in Colones',

    // Catalog
    'catalog.badge': 'Original Wellness Line',
    'catalog.title_home': 'Featured Products',
    'catalog.title_all': 'Official Products Catalog',
    'catalog.desc': 'Explore our botanical formulas, functional blueberry and ganoderma coffees, nano-tourmaline technology, and supplements with official Costa Rica prices.',
    'catalog.search_placeholder': 'Search by name, code or ingredient (blueberry, tourmaline, 0134...)',
    'catalog.search_btn': 'SEARCH',
    'catalog.search_clear': 'Clear',
    'catalog.showing': 'Showing',
    'catalog.of': 'of',
    'catalog.products_count': 'products',
    'catalog.filter_all': 'All',
    'catalog.filter_stock': 'In Stock',
    'catalog.filter_coming': 'Coming Soon',
    'catalog.btn_details': 'Details',
    'catalog.btn_inquire': 'Inquire',
    'catalog.price': 'Price',
    'catalog.empty_title': 'No products found',
    'catalog.empty_desc': 'No products match the selected filters.',
    'catalog.btn_reset': 'Reset filters',
    'catalog.view_all': 'View Complete Catalog',
    'catalog.featured_badge': 'Featured',
    'catalog.coming_badge': 'Coming Soon',

    // Categories
    'cat.all': 'All',
    'cat.cafes-bebidas': 'Coffees & Beverages',
    'cat.candies-snacks': 'Candies & Snacks',
    'cat.cuidado-bucal': 'Oral Care',
    'cat.turmalina': 'Tourmaline & Wellness',
    'cat.nutricion': 'Nutrition & Collagen',
    'cat.cuidado-personal': 'Personal Care',
    'cat.hogar-accesorios': 'Home & Accessories',

    // Product Details
    'p.code': 'CODE:',
    'p.in_stock': 'In Stock Costa Rica',
    'p.on_demand': 'On Request',
    'p.price_label': 'Official Costa Rica Price:',
    'p.currency_note': 'Local currency: Colones (CRC)',
    'p.net_content': 'Net Content',
    'p.servings': 'Servings / Units',
    'p.shelf_life': 'Shelf Life',
    'p.presentation': 'Presentation',
    'p.advantages_title': 'Main Advantages from Official Catalog:',
    'p.notice_title': 'Availability in Costa Rica',
    'p.notice_text': 'Coordinate your order or delivery in San José and provinces with the authorized distributor via WhatsApp.',
    'p.btn_order_whatsapp': 'Order or Inquire via WhatsApp (+507 6778-8375)',
    'p.btn_preregister': 'Pre-registration Form',
    'p.btn_activate': 'Activate HGW Account',
    'p.tech_sheet_title': 'Official Product Technical Sheet',
    'p.tech_sheet_desc': 'Check analytical documentation, certifications, and registration in the documents section.',
    'p.btn_view_tech': 'View Technical Sheet',
    'p.tab_benefits': 'Properties & Benefits',
    'p.tab_ingredients': 'Natural & Plant Ingredients',
    'p.tab_usage': 'Usage & Care',
    'p.detailed_benefits_title': 'Detailed Action by Active Component (Official Catalog)',
    'p.general_benefits_title': 'Main Benefits',
    'p.catalog_advantages_title': 'Highlights by HGW Costa Rica',
    'p.ingredients_title': 'Ingredients of Natural, Organic and Plant Origin',
    'p.ingredients_badge': 'Pure Botanical & Mineral Formula',
    'p.ingredients_subtitle': 'Exclusive selection of botanical active ingredients, herbal extracts, wild berries, and high-purity natural minerals:',
    'p.precautions_title': 'Usage Precautions',
    'p.contraindications_title': 'Important Contraindications',
    'p.usage_title': 'How to use this product optimally?',
    'p.official_instruction': 'Official HGW Instruction',
    'p.security_note': 'Safety note:',
    'p.bottom_callout_title': 'Would you like to download the technical sheet in PDF?',
    'p.bottom_callout_desc': 'Explore our official Costa Rica documents section with all specifications and company endorsement.',
    'p.bottom_callout_btn': 'Go to Official Documents',
    'p.not_found_title': 'Product not found',
    'p.not_found_desc': 'The product you are looking for does not exist in the official HGW Costa Rica catalog or was removed.',
    'p.btn_back_catalog': 'Back to Official Catalog',

    // Floating Button
    'float.title': 'Independent Distributor WhatsApp',
    'float.desc': 'This phone (+507 6778-8375) is handled by an Independent Distributor for inquiries about products, orders, and affiliations.',
    'float.partner_alert': 'Already a registered HGW partner?',
    'float.partner_text': 'If you are already affiliated with HGW, please contact your sponsor directly or call headquarters: +506 7185-5885.',
    'float.btn_chat': 'Chat with Distributor',
    'float.tooltip_title': 'Distributor WhatsApp:',
    'float.tooltip_sub': 'Need information on affiliations or orders?',

    // Footer
    'footer.company': 'HGW Costa Rica',
    'footer.brand_text': 'Authorized Independent Distributors of Health Green World in Costa Rica. Holistic wellness through products formulated with blueberry, tourmaline, ganoderma and phytonutrients.',
    'footer.links_title': 'Site Navigation',
    'footer.contact_title': 'Main Office & Costa Rica Shipping',
    'footer.address': 'San José El Carmen, Avenida 5 Calle 1, San José, Costa Rica.',
    'footer.office_phone': 'Main Office: +506 7185-5885 (Corporate Support)',
    'footer.whatsapp_phone': 'Distributor WhatsApp: +507 6778-8375',
    'footer.email': 'Email: hgwcostarica@gmail.com',
    'footer.hours': 'Hours: Mon - Fri 9:00 am to 5:30 pm | Sat 10:00 am to 2:00 pm. Nationwide delivery via Correos de Costa Rica.',
    'footer.support_title': 'Registered Partner Support:',
    'footer.support_text': 'If you are already an active HGW partner, please contact your sponsor directly or call corporate offices at +506 7185-5885. This site WhatsApp belongs to independent distributors.',
    'footer.legal_notice': 'Legal & Independence Notice: This website is informational and commercial, operated autonomously by authorized Independent Distributors of Health Green World (HGW) in Costa Rica. It does not constitute the official corporate headquarters of Health Green World Inc. Trademarks and brand names belong to their respective owners.',
    'footer.medical_disclaimer': 'Health & Nutritional Disclaimer: Products presented on this site are functional foods, herbal infusions, nutritional supplements, and personal care items. They are not pharmaceutical drugs and are not formulated to diagnose, mitigate, treat, cure, or prevent any disease. Always consult your trusted physician.',
    'footer.rights': 'All rights reserved. Authorized Independent Distributors website.',
    'footer.country': 'Costa Rica, Republic of Costa Rica',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hgw_lang');
      if (saved === 'en' || saved === 'es') return saved;
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('hgw_lang', lang);
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.es;
    if (dict[key]) return dict[key];
    const fallbackDict = TRANSLATIONS.es;
    return fallbackDict[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
