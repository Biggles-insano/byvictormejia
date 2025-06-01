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
        "https://www.ladymelbourne.com.au/wp-content/uploads/2023/03/chanel-sling-backs2.jpg",
        "https://www.chanel.com/images///f_auto,q_auto:good,dpr_1.1/w_3200/-9550683668510.jpg%203200w"
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
        "https://example.com/images/row_gala.jpg",
        "https://example.com/images/row_gala_2.jpg",
        "https://example.com/images/row_gala_3.jpg"
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
        "https://example.com/images/celine_trousers.jpg",
        "https://example.com/images/celine_trousers_2.jpg",
        "https://example.com/images/celine_trousers_3.jpg"
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
        "https://example.com/images/bar_jacket.jpg",
        "https://example.com/images/bar_jacket_2.jpg",
        "https://example.com/images/bar_jacket_3.jpg"
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
        "https://example.com/images/prada_slingback.jpg",
        "https://example.com/images/prada_slingback_2.jpg",
        "https://example.com/images/prada_slingback_3.jpg"
      ],
      descripcion: "Tacones en satén con broche delicado. Sofisticación pura.",
      rating: 5,
      descuento: false
    },
  
    // Hombre
    {
      id: 6,
      nombre: "Brioni Wool Suit Roma Fit",
      categoria: "",
      precio: 710.00,
      precioAntes: null,
      imagenes: [
        "https://example.com/images/brioni_suit.jpg",
        "https://example.com/images/brioni_suit_2.jpg",
        "https://example.com/images/brioni_suit_3.jpg"
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
        "https://example.com/images/celine_teddy.jpg",
        "https://example.com/images/celine_teddy_2.jpg",
        "https://example.com/images/celine_teddy_3.jpg"
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
        "https://example.com/images/loro_loafers.jpg",
        "https://example.com/images/loro_loafers_2.jpg",
        "https://example.com/images/loro_loafers_3.jpg"
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
        "https://example.com/images/tf_tuxshirt.jpg",
        "https://example.com/images/tf_tuxshirt_2.jpg",
        "https://example.com/images/tf_tuxshirt_3.jpg"
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
        "https://example.com/images/hermes_belt.jpg",
        "https://example.com/images/hermes_belt_2.jpg",
        "https://example.com/images/hermes_belt_3.jpg"
      ],
      descripcion: "Cinturón de cuero granulado reversible con hebilla H refinada. Silencio visual.",
      rating: 4,
      descuento: true
    },
    // Nuevos productos
    {
      id: 11,
      nombre: "Dior Saddle Bag",
      categoria: "bolsos",
      precio: 265.00,
      precioAntes: 320.00,
      imagenes: [
        "https://example.com/images/dior_saddle.jpg",
        "https://example.com/images/dior_saddle_2.jpg",
        "https://example.com/images/dior_saddle_3.jpg"
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
        "https://example.com/images/jacquemus_lechiquito.jpg",
        "https://example.com/images/jacquemus_lechiquito_2.jpg",
        "https://example.com/images/jacquemus_lechiquito_3.jpg"
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
        "https://example.com/images/gucci_marmont.jpg",
        "https://example.com/images/gucci_marmont_2.jpg",
        "https://example.com/images/gucci_marmont_3.jpg"
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
        "https://example.com/images/loewe_puzzle.jpg",
        "https://example.com/images/loewe_puzzle_2.jpg",
        "https://example.com/images/loewe_puzzle_3.jpg"
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
        "https://example.com/images/prada_reedition.jpg",
        "https://example.com/images/prada_reedition_2.jpg",
        "https://example.com/images/prada_reedition_3.jpg"
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
        "https://example.com/images/selfportrait_lace.jpg",
        "https://example.com/images/selfportrait_lace_2.jpg",
        "https://example.com/images/selfportrait_lace_3.jpg"
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
        "https://example.com/images/zimmermann_wrap.jpg",
        "https://example.com/images/zimmermann_wrap_2.jpg",
        "https://example.com/images/zimmermann_wrap_3.jpg"
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
        "https://example.com/images/cherrera_gown.jpg",
        "https://example.com/images/cherrera_gown_2.jpg",
        "https://example.com/images/cherrera_gown_3.jpg"
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
        "https://example.com/images/rayban_round.jpg",
        "https://example.com/images/rayban_round_2.jpg",
        "https://example.com/images/rayban_round_3.jpg"
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
        "https://example.com/images/celine_triomphe.jpg",
        "https://example.com/images/celine_triomphe_2.jpg",
        "https://example.com/images/celine_triomphe_3.jpg"
      ],
      descripcion: "Lentes de sol oversize con logo Triomphe en las patillas. Estilo sofisticado.",
      rating: 5,
      descuento: true
    }
  ]
 
  export default products