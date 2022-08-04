import React from 'react';
import { Link } from 'react-router-dom';


// bootstrap import
import { Container , Nav , Navbar , NavDropdown } from 'react-bootstrap';

function NavBar() {
    return ( 
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">OLLIAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="*"><Nav.Link  href="#home">Home</Nav.Link></Link>
                            <Nav.Link href="#link">Carrito</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <Link to="/category/remeras"><NavDropdown.Item href="#action/3.2">
                                Remeras
                                </NavDropdown.Item></Link>
                                <Link to="/category/pantalones"><NavDropdown.Item href="#action/3.2">
                                Pantalones
                                </NavDropdown.Item></Link>
                                <Link to="/category/camperas"><NavDropdown.Item href="#action/3.2">
                                Camperas
                                </NavDropdown.Item></Link>
                                
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;