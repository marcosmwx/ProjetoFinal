import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "remixicon/fonts/remixicon.css";
import styles from "./Header.module.css"
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

// MENU PAGINA ADMINISTRADOR //
function HeaderAdmin() {
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
            </Nav>
            <Nav>
            <Nav.Link href="/" className={styles.btn_sairAdmin}>Sair <LogoutSharpIcon/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default HeaderAdmin;
