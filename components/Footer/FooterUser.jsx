import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css"
import "remixicon/fonts/remixicon.css";

function FooterUser() {
  return (
    <div className={styles.user_footer}>
    
      <Container>
  
        <hr />
        <Row>
          <div className={styles.p_footer}>
            <p>CCW &copy; Programadores Cariocas</p>
          </div>
        </Row>
      </Container>
     
      
    </div>
  );
}

export default FooterUser;
