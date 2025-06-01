const products = [
  // Mujer
  {
    id: 1,
    nombre: "Chanel Slingback Two-Tone",
    categoria: "zapatos",
    precio: 132.50,
    precioAntes: 149.00,
    imagenes: [
      "https://www.chanel.com/images///c_crop,w_1600,g_north,f_auto,q_auto:good,dpr_1.1/w_3200/-9555546570782.jpg%203200w",
      "/images/chanelslingback.jpg",
      "/images/chanelslingback.jpg"
    ],
    descripcion: "Zapato bicolor con talón abierto, símbolo del chic parisino.",
    rating: 5,
    descuento: true
  },
  {
    id: 2,
    nombre: "The Row Gala Silk Dress",
    categoria: "vestidos",
    precio: 460.00,
    precioAntes: null,
    imagenes: [
      "/images/row_gala.jpg",
      "/images/row_gala2.jpg",
      "/images/row_gala3.jpg"
    ],
    descripcion: "Vestido largo de seda con caída perfecta. Sin logos. Solo presencia.",
    rating: 5,
    descuento: false
  },
  {
    id: 3,
    nombre: "Celine Pleated Trousers",
    categoria: "pantalones",
    precio: 125.00,
    precioAntes: 139.00,
    imagenes: [
      "/images/celine_trousers.jpg",
      "/images/celine_trousers.jpg",
      "/images/celine_trousers.jpg"
    ],
    descripcion: "Pantalón de pinzas con talle alto. Para una silueta marcada sin esfuerzo.",
    rating: 4,
    descuento: true
  },
  {
    id: 4,
    nombre: "Dior Bar Jacket in Wool",
    categoria: "chaquetas",
    precio: 370.00,
    precioAntes: 410.00,
    imagenes: [
      "/images/bar_jacket.jpg",
      "/images/bar_jacket.jpg",
      "/images/bar_jacket.jpg"
    ],
    descripcion: "La chaqueta estructural que definió la silueta femenina del siglo XX.",
    rating: 5,
    descuento: true
  },
  {
    id: 5,
    nombre: "Prada Satin Slingback Pumps",
    categoria: "zapatos",
    precio: 125.00,
    precioAntes: null,
    imagenes: [
      "/images/prada_slingback.jpg",
      "/images/prada_slingback.jpg",
      "/images/prada_slingback.jpg"
    ],
    descripcion: "Tacones en satén con broche delicado. Sofisticación pura.",
    rating: 5,
    descuento: false
  },
  {
    id: 6,
    nombre: "Brioni Wool Suit Roma Fit",
    categoria: "",
    precio: 710.00,
    precioAntes: null,
    imagenes: [
      "/images/brioni_suit.jpg",
      "/images/brioni_suit.jpg",
      "/images/brioni_suit.jpg"
    ],
    descripcion: "Traje de lana virgen hecho a mano en Italia. Corte clásico con caída perfecta.",
    rating: 5,
    descuento: false
  },
  {
    id: 7,
    nombre: "Celine Teddy Jacket in Wool",
    categoria: "chaquetas",
    precio: 325.00,
    precioAntes: 380.00,
    imagenes: [
      "/images/celine_teddy.jpg",
      "/images/celine_teddy.jpg",
      "/images/celine_teddy.jpg"
    ],
    descripcion: "Chaqueta varsity en lana y piel suave. Detalle minimalista en los botones.",
    rating: 4,
    descuento: true
  },
  {
    id: 8,
    nombre: "Loro Piana Walk Loafers",
    categoria: "zapatos",
    precio: 94.00,
    precioAntes: null,
    imagenes: [
      "/images/loro_loafers.jpg",
      "/images/loro_loafers.jpg",
      "/images/loro_loafers.jpg"
    ],
    descripcion: "Mocasines de ante y suela ligera. Pensados para caminar con estilo invisible.",
    rating: 5,
    descuento: false
  },
  {
    id: 9,
    nombre: "Tom Ford Silk Tuxedo Shirt",
    categoria: "camisas",
    precio: 115.00,
    precioAntes: null,
    imagenes: [
      "/images/tf_tuxshirt.jpg",
      "/images/tf_tuxshirt.jpg",
      "/images/tf_tuxshirt.jpg"
    ],
    descripcion: "Camisa de seda blanca con botones ocultos, ideal para noche formal.",
    rating: 5,
    descuento: false
  },
  {
    id: 10,
    nombre: "Hermès H Belt Reversible",
    categoria: "accesorios",
    precio: 135.00,
    precioAntes: 155.00,
    imagenes: [
      "/images/hermes_belt.jpg",
      "/images/hermes_belt.jpg",
      "/images/hermes_belt.jpg"
    ],
    descripcion: "Cinturón de cuero granulado reversible con hebilla H refinada. Silencio visual.",
    rating: 4,
    descuento: true
  },
  {
    id: 11,
    nombre: "Dior Saddle Bag",
    categoria: "bolsos",
    precio: 265.00,
    precioAntes: 320.00,
    imagenes: [
      "/images/dior_saddle.jpg",
      "/images/dior_saddle.jpg",
      "/images/dior_saddle.jpg"
    ],
    descripcion: "El icónico bolso Saddle de Dior en piel negra. Diseño curvo y cierre magnético.",
    rating: 5,
    descuento: true
  },
  {
    id: 12,
    nombre: "Jacquemus Le Chiquito",
    categoria: "bolsos",
    precio: 170.00,
    precioAntes: null,
    imagenes: [
      "/images/jacquemus_lechiquito.jpg",
      "/images/jacquemus_lechiquito.jpg",
      "/images/jacquemus_lechiquito.jpg"
    ],
    descripcion: "Bolso mini estructurado con asa superior y correa larga. Color lavanda.",
    rating: 4,
    descuento: false
  },
  {
    id: 13,
    nombre: "Gucci Marmont Matelassé",
    categoria: "bolsos",
    precio: 295.00,
    precioAntes: 340.00,
    imagenes: [
      "/images/gucci_marmont.jpg",
      "/images/gucci_marmont.jpg",
      "/images/gucci_marmont.jpg"
    ],
    descripcion: "Bolso de piel matelassé con cadena dorada y logo GG. Estilo atemporal.",
    rating: 5,
    descuento: true
  },
  {
    id: 14,
    nombre: "Loewe Puzzle Bag",
    categoria: "bolsos",
    precio: 420.00,
    precioAntes: null,
    imagenes: [
      "/images/loewe_puzzle.jpg",
      "/images/loewe_puzzle.jpg",
      "/images/loewe_puzzle.jpg"
    ],
    descripcion: "Bolso geométrico en piel flexible. Versatilidad y diseño único.",
    rating: 5,
    descuento: false
  },
  {
    id: 15,
    nombre: "Prada Re-Edition 2005",
    categoria: "bolsos",
    precio: 235.00,
    precioAntes: 260.00,
    imagenes: [
      "/images/prada_reedition.jpg",
      "/images/prada_reedition.jpg",
      "/images/prada_reedition.jpg"
    ],
    descripcion: "Bolso de nailon negro con detalles en cuero Saffiano y correa ajustable.",
    rating: 4,
    descuento: true
  },
  {
    id: 16,
    nombre: "Self-Portrait Lace Midi Dress",
    categoria: "vestidos",
    precio: 150.00,
    precioAntes: 185.00,
    imagenes: [
      "/images/selfportrait_lace.jpg",
      "/images/selfportrait_lace.jpg",
      "/images/selfportrait_lace.jpg"
    ],
    descripcion: "Vestido midi de encaje blanco, mangas abullonadas y falda con vuelo.",
    rating: 5,
    descuento: true
  },
  {
    id: 17,
    nombre: "Zimmermann Silk Wrap Dress",
    categoria: "vestidos",
    precio: 230.00,
    precioAntes: null,
    imagenes: [
      "/images/zimmermann_wrap.jpg",
      "/images/zimmermann_wrap.jpg",
      "/images/zimmermann_wrap.jpg"
    ],
    descripcion: "Vestido cruzado de seda estampada, ideal para eventos de verano.",
    rating: 5,
    descuento: false
  },
  {
    id: 18,
    nombre: "Carolina Herrera Red Gown",
    categoria: "vestidos",
    precio: 340.00,
    precioAntes: 390.00,
    imagenes: [
      "/images/cherrera_gown.jpg",
      "/images/cherrera_gown.jpg",
      "/images/cherrera_gown.jpg"
    ],
    descripcion: "Vestido largo rojo con escote palabra de honor. Elegancia clásica.",
    rating: 5,
    descuento: true
  },
  {
    id: 19,
    nombre: "Ray-Ban Round Metal",
    categoria: "accesorios",
    precio: 95.00,
    precioAntes: null,
    imagenes: [
      "/images/rayban_round.jpg",
      "/images/rayban_round.jpg",
      "/images/rayban_round.jpg"
    ],
    descripcion: "Lentes de sol metálicos redondos, estilo retro con cristales oscuros.",
    rating: 4,
    descuento: false
  },
  {
    id: 20,
    nombre: "Celine Triomphe Sunglasses",
    categoria: "accesorios",
    precio: 185.00,
    precioAntes: 215.00,
    imagenes: [
      "/images/celine_triomphe.jpg",
      "/images/celine_triomphe.jpg",
      "/images/celine_triomphe.jpg"
    ],
    descripcion: "Lentes de sol oversize con logo Triomphe en las patillas. Estilo sofisticado.",
    rating: 5,
    descuento: true
  }
]

export default products