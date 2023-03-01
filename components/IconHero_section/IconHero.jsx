
import React from "react";
import styles from './iconHero.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wavey from "../wave/Wavey";


function IconHero() {
  return (
    <Container fluid>
    <section >
      <Row>
      <Wavey/>
    
      </Row>
    
    </section>
    </Container>
    
  );
}

export default IconHero;
