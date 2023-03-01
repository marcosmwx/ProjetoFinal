import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Unidades.module.css";
import Card1 from "../components/CardInfoUnidades/CardUnidades2";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Unidades() {
  const [listSubject, setListSubject] = useState();

  useEffect(() => {
    axios.get("http://localhost:8005/api/unidades").then((response) => {
      setListSubject(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Coworking Unidades</h1>
        </main>

        <Container>
          <Row>
            {typeof listSubject !== "undefined" &&
              listSubject.map((value) => {
                return (
                  <Card1
                    key={value.id}
                    id={value.id}
                    listCard={listSubject}
                    setListCard={setListSubject}
                    nome={value.nome}
                    capacidade={value.capacidade}
                    cep={value.cep}
                    rua={value.rua}
                    bairro={value.bairro}
                    cidade={value.cidade}
                    descricao={value.descricao}
                    telefone={value.telefone}
                    email={value.email}
                  />
                );
              })}
          </Row>
        </Container>
      </div>
      <div className={styles.rodape}>
        <Footer />
      </div>
    </div>
  );
}
