import { Container, Row, Col } from "react-bootstrap";
import styles from "./HeroSection.module.css";
import React from "react";
import MyButton from "../Button/Button";

function HeroSection() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={styles.hero__content}>
              <h2 className={styles.heading}>
                Connect <br />
                Co.Working
              </h2>
              <div>
                <p className={styles.paragraph}>
                  O site oferece espaços de trabalho compartilhados, acesso a
                  recursos tecnológicos uma seção de recursos que inclui
                  tutoriais, dicas de estudo e uma rede de apoio. <br />
                  Além disso, a empresa organiza eventos regulares para ajudar
                  os estudantes a desenvolver habilidades valiosas. <br />
                  Hoje, ajudamos estudantes a alcançarem seus objetivos
                  acadêmicos e profissionais.
                </p>
              </div>
              <a href="/cadastro" style={{ textDecoration: "none" }}>
                <MyButton text="Cadastre-se" />
              </a>
            </div>
          </Col>

          <Col lg="6" md="6" className={styles.foto}>
            {/* conteúdo da coluna aqui */}
          </Col>

          
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
