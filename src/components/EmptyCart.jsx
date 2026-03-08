import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <section className="min-vh-60 py-5 px-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5">
                        <div className="card card-modern border-0 bg-white text-center p-5">
                            <div className="mb-4 opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="text-secondary" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </div>
                            <h2 className="h4 fw-bold text-dark mb-2">Tu carrito está vacío</h2>
                            <p className="text-secondary mb-4">Te invitamos a ver nuestros productos.</p>
                            <Link to="/" className="btn btn-dark rounded-pill px-4">
                                Ir a comprar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmptyCart;
