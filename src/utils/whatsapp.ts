export const DISTRIBUTOR_WHATSAPP_NUMBER = "50767788375";
export const CORPORATE_OFFICE_PHONE = "+506 7185-5885";

/**
 * Generates the WhatsApp URL with the general affiliation message,
 * linking to the exact page URL where the visitor is:
 * «¡Hola! Estaba visitando tu tienda online (URL) y quería preguntar sobre cómo afiliarse a HGW Costa Rica. Mi nombre es:»
 */
export const getAffiliationWhatsAppUrl = (customUrl?: string, lang: 'es' | 'en' = 'es'): string => {
  let pageUrl = customUrl;
  if (!pageUrl && typeof window !== 'undefined') {
    pageUrl = window.location.href;
  }
  if (!pageUrl) {
    pageUrl = 'https://hgwcostarica.com';
  }

  const message = lang === 'en'
    ? `Hello! I was visiting your online store (${pageUrl}) and would like to ask about joining HGW Costa Rica. My name is:`
    : `¡Hola! Estaba visitando tu tienda online (${pageUrl}) y quería preguntar sobre cómo afiliarse a HGW Costa Rica. Mi nombre es:`;

  return `https://wa.me/${DISTRIBUTOR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates the WhatsApp URL for inquiring about a specific product,
 * dynamically linked to the exact page URL from which the visitor inquires:
 * «¡Hola! Estaba visitando tu tienda online (URL) y quería consultar o adquirir el producto "NOMBRE" (PRECIO). Mi nombre es:»
 */
export const getProductWhatsAppUrl = (
  productName: string,
  priceFormatted?: string,
  customUrl?: string,
  lang: 'es' | 'en' = 'es'
): string => {
  let pageUrl = customUrl;
  if (!pageUrl && typeof window !== 'undefined') {
    pageUrl = window.location.href;
  }
  if (!pageUrl) {
    pageUrl = 'https://hgwcostarica.com/productos';
  }

  const priceText = priceFormatted ? ` (${priceFormatted})` : '';
  const message = lang === 'en'
    ? `Hello! I was visiting your online store (${pageUrl}) and would like to ask about or order "${productName}"${priceText}. My name is:`
    : `¡Hola! Estaba visitando tu tienda online (${pageUrl}) y quería consultar o adquirir el producto "${productName}"${priceText}. Mi nombre es:`;

  return `https://wa.me/${DISTRIBUTOR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

