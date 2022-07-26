import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return ( 
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">OLLIAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Carrito</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                Pantalones
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Buzos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;