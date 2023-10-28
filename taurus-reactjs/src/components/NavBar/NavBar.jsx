import { CarWidget } from "../CartWidget/CarWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
    return (
    <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-dark" >
        <Container>
            <Navbar.Brand href="#home">Taurus-Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features">Equipos</Nav.Link>
                <Nav.Link href="#pricing">Equipos Nuevos</Nav.Link>
                <NavDropdown title="Seminuevos" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Bat +90%</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Bateria +85%
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bateria -85%</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">Accesorios</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <CarWidget />
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    )
}

