import React from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ signOutHandle }) {
  return (
    <Navbar
      style={{ backgroundColor: "#E0144C", padding: "15px 0" }}
      expand="lg"
      sticky="top"
    >
      <Container fluid className="contain">
        <Navbar.Brand
          href="#"
          style={{ color: "#EDEDED", fontWeight: "700", fontSize: "1.8rem" }}
        >
          <div className="navbar__icon_name">
            <h3>Messages</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            style={{ textAlign: "center", fontSize: "1rem" }}
          >
            <Nav.Link href="/home" className="nav__item">
              Home
            </Nav.Link>
            <Nav.Link href="/documentation" className="nav__item">
              Documentation
            </Nav.Link>
            <Nav.Link href="#" className="nav__item">
              <button className="signOut_button" onClick={signOutHandle}>
                Log Out
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
