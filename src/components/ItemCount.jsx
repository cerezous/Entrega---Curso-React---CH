import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
const [count, setCount] = useState(1)
console.log('ItemCount')

const sumar = () => {
    if(count < stock){

        setCount(count + 1)
    }
}
const restar = () => {
    if(count > 0){
        setCount(count -1)
    }
}
    return(
        <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
            <button 
                onClick={restar}
                className="btn btn-outline-danger btn-sm"
                disabled={count <= 0}
            >
                -
            </button>
            <span className="fw-bold fs-5 mx-3">{count}</span>
            <button 
                onClick={sumar}
                className="btn btn-outline-success btn-sm"
                disabled={count >= stock}
            >
                +
            </button>
        </div>
    )
}

export default ItemCount