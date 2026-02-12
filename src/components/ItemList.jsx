import React from "react";
import Item from './Item'

const ItemList = ({data}) => {
    return(
        <div className="container">
            <div className="row justify-content-center">
                {data.map((prod)=> (
                    <div key={prod.id} className="col-lg-4 col-md-6 col-sm-12">
                        <Item prod={prod}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList