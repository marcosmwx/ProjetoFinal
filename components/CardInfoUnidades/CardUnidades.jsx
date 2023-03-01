import React from "react";
import style from "../../styles/CadUnidade.module.css";
import FormDialog from "../UnidadesDialog/DialogUnidades";
import { Button } from '@mui/material';

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickCard = () => {
    setOpen(true);
  };


  return (

    <div>

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
        className={style.table_row}

      >
        <div className={style.table_id}>{props.id}</div>
        <div className={style.table_name}>{props.nome}</div>
        <div className={style.table_email}>{props.email}</div>
        <div className={style.table_tel}>{props.telefone}</div>
        <div className={style.table_cep}>{props.cep}</div>
        <div className={style.table_rua}>{props.rua}</div>
        <div className={style.table_bairro}>{props.bairro}</div>
        <div className={style.table_cidade}>{props.cidade}</div>
        <div className={style.table_descricao}>{props.descricao}</div>
        <div>
          <Button className={style.btnAdmin} onClick={() => {
            handleClickCard();
          }}>Editar</Button>
        </div>

      </div>
      </div>
      );
}  
