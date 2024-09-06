import logo from "../../imgs/Lemon shrimp.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbars.css"
import { Link } from "react-router-dom";

function Navbars(){
        return(
        <>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/">Home</Link>
                <Link to="about">About us</Link>
                <Link to="menu">Menu</Link>
                <Link to="contact">Contact us</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
        );
}

export default Navbars;