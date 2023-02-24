import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import axios from "axios";

export default function FormDialog(props) {
  // State que define valores do input para edição de valores
  const [editValues, setEditValues] = useState({
    id: props.id,
    capacidade: props.capacidade,
    cep: props.cep,
    rua: props.rua,
    bairro: props.bairro,
    cidade: props.cidade,
    descricao: props.descricao,
    telefone: props.telefone,
    email: props.email,
  });

  // Axios para enviar os valores alterados no input de edição
  const handleChangeCard = () => {
    axios.put("http://localhost:8005/edit/unidades", {
      id: editValues.id,
      nome: editValues.nome,
      capacidade: editValues.capacidade,
      cep: editValues.cep,
      rua: editValues.rua,
      bairro: editValues.bairro,
      cidade: editValues.cidade,
      descricao: editValues.descricao,
      telefone: editValues.telefone,
      email: editValues.email,
    });
    // funções para fechar e atualziar a pagina após click no botão save que chama a função
    handleClose();
    document.location.reload();
  };

  // Função para definir true quando clicar nos card, quando true abre opções de definição
  const handleClickOpen = () => {
    props.setOpen(true);
  };

  // Função para fechar o card
  const handleClose = () => {
    props.setOpen(false);
  };

  // Função para segurar os valores definidos nos inputs de edição
  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  //Funcao para Deletar / Excluir um card ao clicar no botao Excluir
  const handleDeleteSubject = () => {
    axios.delete(`http://localhost:8005/delete/${editValues.id}`);
    handleClose();
    document.location.reload();
  };
  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Editar</DialogTitle>
      <DialogContent>
      
        <TextField
          autoComplete="given-name"
          name="nome"
          required
          fullWidth
          id="nome"
          label="Nome"
          autoFocus
          defaultValue={props.nome}
          onChange={handleChangeValues}
          margin="dense"
        />
        <TextField
          autoComplete="given-name"
          name="email"
          required
          fullWidth
          id="email"
          label="Email"
          autoFocus
          onChange={handleChangeValues}
          defaultValue={props.email}
          margin="dense"
        />
        <TextField
          autoComplete="given-name"
          name="telefone"
          required
          fullWidth
          id="telefone"
          label="Telefone"
          autoFocus
          onChange={handleChangeValues}
          defaultValue={props.telefone}
          margin="dense"
        />
        <TextField
          required
          fullWidth
          id="capacidade"
          label="Capacidade"
          name="capacidade"
          type="number"
          autoComplete="family-name"
          onChange={handleChangeValues}
          defaultValue={props.capacidade}
          margin="dense"
        />
        <TextField
          required
          fullWidth
          id="cep"
          label="Cep"
          name="cep"
          autoComplete="family-name"
          onChange={handleChangeValues}
          defaultValue={props.cep}
          margin="dense"
        />
        <TextField
          required
          fullWidth
          id="rua"
          label="Rua"
          name="rua"
          autoComplete="family-name"
          onChange={handleChangeValues}
          defaultValue={props.rua}
          margin="dense"
        />
        <TextField
          required
          fullWidth
          id="bairro"
          label="Bairro"
          name="bairro"
          autoComplete="family-name"
          onChange={handleChangeValues}
          defaultValue={props.bairro}
          margin="dense"
        />
        <TextField
          required
          fullWidth
          id="cidade"
          label="Cidade"
          name="cidade"
          autoComplete="family-name"
          onChange={handleChangeValues}
          defaultValue={props.cidade}
          margin="dense"
        />
        <TextField
          required
          fullWidth
          id="descricao"
          label="Descrição"
          name="descricao"
          autoComplete="family-name"
          onChange={handleChangeValues}
          defaultValue={props.descricao}
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteSubject}>Excluir</Button>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleChangeCard}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
