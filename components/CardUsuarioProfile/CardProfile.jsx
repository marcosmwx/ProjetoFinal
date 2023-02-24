import React from "react";

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
        className="card--container"
        onClick={() => {
          handleClickCard();
        }}
      >
        <h2 className="card--nome">{`${props.nome} ${props.sobrenome}`}</h2>
        <p className="card--email">{`Email: ${props.email}`}</p>
        <p className="card-cpf">{`CPF: ${props.cpf}`}</p>
        <p className="card-telefone">{`Telefone: ${props.telefone}`}</p>
        <p className="card-cep">{`cep: ${props.cep}`}</p>
        <p className="card-rua">{`Rua: ${props.rua}`}</p>{" "}
        <p className="card-bairro">{`Bairro: ${props.bairro}`}</p>
        <p className="card-cidade">{`Cidade: ${props.cidade}`}</p>
        <p className="card-complemento">{`Bairro: ${props.complemento}`}</p>
      </div>
    </>
  );
}
