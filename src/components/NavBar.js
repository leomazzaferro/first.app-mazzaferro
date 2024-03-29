// COMPONENTS
import CartWidget from "./CartWidget";
// DEPENDENCYS
import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/*" href="#home">
            OLLIAN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/*">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" href="#link">
                Carrito
              </Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/remeras" href="#action/3.2">
                  Remeras
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/pantalones" href="#action/3.2">
                  Pantalones
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/abrigos" href="#action/3.2">
                  Abrigos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
