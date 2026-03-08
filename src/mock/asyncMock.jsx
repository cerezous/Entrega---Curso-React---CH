/**
 * Datos de productos para eventual seed en Firestore.
 * No se importa en la app; la data viene de Firebase.
 */
export const productos = [
    {
        id: '03',
        name: 'Todas las carnes',
        description: "Para los más hambrientos: jamón, pepperoni, carne molida y bacon sobre base de salsa y mozzarella. Todo en una.",
        stock: 25,
        price: 14990,
        category: 'pizzas',
        img: 'https://i.postimg.cc/T38rkjLV/todaslascarnes.png'
    },
    {
        id: '04',
        name: 'Coca Cola 1.5 lt',
        description: "Coca Cola 1,5 litros. Bebida gaseosa clásica, ideal para acompañar tu pizza.",
        stock: 30,
        price: 3200,
        category: 'bebidas',
        img: 'https://i.postimg.cc/G2bKXFNR/cocacola15.png'
    },
    {
        id: '05',
        name: 'Fanta 1.5 lt',
        description: "Fanta 1,5 litros. Refresco sabor naranja, sin cafeína. Perfecta para chicos y grandes.",
        stock: 30,
        price: 3200,
        category: 'bebidas',
        img: 'https://i.postimg.cc/1tMH2ght/fanta15.png'
    },
    {
        id: '06',
        name: 'Sprite 1.5 lt',
        description: "Sprite 1,5 litros. Gaseosa con sabor a lima y limón, liviana y refrescante.",
        stock: 30,
        price: 3200,
        category: 'bebidas',
        img: 'https://i.postimg.cc/3R9BVy5k/sprite15.png'
    }
]
