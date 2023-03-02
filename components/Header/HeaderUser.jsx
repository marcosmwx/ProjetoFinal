
import Container from 'react-bootstrap/Container';
import styles  from '../Header/Header.module.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "remixicon/fonts/remixicon.css";

function HeaderUser() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar className={styles.navbar2} key={expand}  expand={expand}  >
          <Container fluid>
          <Navbar.Brand href="/" className={`${styles.logo} logo`}>
          {" "}
          <h2>
            <i className="ri-building-3-fill"></i> CCW
          </h2>
        </Navbar.Brand>

            <Navbar.Toggle className={styles.toggleu}  aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  CCW
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/HomeUser">Home</Nav.Link>
                  <Nav.Link href="/UserData">Dados Pessoais</Nav.Link>
                  <Nav.Link href="/profile">Check-in</Nav.Link>
                 
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default HeaderUser;