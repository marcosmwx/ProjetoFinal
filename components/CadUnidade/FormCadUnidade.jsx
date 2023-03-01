import React from "react";
import style from "../../styles/CadUnidade.module.css";

import { Button } from "@mui/material";
import FormDialogCadastro from "../UnidadesDialog/DialogCadUnidade";

export default function Teste(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickCard = () => {
    setOpen(true);
  };

  return (
    <div className={style.bogyteste}>
      <div className={style.texto_unidadeAdmin}>
        <h1> Cadastro de Unidades</h1>
        <p>━━━━━━━━ ❆ ━━━━━━━━</p>
      </div>
      <FormDialogCadastro open={open} setOpen={setOpen} />
      <div className={style.div_btnAdmin}>
        <Button
          className={style.btnAdmin}
          onClick={() => {
            handleClickCard();
          }}
        >
          Cadastar Novo
        </Button>
      </div>

      <div className={style.table_row2}>
        <div className={style.table_id}>
          <p>Id</p>
        </div>
        <div className={style.table_name}>
          <p>Nome</p>
        </div>
        <div className={style.table_email}>
          <p>Email</p>
        </div>
        <div className={style.table_tel}>
          <p>Telefone</p>
        </div>
        <div className={style.table_cep}>
          <p>Cep</p>
        </div>
        <div className={style.table_rua}>
          <p>Rua</p>
        </div>
        <div className={style.table_bairro}>
          <p>Bairro</p>
        </div>
        <div className={style.table_cidade}>
          <p>Cidade</p>
        </div>
        <div className={style.table_descricao}>
          <p>Descrição</p>
        </div>
        <div className={style.table_cell}> </div>
      </div>
    </div>
  );
}
