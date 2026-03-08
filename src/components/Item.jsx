import React from "react";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
    return (
        <div className="card card-modern h-100 d-flex flex-column bg-white">
            <div className="bg-light overflow-hidden" style={{ aspectRatio: "1", minHeight: "200px" }}>
                <img
                    src={prod.img}
                    alt={prod.name}
                    className="w-100 h-100 object-fit-contain p-3"
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className="card-body d-flex flex-column text-center flex-grow-1">
                <h3 className="card-title h5 fw-bold text-dark mb-2">{prod.name}</h3>
                <p className="card-text text-secondary small flex-grow-1 mb-2">
                    {prod.description}
                </p>
                <p className="fw-bold text-dark fs-5 mb-3">${prod.price}</p>
                <Link to={"/item/" + prod.id} className="btn btn-dark rounded-pill align-self-center">
                    Ver más
                </Link>
            </div>
        </div>
    );
};

export default Item;
