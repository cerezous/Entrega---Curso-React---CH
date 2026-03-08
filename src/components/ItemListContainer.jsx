import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../mock/asyncMock"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { collection, getDocs, query, where, addDoc } from "firebase/firestore"
import { db } from "../service/firebase"
import { productos } from "../mock/asyncMock"

const ItemListContainer = ({mensaje}) => {
    const [data, setData] = useState([])
    const [loading, setLoading]= useState(false)
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
        setLoading(true)
                let prodCollection;
                if (category) {
                    prodCollection = query(
                        collection(db, "productos"),
                        where("category", "==", category)
                    );
                } else {
                    prodCollection = collection(db, "productos");
                }
        getDocs(prodCollection)
        .then((res)=>{
            const list = res.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])

    const subirData = () => {
        const col = collection(db, "productos")
        const sinId = ({ name, description, stock, price, category, img }) => ({
            name, description, stock, price, category, img
        })
        Promise.all(productos.map((prod) => addDoc(col, sinId(prod))))
            .then(() => alert("Productos subidos correctamente. Recargá la página."))
            .catch((err) => console.error("Error al subir:", err))
    }
    return (
        <>
            {loading ? (
                <Loader text={category ? "Cargando categoría..." : "Cargando productos..."} />
            ) : (
                <section className="py-4 py-md-5 px-2">
                    <div className="container">
                        <h1 className="display-6 fw-bold text-center text-dark mb-4 mb-md-5">
                            {getMensaje()}
                        </h1>
                        <ItemList data={data} />
                    </div>
                </section>
            )}
        </>
    )
}

export default ItemListContainer