import React from "react";

import FormDialog from "../UnidadesDialog/DialogUnidades";
export default function Card(props) {
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
        nome={props.nome}
        capacidade={props.capacidade}
        cep={props.cep}
        rua={props.rua}
        bairro={props.bairro}
        cidade={props.cidade}
        descricao={props.descricao}
        telefone={props.telefone}
        email={props.email}
      />
      
      <div
        className="card--container"
        onClick={() => {
          handleClickCard();
        }}
      >
        <h2 className="card--nome">{`${props.nome}`}</h2>
        <p className="card--email">{`Email: ${props.email}`}</p>
        <p className="card-telefone">{`Telefone: ${props.telefone}`}</p>
        <p className="card-telefone">{`Telefone: ${props.cep}`}</p>
        <p className="card-telefone">{`Telefone: ${props.rua}`}</p>
        <p className="card-telefone">{`Telefone: ${props.bairro}`}</p>
        <p className="card-telefone">{`Telefone: ${props.cidade}`}</p>
        <p className="card-descicao">{`Descrição: ${props.descricao}`}</p>
      </div>
    </>
  );
}
