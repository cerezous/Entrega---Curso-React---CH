export const productos = [
/*    {
        id: '01',
        name: 'Napolitana',
        description: "Pizza clásica con salsa de tomate, mozzarella y rodajas de tomate fresco. Orégano y aceite de oliva. La favorita de la casa.",
        stock: 20,
        price: 12990,
        category: 'pizzas',
        img: 'https://i.postimg.cc/7YJ3Mt6J/napolitana.png'
    },

    {
        id: '02',
        name: 'Pepperoni',
        description: "Salsa de tomate, mozzarella y abundante pepperoni. Picante y sabrosa, ideal para los amantes del fiambre.",
        stock: 15,
        price: 11990,
        category: 'pizzas',
        img: 'https://i.postimg.cc/rFR1CZmD/pepperoni.png'
    },
*/
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
    },

]

let error = false

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intenta más tarde')

            }else{
                resolve(productos)
            }
        },300)
    })
}

export const getOneProducts = (id) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intenta más tarde')

            }else{
                let product = productos.find((prod) => prod.id === id)
                resolve(product)
            }
        },300)
    })
}