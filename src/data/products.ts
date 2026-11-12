export interface Product {
  id: string;
  slug: string;
  code?: string;
  name: string;
  category: 'cafes-bebidas' | 'candies-snacks' | 'cuidado-bucal' | 'turmalina' | 'cuidado-personal' | 'hogar-accesorios' | 'nutricion';
  categoryLabel: string;
  price: number;
  priceFormatted: string;
  inStock: boolean;
  isComingSoon?: boolean;
  image: string;
  shortDescription: string;
  netContent?: string;
  presentation?: string;
  servingsOrUnits?: string;
  shelfLife?: string;
  advantages?: string[];
  benefits: string[];
  benefitsDetailed?: { title: string; desc: string }[];
  ingredients?: string[];
  usage?: string;
  precautions?: string;
  contraindications?: string;
  featured?: boolean;
  technicalDocId?: string;
}

export const PRODUCTS: Product[] = [
  // 1. BLUEBERRY COFFEE
  {
    id: "0134",
    slug: "blueberry-coffee",
    code: "0134",
    name: "Blueberry Coffee",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 11730,
    priceFormatted: "₡11.730",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/blueberry-coffee-p-500.png",
    shortDescription: "HGW combina el café soluble con el superalimento a base de arándanos, ofreciendo a sus consumidores un alimento funcional para el cuidado de su salud.",
    netContent: "180 gr",
    servingsOrUnits: "12 sachets",
    presentation: "15g x 12 sobres (180 gr)",
    shelfLife: "12 meses",
    advantages: [
      "Práctico e Instantáneo.",
      "Nutritivo, saludable y fortificado con arándanos.",
      "De suave textura, agradable aroma y un sabor delicioso.",
      "Elaborado con ingredientes cuidadosamente seleccionados, seguros, funcionales y de alta calidad."
    ],
    benefits: [
      "Potencia el sistema inmunológico y ayuda a quemar grasas",
      "Rico en antocianinas con actividad antioxidante 50 veces mayor que la vitamina E y 200 veces mayor que la vitamina C",
      "100% de biodisponibilidad: actúa en la sangre 20 minutos después de su ingesta",
      "Potencia el trabajo de la vista, los riñones y mejora la memoria",
      "Favorece la absorción del hierro en el cuerpo y promueve la reducción del colesterol"
    ],
    benefitsDetailed: [
      {
        title: "Café",
        desc: "Es rico en antocianinas, moléculas más pequeñas que la procianidina y de mejores efectos de osmosis y antioxidantes. La actividad antioxidante de las antocianinas es 50 veces mayor que la vitamina 'E' y 200 veces mayor que la vitamina C. Tiene un 100% de biodisponibilidad para el cuerpo humano y actúa en la sangre 20 minutos después de ser tomado."
      },
      {
        title: "Arándanos (Vaccinium corymbosum L.)",
        desc: "Es un potente aliado que ayuda a potenciar el sistema inmunológico y a la vez ayuda a quemar grasas. Disminuye la posibilidad de sufrir enfermedades neurodegenerativas, gracias a su alto contenido de nutrientes y antioxidantes. Ayuda a reforzar el sistema inmunológico, potencia el trabajo de la vista, los riñones y mejora la memoria, también favorece la absorción del hierro en el cuerpo y promueve la reducción del colesterol."
      }
    ],
    ingredients: [
      "Crema no láctea",
      "Café instantáneo en polvo",
      "Arándanos en polvo",
      "Eritritol",
      "Xilitol",
      "Sal",
      "Acesulfamo de potasio",
      "Dióxido de silicio",
      "Saborizante"
    ],
    usage: "Vierta el contenido de 1 sachet en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable.",
    precautions: "No consumir si es alérgico a alguno de los ingredientes.",
    technicalDocId: "doc-16"
  },

  // 2. CORDYCEPS COFFEE
  {
    id: "0227",
    slug: "cordyceps-coffee",
    code: "0227",
    name: "Cordyceps Coffee",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 11730,
    priceFormatted: "₡11.730",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Cordyceps-Coffee.png",
    shortDescription: "En la medicina alternativa el Cordyceps a menudo es utilizado para incrementar la energía natural de las personas, mejorar su rendimiento atlético, estimular el sistema inmune y retrasar el proceso de envejecimiento.",
    netContent: "180 gr",
    servingsOrUnits: "12 sachets",
    presentation: "15g x 12 sobres (180 gr)",
    shelfLife: "24 meses",
    advantages: [
      "Práctico e Instantáneo.",
      "De suave textura, agradable aroma y sabor delicioso.",
      "Fortificado con el milenario Cordyceps sinensis.",
      "Libre de octógonos."
    ],
    benefits: [
      "Incrementa la energía natural y alivia la fatiga física y mental",
      "Mejora el rendimiento atlético y la oxigenación celular",
      "Estimula el sistema inmune y apoya en afecciones respiratorias como bronquitis y asma",
      "Propiedades antioxidantes y antiinflamatorias comprobadas",
      "Mejora la atención y concentración y ayuda a retardar el deterioro cognitivo"
    ],
    benefitsDetailed: [
      {
        title: "Cordyceps Sinensis",
        desc: "Es un tipo de hongo medicinal milenario que ofrece beneficios antioxidantes y antiinflamatorios. Utilizado durante mucho tiempo en la medicina tradicional china y disponible como un suplemento dietético de alta potencia."
      },
      {
        title: "Café",
        desc: "Estimulante y energizante, mejora la atención y concentración del individuo. Reduce la sensación de fatiga mental y física. Consigue retardar la aparición del Alzheimer."
      }
    ],
    ingredients: [
      "Crema no láctea (jarabe de glucosa, aceite vegetal hidrogenado, caseinato de sodio, fosfato de dipotasio, mono y diglicéridos de ácidos grasos, dióxido de silicio amorfo)",
      "Café instantáneo en polvo",
      "Micelio de Cordyceps (Cordyceps sinensis) en polvo",
      "Dióxido de silicio amorfo (E 551)",
      "Celulosa microcristalina (E 460(i))",
      "Sal",
      "Acesulfamo de potasio (E 950)",
      "Saborizante alimenticio"
    ],
    usage: "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable.",
    precautions: "No consumir si es alérgico a alguno de los ingredientes.",
    technicalDocId: "doc-12"
  },

  // 3. GANODERMA SOLUBLE COFFEE
  {
    id: "0131",
    slug: "ganoderma-coffee",
    code: "0131",
    name: "Ganoderma Soluble Coffee",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 11730,
    priceFormatted: "₡11.730",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/ganoderma-p-500.png",
    shortDescription: "HGW combina el café soluble con el milenario superalimento Ganoderma lucidum, ofreciendo así a sus consumidores un alimento funcional que ayude y garantice el cuidado de su salud.",
    netContent: "180 gr",
    servingsOrUnits: "12 sachets",
    presentation: "15g x 12 sobres (180 gr)",
    shelfLife: "24 meses",
    advantages: [
      "Práctico e Instantáneo.",
      "Nutritivo y Saludable.",
      "De suave textura, agradable aroma y sabor delicioso.",
      "Elaborado con ingredientes cuidadosamente seleccionados, seguros, funcionales y de alta calidad.",
      "Fortificado con extracto de Ganoderma lucidum."
    ],
    benefits: [
      "Reduce el estrés oxidativo de las células",
      "Regula y modula el sistema inmune",
      "Inhibe la angiogénesis y favorece las respuestas antiinflamatorias en el organismo",
      "Mejora la atención y concentración reduciendo la fatiga mental y física",
      "Consigue retardar la aparición de procesos neurodegenerativos"
    ],
    benefitsDetailed: [
      {
        title: "Ganoderma Lucidum (Reishi)",
        desc: "Reduce el estrés oxidativo de las células, regula el sistema inmune, inhibe la angiogénesis y la formación de tumores, favorece las respuestas antiinflamatorias en el organismo. Conocido como 'Lingzhi' o 'hongo de la inmortalidad'."
      },
      {
        title: "Café",
        desc: "Estimulante y energizante, mejora la atención y concentración del individuo, reduce la sensación de fatiga mental y física."
      }
    ],
    ingredients: [
      "Café instantáneo en polvo",
      "Crema no láctea",
      "Extracto de Ganoderma lucidum",
      "Azúcar granulada blanca",
      "Aromatizantes naturales"
    ],
    usage: "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable.",
    precautions: "No consumir si es alérgico a alguno de los ingredientes.",
    technicalDocId: "doc-16"
  },

  // 4. FRESH DRINK CHANG JINGJING
  {
    id: "0211",
    slug: "fresh-drink-chang-jing-jing",
    code: "0211",
    name: "Fresh Drink Chang JingJing (Bebida Digestiva)",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 6630,
    priceFormatted: "₡6.630",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/fresh-drink-p-500.png",
    shortDescription: "Es una selecta mezcla herbal de preparación instantánea en una deliciosa bebida refrescante, digestiva y natural capaz de ofrecer una limpieza amigable pero profunda del colon, previniendo cuadros de intoxicación severa y cuidados contra el cáncer del intestino. Siente el poder de la naturaleza y recupera tu vitalidad.",
    netContent: "21 gr",
    servingsOrUnits: "6 sachets (3.5g c/u)",
    presentation: "3.5g x 6 sobres (21 gr)",
    shelfLife: "24 meses",
    advantages: [
      "Instantáneo y de fácil disolución.",
      "Bebida verde, refrescante y digestiva.",
      "Elaborado con la más cuidadosa selección de plantas fitonutritivas y funcionales.",
      "Rico en fibra y cero en grasas.",
      "Contiene un fresco y agradable sabor a hierba natural.",
      "Con un empaque seguro y práctico."
    ],
    benefits: [
      "Limpieza amigable pero profunda del colon y sistema digestivo",
      "Efecto alcalinizante que equilibra el pH corporal gracias a la clorofila",
      "Contribuye a regular el tránsito intestinal y alivia el estreñimiento",
      "Mejora el rendimiento hepático y la desintoxicación del organismo",
      "Rico en antioxidantes naturales de bayas de goji que fortalecen la inmunidad"
    ],
    benefitsDetailed: [
      {
        title: "Hierba de Cebada",
        desc: "Rica en nutrientes esenciales como vitaminas, minerales, proteínas y fibra soluble necesarias para la dieta humana junto a la clorofila."
      },
      {
        title: "Bayas de Goji",
        desc: "Muy ricas en antioxidantes naturales que mejoran nuestro sistema inmunitario y aumentan la energía celular."
      },
      {
        title: "Raíz de Gan Cao (Regaliz)",
        desc: "Agente digestivo tradicionalmente manejado por la cultura china para aliviar malestares gástricos y acidez."
      },
      {
        title: "Diente de León",
        desc: "Apreciado ingrediente fitoterapéutico tradicionalmente utilizado para mejorar el rendimiento hepático y biliar."
      },
      {
        title: "Clorofila & Ingesta de Fibra",
        desc: "Excelente tónico vital alcalinizante que equilibra el pH humano, mejorando el rendimiento físico e intelectual y regulando el estreñimiento."
      }
    ],
    ingredients: [
      "Cebada en polvo",
      "Bayas de Goji (fruto)",
      "Gan Cao (raíz de regaliz)",
      "Diente de león (flor y hojas)",
      "Crisantemo (flor)",
      "Dextrina resistente",
      "Ácido cítrico (E330)",
      "Citrato de sodio (E331)",
      "Dióxido de silicio (E551)",
      "Sucralosa (E955)",
      "Celulosa microcristalina (E460i)"
    ],
    usage: "Vierta el contenido de un sachet en 500 ml de agua, agite suavemente hasta disolver, beba y disfrute su refrescante sabor a hierba verde.",
    precautions: "No consumir si es alérgico a alguno de los ingredientes.",
    technicalDocId: "doc-42"
  },

  // 5. BLACK TEA COFFEE
  {
    id: "0260",
    slug: "black-tea-coffee",
    code: "0260",
    name: "Black Tea Coffee (Sin Azúcar)",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 10200,
    priceFormatted: "₡10.200",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/black-tea-p-500.png",
    shortDescription: "Café premium combinado con té negro en una versión sin azúcar y endulzada naturalmente. Altamente benéfico para la agilidad mental, la memoria y la salud digestiva.",
    netContent: "42 gr",
    servingsOrUnits: "12 sachets",
    presentation: "3.5g x 12 sobres (42 gr)",
    shelfLife: "24 meses",
    advantages: [
      "Sin Azúcar y endulzado naturalmente.",
      "Práctico e Instantáneo.",
      "De suave textura, agradable aroma y sabor delicioso.",
      "Altamente benéfico para la salud cerebral."
    ],
    benefits: [
      "Elimina la fatiga y promueve la reacción del pensamiento más rápido",
      "Mejora la memoria al estimular la corteza cerebral",
      "Reduce la fatiga muscular y estimula la secreción de jugo digestivo",
      "Promueve la función renal, la digestión y previene la distensión gástrica",
      "Efecto diurético que elimina el edema y fortalece la función cardíaca"
    ],
    benefitsDetailed: [
      {
        title: "Café",
        desc: "Reduce la fatiga muscular y promueve la secreción de jugo digestivo, promueve la función renal y digestión, previene la distensión gástrica y alivia el estreñimiento."
      },
      {
        title: "Té Negro",
        desc: "Ayuda con la digestión gastrointestinal, promueve el apetito, tiene un efecto diurético, elimina el edema y fortalece la función cardíaca. Elimina la fatiga, promueve la reacción del pensamiento más rápido y mejora la memoria al estimular la corteza cerebral."
      }
    ],
    ingredients: [
      "Café soluble premium",
      "Extracto concentrado de té negro (Camellia sinensis)",
      "Edulcorantes de origen natural"
    ],
    usage: "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable.",
    precautions: "Pacientes con cálculos, anemia o psicastenia no deben beber té negro. Las personas que toman medicamentos no se les permite beber té negro ya que puede interactuar con ciertos tratamientos.",
    technicalDocId: "doc-16"
  },

  // 6. LACTIBERRY
  {
    id: "0209",
    slug: "lactiberry",
    code: "0209",
    name: "Lactiberry (Producto Lácteo y Té Negro)",
    category: "nutricion",
    categoryLabel: "Nutrición y Suplementos",
    price: 13260,
    priceFormatted: "₡13.260",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/lactiberry-p-500.png",
    shortDescription: "HGW ha desarrollado una agradable, instantánea y nutritiva fórmula a base de arándanos, producto lácteo derivado de Nueva Zelanda y té negro para contribuir a la nutrición diaria de sus consumidores.",
    netContent: "300 gr",
    servingsOrUnits: "10 sachets (30g c/u)",
    presentation: "30g x 10 sobres (300 gr)",
    shelfLife: "12 meses",
    advantages: [
      "Elaborado con el mayor cuidado para conservar su valor nutricional.",
      "Con nutrientes que aportan a la dieta diaria requerida en el consumo humano.",
      "Puede presentar trozos de la fruta de arándanos.",
      "Con un delicioso aroma y un sabor natural.",
      "Nutritiva y Saludable.",
      "Con producto lácteo derivado de la producción de leche de Nueva Zelanda."
    ],
    benefits: [
      "Las antocianinas de arándano mejoran la agudeza visual",
      "El alto contenido antioxidante regula la respuesta inmune y fortalece membranas celulares",
      "El suero de leche aporta proteínas que mejoran la nutrición y la vitalidad",
      "El té negro disminuye el riesgo de debilidad ósea y fracturas",
      "Antioxidantes que protegen el corazón y los vasos sanguíneos"
    ],
    benefitsDetailed: [
      {
        title: "Los Arándanos & Antocianinas",
        desc: "El alto contenido antioxidante de los arándanos ayuda a regular la respuesta inmune, promueve la actividad antiinflamatoria y fortalece las membranas celulares. La antocianina es uno de los principales bioactivos con evidencia científica en mejorar la agudeza visual."
      },
      {
        title: "Suero de Leche (Nueva Zelanda)",
        desc: "Fuente de proteínas de alto valor biológico que mejora el contenido de nutrientes en la dieta y tiene efectos beneficiosos sobre el sistema inmunológico."
      },
      {
        title: "Té Negro",
        desc: "Disminuye el riesgo de fractura de cadera en mujeres y hombres de edad avanzada; contiene antioxidantes que ayudan a proteger el corazón y los vasos sanguíneos."
      }
    ],
    ingredients: [
      "Crema no láctea",
      "Azúcar blanca granulada",
      "Arándanos en polvo (1.5%)",
      "Suero de leche de Nueva Zelanda",
      "Té negro (Camellia sinensis)",
      "Leche desnatada en polvo",
      "Maltodextrina",
      "Dióxido de silicio (E 551)",
      "Saborizante"
    ],
    usage: "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente y beba a una temperatura adecuada.",
    precautions: "No consumir si es alérgico a alguno de los ingredientes.",
    technicalDocId: "doc-22"
  },

  // 7. MERMELADA FRUTADA
  {
    id: "0147",
    slug: "blueberry-fruit-tea-jam",
    code: "0147",
    name: "Mermelada Frutada de Arándanos",
    category: "candies-snacks",
    categoryLabel: "Candies y Snacks Funcionales",
    price: 6120,
    priceFormatted: "₡6.120",
    inStock: true,
    image: "https://hgwcostarica.com/wp-content/uploads/2026/10/mermelada-p-500.png",
    shortDescription: "La Mermelada HGW es una deliciosa concentración de arándanos, elaborada con el mayor cuidado para preservar todos sus valores nutricionales.",
    netContent: "200 gr",
    servingsOrUnits: "1 frasco",
    presentation: "Frasco de 200 g",
    shelfLife: "12 meses",
    advantages: [
      "Una dulce forma de presentar los arándanos en la mesa familiar para disfrutar los desayunos.",
      "Nutritiva y saludable.",
      "De suave textura, agradable aroma y sabor deliciosamente natural.",
      "Puede contener trozos de arándanos.",
      "Elaborado con el mayor cuidado y de forma tradicional."
    ],
    benefits: [
      "Alto contenido antioxidante que regula la respuesta inmune",
      "Promueve la actividad antiinflamatoria y protege las membranas celulares",
      "Rica en antocianinas que ayudan a mejorar la agudeza visual",
      "Ideal para enriquecer desayunos y meriendas de forma natural"
    ],
    benefitsDetailed: [
      {
        title: "Arándanos",
        desc: "El alto contenido antioxidante de los arándanos ayuda a regular la respuesta inmune, promueve la actividad antiinflamatoria y fortalece las membranas celulares."
      },
      {
        title: "Antocianina",
        desc: "Es uno de los principales bioactivos contenidos en los arándanos; diversos estudios presentan evidencia científica de que los extractos ricos en antocianinas pueden mejorar la agudeza visual."
      }
    ],
    ingredients: [
      "Arándano",
      "Azúcar blanca granulada",
      "Jarabe de malta",
      "Pectina",
      "Ácido cítrico"
    ],
    usage: "Retire el precinto de seguridad del producto, destape y tome la porción según necesidad. Disfrute de su agradable sabor natural.",
    precautions: "No consumir si es alérgico a alguno de los ingredientes.",
    technicalDocId: "doc-20"
  },

  // 8. PRO-SHAPING TEA
  {
    id: "0221",
    slug: "pro-shaping-tea",
    code: "0221",
    name: "Pro-Shaping Tea (Mezcla de Hierbas para Infusión)",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 11730,
    priceFormatted: "₡11.730",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/TE-QUEMADOR-DE-GRAS-HGW.jpeg",
    shortDescription: "HGW ha combinado una selecta mezcla para la preparación instantánea de una aromática bebida digestiva, tonificante y natural capaz de eliminar tejidos lípidos del organismo o grasas localizadas, así como reducir los niveles elevados de colesterol en la sangre. ¡Siente el poder de la naturaleza y recupera tu vitalidad!",
    netContent: "72 gr",
    servingsOrUnits: "24 bolsitas filtrantes",
    presentation: "3g x 24 bolsitas filtrantes (72 gr)",
    shelfLife: "36 meses",
    advantages: [
      "Concentrado de hierbas en bolsita filtrante.",
      "Mezcla digestiva, tonificante y aromática.",
      "Con ingredientes milenarios, tradicionales y naturales.",
      "Elaborado con el mayor cuidado para conservar su valor nutricional.",
      "Con un empaque seguro y práctico."
    ],
    benefits: [
      "Elimina tejidos lípidos del organismo y grasas localizadas",
      "Ayuda a reducir los niveles elevados de colesterol y triglicéridos en sangre",
      "Té verde actúa como potente antioxidante y coadyuvante en el sobrepeso",
      "Semillas de casia mejoran la circulación y activan el flujo sanguíneo",
      "Espino blanco y ginseng tonifican y mejoran el sistema circulatorio"
    ],
    benefitsDetailed: [
      {
        title: "Té Verde",
        desc: "Diferentes estudios refieren su uso como antioxidante, en casos de asma e hiperlipemias, así como coadyuvante en el tratamiento del sobrepeso."
      },
      {
        title: "Semillas de Casia",
        desc: "Tradicionalmente usadas por la cultura china para ayudar a mejorar la circulación y activar el flujo sanguíneo."
      },
      {
        title: "Espino Blanco & Ginseng",
        desc: "Tradicionalmente usados en infusiones para contribuir a mejorar el funcionamiento del sistema circulatorio y la vitalidad celular."
      },
      {
        title: "Arroz Rojo",
        desc: "En la medicina tradicional china lo han utilizado para solucionar problemas digestivos y circulatorios."
      }
    ],
    ingredients: [
      "Espino (Crataegus spp.)",
      "Sang ye (Folium mori)",
      "Té verde (Camellia sinensis)",
      "Semen Cassiae",
      "Ginseng (Panax ginseng)",
      "Arroz (Oryza sativa)"
    ],
    usage: "Coloque una bolsita filtrante en una taza y agregue 250 ml de agua hirviendo, deje reposar por 5 minutos aproximadamente. Disfrute del aromático y suave sabor de la infusión.",
    precautions: "No consumir si es alérgico a alguno de los ingredientes.",
    technicalDocId: "doc-16"
  },

  // 9. CARAMELOS DE ARÁNDANO (BLUEBERRY CANDY)
  {
    id: "0144",
    slug: "blueberry-candy",
    code: "0144",
    name: "Caramelos de Arándano (Blueberry Candy)",
    category: "candies-snacks",
    categoryLabel: "Candies y Snacks Funcionales",
    price: 2958,
    priceFormatted: "₡2.958",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Blueberry-Candy.png",
    shortDescription: "Los caramelos con Arándanos de HGW son una dulce y divertida forma de no dejar de aprovechar los beneficios nutritivos de los arándanos.",
    netContent: "30 gr",
    servingsOrUnits: "60 unidades",
    presentation: "Frasco con 60 tabletas (30 gr)",
    shelfLife: "24 meses",
    advantages: [
      "Nutritivos y Saludables.",
      "Elaborado con el mayor cuidado para conservar su valor nutricional.",
      "Una dulce forma de llevar los arándanos contigo a todos lados.",
      "Con un aroma y sabor deliciosamente naturales.",
      "Ideal para endulzar tu día sin culpas."
    ],
    benefits: [
      "Aporte de antioxidantes y antocianinas bioactivas",
      "Alivia la fatiga visual por uso de pantallas digitales",
      "Refuerza la salud inmunológica y celular",
      "Práctico frasco para consumo diario en cualquier lugar"
    ],
    benefitsDetailed: [
      {
        title: "Los Arándanos",
        desc: "El alto contenido antioxidante de los arándanos ayuda a regular la respuesta inmune, promueve la actividad antiinflamatoria y fortalece las membranas celulares."
      },
      {
        title: "La Antocianina",
        desc: "Uno de los principales bioactivos contenidos en los arándanos; diversos estudios presentan evidencia científica de que mejora la agudeza visual y la salud retiniana."
      }
    ],
    ingredients: [
      "Polvo de arándanos (blueberry)",
      "Azúcar blanco granulado",
      "D-manitol (E421)",
      "Maltodextrina",
      "Ácido cítrico (E330)",
      "HPMC (hidroxipropilmetilcelulosa) (E 464)",
      "Saborizante"
    ],
    usage: "Retire el precinto y levante la tapa del frasco, tome la porción requerida (una o más unidades), y disfrute de su agradable sabor.",
    precautions: "No consumir si es alérgico a alguno de los ingredientes.",
    technicalDocId: "doc-20"
  },

  // 10. HGW COFFEE CANDY
  {
    id: "139",
    slug: "coffee-candy",
    name: "HGW Coffee Candy (Caramelos de Café)",
    category: "candies-snacks",
    categoryLabel: "Candies y Snacks Funcionales",
    price: 2958,
    priceFormatted: "₡2.958",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Coffee-Candy-HGW-scaled.png",
    shortDescription: "Los caramelos con Café de HGW son una dulce y divertida forma de no dejar de aprovechar los beneficios del café.",
    netContent: "30 gr",
    servingsOrUnits: "60 unidades",
    presentation: "Frasco con 60 tabletas (30 gr)",
    shelfLife: "24 meses",
    advantages: [
      "Nutritivos y Saludables.",
      "Elaborado con el mayor cuidado para conservar su agradable sabor.",
      "Una dulce forma de llevar el café contigo a todos lados.",
      "Con un aroma y sabor deliciosamente natural.",
      "Ideal para endulzar tu día sin culpas."
    ],
    benefits: [
      "Reduce la transmisión de señales de fatiga física y mental",
      "Mejora el estado de alerta y la capacidad cognitiva",
      "Promueve la liberación de dopamina y noradrenalina",
      "Mejora la resistencia al ejercicio y la velocidad de reacción",
      "Reduce el estrés oxidativo posterior al ejercicio y la acumulación de ácido láctico"
    ],
    benefitsDetailed: [
      {
        title: "Café",
        desc: "Reduce la fatiga, mejora la capacidad cognitiva y promueve la liberación de neurotransmisores de bienestar. Reduce la acumulación de ácido láctico tras el esfuerzo físico."
      },
      {
        title: "Leche Descremada en Polvo",
        desc: "Contiene proteínas de alta calidad (caseína, proteína de suero), vitaminas B2 y B12, calcio y aminoácidos de cadena ramificada (BCAA) que complementan la nutrición diaria."
      }
    ],
    ingredients: [
      "Café seleccionado en polvo",
      "Leche descremada en polvo",
      "Proteína de suero",
      "Excipientes alimenticios de sabor natural"
    ],
    usage: "Retire el precinto y levante la tapa del frasco, tome la porción requerida (una o más unidades), y disfrute de su sabor a café auténtico.",
    precautions: "No consumir si es alérgico a los ingredientes.",
    technicalDocId: "doc-20"
  },

  // 11. HGW CHOCO BLUE
  {
    id: "118",
    slug: "choco-blue",
    name: "HGW Choco Blue",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 20400,
    priceFormatted: "₡20.400",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Choco_Blue_HGW-removebg-preview.png",
    shortDescription: "Cuando los arándanos agridulces se encuentran con el suave cacao comienza un encuentro romántico de papilas gustativas. Aporta el valor nutricional moderno del cacao enriquecido con arándanos.",
    netContent: "660 gr",
    servingsOrUnits: "20 sachets (33g c/u)",
    presentation: "20 sobres x 33 g (660 gr neto)",
    shelfLife: "24 meses",
    advantages: [
      "El misterioso y exquisito mundo de las bebidas de cacao con arándanos.",
      "Rico en polifenoles antioxidantes (flavonoles y flavonoides).",
      "Contiene manteca de cacao pura con ácidos grasos benéficos.",
      "Sobres individuales de 33g para preparar al instante."
    ],
    benefits: [
      "Promueve la salud cardiovascular y arterial",
      "Potente efecto antioxidante y antiinflamatorio",
      "Mejora la función cognitiva, neuroprotección y tiene efecto antidepresivo natural",
      "Aumenta el metabolismo energético corporal",
      "Protege la piel y alivia afecciones respiratorias leves"
    ],
    benefitsDetailed: [
      {
        title: "Polifenoles y Metilxantinas del Cacao",
        desc: "Flavonoles, teobromina y cafeína suave que estimulan la microcirculación cerebral y coronaria sin provocar taquicardias."
      },
      {
        title: "Minerales y Aminoácidos",
        desc: "Magnesio, hierro, zinc, cobre y potasio, combinados con triptófano y feniletilamina, precursores de la serotonina y el bienestar anímico."
      },
      {
        title: "Arándanos",
        desc: "Antocianinas que complementan el poder antioxidante del cacao para proteger tejidos contra el estrés oxidativo."
      }
    ],
    ingredients: [
      "Cacao en polvo",
      "Arándanos en polvo",
      "Manteca de cacao (ácido oleico, ácido esteárico, ácido palmítico)",
      "Leche descremada",
      "Triptófano natural",
      "Minerales (magnesio, hierro, zinc, cobre, potasio)"
    ],
    usage: "Vierta el contenido de un sachet de 33 g en una taza, agregue 180 ml a 200 ml de agua o leche caliente, mezcle bien hasta disolver completamente y disfrute.",
    precautions: "No consumir si es alérgico a alguno de los componentes.",
    technicalDocId: "doc-16"
  },

  // 12. HGW CHOCO GANO
  {
    id: "0340",
    slug: "choco-gano",
    code: "0340",
    name: "HGW Choco Gano",
    category: "cafes-bebidas",
    categoryLabel: "Cafés y Bebidas Funcionales",
    price: 20400,
    priceFormatted: "₡20.400",
    inStock: true,
    image: "https://hgwcostarica.com/wp-content/uploads/2026/10/Choco-Gano-HGW.webp",
    shortDescription: "CHOCO GANO es la exquisita mezcla en polvo para preparar una bebida instantánea que combina el reconfortante sabor del cacao con la suavidad de la leche descremada y el valioso aporte del Ganoderma lucidum.",
    netContent: "660 g",
    servingsOrUnits: "20 sobres de 33g",
    presentation: "20 sobres x 33 g (660 gr neto)",
    shelfLife: "24 meses",
    advantages: [
      "Listo en instantes: Disolución inmediata en agua fría o caliente.",
      "Práctico y portátil: Sobres individuales ideales para llevar a cualquier lugar.",
      "Bienestar integral: Aporta energía con los beneficios antioxidantes del Ganoderma.",
      "Perfil bajo en grasa gracias a la leche descremada."
    ],
    benefits: [
      "Energía y nutrición con un perfil bajo en grasa",
      "El Ganoderma apoya y fortalece el sistema inmunológico",
      "Potente poder antioxidante contra el envejecimiento prematuro",
      "Proporciona una experiencia deliciosa que cuida de tu salud"
    ],
    benefitsDetailed: [
      {
        title: "Ganoderma Lucidum",
        desc: "Ingrediente milenario reconocido por sus propiedades antioxidantes y de apoyo al sistema inmunológico, enriqueciendo la fórmula para un bienestar integral."
      },
      {
        title: "Cacao & Leche Descremada",
        desc: "Combina el reconfortante sabor del cacao puro con la suavidad de la leche descremada para brindar placer y nutrientes sin exceso de calorías."
      }
    ],
    ingredients: [
      "Cacao en polvo",
      "Leche descremada en polvo",
      "Extracto de Ganoderma lucidum",
      "Crema no láctea",
      "Saborizantes permitidos"
    ],
    usage: "Preparar Choco Gano es tan fácil como disfrutarlo: Vacía el contenido de un sachet de 33 g en una taza. Añade aproximadamente 180 ml de agua o leche caliente. Mezcla bien hasta obtener una textura suave y homogénea.",
    precautions: "No consumir si es alérgico a alguno de los ingredientes.",
    technicalDocId: "doc-16"
  },

  // 13. PÉPTIDO DE COLÁGENO Y ARÁNDANOS
  {
    id: "0215",
    slug: "blueberry-collagen-peptide",
    code: "0215",
    name: "Péptido de Colágeno y Arándanos",
    category: "nutricion",
    categoryLabel: "Nutrición y Suplementos",
    price: 14790,
    priceFormatted: "₡14.790",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/colageno-p-500.png",
    shortDescription: "Nutritivo y funcional a base de mezcla de jugo concentrado de frutas y verduras; fortificado con péptidos y tripéptidos de colágeno, vitaminas y minerales para regeneración celular integral.",
    netContent: "300 gr",
    servingsOrUnits: "12 sobres",
    presentation: "12 sobres x 25 g (300 gr neto)",
    shelfLife: "24 meses",
    advantages: [
      "Consistencia blanda para la fácil digestión y rápida asimilación.",
      "Con fresco y agradable sabor a fruta natural.",
      "Elaborado con jugo concentrado de frutas y verduras selectas.",
      "Fortificado con Péptido y Tripéptido de Colágeno, vitaminas y minerales.",
      "Empaque seguro y práctico."
    ],
    benefits: [
      "Restaura y rejuvenece cartílagos, huesos, articulaciones y elasticidad de la piel",
      "Previene el desgaste natural del paso del tiempo sobre el sistema óseo y tejidos",
      "Vitaminas y minerales regulan el funcionamiento del organismo previniendo enfermedades",
      "Las frutas y verduras aportan antioxidantes y nutrientes esenciales para el cuerpo"
    ],
    benefitsDetailed: [
      {
        title: "Péptidos y Tripéptidos de Colágeno",
        desc: "Moléculas de absorción superior que penetran en los tejidos conectivos, estimulando la regeneración de cartílagos y mejorando la tonicidad dérmica."
      },
      {
        title: "Jugo Compuesto de Frutas y Verduras",
        desc: "Cereza, arándanos, manzana, piña, papaya, kiwi, limón, naranja sanguina, acerola, acaí y uva. Fuente versátil de proteínas y antioxidantes."
      },
      {
        title: "Vitaminas y Minerales Fortificados",
        desc: "Vitaminas (A, C, B1, B6, B12, D, E); minerales (calcio, magnesio, hierro, zinc); extracto de levadura y fructooligosacáridos (FOS). Aprobados por CODEX ALIMENTARIUS y FDA."
      }
    ],
    ingredients: [
      "Péptido y tripéptido de colágeno",
      "Jugo concentrado de frutas y verduras (cereza, arándanos, manzana, piña, papaya, kiwi, limón, naranja sanguina, acerola, acaí, uva)",
      "Vitaminas (A, C, B1, B6, B12, D, E)",
      "Minerales (calcio, magnesio, hierro, zinc)",
      "Extracto de levadura",
      "Fructooligosacáridos (FOS)"
    ],
    usage: "Consumir 1 sobre diario directamente o diluido en agua fría o zumos. Tomar de preferencia en la mañana o antes de dormir.",
    precautions: "No consumir si es alérgico a los componentes del producto.",
    technicalDocId: "doc-17"
  },

  // 14. JABÓN REVITALIZANTE DE TURMALINA
  {
    id: "1140",
    slug: "jabon-de-turmalina",
    code: "1140",
    name: "Jabón Revitalizante de Turmalina",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal y Cosméticos",
    price: 2356,
    priceFormatted: "₡2.356",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Jabon-de-turmalina.jpeg",
    shortDescription: "Las partículas de Nano Turmalina contenidas en este jabón forman parte de un cristal energético rico en minerales que aporta limpieza profunda, humectación, elasticidad y revitalización de la piel.",
    netContent: "100 gr",
    servingsOrUnits: "1 barra",
    presentation: "Barra anatómica de 100 g",
    shelfLife: "36 meses",
    advantages: [
      "Elaborado con ingredientes naturales.",
      "Tiene una forma anatómica en barra cómoda y ergonómica.",
      "Especialmente elaborado para una limpieza delicada a profunda de la piel.",
      "Tiene un aroma único y agradable. Revitalizante para la piel.",
      "Recomendado para todo tipo de piel, tanto para rostro, manos y cuerpo."
    ],
    benefits: [
      "Aporta sensación de limpieza, humectación y revitalización de la piel",
      "Mejora la elasticidad y activación celular dérmica",
      "El aceite de caléndula calma edemas e inflamaciones mejorando la microcirculación",
      "El extracto de turmalina emite infrarrojo lejano (4-20 µm) que activa la circulación cutánea",
      "Ayuda a disminuir la fatiga y aporta una sensación plena de bienestar"
    ],
    benefitsDetailed: [
      {
        title: "Aceite de las Flores de Caléndula",
        desc: "Tradicionalmente utilizado sobre la piel por su acción calmante, para ayudar a favorecer a disminuir edemas mejorando la circulación cutánea. Acción hidratante para evitar la sequedad."
      },
      {
        title: "Extracto de Turmalina",
        desc: "La medicina holística refiere que emite energía en la zona infrarroja lejana (entre 4 y 20 µm) incrementando la temperatura cutánea por activación de la circulación sanguínea. Disminuye la fatiga física y revitaliza la piel."
      }
    ],
    ingredients: [
      "Palmitato de sodio",
      "Cocoato de sodio",
      "Agua",
      "Glicerina",
      "Fragancia",
      "Cloruro de sodio",
      "Miel",
      "Acetato de tocoferilo (Vitamina E)",
      "Aceite de oliva (Olea europaea)",
      "Extracto de turmalina"
    ],
    usage: "Humedecer la piel del rostro, manos o cuerpo, seguidamente enjabonar suavemente y luego enjuagar con abundante agua.",
    precautions: "Sólo para uso externo. Evite el contacto directo con los ojos, mucosas, oídos internos y áreas sensibles. Mantener fuera del alcance de los niños.",
    technicalDocId: "doc-21"
  },

  // 15. JABÓN HIDRATANTE DE OLIVA
  {
    id: "1145",
    slug: "jabon-de-oliva",
    code: "1145",
    name: "Jabón Hidratante de Oliva",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal y Cosméticos",
    price: 2356,
    priceFormatted: "₡2.356",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Jabon-de-oliva.jpeg",
    shortDescription: "La esencia única de aceite de oliva natural limpiará delicadamente tu piel, dejándote una sensación de suavidad, hidratación profunda y libre de grasa.",
    netContent: "100 gr",
    servingsOrUnits: "1 barra",
    presentation: "Barra anatómica de 100 g",
    shelfLife: "36 meses",
    advantages: [
      "Elaborado con ingredientes naturales.",
      "Con una forma anatómica en barra.",
      "Con un delicado aroma.",
      "Elimina microorganismos y limpia delicadamente a profundidad la piel.",
      "Otorga una piel suave, tersa, hidratada y no grasa.",
      "Para todo tipo de piel."
    ],
    benefits: [
      "Potencia la hidratación de la piel y combate la sequedad",
      "Brinda a la piel un aspecto más sano, suave y radiante",
      "La miel provee propiedades hidratantes y regeneradoras",
      "La vitamina E mantiene las membranas celulares aumentando su firmeza",
      "Limpia delicadamente sin alterar el pH natural dérmico"
    ],
    benefitsDetailed: [
      {
        title: "Aceite de Oliva (Olea europaea)",
        desc: "Es uno de los hidratantes naturales más efectivos que ayudaría a potenciar la hidratación de la piel y a combatir la sequedad. Brinda a la piel un aspecto más sano y suave."
      },
      {
        title: "Miel",
        desc: "Considerada como el secreto de la belleza de Cleopatra. Provee propiedades de hidratación profunda y nutrición para el cuidado de la piel."
      },
      {
        title: "Tocopheryl Acetate (Vitamina E)",
        desc: "Favorece la integridad de la piel y mantiene las membranas celulares, aumentando su firmeza y protección antioxidante."
      }
    ],
    ingredients: [
      "Palmitato de sodio",
      "Aceite de coco",
      "Agua",
      "Glicerina",
      "Fragancia",
      "Cloruro de sodio",
      "Miel",
      "Acetato de tocoferilo (Vitamina E)",
      "Aceite de oliva (Olea europaea insaponificables)"
    ],
    usage: "Humedecer la piel del rostro, manos o cuerpo, enjabonar suavemente y luego aclarar con abundante agua.",
    precautions: "Sólo para uso externo. Evite el contacto directo con los ojos, mucosas, oídos internos y áreas sensibles. Mantener fuera del alcance de los niños.",
    technicalDocId: "doc-21"
  },

  // 16. HGW MUGWORT SOAP (JABÓN DE ARTEMISA)
  {
    id: "20",
    slug: "jabon-de-artemisa",
    name: "HGW Mugwort Soap (Jabón de Artemisa)",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal y Cosméticos",
    price: 3672,
    priceFormatted: "₡3.672",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Jabon-de-artemisa.jpeg",
    shortDescription: "Selección de hierbas naturales de la sabiduría ancestral al cuidado moderno de la piel. Proporciona una limpieza profunda aprovechando el poder natural del aceite esencial y extractos de artemisa para ofrecer una experiencia refrescante y calmante instantánea.",
    netContent: "200 gr",
    servingsOrUnits: "1 barra de 200 g",
    presentation: "Barra de 200 g",
    shelfLife: "36 meses",
    advantages: [
      "Poder limpiador profundo: elimina eficazmente las impurezas solubles en aceite (como el exceso de sebo y el maquillaje ligero).",
      "Sensación refrescante: proporciona una «sensación exfoliante» única sin dejar residuos grasos.",
      "Ecológico y ritualista: envase minimalista y duradero; el proceso de limpieza se percibe como un ritual."
    ],
    benefits: [
      "Propiedades picantes y cálidas de la artemisa que calman la piel y alivian molestias",
      "Rico en aceites esenciales, flavonoides, triterpenoides, polisacáridos y taninos",
      "El aceite de hoja de artemisia aporta aroma fresco herbal y propiedades antibacterianas",
      "El extracto activo de artemisia ofrece beneficios antioxidantes y efectos calmantes",
      "El carbonato de calcio brinda una suave exfoliación física renovadora"
    ],
    benefitsDetailed: [
      {
        title: "Artemisa (Artemisia argyi)",
        desc: "Documentada por primera vez en la dinastía Liang y figurando en la Farmacopea China. Contiene eucaliptol, ácido clorogénico, flavonoides y polisacáridos que purifican y tonifican los meridianos."
      },
      {
        title: "Aceite y Extracto de Hoja de Artemisia",
        desc: "Ingredientes activos con aroma herbal fresco que ofrecen propiedades calmantes, antibacterianas y antioxidantes para una piel limpia y balanceada."
      },
      {
        title: "Carbonato de Calcio",
        desc: "Proporciona una suave sensación de exfoliación física que retira células muertas e impurezas sin irritar."
      }
    ],
    ingredients: [
      "Palmitato de sodio",
      "Cocoato de sodio",
      "Carbonato de calcio",
      "Aceite de hoja de artemisia",
      "Extracto de hoja de artemisia (Artemisia argyi)",
      "Agua",
      "Glicerina"
    ],
    usage: "Humedecer la piel del rostro, manos o cuerpo, enjabonar suavemente y luego aclarar con abundante agua.",
    precautions: "Sólo para uso externo. Evite el contacto directo con los ojos, mucosas, oídos internos y áreas sensibles. Mantener fuera del alcance de los niños.",
    technicalDocId: "doc-115"
  },

  // 17. TOURMALINE TOOTHPASTE (VERSIÓN BLANCA)
  {
    id: "158",
    slug: "tourmaline-toothpaste-white",
    name: "Tourmaline Toothpaste (Versión Blanca)",
    category: "cuidado-bucal",
    categoryLabel: "Cuidado Bucal Avanzado",
    price: 4080,
    priceFormatted: "₡4.080",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Pasta-dental-con-turmalina-blanca.jpg",
    shortDescription: "Pasta de dientes con turmalina HGW: ¡Hace que el aliento sea más fresco! Cuidadosamente formulada con hierbas chinas tradicionales que promueven una salud dental excepcional.",
    netContent: "120 gr",
    servingsOrUnits: "1 tubo",
    presentation: "Tubo de 120 g",
    shelfLife: "36 meses",
    advantages: [
      "Producto libre de Flúor.",
      "Libre de Triclosán.",
      "Potente frescura a menta.",
      "Cuidadosamente formulada con hierbas chinas tradicionales que promueven una salud dental excepcional."
    ],
    benefits: [
      "Los péptidos de soja destruyen membranas bacterianas e inhiben patógenos orales",
      "El xilitol inhibe Streptococcus mutans, reduce la erosión ácida y estimula la saliva",
      "El extracto de menta (mentol) produce una sensación refrescante y suprime el mal aliento",
      "El extracto de raíz de regaliz alivia el sangrado de encías y combate alergias",
      "El extracto de diente de león ayuda a reducir el enrojecimiento y la hinchazón de las encías",
      "La turmalina libera iones negativos y reduce la adhesión de la placa bacteriana"
    ],
    benefitsDetailed: [
      {
        title: "Péptidos de Soja",
        desc: "Péptidos antimicrobianos que destruyen selectivamente las membranas bacterianas e inhiben patógenos orales."
      },
      {
        title: "Xilitol",
        desc: "Inhibe el metabolismo de las bacterias cariogénicas (Streptococcus mutans), reduce la erosión ácida y estimula la secreción salival protectora."
      },
      {
        title: "Extractos de Regaliz y Diente de León",
        desc: "Acción antiinflamatoria y antibacteriana (ácido glicirrícico) que alivia encías sangrantes, enrojecidas o hinchadas."
      },
      {
        title: "Turmalina",
        desc: "Libera iones negativos constantes que ayudan a reducir significativamente la adhesión de la placa bacteriana al esmalte."
      }
    ],
    ingredients: [
      "Péptidos de soja",
      "Xilitol",
      "Extracto de menta",
      "Extracto de raíz de regaliz",
      "Extracto de diente de león",
      "Turmalina micronizada",
      "Base dental sin flúor ni triclosán"
    ],
    usage: "Cepille sus dientes diariamente con TOURMALINE TOOTHPASTE después de cada comida, al menos tres veces al día o como recomiende su odontólogo. Aplique el producto en su cepillo de dientes, realice una limpieza profunda y enjuague con abundante agua.",
    precautions: "No ingerir. Mantener fuera del alcance de niños pequeños.",
    technicalDocId: "doc-100"
  },

  // 18. TOURMALINE TOOTHPASTE (VERSIÓN NEGRA)
  {
    id: "159",
    slug: "tourmaline-toothpaste-black",
    name: "Tourmaline Toothpaste (Versión Negra)",
    category: "cuidado-bucal",
    categoryLabel: "Cuidado Bucal Avanzado",
    price: 4080,
    priceFormatted: "₡4.080",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Pasta_dental_con_turmalina_negra-removebg-preview.png",
    shortDescription: "Pasta dental de turmalina HGW: ¡Un cuidado bucal más eficaz! Limpieza profunda y blanqueamiento natural suave sin dañar el esmalte.",
    netContent: "120 gr",
    servingsOrUnits: "1 tubo",
    presentation: "Tubo de 120 g",
    shelfLife: "36 meses",
    advantages: [
      "Producto libre de Flúor.",
      "Libre de Triclosán.",
      "Potente frescura a menta spearmint.",
      "Cuidadosamente formulada con hierbas chinas tradicionales que promueven una salud dental excepcional."
    ],
    benefits: [
      "Limpieza profunda y natural: remueve manchas y placa sin dañar el esmalte",
      "Propiedades antibacterianas: inhibe el crecimiento bacteriano y previene caries y mal aliento",
      "Fortalece encías y esmalte de manera natural",
      "Blanqueamiento natural progresivo sin químicos agresivos",
      "La madreselva y la raíz de Bletilla striata promueven la hemostasia y reducen inflamaciones"
    ],
    benefitsDetailed: [
      {
        title: "Turmalina",
        desc: "Tiene propiedades abrasivas suaves que ayudan a remover manchas y placa sin dañar el esmalte, ofreciendo una potente acción antibacteriana."
      },
      {
        title: "Madreselva & Bletilla Striata",
        desc: "La madreselva es antiinflamatoria y antibacteriana. La raíz de Bletilla striata favorece la hemostasia y recuperación de encías delicadas."
      },
      {
        title: "Menta & Xilitol",
        desc: "Menta para combatir la caries dental y refrescar el aliento, con xilitol para la prevención activa de la desmineralización."
      }
    ],
    ingredients: [
      "Turmalina en polvo",
      "Extracto de madreselva",
      "Extracto de raíz de Bletilla striata",
      "Xilitol",
      "Extracto de menta",
      "Base limpiadora libre de flúor"
    ],
    usage: "Cepille sus dientes diariamente con TOURMALINE TOOTHPASTE después de cada comida, al menos tres veces al día o como recomiende su odontólogo. Aplique el producto en su cepillo de dientes, realice una limpieza profunda y enjuague con abundante agua.",
    precautions: "No ingerir. Mantener en lugar fresco.",
    technicalDocId: "doc-100"
  },

  // 19. GREEN WORLD HERBS TOOTHPASTE
  {
    id: "153",
    slug: "green-world-herbs-toothpaste",
    code: "1148",
    name: "Pasta Dental Green World Herbs (Menta Fresca y Xylitol)",
    category: "cuidado-bucal",
    categoryLabel: "Cuidado Bucal Avanzado",
    price: 4488,
    priceFormatted: "₡4.488",
    inStock: true,
    image: "https://hgwcostarica.com/wp-content/uploads/2026/10/Pasta-de-Dientes-a-Base-de-Hierbas-Chinas-para-Tener-Dientes-Fuertes.jpg",
    shortDescription: "La pasta dental HERBS de HGW fue desarrollada a base de elementos naturales y tradicionales Chinos, beneficiosos en el tratamiento y cuidado eficaz de la salud oral. No cuenta con pigmentos añadidos, su color herbal es 100% natural.",
    netContent: "120 gr",
    servingsOrUnits: "1 tubo",
    presentation: "Tubo de 120 g",
    shelfLife: "36 meses",
    advantages: [
      "Producto libre de Flúor.",
      "Libre de Triclosán.",
      "Potente frescura a menta.",
      "Cuidadosamente formulada con hierbas chinas tradicionales que promueven una salud dental excepcional.",
      "Color herbal 100% natural sin colorantes artificiales."
    ],
    benefits: [
      "Potente antioxidante con propiedades antiinflamatorias, antibacterianas y desintoxicantes",
      "Combate bacterias y virus causantes de diferentes tipos de infecciones bucales",
      "Reduce la fiebre y la hinchazón en las encías",
      "Proporciona un fresco y limpio aliento prolongado",
      "Es beneficioso contra las enfermedades periodontales"
    ],
    benefitsDetailed: [
      {
        title: "Madreselva, Raíz de Isatis Tinctoria y Menta",
        desc: "Estos tres elementos combinados generan un potente antioxidante que tiene propiedades antiinflamatorias, antibacterianas y desintoxicantes, combatiendo bacterias y virus causantes de infecciones bucales y periodontales."
      },
      {
        title: "Xilitol Natural",
        desc: "Protege las encías y los dientes del ataque bacteriano ácido, manteniendo un ambiente oral sano y equilibrado."
      }
    ],
    ingredients: [
      "Extracto de madreselva",
      "Extracto de raíz de Isatis tinctoria",
      "Extracto de menta",
      "Xilitol",
      "Pasta base herbal sin pigmentos sintéticos"
    ],
    usage: "Cepille sus dientes diariamente con HERBS después de cada comida, al menos tres veces al día o como recomiende su odontólogo. Aplique el producto en su cepillo de dientes, realice una limpieza profunda y enjuague con abundante agua.",
    precautions: "No ingerir. Seguro para uso familiar.",
    technicalDocId: "doc-112"
  },

  // 20. PROBIOTICS TOOTHPASTE
  {
    id: "156",
    slug: "probiotics-toothpaste",
    code: "1197",
    name: "Probiotics Toothpaste (Pasta con Probióticos)",
    category: "cuidado-bucal",
    categoryLabel: "Cuidado Bucal Avanzado",
    price: 4080,
    priceFormatted: "₡4.080",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Pasta-dental-con-probioticos-HGW-1024x1024.jpg",
    shortDescription: "Probiotics Toothpaste de HGW no es solo una pasta dental; es un tratamiento de bionutrición para tu boca que redefine el concepto de limpieza profunda orientada a una 'Sonrisa limpia, radiante y saludable'.",
    netContent: "120 gr",
    servingsOrUnits: "1 tubo",
    presentation: "Tubo de 120 g",
    shelfLife: "36 meses",
    advantages: [
      "Elaborada con ingredientes naturales y turmalina para un cuidado dental más saludable.",
      "Libre de ingredientes abrasivos agresivos.",
      "Adecuada para uso diario y para toda la familia."
    ],
    benefits: [
      "Equilibrio Biológico: Su fórmula con probióticos ayuda a mantener una flora bucal saludable y protegida",
      "Brillo Radiante: Potencia el blanco natural de tus dientes, logrando una sonrisa más atractiva y limpia",
      "Limpieza de Precisión: Ofrece un cuidado bucodental profundo que elimina impurezas de forma eficaz",
      "Neutraliza los agentes que causan el mal aliento y afecciones comunes",
      "Deja una sensación de frescura y pureza que te acompañará durante todo el día"
    ],
    benefitsDetailed: [
      {
        title: "Tecnología de Probióticos Bucales",
        desc: "A diferencia de los productos convencionales, se enfoca en el equilibrio del microbioma oral. Ayuda a que tus dientes luzcan visiblemente más blancos y fuertes mientras protege tus encías y neutraliza el mal aliento."
      },
      {
        title: "Turmalina Integrada",
        desc: "Aporta energía iónica que refuerza la remineralización y combate los depósitos de placa microbiana."
      }
    ],
    ingredients: [
      "Lisados probióticos orales",
      "Turmalina purificada",
      "Xilitol",
      "Agentes limpiadores suaves",
      "Extracto de menta aromática"
    ],
    usage: "Colocar una pequeña cantidad de pasta sobre el cepillo de dientes. Cepillar los dientes durante 2 a 3 minutos, asegurando cubrir todas las superficies. Enjuagar con abundante agua.",
    precautions: "No ingerir. Mantener en lugar fresco y seco.",
    technicalDocId: "doc-112"
  },

  // 21. ENJOYABLE PANTY LINER (PROTECTOR ÍNTIMO DIARIO)
  {
    id: "94",
    slug: "protector-intimo-diario-turmalina",
    code: "1122",
    name: "Enjoyable Panty Liner (Protector Diario)",
    category: "turmalina",
    categoryLabel: "Cuidado Personal y Femenino",
    price: 2805,
    priceFormatted: "₡2.805",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Protectores-intimos-HGW.png",
    shortDescription: "Toalla sanitaria con textura de algodón suave para la piel y con banda de turmalina generadora de aniones para la higiene y protección en el cuidado de la salud femenina.",
    netContent: "30 unidades",
    servingsOrUnits: "30 protectores diarios",
    presentation: "Paquete de 30 unidades",
    shelfLife: "36 meses",
    advantages: [
      "Textura suave, ultrafina y una excelente absorción.",
      "Diseño de última generación.",
      "Estructurada con multicapas y materiales de primera calidad.",
      "Anatómicamente cómoda y diseñada para una máxima protección.",
      "Banda aniónica de turmalina.",
      "Empaque seguro y de alta calidad."
    ],
    benefits: [
      "La emisión de rayos bio-infrarrojos genera iones negativos que equilibran el pH de la zona íntima",
      "Previene y trata enfermedades ocasionadas por el desequilibrio de la flora vaginal",
      "Elimina malos olores de forma natural y continua",
      "Mejora la circulación sanguínea aliviando dolores o inflamaciones menstruales",
      "Capa de algodón: Permite suavidad al contacto con la piel y no genera irritación"
    ],
    benefitsDetailed: [
      {
        title: "Banda Aniónica de Turmalina",
        desc: "La medicina holística refiere que la emisión de rayos bio-infrarrojos genera iones negativos que ayudarían a equilibrar el pH de la zona íntima para prevenir o tratar diferentes enfermedades ocasionadas por el desequilibrio de la flora vaginal, así como la emisión de malos olores. Mejora la circulación sanguínea aliviando dolores o inflamaciones del proceso menstrual."
      },
      {
        title: "Capa de Algodón Puro",
        desc: "Permite una agradable suavidad al contacto con la piel sensible y no genera irritación ni alergias."
      }
    ],
    ingredients: [
      "Celulosa de primera calidad",
      "Tela no tejida hipoalergénica",
      "Extracto de turmalina (banda aniónica)",
      "Polipropileno transpirable",
      "Adhesivo siliconado de grado higiénico"
    ],
    usage: "Tome 1 unidad del empaque, retire el envoltorio y las cintas siliconadas del producto, enseguida fije la parte adhesiva de la toalla sanitaria a la prenda íntima y siéntase delicadamente cómoda y protegida.",
    precautions: "Sólo para uso externo. No use el producto si el empaque inicialmente se encuentra abierto, no deseche el producto directamente en el inodoro.",
    technicalDocId: "doc-70"
  },

  // 22. ENJOYABLE DAY USE (TOALLA ÍNTIMA DE USO DIURNO)
  {
    id: "96",
    slug: "toalla-sanitaria-dia-turmalina",
    code: "1123",
    name: "Enjoyable Day Use (Toalla Íntima Diurna)",
    category: "turmalina",
    categoryLabel: "Cuidado Personal y Femenino",
    price: 2805,
    priceFormatted: "₡2.805",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Toalla-sanitaria-con-turmalina-HGW-uso-dia.png",
    shortDescription: "Toalla sanitaria con textura de algodón suave para la piel y con banda de turmalina generadora de aniones para la higiene y protección completa en el cuidado de la salud femenina durante el período menstrual, para su uso durante el día.",
    netContent: "10 unidades",
    servingsOrUnits: "10 toallas de día",
    presentation: "Paquete de 10 unidades",
    shelfLife: "36 meses",
    advantages: [
      "Textura suave, ultrafina y una excelente absorción.",
      "Diseño de última generación.",
      "Estructurada con multicapas y materiales de primera calidad.",
      "Anatómicamente cómoda y para una máxima protección.",
      "Banda aniónica de turmalina.",
      "Empaque seguro y de alta calidad."
    ],
    benefits: [
      "Emisión de rayos bio-infrarrojos e iones negativos que equilibran el pH íntimo",
      "Previene infecciones ginecológicas y neutraliza malos olores",
      "Mejora la microcirculación aliviando dolores e inflamaciones menstruales diurnas",
      "Capa de algodón hipoalergénico que evita irritaciones y rozaduras",
      "Absorción inmediata y diseño anatómico antifugas"
    ],
    benefitsDetailed: [
      {
        title: "Banda Aniónica de Turmalina",
        desc: "La medicina holística refiere que la emisión de rayos bio-infrarrojos genera iones negativos que ayudarían a equilibrar el pH de la zona íntima para prevenir o tratar diferentes enfermedades ocasionadas por el desequilibrio de la flora vaginal, así como la emisión de malos olores. Mejora la circulación sanguínea por lo que aliviaría los dolores o inflamaciones del proceso menstrual."
      },
      {
        title: "Capa de Algodón Suave",
        desc: "Permite una perfecta suavidad al contacto con la piel y previene cualquier sensación de humedad o irritación."
      }
    ],
    ingredients: [
      "Celulosa",
      "Tela no tejida",
      "Extracto de turmalina (banda aniónica)",
      "Polipropileno transpirable",
      "Cintas siliconadas y adhesivo seguro"
    ],
    usage: "Tome 1 unidad del empaque, retire el envoltorio y las cintas siliconadas del producto, enseguida fije la parte adhesiva de la toalla sanitaria a la prenda íntima y siéntase delicadamente cómoda y protegida.",
    precautions: "Sólo para uso externo. No use el producto si el empaque inicialmente se encuentra abierto, no deseche el producto directamente en el inodoro.",
    technicalDocId: "doc-70"
  },

  // 23. ENJOYABLE NIGHT USE (TOALLA ÍNTIMA DE USO NOCTURNO)
  {
    id: "97",
    slug: "toalla-sanitaria-noche-turmalina",
    code: "1121",
    name: "Enjoyable Night Use (Toalla Íntima Nocturna)",
    category: "turmalina",
    categoryLabel: "Cuidado Personal y Femenino",
    price: 2244,
    priceFormatted: "₡2.244",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Toalla-sanitaria-con-turmalina-HGW-uso-nocturno.png",
    shortDescription: "Toalla sanitaria con textura de algodón suave para la piel y con banda de turmalina generadora de aniones para la higiene y protección en el cuidado de la salud femenina, para su uso durante la noche.",
    netContent: "8 unidades",
    servingsOrUnits: "8 toallas de noche",
    presentation: "Paquete de 8 unidades",
    shelfLife: "36 meses",
    advantages: [
      "Textura suave, ultrafina y una excelente absorción reforzada para la noche.",
      "Diseño de última generación extendido antifugas.",
      "Estructurada con multicapas y materiales de primera calidad.",
      "Anatómicamente cómoda y para una máxima protección nocturna.",
      "Banda aniónica de turmalina.",
      "Empaque seguro y de alta calidad."
    ],
    benefits: [
      "Máxima longitud y absorción para un sueño sin preocupaciones ni derrames",
      "Emisión constante de iones negativos y bio-infrarrojos que equilibran el pH",
      "Alivia cólicos y molestias pélvicas durante el descanso nocturno",
      "Neutraliza bacterias y olores desagradables durante horas de reposo",
      "Capa de algodón suave y transpirable que evita la irritación"
    ],
    benefitsDetailed: [
      {
        title: "Banda Aniónica de Turmalina",
        desc: "La emisión de rayos bio-infrarrojos genera aniones que equilibran el pH vaginal, previniendo infecciones y malos olores. Mejora la microcirculación local aliviando dolores e inflamaciones durante el sueño."
      },
      {
        title: "Capa de Algodón Nocturna",
        desc: "Permite una perfecta aireación y máxima suavidad evitando rozaduras en la piel durante la noche."
      }
    ],
    ingredients: [
      "Celulosa",
      "Tela no tejida",
      "Extracto de turmalina",
      "Polipropileno transpirable"
    ],
    usage: "Tome 1 unidad del empaque, retire el envoltorio y las cintas siliconadas, enseguida fije la parte adhesiva a la prenda íntima antes de acostarse para sentirse delicadamente cómoda y protegida.",
    precautions: "Sólo para uso externo. No deseche el producto directamente en el inodoro.",
    technicalDocId: "doc-70"
  },

  // 24. PROTECTOR DE CUELLO DE TURMALINA
  {
    id: "2167",
    slug: "protector-de-cuello-turmalina",
    code: "2167",
    name: "Protector de Cuello de Turmalina",
    category: "turmalina",
    categoryLabel: "Accesorios y Fisioterapia de Turmalina",
    price: 8160,
    priceFormatted: "₡8.160",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/fajas-turmalina.png",
    shortDescription: "El Protector de Cuello con Turmalina de HGW es un dispositivo de vanguardia diseñado para aprovechar las propiedades curativas de la turmalina en el ámbito del bienestar del cuello. Su diseño ergonómico y su facilidad de uso hacen que sea una solución práctica y efectiva para abordar una variedad de problemas de salud.",
    netContent: "1 unidad",
    servingsOrUnits: "1 cuellera",
    presentation: "1 unidad ergonómica con velcro ajustable",
    shelfLife: "Durabilidad prolongada",
    advantages: [
      "Ergonómico.",
      "Fácil uso y mantenimiento.",
      "Alta calidad y durabilidad."
    ],
    benefits: [
      "Alivio del Dolor: Alivia el dolor en cuello y hombros gracias a las propiedades piezoeléctricas de la turmalina que generan calor controlado",
      "Mejora de la Circulación: Promueve la dilatación de vasos sanguíneos y el suministro óptimo de oxígeno a los tejidos cervicales",
      "Reducción del Estrés y la Ansiedad: El calor suave y relajante ayuda a relajar los músculos tensos y a aliviar la tensión acumulada",
      "Facilita la eliminación de productos de desecho celular en trapecios y cuello"
    ],
    benefitsDetailed: [
      {
        title: "Alivio del Dolor",
        desc: "Uno de los beneficios más destacados del Protector de Cuello con Turmalina de HGW es su capacidad para aliviar el dolor en el cuello y los hombros. Las propiedades piezoeléctricas de la turmalina permiten que el dispositivo genere calor de manera controlada cuando entra en contacto con la piel."
      },
      {
        title: "Mejora de la Circulación",
        desc: "La turmalina, al generar calor en contacto con la piel, promueve la dilatación de los vasos sanguíneos y, en consecuencia, mejora la circulación. Una circulación sanguínea óptima es esencial para el suministro de oxígeno y nutrientes a los tejidos, así como para la eliminación de productos de desecho."
      },
      {
        title: "Reducción del Estrés y la Ansiedad",
        desc: "Otro beneficio terapéutico de este dispositivo es su capacidad para reducir el estrés y la ansiedad. El calor suave y relajante que genera la turmalina puede ayudar a relajar los músculos tensos y a aliviar la tensión acumulada."
      }
    ],
    ingredients: [
      "Tela de Nylon elástico",
      "Neopreno",
      "Tourmalina bioactiva",
      "Piedras Magnéticas",
      "Sistema de sujeción velcro (scrash)"
    ],
    usage: "Coloque la banda directamente alrededor del cuello y ajuste firmemente al tamaño requerido. Úselo de 3 ó 4 veces al día, al menos 30 minutos cada vez.",
    precautions: "Limpiar con un paño húmedo suave. No sumergir en agua hirviendo.",
    contraindications: "NO tener marcapaso, NO aplicar en zonas que tengan prótesis de metal.",
    technicalDocId: "doc-39"
  },

  // 25. PROTECTOR DE CINTURA DE TURMALINA
  {
    id: "2165",
    slug: "protector-de-cintura-turmalina",
    code: "2165",
    name: "Protector de Cintura de Turmalina",
    category: "turmalina",
    categoryLabel: "Accesorios y Fisioterapia de Turmalina",
    price: 35190,
    priceFormatted: "₡35.190",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/fajas-turmalina.png",
    shortDescription: "En la búsqueda constante de alternativas naturales y efectivas para mejorar nuestra salud y bienestar, nos encontramos con una joya en el mundo de la terapia física: el Protector de Cintura con Turmalina de HGW. Combina la sabiduría ancestral de la turmalina con la innovación moderna en diseño para aliviar el dolor lumbar y corregir la postura.",
    netContent: "1 unidad",
    servingsOrUnits: "1 faja lumbar",
    presentation: "1 faja lumbar ergonómica regulable",
    shelfLife: "Durabilidad prolongada",
    advantages: [
      "Ergonómico.",
      "Fácil uso y mantenimiento.",
      "Alta calidad y durabilidad."
    ],
    benefits: [
      "Soporte Lumbar y Postura Mejorada: Mantiene la columna vertebral erguida, reduciendo la presión en los discos intervertebrales",
      "Reducción de la Dependencia de Medicamentos: La terapia de infrarrojos lejanos disminuye la necesidad de analgésicos para artritis o dolores crónicos",
      "Comodidad y Durabilidad: Materiales de alta calidad resistentes al desgaste y lavado frecuente, ajustables a diferentes tallas",
      "Terapia térmica por turmalina y magnetoterapia que alivia lumbalgia, ciática y espasmos musculares"
    ],
    benefitsDetailed: [
      {
        title: "Soporte Lumbar y Postura Mejorada",
        desc: "Diseñado para brindar soporte lumbar en una zona vulnerable a lesiones. Ayuda a mantener la columna en una posición erguida, reduciendo la presión sobre los discos intervertebrales y previniendo dolores crónicos de espalda."
      },
      {
        title: "Comodidad y Durabilidad",
        desc: "Fabricado con materiales de alta calidad que resisten el desgaste y el lavado frecuente. Su diseño ergonómico lo hace ajustable y apto para personas de diferentes tallas."
      },
      {
        title: "Reducción de la Dependencia de Medicamentos",
        desc: "Al utilizar la terapia de infrarrojos lejanos proporcionada por la turmalina, es posible disminuir la necesidad de medicamentos analgésicos y, en consecuencia, reducir el riesgo de efectos secundarios."
      }
    ],
    ingredients: [
      "Tela de Nylon elástico",
      "Neopreno térmico",
      "Tourmalina",
      "Piedras Magnéticas",
      "Sistema de sujeción velcro (scrash)"
    ],
    usage: "Coloque el cinturón directamente alrededor de la cintura y ajuste firmemente al tamaño requerido. Úselo de 3 o 4 veces al día, al menos 30 minutos cada vez.",
    precautions: "Limpiar suavemente con paño húmedo. No lavar en lavadora automática.",
    contraindications: "NO tener marcapaso, NO aplicar en zonas que tengan prótesis de metal.",
    technicalDocId: "doc-39"
  },

  // 26. PROTECTOR DE RODILLA DE TURMALINA
  {
    id: "2166",
    slug: "protector-de-rodilla-turmalina",
    code: "2166",
    name: "Protector de Rodilla de Turmalina",
    category: "turmalina",
    categoryLabel: "Accesorios y Fisioterapia de Turmalina",
    price: 28050,
    priceFormatted: "₡28.050",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/fajas-turmalina.png",
    shortDescription: "El Protector de Rodilla con Turmalina es un testimonio de su compromiso con la calidad y la innovación. Diseñado pensando en la comodidad y la eficacia, se ha convertido en una herramienta esencial para aquellos que buscan alivio de dolores y molestias en la rodilla.",
    netContent: "1 unidad",
    servingsOrUnits: "1 rodillera",
    presentation: "1 unidad anatómica envolvente con velcro",
    shelfLife: "Durabilidad prolongada",
    advantages: [
      "Ergonómico.",
      "Fácil uso y mantenimiento.",
      "Alta calidad y durabilidad."
    ],
    benefits: [
      "Alivio del Dolor: Emite energía FIR que penetra en el tejido profundo reduciendo inflamación y dolor articular",
      "Soporte y Estabilidad: Proporciona soporte articular esencial tanto para prevención como para recuperación de lesiones",
      "Versatilidad: Puede utilizarse tanto en la vida diaria como durante el deporte o ejercicios físicos",
      "Reducción de la Rigidez: Genera calor FIR que disipa la rigidez matutina en personas con artritis o desgaste"
    ],
    benefitsDetailed: [
      {
        title: "Alivio del Dolor Articular",
        desc: "La turmalina emite energía FIR que penetra en el tejido profundo y ayuda a reducir la inflamación, mejorar la circulación sanguínea y aliviar el dolor. Especialmente beneficioso para personas con artritis, lesiones deportivas o dolores crónicos en la rodilla."
      },
      {
        title: "Soporte y Estabilidad",
        desc: "Proporciona soporte adicional a la articulación de la rodilla, ayudando a prevenir movimientos bruscos que puedan agravar la lesión y permitiendo mantener un nivel de actividad saludable."
      },
      {
        title: "Reducción de la Rigidez",
        desc: "La turmalina, con su capacidad para generar calor FIR, ayuda a reducir la rigidez en la articulación de la rodilla, especialmente por la mañana o después de periodos de inactividad."
      }
    ],
    ingredients: [
      "Tela de Nylon elástico",
      "Neopreno",
      "Tourmalina",
      "Piedras Magnéticas",
      "Sistema de sujeción velcro (scrash)"
    ],
    usage: "Coloque la banda directamente alrededor de la rodilla y ajuste firmemente al tamaño requerido. Úselo de 3 ó 4 veces al día, al menos 30 minutos cada vez.",
    precautions: "Limpiar manualmente con paño húmedo. Secar al aire libre.",
    contraindications: "NO tener marcapaso, NO aplicar en zonas que tengan prótesis de metal.",
    technicalDocId: "doc-39"
  },

  // 27. ALMOHADA DE TURMALINA (TURMALINA MAGNETPILLOW)
  {
    id: "alm-01",
    slug: "almohada-de-turmalina",
    name: "Almohada de Turmalina (Turmalina Magnetpillow)",
    category: "hogar-accesorios",
    categoryLabel: "Hogar y Accesorios",
    price: 45390,
    priceFormatted: "₡45.390",
    inStock: true,
    featured: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/almohada-hgw.png",
    shortDescription: "Turmalina: Descanso, Felicidad, Paz, Relax. Almohada ergonómica con tecnología de magnetos y turmalina para un sueño reparador y bienestar cervical continuo.",
    netContent: "1 unidad",
    servingsOrUnits: "1 almohada ergonómica",
    presentation: "1 almohada ergonómica con insertos de turmalina e imanes",
    shelfLife: "Durabilidad prolongada",
    advantages: [
      "Tecnología avanzada ortopédica y bioenergética.",
      "Material de alta calidad.",
      "Valor añadido para contribuir al bienestar: se posiciona como un producto para contribuir al descanso de ensueño.",
      "Durabilidad y no toxicidad: en condiciones de uso normal el producto es seguro para uso prolongado y no se degrada con facilidad ni genera toxicidad."
    ],
    benefits: [
      "Favorece un descanso profundo y reparador aliviando el insomnio",
      "La turmalina y los magnetos emiten energía que relaja la musculatura cervical",
      "Diseño ergonómico que mantiene la postura correcta de la columna durante el sueño",
      "Mejora la circulación craneal aliviando tensiones y dolores de cabeza matutinos",
      "Materiales hipoalergénicos que garantizan higiene y frescura duradera"
    ],
    benefitsDetailed: [
      {
        title: "Descanso Bioenergético con Magnetos y Turmalina",
        desc: "Las partículas de turmalina e imanes integrados generan un campo electromagnético natural y aniones que armonizan el sistema nervioso, disminuyendo el estrés y facilitando la entrada al sueño REM."
      },
      {
        title: "Ergonomía Cervical Avanzada",
        desc: "A diferencia de las almohadas comunes, su forma anatómica brinda soporte a la curva natural del cuello, reduciendo contracturas y rigidez."
      }
    ],
    ingredients: [
      "Núcleo ergonómico de alta resiliencia",
      "Inserto de nanoturmalina bioactiva",
      "Piedras magnéticas terapéuticas",
      "Funda transpirable de alta densidad"
    ],
    usage: "Coloque la almohada sobre la superficie de descanso, asegurándose de que quede firme y bien posicionada en la cabecera de la cama. Instrucciones de Lavado y Cuidado: Lave el producto de forma estricta: 1. Lavar a mano con agua a temperatura Max.40°C con jabón o detergente neutro. No usar lejía ni blanqueadores. 2. Secar bajo sombra, en lugar ventilado. No exprimir ni usar secadora. 3. No planchar. 4. Guardar en bolsa original en lugar seco.",
    precautions: "No lavar en seco, no blanquear, no planchar, secar extendido. Condiciones de almacenamiento: Almacenar a temperatura ambiente, ventilado, colocar extendido, no colocar objetos pesados sobre la almohada, no almacenar con artículos que destiñan.",
    technicalDocId: "doc-116"
  },

  // 28. COLLAR DE TURMALINA
  {
    id: "2129",
    slug: "collar-de-turmalina",
    code: "2129",
    name: "Collar de Turmalina",
    category: "turmalina",
    categoryLabel: "Accesorios y Fisioterapia de Turmalina",
    price: 20400,
    priceFormatted: "₡20.400",
    inStock: true,
    image: "https://hgwcostarica.com/wp-content/uploads/2026/10/Collar-de-turmalina-No.-15.png",
    shortDescription: "Hecho a mano con piedras naturales. La turmalina es venerada como un importante talismán de protección y protege contra la radiación y los contaminantes ambientales.",
    netContent: "1 unidad",
    servingsOrUnits: "1 collar",
    presentation: "Collar artesanal con piedras naturales de turmalina",
    shelfLife: "Indefinida",
    advantages: [
      "Sencillo y elegante.",
      "Hecho a mano con piedras naturales.",
      "Adaptable a las medidas.",
      "Presente en varios y mágicos colores.",
      "La turmalina es venerada como un importante talismán de protección y protege contra la radiación y los contaminantes ambientales."
    ],
    benefits: [
      "Uno de los minerales más potentes para absorber y desviar la radiación electromagnética",
      "Protección contra emisión de ondas de teléfonos celulares, computadoras y aparatos electrónicos",
      "Limpia y purifica la energía más densa del entorno haciéndola ligera y equilibrada",
      "Considerado como el mejor aliado para purificar y estabilizar los estados de ánimo",
      "Mejora la vitalidad general y el equilibrio energético"
    ],
    benefitsDetailed: [
      {
        title: "La Turmalina",
        desc: "La medicina holística refiere que es uno de los minerales más potentes para absorber la radiación, es excelente para la protección contra la emisión de ondas electromagnéticas de teléfonos celulares, computadoras y otros aparatos electrónicos. Con una piedra turmalina limpiarás y purificarás la energía más densa del entorno haciéndola ligera y equilibrada. Por eso, la turmalina se considera como el mejor aliado para purificar los estados de ánimo."
      }
    ],
    ingredients: [
      "Piedras de turmalina natural seleccionadas",
      "Hilo de unión de alta resistencia",
      "Cierre seguro hipoalergénico"
    ],
    usage: "Usar como collar alrededor del cuello. Sugerencia de Limpieza: 1) Prepare una solución salina vertiendo 1 cuchara de sal de maras o marina en 500 ml de agua. 2) La solución salina deberá indicar un pH entre 7 – 7.5. 3) Coloque el collar de turmalina en la solución salina por un tiempo de 4 horas aproximadamente. 4) Retírelo y séquelo con un paño desechable limpio.",
    precautions: "Evitar contacto con químicos corrosivos o perfume directo.",
    technicalDocId: "doc-39"
  },

  // 29. PULSERA DE TURMALINA
  {
    id: "2130",
    slug: "pulsera-de-turmalina",
    code: "2130",
    name: "Pulsera de Turmalina",
    category: "turmalina",
    categoryLabel: "Accesorios y Fisioterapia de Turmalina",
    price: 10200,
    priceFormatted: "₡10.200",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/Pulsera-de-turmalina-No.-33-scaled.jpg",
    shortDescription: "Hecha a mano con piedras naturales. Elegante accesorio bioenergético que protege contra la radiación electromagnética y purifica la energía personal.",
    netContent: "1 unidad",
    servingsOrUnits: "1 pulsera",
    presentation: "Pulsera elástica con gemas esféricas de turmalina",
    shelfLife: "Indefinida",
    advantages: [
      "Hecho a mano con piedras naturales.",
      "Sencillo y elegante.",
      "Adaptable a las medidas.",
      "Presente en variedad de mágicos colores.",
      "La turmalina es venerada como un importante talismán de protección y protege contra la radiación y los contaminantes ambientales."
    ],
    benefits: [
      "Absorbe radiaciones electromagnéticas de móviles y redes inalámbricas",
      "Transforma la energía negativa en positiva en tu campo personal",
      "Purifica los estados de ánimo disminuyendo la ansiedad y el estrés",
      "Estimula la microcirculación en la muñeca y meridianos energéticos"
    ],
    benefitsDetailed: [
      {
        title: "La Turmalina",
        desc: "La medicina holística refiere que es uno de los minerales más potentes para absorber la radiación de ondas electromagnéticas de celulares y computadoras. Limpia y purifica la energía más densa del entorno haciéndola ligera y equilibrada, purificando los estados de ánimo."
      }
    ],
    ingredients: [
      "Cuentas esféricas de turmalina natural",
      "Banda elástica de alta durabilidad"
    ],
    usage: "Usar en la muñeca como pulsera. Sugerencia de Limpieza: 1) Prepare una solución salina vertiendo 1 cuchara de sal de maras o marina en 500 ml de agua (pH 7-7.5). 2) Coloque la pulsera en la solución salina por 4 horas aproximadamente. 3) Retírela y séquela con un paño limpio.",
    precautions: "Evitar tirones bruscos.",
    technicalDocId: "doc-39"
  },

  // 30. PLANTILLAS DE TURMALINA
  {
    id: "2034",
    slug: "plantillas-de-turmalina",
    code: "2034",
    name: "Plantillas de Turmalina",
    category: "turmalina",
    categoryLabel: "Accesorios y Fisioterapia de Turmalina",
    price: 4590,
    priceFormatted: "₡4.590",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/plantillas-hgw.png",
    shortDescription: "La plantilla de turmalina de HGW para el calzado es un producto compuesto principalmente por tela de alta calidad, fibra de carbón de bambú y piedra de turmalina pulverizada que al entrar en contacto con la piel generan calor brindando una sensación de confort a los pies.",
    netContent: "1 par",
    servingsOrUnits: "1 par de plantillas",
    presentation: "1 par de plantillas adaptables al calzado",
    shelfLife: "Durabilidad prolongada",
    advantages: [
      "Confort y calidez para tus pies.",
      "Evita el bloqueo de los puntos energéticos de los pies.",
      "Facilita el flujo de energías."
    ],
    benefits: [
      "La turmalina transforma la energía negativa en positiva y purifica la energía densa",
      "Estimula las terminaciones nerviosas y zonas reflejas de la planta del pie",
      "Las zonas sensibles del pie representan un mapa del cuerpo; su estímulo alivia múltiples problemas de salud",
      "Brinda calidez y confort constante para pies fríos o cansados",
      "El carbón de bambú neutraliza la humedad y previene malos olores"
    ],
    benefitsDetailed: [
      {
        title: "Catalizador de Energía y Reflexología Podal",
        desc: "La turmalina es un potente catalizador de energía que transforma la energía negativa en positiva, además que con ella se logra limpiar y purificar la energía más densa del entorno. Existen muchas terminaciones nerviosas y zonas sensibles en la planta del pie que corresponden con todas las partes del cuerpo. Estas zonas representan un mapa del cuerpo en cada pie. El estado fisiológico de estas zonas refleja el estado de salud de cada uno, y su estímulo alivia muchos problemas de salud."
      }
    ],
    ingredients: [
      "Tela de alta calidad",
      "Fibra de carbón de bambú",
      "Piedra de turmalina pulverizada autocalentable"
    ],
    usage: "Colocar las plantillas dentro del calzado diario. Ajustar o recortar al tamaño de la suela si fuera necesario. Úselas a lo largo del día para mantener los pies cálidos y energizados.",
    precautions: "Limpiar la superficie con paño ligeramente húmedo. No sumergir en agua hirviendo ni usar lejía.",
    technicalDocId: "doc-39"
  },

  // 31. TERMO PARA CAFÉ HGW (TAZAS TÉRMICAS)
  {
    id: "2168",
    slug: "tazas-termicas",
    code: "2168",
    name: "Termo para Café HGW (Taza Térmica)",
    category: "hogar-accesorios",
    categoryLabel: "Hogar y Accesorios",
    price: 13260,
    priceFormatted: "₡13.260",
    inStock: true,
    image: "https://media.academiahgw.online/wp-content/uploads/2026/11/taza-hgw.png",
    shortDescription: "Termo ergonómico portátil de alta tecnología para café y bebidas calientes o frías HGW. Diseñado para conservar la temperatura perfecta, con correa deportiva de transporte y cierre hermético antifugas.",
    netContent: "390 ml",
    servingsOrUnits: "1 termo",
    presentation: "Termo de 390 ml con correa de mano (Disponible en colores azul, rojo, negro y blanco)",
    shelfLife: "Indefinida",
    advantages: [
      "Cierre 100% hermético antifugas para transportar con total seguridad.",
      "Acero inoxidable de doble pared de grado alimenticio.",
      "Mantiene tus bebidas calientes o frías durante horas.",
      "Diseño ergonómico con correa exclusiva con logo HGW.",
      "Fácil de limpiar y reutilizable."
    ],
    benefits: [
      "Conserva la temperatura y el aroma intacto de tus cafés y tés funcionales HGW",
      "Ideal para llevar al trabajo, gimnasio, viajes o actividades al aire libre",
      "Material libre de BPA y no tóxico que no altera los sabores",
      "Estructura robusta resistente a caídas y golpes leves"
    ],
    benefitsDetailed: [
      {
        title: "Aislamiento Térmico al Vacío",
        desc: "Su estructura de doble capa de acero inoxidable bloquea la transferencia de temperatura, manteniendo bebidas calientes por hasta 6-8 horas y bebidas frías hasta por 12 horas."
      }
    ],
    ingredients: [
      "Acero inoxidable 304 de grado alimenticio",
      "Tapa hermética de polipropileno libre de BPA",
      "Anillo de sellado de silicona higiénica",
      "Correa de tela resistente con insignia HGW"
    ],
    usage: "Lavar antes del primer uso. Verter la bebida preparada en el termo y enroscar firmemente la tapa. Abrir el visor de la boquilla para beber cómodamente.",
    precautions: "Lavar a mano con esponja suave para cuidar la pintura exterior. No usar en microondas ni colocar sobre fuego directo.",
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
    priceEstimate: "₡45.900 (aprox)",
    productsChoice: "Productos de su preferencia",
    fastStartBonus: "₡2.550",
    developmentBonus: "₡102",
    teamBonus: "5%",
    dailyEarningsCap: "₡25.500",
    repurchaseBonus: "5%",
    directSaleProfit: "30%",
    packageImageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/prejunior-hgw.png",
  },
  {
    id: "junior",
    name: "Membresía Junior",
    bv: "100 BV",
    priceEstimate: "₡91.800 (aprox)",
    productsChoice: "Productos de su preferencia",
    fastStartBonus: "₡5.100",
    developmentBonus: "₡255",
    teamBonus: "7%",
    dailyEarningsCap: "₡61.200",
    repurchaseBonus: "5%",
    directSaleProfit: "30%",
    packageImageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/JUNIOR-100-BV.png",
  },
  {
    id: "senior",
    name: "Membresía Senior",
    bv: "300 BV",
    priceEstimate: "₡275.400 (aprox)",
    productsChoice: "Productos de su preferencia",
    fastStartBonus: "₡15.300",
    developmentBonus: "₡765",
    teamBonus: "8%",
    dailyEarningsCap: "₡183.600",
    eliteBonus: "4% Hasta 3era generación",
    repurchaseBonus: "5%",
    directSaleProfit: "30%",
    packageImageUrl: "https://media.academiahgw.online/wp-content/uploads/2026/11/senior.png",
  },
  {
    id: "master",
    name: "Membresía Master",
    bv: "600 BV",
    priceEstimate: "₡522.240 (aprox)",
    productsChoice: "Productos de su preferencia",
    fastStartBonus: "₡30.600",
    developmentBonus: "₡1.530",
    teamBonus: "10%",
    dailyEarningsCap: "₡367.200",
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
