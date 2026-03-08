import React, { useContext } from "react";
import EmptyCart from "./EmptyCart";
import CartView from "./CartView";
import { CartContext } from "../context/CartContext";

const CartContainer = () => {
    const {cart} = useContext(CartContext)
    return(
        <>
        {
            cart.length
            ? <CartView/>
            : <EmptyCart/>
        }
        </>
    )
}
export default CartContainer