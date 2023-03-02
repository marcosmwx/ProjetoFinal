import Button from 'react-bootstrap/Button';
import React from "react";
import styles from "../../styles/Profile.module.css"
import FormDialog from "../ProfileDialog/DialogProfile";

export default function CardProfile(props) {
  // Função para definir status de abertura do card e condiçao state do card como false para inicar o menu fechado
  const [open, setOpen] = React.useState(false);
  const handleClickCard = () => {
    setOpen(true);
  };

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        id={props.id}
        users_id={props.users_id}
        nome={props.nome}
        sobrenome={props.sobrenome}
        email={props.email}
        password={props.password}
        cpf={props.cpf}
        telefone={props.telefone}
        cep={props.cep}
        rua={props.rua}
        bairro={props.bairro}
        cidade={props.cidade}
        complemento={props.complemento}
      />

      <div
        className={styles.card_container}
       
      >
        <h2 className={styles.card_titulo}>Dados Pessoais</h2>
      
        <p className={styles.card_atributos}><strong>Nome: </strong>{`${props.nome} ${props.sobrenome}`}</p>
        <p className={styles.card_atributos}><strong>CPF:</strong>{` ${props.cpf}`}</p>
        <p className={styles.card_atributos}><strong>Telefone:</strong>{` ${props.telefone}`}</p>
        <p className={styles.card_atributos}><strong>cep: </strong>{`${props.cep}`}</p>
        <p className={styles.card_atributos}><strong>Endereço:</strong>{` ${props.rua}, ${props.bairro} ,${props.cidade},  ${props.complemento}`}</p>{" "}
      
        <Button className={styles.buttonEd} onClick={() => {
          handleClickCard();
        }}>Editar</Button>
      </div>
      <div>
      <ul className={styles.background}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
   
    </>
  );
}
