import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="min-vh-100 d-flex align-items-center justify-content-center p-4 bg-light">
            <div className="text-center">
                <FaExclamationTriangle className="text-danger mb-3" style={{ fontSize: "4rem" }} />
                <h1 className="h3 fw-bold text-dark mb-2">¡Oops! Página no encontrada</h1>
                <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: "400px" }}>
                    La página que buscas no existe o fue movida.
                </p>
                <Link to="/" className="btn btn-dark rounded-pill px-4">
                    Volver al inicio
                </Link>
            </div>
        </section>
    );
};

export default Error;
