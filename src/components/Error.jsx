import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

 const Error=() => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f8f9fa'
        }}>
            <FaExclamationTriangle 
                style={{
                    fontSize: '4rem',
                    color: '#dc3545',
                    marginBottom: '20px'
                }}
            />
            <h1 style={{
                color: '#343a40',
                marginBottom: '15px',
                fontSize: '2rem',
                fontWeight: 'bold'
            }}>
                ¡Oops! Página no encontrada
            </h1>
            <p style={{
                color: '#6c757d',
                fontSize: '1.1rem',
                marginBottom: '30px',
                maxWidth: '500px'
            }}>
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <Link 
            to='/'
            style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                }} >Volver a Home</Link>
        </div>
    )
 }

 export default Error