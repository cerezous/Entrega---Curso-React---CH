import React from "react";
import {Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Item = ({prod}) => {
    console.log(prod)
    return(
        <div className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                    variant="top" 
                    src={prod.img} 
                    style={{
                        height: '200px',
                        objectFit: 'cover',
                        padding: '10px'
                    }}
                />
                <Card.Body className="text-center">
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>
                        {prod.description}
                        <br/>
                        <strong className="text-success">${prod.price}</strong>
                    </Card.Text>
                    <Link to={'/item/'+prod.id} className="btn btn-dark btn-sm">Ver más</Link>
                </Card.Body>
            </Card>
        </div>
  );
}

export default Item
