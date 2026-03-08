import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { sileo } from "sileo";
import { confirmQuitarProducto } from "./ConfirmQuitarProducto";

const CartView = () => {
    const { cart, clear, removeItem, total } = useContext(CartContext);

    const handleQuitar = async (id, productName) => {
        const confirmar = await confirmQuitarProducto({
            message: "¿Quitar este producto del carrito?",
            productName
        });
        if (confirmar) {
            removeItem(id);
            sileo.error({
                title: "Producto quitado",
                description: `${productName} se eliminó del carrito`,
                position: "top-right"
            });
        }
    };

    return (
        <section className="py-4 py-md-5 px-3">
            <div className="container">
                <h1 className="display-6 fw-bold text-dark mb-4">Tu carrito</h1>
                <div className="row g-4 mb-4">
                    {cart.map((compra) => (
                        <div key={compra.id} className="col-12">
                            <div className="card card-modern border-0 bg-white">
                                <div className="card-body p-3 p-md-4">
                                    <div className="row align-items-center g-3">
                                        <div className="col-4 col-md-2">
                                            <img
                                                src={compra.img}
                                                alt={compra.name}
                                                className="rounded-3 img-fluid"
                                                style={{ maxHeight: "100px", objectFit: "contain" }}
                                            />
                                        </div>
                                        <div className="col-8 col-md-6">
                                            <h3 className="h6 fw-bold text-dark mb-1">{compra.name}</h3>
                                            <p className="text-secondary small mb-0">${compra.price} × {compra.quantity}</p>
                                        </div>
                                        <div className="col-6 col-md-2 text-md-center">
                                            <span className="fw-bold text-dark">${(compra.price * compra.quantity).toFixed(2)}</span>
                                        </div>
                                        <div className="col-6 col-md-2 text-end">
                                            <button
                                                className="btn btn-outline-danger btn-sm rounded-pill"
                                                onClick={() => handleQuitar(compra.id, compra.name)}
                                                aria-label="Quitar"
                                            >
                                                Quitar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card card-modern border-0 bg-white p-4 mb-4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <span className="fs-5 fw-bold text-dark">Total a pagar:</span>
                        <span className="fs-4 fw-bold text-dark">${total().toFixed(2)}</span>
                    </div>
                </div>
                <div className="d-flex flex-wrap gap-2 justify-content-between">
                    <button className="btn btn-outline-danger rounded-pill px-4" onClick={clear}>
                        Vaciar carrito
                    </button>
                    <Link to="/checkout" className="btn btn-dark rounded-pill px-4">
                        Terminar compra
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CartView;
