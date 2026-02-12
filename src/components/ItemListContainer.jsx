import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../mock/asyncMock"
import { useParams } from "react-router-dom"

const ItemListContainer = ({mensaje}) => {
    const [data, setData] = useState([])
    const { category } = useParams()
    console.log('ItemListContainer')

    // Función para generar el mensaje dinámico
    const getMensaje = () => {
        if (category === 'pizzas') {
            return 'Nuestras Pizzas'
        } else if (category === 'bebidas') {
            return 'Nuestras Bebidas'
        } else {
            return mensaje // Mensaje por defecto para la página principal
        }
    }

    useEffect(()=> {
        getProducts()
        .then((res) => {
            if(category) {
                const filteredProducts = res.filter(prod => prod.category === category)
                setData(filteredProducts)
            } else {
                setData(res)
            }
        })
        .catch((error)=> console.error(error));
    },[category])

    return(
        <div>
            <h1>{getMensaje()}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer