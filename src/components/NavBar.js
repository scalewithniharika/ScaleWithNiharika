import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './NavBar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../assets/logo.png';


function NavBar() {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="px-5 py-2 shadow-sm sticky-top">
      <Container fluid>
      <Navbar.Brand href="#">
        <img
          src={Logo}
          alt="Niharika Logo"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 nav-links">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>           
            <Nav.Link href="#contact" className="btn btn-purple-rounded px-4 py-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
