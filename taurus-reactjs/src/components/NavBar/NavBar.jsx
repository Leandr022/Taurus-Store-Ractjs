import { CarWidget } from "../CartWidget/CarWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";


const category = [
    {id: 'asdasdasd' , name: 'Abrigos' , path: 'abrigos' , description: 'Esto es una categoria'},
    {id: 'asdasdasdf' , name: 'Camisetas' , path: 'camisetas' , description: 'Esto es una categoria'},
    {id: 'asdasdasdg' , name: 'Pantalones' , path: 'pantalones' , description: 'Esto es una categoria'}
]

export const NavBar = () => {
    return (
    <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-dark" >
        <Container>
            <Navbar.Brand href="#home"> Taurus-Store </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavLink className={( { isActive } ) => isActive ? 'btn btn-dark' : 'btn' } to='/'> Inicio </NavLink>
                {category.map(category => <NavLink key={category.id} className={( { isActive } ) => isActive ? 'btn btn-dark' : 'btn' } to={`/category/${category.path}`} >{category.name}</NavLink> )}
                
            </Nav>
            <Nav>
                <Link className="btn" to='/cart'>
                <CarWidget/>
                </Link>

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    )
}