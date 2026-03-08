import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [cargando, setCargando] = useState(true);
  const [invalid, setInvalid] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({ id: res.id, ...res.data() });
          setInvalid(false);
        } else {
          setInvalid(true);
        }
      })
      .catch(() => setInvalid(true))
      .finally(() => setCargando(false));
  }, [id]);

  if (invalid) {
    return (
      <section className="min-vh-60 py-5 px-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="text-center p-5 rounded-4 shadow-sm bg-light border-0">
                <div className="mb-4 opacity-75">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="text-secondary" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                  </svg>
                </div>
                <h2 className="h4 fw-semibold text-dark mb-2">Producto no encontrado</h2>
                <p className="text-secondary mb-4">El producto que buscas no existe o ya no está disponible.</p>
                <Link to="/" className="btn btn-dark btn-lg rounded-pill px-4">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4 py-md-5 px-2">
      <div className="container container-lg">
        {cargando ? (
          <Loader text="Cargando detalle..." />
        ) : (
          <ItemDetail detail={detail} />
        )}
      </div>
    </section>
  );
};

export default ItemDetailContainer;