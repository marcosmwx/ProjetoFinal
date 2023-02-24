import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css"
import "remixicon/fonts/remixicon.css";

function Footer() {
  return (
    <div className={styles.main_footer}>
      <Container>
        <Row>
          <Col>
            <div className="logo">
              <h2>
                <i class="ri-building-3-fill"></i> CCW
              </h2>
            </div>

            <p>
              O site oferece espaços de trabalho <br />
              compartilhados e acesso <br />a recursos tecnológicos
            </p>
          </Col>

          <Col>
            <div className="ctt-footer">
              <ul className={styles.list_footer}>
                <h3>Institucional</h3>
                <hr />
                <li>Termos de Serviços</li>
                <li>Documentação</li>
                <li>Fale Conosco</li>
              </ul>
            </div>
          </Col>

          <Col>
            <div className={styles.ctt_footer}>
              <ul className={styles.list_footer}>
                <h3>Contato</h3>
                <hr />
                <li>(21)0000-000</li>
                <li>Rio de Janeiro, Brasil</li>
                <li>ccw@xxxx.com</li>
              </ul>
            </div>
          </Col>

          <Col>
            <div className="noticias-footer">
              <h4> Se inscreva para receber noticias</h4>
              <form action="#" className={styles.form}>
                <input type="email" placeholder="Digite seu e-mail" required />
                <button type="submit">
                  {" "}
                  <i className="ri-arrow-right-line"></i>
                </button>
              </form>
              <div className={styles.social_icons}>
                <i class="ri-facebook-circle-fill"></i>
                <i class="ri-github-fill"></i>
                <i class="ri-linkedin-box-fill"></i>
                <i class="ri-instagram-fill"></i>
              </div>
            </div>
          </Col>
        </Row>

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

export default Footer;
