import styles from "./Activity.module.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

export default function Activity() {
  return (
    <section className={styles.atividade_section}>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2>A localização certa pode ser crucial para o seu sucesso</h2>
          </Col>

          <Col lg="3">
            <div className={styles.box_atividade}>
              <div className="imgAtividade  mb-4">
                <a href="#agende" target="_blank" rel="noreferrer">
                  <img className={styles.imgcw}
                    src="https://images.adsttc.com/media/images/55e4/d384/e58e/ceb7/f100/0151/newsletter/054.jpg?1441059704"
                    alt="example"
                  />
                </a>
              </div>
              <div className="atividade-detalhes mt-2">
                <a href="#agende" className={styles.alink}>
                  <h6>Programador Full Stack - Palestra</h6>
                </a>

                <div className="icon-atividade d-flex ">
                  <span className="d-flex ">
                    <i class="ri-user-line"></i> 1k
                  </span>
                  <span className="d-flex ">
                    <i class="ri-star-fill"></i>1.7k
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className={styles.box_atividade}>
              <div className="imgAtividade  mb-4">
                <a href="#agende" target="_blank" rel="noreferrer">
                  <img className={styles.imgcw}
                    src="https://oasislab.com.br/wp-content/uploads/2017/08/10-espa%C3%A7os-de-coworking-inusitados-OasisLab.jpg"
                    alt="example"
                  />
                </a>
              </div>
              <div className="atividade-detalhes mt-2">
                <a href="#agende" className={styles.alink}>
                  <h6>Programador Full Stack - Palestra</h6>
                </a>

                <div className="icon-atividade d-flex ">
                  <span className="d-flex ">
                    <i class="ri-user-line"></i> 2k
                  </span>
                  <span className="d-flex ">
                    <i class="ri-star-fill"></i>1.9k
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className={styles.box_atividade}>
              <div className="imgAtividade  mb-4">
                <a href="#agende" target="_blank" rel="noreferrer">
                  <img className={styles.imgcw}
                    src="https://infrafm.dditanio.com/arquivos/coworking_infrafm_5SVWGU.jpg"
                    alt="example"
                  />
                </a>
              </div>
              <div className="atividade-detalhes mt-2">
                <a href="#agende" className={styles.alink}>
                  <h6>Programador Full Stack - Palestra</h6>
                </a>

                <div className="icon-atividade d-flex ">
                  <span className="d-flex ">
                    <i class="ri-user-line"></i> 1k
                  </span>
                  <span className="d-flex ">
                    <i class="ri-star-fill"></i>1.7k
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className={styles.box_atividade}>
              <div className="imgAtividade  mb-4">
                <a href="#agende" target="_blank" rel="noreferrer">
                  <img className={styles.imgcw}
                    src="https://escala.app/wp-content/uploads/2022/11/espaco-de-trabalho-1-1.png"
                    alt="example"
                  />
                </a>
              </div>
              <div className="atividade-detalhes mt-2">
                <a href="#agende" className={styles.alink}>
                  <h6>Programador Full Stack - Palestra</h6>
                </a>

                <div className="icon-atividade d-flex ">
                  <span className="d-flex ">
                    <i class="ri-user-line"></i> 1k
                  </span>
                  <span className="d-flex ">
                    <i class="ri-star-fill"></i>1.7k
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
