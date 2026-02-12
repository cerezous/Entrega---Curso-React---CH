import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoCerezosPizza from '../assets/img/logo-cerezos-pizza.png'
import CardWidget from './CardWidget'
import { NavLink } from 'react-router-dom';

function NavBarBS() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
            <img src={logoCerezosPizza} alt='logo-cerezos-pizza' className='logo' width="30"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to='/category/pizzas' className="fs-6">Pizzas</Nav.Link>
            <Nav.Link as={NavLink} to='/category/bebidas' className="fs-6">Bebidas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown" className="fs-6">
              <NavDropdown.Item as={NavLink} to='/'>Productos</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/pizzas'>Pizzas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/bebidas'>Bebidas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CardWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBS;