import React, { useEffect, useState } from "react";
import { getOneProducts } from "../mock/asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

 const ItemDetailContainer=() => {
   const[detail, setDetail] = useState({})
     const {id}= useParams() 
    
    useEffect(() => {
        getOneProducts(id)
        .then((res)=> setDetail(res))
        .catch((err)=> console.log(err))
    }, [id])


    return(
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
 }

 export default ItemDetailContainer