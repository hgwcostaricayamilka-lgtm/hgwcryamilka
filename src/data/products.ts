export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'cafes-bebidas' | 'candies-snacks' | 'cuidado-bucal' | 'turmalina' | 'cuidado-personal' | 'hogar-accesorios' | 'nutricion';
  categoryLabel: string;
  price: number;
  priceFormatted: string;
  inStock: boolean;
  isComingSoon?: boolean;
  image: string;
  shortDescription: string;
  presentation?: string;
  benefits: string[];
  ingredients?: string[];
  usage?: string;
  precautions?: string;
  featured?: boolean;
  technicalDocId?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "110",
    slug: "berry-coffee",
    name: "Berry Coffee",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 11730,
    priceFormatted: "₡11.730",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/blueberry-coffee-p-500.png",
    shortDescription: "Café soluble enriquecido con arándanos, rico en antioxidantes.",
    presentation: "15 g x 12 sachets",
    benefits: ["Antioxidante", "Salud visual"],
    technicalDocId: "doc-16"
  },
  {
    id: "145",
    slug: "blueberry-fruit-tea-jam",
    name: "Blueberry Fruit Tea Jam",
    category: "candies-snacks",
    categoryLabel: "Candies y Snacks Funcionales",
    price: 6120,
    priceFormatted: "₡6.120",
    inStock: true,
    image: "https://hgwCosta Rica.com/wp-content/uploads/2026/10/mermelada-p-500.png",
    shortDescription: "Mermelada de arándanos naturales.",
    presentation: "200 g",
    benefits: ["Natural", "Antioxidante"],
    technicalDocId: "doc-20"
  },
  {
    id: "106",
    slug: "black-tea-coffee",
    name: "Black Tea Coffee",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 10200,
    priceFormatted: "₡10.200",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/black-tea-p-500.png",
    shortDescription: "Combinación de café y té negro.",
    presentation: "3.5 g/sachet x 12 sachets/box x 84 boxes/carton",
    benefits: ["Concentración", "Digestión"],
    technicalDocId: "doc-16"
  },
  {
    id: "131",
    slug: "blueberry-collagen-peptide",
    name: "Blueberry Collagen Peptide",
    category: "nutricion",
    categoryLabel: "Nutrición y Suplementos",
    price: 14790,
    priceFormatted: "₡14.790",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/colageno-p-500.png",
    shortDescription: "Péptidos de colágeno con arándano.",
    presentation: "25 g x 12 frascos",
    benefits: ["Articulaciones", "Piel"],
    technicalDocId: "doc-17"
  },
  {
    id: "135",
    slug: "blueberry-candy",
    name: "Blueberry Candy",
    category: "candies-snacks",
    categoryLabel: "Candies y Snacks Funcionales",
    price: 2958,
    priceFormatted: "₡2.958",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Blueberry-Candy.png",
    shortDescription: "Caramelos de arándano.",
    presentation: "0.5 g x 60 frascos",
    benefits: ["Antioxidante"],
    technicalDocId: "doc-20"
  },
  {
    id: "139",
    slug: "coffee-candy",
    name: "Coffee Candy",
    category: "candies-snacks",
    categoryLabel: "Candies y Snacks Funcionales",
    price: 2958,
    priceFormatted: "₡2.958",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Coffee-Candy-HGW-scaled.png",
    shortDescription: "Caramelos de café.",
    presentation: "0.5 g x 60 frascos",
    benefits: ["Energía"],
    technicalDocId: "doc-20"
  },
  {
    id: "114",
    slug: "ganoderma-coffee",
    name: "Ganoderma Coffee",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 11730,
    priceFormatted: "₡11.730",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/ganoderma-p-500.png",
    shortDescription: "Café soluble con Ganoderma.",
    presentation: "15 g x 12 sachets",
    benefits: ["Defensas", "Energía"],
    technicalDocId: "doc-16"
  },
  {
    id: "108",
    slug: "cordyceps-coffee",
    name: "Cordyceps Coffee",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 11730,
    priceFormatted: "₡11.730",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Cordyceps-Coffee.png",
    shortDescription: "Café con Cordyceps.",
    presentation: "15 g x 12 sachets",
    benefits: ["Resistencia", "Vitalidad"],
    technicalDocId: "doc-12"
  },
  {
    id: "122",
    slug: "fresh-drink-chang-jing-jing",
    name: "Fresh Drink Chang JinJing",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 6630,
    priceFormatted: "₡6.630",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/fresh-drink-p-500.png",
    shortDescription: "Bebida depurativa.",
    presentation: "3.5 g x 6 sachets",
    benefits: ["Depurativo"],
    technicalDocId: "doc-42"
  },
  {
    id: "129",
    slug: "lactiberry",
    name: "Lactiberry",
    category: "nutricion",
    categoryLabel: "Nutrición y Suplementos",
    price: 13260,
    priceFormatted: "₡13.260",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/lactiberry-p-500.png",
    shortDescription: "Probióticos con arándanos.",
    presentation: "30 g x 10 sachets",
    benefits: ["Digestión", "Proteína"],
    technicalDocId: "doc-22"
  },
  {
    id: "168",
    slug: "pro-shaping-tea",
    name: "Pro Shaping Tea",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 11730,
    priceFormatted: "₡11.730",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/TE-QUEMADOR-DE-GRAS-HGW.jpeg",
    shortDescription: "Té para reducir grasas.",
    presentation: "3 g x 24 sachets",
    benefits: ["Metabolismo"],
    technicalDocId: "doc-16"
  },
  {
    id: "118",
    slug: "choco-blue",
    name: "Choco Blue",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 20400,
    priceFormatted: "₡20.400",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Choco_Blue_HGW-removebg-preview.png",
    shortDescription: "Bebida de cacao y arándanos.",
    presentation: "33 g/bag x 20 bags",
    benefits: ["Antioxidante", "Proteína"],
    technicalDocId: "doc-16"
  },
  {
    id: "120",
    slug: "choco-gano",
    name: "Choco Gano",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 20400,
    priceFormatted: "₡20.400",
    inStock: true,
    image: "https://hgwCosta Rica.com/wp-content/uploads/2026/10/Choco-Gano-HGW.webp",
    shortDescription: "Cacao con Ganoderma.",
    presentation: "33 g/bag x 20 bags",
    benefits: ["Inmunidad"],
    technicalDocId: "doc-16"
  },
  {
    id: "96",
    slug: "toalla-sanitaria-dia-turmalina",
    name: "Toalla Sanitaria Día",
    category: "turmalina",
    categoryLabel: "Cuidado Personal y Femenino",
    price: 2805,
    priceFormatted: "₡2.805",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Toalla-sanitaria-con-turmalina-HGW-uso-dia.png",
    shortDescription: "Toalla sanitaria día con turmalina.",
    presentation: "10 unid",
    benefits: ["Higiene"],
    technicalDocId: "doc-70"
  },
  {
    id: "97",
    slug: "toalla-sanitaria-noche-turmalina",
    name: "Toalla Sanitaria Noche",
    category: "turmalina",
    categoryLabel: "Cuidado Personal y Femenino",
    price: 2244,
    priceFormatted: "₡2.244",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Toalla-sanitaria-con-turmalina-HGW-uso-nocturno.png",
    shortDescription: "Toalla sanitaria noche con turmalina.",
    presentation: "8 unid",
    benefits: ["Higiene"],
    technicalDocId: "doc-70"
  },
  {
    id: "94",
    slug: "protector-intimo-diario-turmalina",
    name: "Protector Diario",
    category: "turmalina",
    categoryLabel: "Cuidado Personal y Femenino",
    price: 2805,
    priceFormatted: "₡2.805",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Protectores-intimos-HGW.png",
    shortDescription: "Protector diario con turmalina.",
    presentation: "30 unid",
    benefits: ["Higiene"],
    technicalDocId: "doc-70"
  },
  {
    id: "76",
    slug: "keratine-shampoo",
    name: "Keratine Shampoo",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal y Cosméticos",
    price: 8160,
    priceFormatted: "₡8.160",
    inStock: false,
    isComingSoon: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/SHAMPOO-SMILIFE-HGW.jpg",
    shortDescription: "Champú con queratina.",
    presentation: "255 ml",
    benefits: ["Cabello"],
    technicalDocId: "doc-44"
  },
  {
    id: "20",
    slug: "jabon-de-artemisa",
    name: "Mugwort Soap",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal y Cosméticos",
    price: 3672,
    priceFormatted: "₡3.672",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Jabon-de-artemisa.jpeg",
    shortDescription: "Jabón de artemisa.",
    presentation: "200 g",
    benefits: ["Higiene"],
    technicalDocId: "doc-115"
  },
  {
    id: "56",
    slug: "jabon-de-oliva",
    name: "Olive Soap",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal y Cosméticos",
    price: 2356,
    priceFormatted: "₡2.356",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Jabon-de-oliva.jpeg",
    shortDescription: "Jabón de oliva.",
    presentation: "100 g",
    benefits: ["Hidratación"],
    technicalDocId: "doc-21"
  },
  {
    id: "31",
    slug: "jabon-de-turmalina",
    name: "Tourmaline Soap",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal y Cosméticos",
    price: 2356,
    priceFormatted: "₡2.356",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Jabon-de-turmalina.jpeg",
    shortDescription: "Jabón de turmalina.",
    presentation: "100 g",
    benefits: ["Limpieza"],
    technicalDocId: "doc-21"
  },
  {
    id: "153",
    slug: "green-world-herbs-toothpaste",
    name: "Green World Herbs Toothpaste",
    category: "cuidado-bucal",
    categoryLabel: "Cuidado Bucal Avanzado",
    price: 4488,
    priceFormatted: "₡4.488",
    inStock: false,
    isComingSoon: true,
    image: "https://hgwCosta Rica.com/wp-content/uploads/2026/10/Pasta-de-Dientes-a-Base-de-Hierbas-Chinas-para-Tener-Dientes-Fuertes.jpg",
    shortDescription: "Pasta dental con hierbas.",
    presentation: "120 g",
    benefits: ["Higiene bucal"],
    technicalDocId: "doc-112"
  },
  {
    id: "158",
    slug: "tourmaline-toothpaste-white",
    name: "Tourmaline Toothpaste White",
    category: "cuidado-bucal",
    categoryLabel: "Cuidado Bucal Avanzado",
    price: 4080,
    priceFormatted: "₡4.080",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Pasta-dental-con-turmalina-blanca.jpg",
    shortDescription: "Pasta dental con turmalina blanca.",
    presentation: "120 g/box",
    benefits: ["Blanqueamiento"],
    technicalDocId: "doc-100"
  },
  {
    id: "159",
    slug: "tourmaline-toothpaste-black",
    name: "Tourmaline Toothpaste Black",
    category: "cuidado-bucal",
    categoryLabel: "Cuidado Bucal Avanzado",
    price: 4080,
    priceFormatted: "₡4.080",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Pasta_dental_con_turmalina_negra-removebg-preview.png",
    shortDescription: "Pasta dental con turmalina negra.",
    presentation: "120 g/box",
    benefits: ["Limpieza profunda"],
    technicalDocId: "doc-100"
  },
  {
    id: "156",
    slug: "probiotics-toothpaste",
    name: "Probiotics Toothpaste",
    category: "cuidado-bucal",
    categoryLabel: "Cuidado Bucal Avanzado",
    price: 4080,
    priceFormatted: "₡4.080",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Pasta-dental-con-probioticos-HGW-1024x1024.jpg",
    shortDescription: "Pasta dental con probióticos.",
    presentation: "120 g/box",
    benefits: ["Microbiota oral"],
    technicalDocId: "doc-112"
  },
  {
    id: "82",
    slug: "collar-de-turmalina",
    name: "Collar de Turmalina",
    category: "turmalina",
    categoryLabel: "Accesorios y Fisioterapia de Turmalina",
    price: 20400,
    priceFormatted: "₡20.400",
    inStock: true,
    image: "https://hgwCosta Rica.com/wp-content/uploads/2026/10/Collar-de-turmalina-No.-15.png",
    shortDescription: "Collar de turmalina.",
    presentation: "1 unid",
    benefits: ["Bienestar"],
    technicalDocId: "doc-39"
  },
  {
    id: "pul-01",
    slug: "pulsera-de-turmalina",
    name: "Pulsera de Turmalina",
    category: "turmalina",
    categoryLabel: "Accesorios y Fisioterapia de Turmalina",
    price: 10200,
    priceFormatted: "₡10.200",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Pulsera-de-turmalina-No.-33-scaled.jpg",
    shortDescription: "Pulsera de turmalina.",
    presentation: "1 unid",
    benefits: ["Bienestar"],
    technicalDocId: "doc-39"
  }
];

