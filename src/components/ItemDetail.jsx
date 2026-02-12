import React from "react";
import ItemCount from "./ItemCount";

 const ItemDetail=({detail}) => {
    return(
        <div className="container text-center my-5">
            <h1 className="mb-4">Pizza {detail.name}</h1>
            <img 
                src={detail.img} 
                alt={detail.name}
                className="img-fluid mb-4"
                style={{
                    maxWidth: '300px',
                    height: 'auto',
                    borderRadius: '10px'
                }}
            />
            <p className="mb-3">{detail.description}</p>
            <h3 className="text-success mb-3">${detail.price}</h3>
            <p className="mb-4">Stock disponible: {detail.stock} unidades</p>
            <ItemCount stock={detail.stock}/>
        </div>
    )
 }

 export default ItemDetail