import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { sileo } from "sileo";

const ItemDetail = ({ detail }) => {
  const { addItem } = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
    setPurchase(true);
    sileo.success({
      title: "Agregado al carrito",
      description: `${detail.name} × ${cantidad}`,
      position: "top-right"
    });
  };

  return (
    <div className="row g-0 bg-white rounded-4 shadow-sm overflow-hidden border">
      <div className="col-12 col-md-5 col-lg-4 bg-light d-flex align-items-center justify-content-center p-4 p-md-5">
        <img
          src={detail.img}
          alt={detail.name}
          className="img-fluid rounded-3"
          style={{ maxHeight: "320px", objectFit: "contain" }}
        />
      </div>
      <div className="col-12 col-md-7 col-lg-8 p-4 p-md-5 d-flex flex-column justify-content-center">
        <h1 className="display-6 fw-bold text-dark mb-2">Pizza {detail.name}</h1>
        <p className="text-secondary mb-3 mb-md-4 lh-lg">{detail.description}</p>
        <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
          <span className="fs-3 fw-bold text-dark">${detail.price}</span>
          <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2">
            Stock: {detail.stock} unidades
          </span>
        </div>
        <div className="mt-auto pt-2">
          {purchase ? (
            <Link to="/cart" className="btn btn-dark btn-lg rounded-pill px-4">
              Ir al carrito
            </Link>
          ) : detail.stock === 0 ? (
            <p className="text-danger fw-semibold mb-0">Producto sin stock</p>
          ) : (
            <ItemCount stock={detail.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;