import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "remixicon/fonts/remixicon.css";
import styles from "./Header.module.css"
import BtnLogin from "../LoginButton/loginbutton";

function Header() {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className={styles.navbar}>
        <Container fluid>
          <Navbar.Brand href="/" className={`${styles.logo} logo`}>
            {" "}
            <h2>
              <i className="ri-building-3-fill"></i> CCW
            </h2>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`${styles["nav-list"]} me-auto`}>
            <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/Unidades">Unidades</Nav.Link>
              <Nav.Link href="/Contato">Contatos</Nav.Link>
              <Nav.Link href="/Parceiro">Seja um Parceiro</Nav.Link>
            </Nav>
            <Nav>
              <BtnLogin/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