export interface MembershipPlan {
  id: string;
  name: string;
  bv: string;
  priceEstimate: string;
  productsChoice: string;
  fastStartBonus: string;
  developmentBonus: string;
  teamBonus: string;
  dailyEarningsCap: string;
  eliteBonus?: string;
  repurchaseBonus: string;
  directSaleProfit: string;
  packageImageUrl: string;
  recommended?: boolean;
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "pre-junior",
    name: "Membresía Pre-Junior",
    bv: "50 BV",
    priceEstimate: "B/. 90.00 (aprox)",
    productsChoice: "Productos de su preferencia",
    fastStartBonus: "$5.00",
    developmentBonus: "0.20 USD",
    teamBonus: "5%",
    dailyEarningsCap: "50 USD",
    repurchaseBonus: "5%",
    directSaleProfit: "30%",
    packageImageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/prejunior-hgw.png",
  },
  {
    id: "junior",
    name: "Membresía Junior",
    bv: "100 BV",
    priceEstimate: "B/. 180.00 (aprox)",
    productsChoice: "Productos de su preferencia",
    fastStartBonus: "$10.00",
    developmentBonus: "0.50 USD",
    teamBonus: "7%",
    dailyEarningsCap: "120 USD",
    repurchaseBonus: "5%",
    directSaleProfit: "30%",
    packageImageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/JUNIOR-100-BV.png",
  },
  {
    id: "senior",
    name: "Membresía Senior",
    bv: "300 BV",
    priceEstimate: "B/. 540.00 (aprox)",
    productsChoice: "Productos de su preferencia",
    fastStartBonus: "$30.00",
    developmentBonus: "1.50 USD",
    teamBonus: "8%",
    dailyEarningsCap: "360 USD",
    eliteBonus: "4% Hasta 3era generación",
    repurchaseBonus: "5%",
    directSaleProfit: "30%",
    packageImageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/senior.png",
  },
  {
    id: "master",
    name: "Membresía Master",
    bv: "600 BV",
    priceEstimate: "B/. 1024.00 (aprox)",
    productsChoice: "Productos de su preferencia",
    fastStartBonus: "$60.00",
    developmentBonus: "3.00 USD",
    teamBonus: "10%",
    dailyEarningsCap: "720 USD",
    eliteBonus: "4% Hasta 6ta generación",
    repurchaseBonus: "5%",
    directSaleProfit: "60% (Hasta 52% en recompras según el plan)",
    packageImageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/master-600-bv-hgw.png",
    recommended: true,
  }
];

export const CERTIFICATIONS = [
  {
    name: "FDA Registered",
    description: "Instalaciones registradas ante la Administración de Alimentos y Medicamentos de EE.UU.",
    imageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/FDA-1024x683-1.webp"
  },
  {
    name: "GMP (Good Manufacturing Practice)",
    description: "Normas de Buenas Prácticas de Manufactura en formulación, pureza y envasado.",
    imageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/Good_Manufacturing_Practice-1024x683-1.webp"
  },
  {
    name: "HACCP",
    description: "Análisis de Peligros y Puntos Críticos de Control en seguridad de alimentos.",
    imageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/HACCP-1024x683-1.webp"
  },
  {
    name: "ISO 9001",
    description: "Certificación internacional de sistemas de gestión de calidad total.",
    imageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/Iso_9001-1024x683-1.webp"
  },
  {
    name: "Halal Certified",
    description: "Garantía de pureza, higiene y origen en todos los ingredientes.",
    imageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/Halal_Certified-1024x683-1.webp"
  },
  {
    name: "Asociación de Venta Directa",
    description: "Alineados a las normas de ética y transparencia en venta directa en Costa Rica.",
    imageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/Asociacion-Panamena-de-Venta-directa.webp"
  }
];
