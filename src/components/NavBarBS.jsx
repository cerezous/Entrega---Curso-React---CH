import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoCerezosPizza from '../assets/img/logo-cerezos-pizza.png'
import CardWidget from './CardWidget'
import { NavLink } from 'react-router-dom';

function NavBarBS() {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-2">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img src={logoCerezosPizza} alt="Cerezos Pizza" className="logo" width="36" height="36" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-1">
            <Nav.Link as={NavLink} to="/" className="rounded-pill px-3">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/category/pizzas" className="rounded-pill px-3">Pizzas</Nav.Link>
            <Nav.Link as={NavLink} to="/category/bebidas" className="rounded-pill px-3">Bebidas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown" className="rounded-pill">
              <NavDropdown.Item as={NavLink} to="/">Todos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/pizzas">Pizzas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/bebidas">Bebidas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link as={NavLink} to="/cart" className="text-dark p-2 rounded-pill d-inline-flex align-items-center">
            <CardWidget />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBS;