import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Header = () => {
    return (
        <Navbar expand="lg" className="bg-nash-red" variant="dark">
            <Container>
                <Navbar.Brand href="#">Home</Navbar.Brand>
                <Nav className="justify-content-end">
                    <NavDropdown title="User">
                        <NavDropdown.Item href="#logout">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
