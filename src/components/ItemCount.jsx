import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

const sumar = () => {
    if(count < stock){

        setCount(count + 1)
    }
}
const restar = () => {
    if (count > 1) {
        setCount(count - 1);
    }
}
    return (
        <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 mt-3">
            <button
                onClick={restar}
                className="btn btn-outline-secondary rounded-pill btn-sm px-3"
                disabled={count <= 1}
            >
                −
            </button>
            <span className="fw-bold fs-5 min-width-3rem text-center">{count}</span>
            <button
                onClick={sumar}
                className="btn btn-outline-secondary rounded-pill btn-sm px-3"
                disabled={count >= stock}
            >
                +
            </button>
            <button
                className="btn btn-dark rounded-pill px-4 ms-2"
                onClick={() => onAdd(count)}
                disabled={stock === 0}
            >
                Comprar
            </button>
        </div>
    )
}

export default ItemCount