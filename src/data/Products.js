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
      "https://blog.fashionphile.com/wp-content/uploads/2023/05/Hero-7.jpg",
      "https://th.bing.com/th/id/R.697b602ba759779e1477115b9e943247?rik=wBVsuJApmpYxUA&pid=ImgRaw&r=0"
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
      "https://th.bing.com/th/id/OIP.miAVts2jhiwdcrzXi0NiiQHaLH?rs=1&pid=ImgDetMain",
      "https://i.pinimg.com/originals/5d/ba/92/5dba92dff1b6becbe003f41fc89caf47.jpg"
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
      "https://th.bing.com/th/id/R.84c1b730ab0e1f430068c656fe660791?rik=1HYGhDAQcLyGAA&pid=ImgRaw&r=0",
      "https://cache.mrporter.com/variants/images/560971903897077/in/w2000_q60.jpg"
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
      "https://th.bing.com/th/id/OIF.BPkHfdFx2KMnqLlBgXIL0g?rs=1&pid=ImgDetMain",
      "https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_2_LOOK_097_E06?$lookDefault_GH-GHC$&crop=572,0,1856,2000&wid=1850&hei=2000&scale=1&bfc=on&qlt=85",
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
      "https://cdna.lystit.com/520/650/n/photos/prada/ae657535/prada-Tobacco-Satin-Slingback-Pumps.jpeg",
      "https://cdna.lystit.com/520/650/n/photos/thahab/41097624/prada-Brown-35-Satin-Slingback-Pumps.jpeg"
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
      "https://suitablee.com/media/catalog/product/z/d/zd044-1.jpg",
      "https://cdna.lystit.com/520/650/n/photos/lvr/eb5ee9e8/brioni-Black-Smoking-Perseo-Wool-Mohair-Suit.jpeg"
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
      "https://th.bing.com/th/id/OIP.y_oqf3t6t7rCsKgkfAAL6gHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain",
      "https://brands-hub.ru/wp-content/uploads/2023/10/Celine-Women-Classic-Teddy-Jacket-in-Textured-Wool-1.jpg"
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
      "https://th.bing.com/th/id/OIP.puJvtu7nVlSMdbvswuIGqgHaJ4?rs=1&pid=ImgDetMain",
      "https://cache.mrporter.com/variants/images/12938511207183806/e3/w2000_q60.jpg"
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
      "https://cdn.media.amplience.net/i/harryrosen/20014797",
      "https://th.bing.com/th/id/OIP.LkM9fJ-4HJ_bDeMJP74ujQHaLH?rs=1&pid=ImgDetMain"
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
      "https://shoplineimg.com/5b6fb9f833e33c0017ffc639/6604c2d82927ab002359eb4c/800x.webp?source_format=jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZspphWeVUFQMdDvZRJ_TTMRdWD67sIJSyAA&s"
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
      "https://assets.christiandior.com/is/image/diorprod/M0456CTZQM928_E01?$default_GHC$&crop=273,247,1295,1724&wid=1850&hei=2000&scale=0.875&bfc=on&qlt=85",
      "https://assets.christiandior.com/is/image/diorprod/M0455CBAAM42R_E01?$default_GHC$&crop=379,108,1274,1846&bfc=on&qlt=85",
      "https://i0.wp.com/blog.fashionphile.com/wp-content/uploads/2023/07/Christian-Dior-Saddle-Bag-Sizes.jpg?fit=2400%2C1350&ssl=1"
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
      "https://cdn-images.farfetch-contents.com/19/91/19/75/19911975_44707818_600.jpg",
      "https://cdn.clothbase.com/uploads/f3c231e9-bd23-43f8-bc46-931ec06ba183/P00887577_b1.jpg",
      "https://cdn-images.farfetch-contents.com/17/18/63/57/17186357_44114327_600.jpg"
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
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1659600047/446744_DTDIT_1000_001_055_0000_Light.jpg",
      "https://img.vitkac.com/uploads/product_thumb/TORBA%20443497%20DTDIT-5729/up/2.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1728492310/446744_AAER0_1523_001_055_0008_Light.jpg"
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
      "https://corsocomo88.com/cdn/shop/files/Loewe_Puzzle-Bag_classis-calfskin_tan.jpg?v=1735281157&width=1946",
      "https://www.mytheresa.com/media/1094/1238/100/23/P00880522.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/best-loewe-bag-dupes-64ccd04cecd29.jpg?crop=0.668xw:1.00xh;0.163xw,0&resize=640:*"
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
      "https://cdn-images.farfetch-contents.com/19/66/19/46/19661946_43929832_1000.jpg",
      "https://hrd-live.cdn.scayle.cloud/images/5e9de8e4b9a4368425fb0c8089ad7f8a.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
      "https://storage.googleapis.com/hypeclothinga-media/__sized__/products/Prada_Re-Edition_2005_Saffiano_Leather_Bag_Fiery_Red_in_Saffiano_Leather_with_Gold-tone.001-thumbnail-1080x1080-70.jpeg"
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
      "https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_1350,q_auto:best,w_900/29o3rsbojw0ambph5cli8kesjti3",
      "https://cdn.endource.com/image/d33a7d3bccd98fa2b1ac9f013dd8e8ac/detail/self-portrait-crystal-embellished-corded-guipure-lace-midi-dress.jpg?optimizer=image&class=800",
      "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/b2f12ac6902b5d4648a46c8a062e3e8f.jpg"
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
      "https://cocowellington.co.nz/cdn/shop/files/zimmermann_other_0_silk_wrap_mini_dress_in_burgundy_1080x.jpg?v=1724891673",
      "https://cocowellington.co.nz/cdn/shop/files/CopyofUntitledDesign_12.png?v=1724892146",
      "https://cdn.endource.com/image/6aea1bc4e370397d99bc71b32ce72a31/detail/zimmermann-ruffled-silk-satin-mini-wrap-dress.jpg?optimizer=image&class=800"
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
      "https://www.net-a-porter.com/variants/images/1647597325642218/ou/w2000_a3-4_q60.jpg",
      "https://images.squarespace-cdn.com/content/v1/580cf7ce6b8f5b3576a3da9f/1729556388197-KV4XK6CNW4GJ7V2504IO/IMG_0939.jpeg",
      "https://cdn-images.farfetch-contents.com/27/15/65/74/27156574_57098692_600.jpg"
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
      "https://i5.walmartimages.com/seo/Ray-Ban-Unisex-RB3447-Round-Metal-Sunglasses-50mm_4f401902-a00f-465c-8e97-455ccccf690c_1.21dea93da531ceb0de5a3fb94b7cf854.jpeg",
      "https://img01.ztat.net/article/spp-media-p1/92c440e373214397be2ca98ac9206191/e39eda9a58b149769c408b69c5a58a1a.jpg?imwidth=1800",
      "https://images2.ray-ban.com//cdn-record-files-pi/16e2a4a0-468e-41af-9297-ad3d00354d9e/ca039c40-e9c3-423f-a10f-ad3d00354ecb/0RB3447__9229B1__STD__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2"
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
      "https://cdn1.visiofactory.com/106573/celine-cl40235u-30n-54-18-gold.jpg",
      "https://www.mytheresa.com/media/1094/1238/100/ee/P00923678.jpg",
      "https://www.mytheresa.com/media/1094/1238/100/f9/P00832219_d2.jpg"
    ],
    descripcion: "Lentes de sol oversize con logo Triomphe en las patillas. Estilo sofisticado.",
    rating: 5,
    descuento: true
  }
]

export default products