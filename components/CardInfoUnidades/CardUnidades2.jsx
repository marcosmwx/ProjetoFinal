import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import styles from "../../styles/Unidades.module.css";
import Col from 'react-bootstrap/Col';

export default function Card1(props) {


    return (

        <Col xs lg="4">
            <Card style={{ width: '23rem' }} className={styles.undCards}>
                <Card.Body>
                    <Card.Title>{props.nome}</Card.Title>
                    <Card.Text>
                        <p><strong>Capacidade:</strong> {props.capacidade}</p>
                        <p><strong>Email:</strong> {props.email}</p>
                        <p><strong>Telefone:</strong> {props.telefone}</p>
                        <p><strong>Endereço:</strong> R.{props.rua}, {props.bairro}, {props.cidade} / {props.cep}</p>
                        <p><strong>Descrição:</strong> {props.descricao}</p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>

    );
}  
