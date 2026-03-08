import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";
import { Badge } from "react-bootstrap";
const CardWidget = () => {
    const {cartQuantity, cart, total} = useContext(CartContext)
        return (
            <div className="position-relative d-inline-block">
                <FaCartShopping fontSize="1.5rem" className="text-dark" />
                {cartQuantity() > 0 && (
                    <Badge bg="dark" pill className="position-absolute top-0 start-100 translate-middle">
                        {cartQuantity()}
                    </Badge>
                )}
            </div>
        );
}

export default CardWidget