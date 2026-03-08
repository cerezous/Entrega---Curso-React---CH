import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ text }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center py-5" style={{ minHeight: "40vh" }}>
            <Spinner animation="grow" variant="dark" className="mb-3" />
            {text && <p className="text-secondary mb-0 small text-uppercase tracking-wide">{text}</p>}
        </div>
    )
}

export default Loader