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
    nome: props.nome,
    sobrenome: props.sobrenome,
    email: props.email,
    cpf: props.cpf,
    telefone: props.telefone,
    users_id:props.users_id,
    cep: props.cep,
    rua: props.rua,
    bairro: props.bairro,
    cidade: props.cidade,
    complemento: props.complemento,
    
  });

  // Axios para enviar os valores alterados no input de edição
  const handleChangeCard = () => {
    axios.put("http://localhost:8005/edit/usuario", {
      id: editValues.id,
      nome: editValues.nome,
      sobrenome: editValues.sobrenome,
      email: editValues.email,
      cpf: editValues.cpf,
      telefone: editValues.telefone,
      users_id:editValues.users_id,
      cep: props.cep,
      rua: editValues.rua,
      bairro: editValues.bairro,
      cidade: editValues.cidade,
      complemento: editValues.complemento,
      
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
    axios.delete(`http://localhost:8005/usuario/delete/${editValues.id}`);
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
          required
          fullWidth
          id="lastName"
          label="Sobrenome"
          name="lastName"
          autoComplete="family-name"
          onChange={handleChangeValues}
          defaultValue={props.sobrenome}
          margin="dense"
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email / Login"
          name="email"
          autoComplete="email"
          onChange={handleChangeValues}
          defaultValue={props.email}
          margin="dense"
        />
        <TextField
          autoComplete="cpf"
          name="cpf"
          required
          fullWidth
          id="cpf"
          label="CPF"
          autoFocus
          defaultValue={props.cpf}
          onChange={handleChangeValues}
          margin="dense"
        />
        <TextField
          autoComplete="telefone"
          name="telefone"
          required
          fullWidth
          id="telefone"
          label="Telefone"
          autoFocus
          defaultValue={props.telefone}
          onChange={handleChangeValues}
          margin="dense"
        />
        <TextField
          autoComplete="cep"
          name="cep"
          required
          fullWidth
          id="cep"
          label="Cep"
          autoFocus
          defaultValue={props.cep}
          onChange={handleChangeValues}
          margin="dense"
        />
        <TextField
          autoComplete="rua"
          name="rua"
          required
          fullWidth
          id="rua"
          label="Rua"
          autoFocus
          defaultValue={props.rua}
          onChange={handleChangeValues}
          margin="dense"
        />
        <TextField
          autoComplete="bairro"
          name="bairro"
          required
          fullWidth
          id="bairro"
          label="Bairro"
          autoFocus
          defaultValue={props.bairro}
          onChange={handleChangeValues}
          margin="dense"
        />
        <TextField
          autoComplete="cidade"
          name="cidade"
          required
          fullWidth
          id="cidade"
          label="Cidade"
          autoFocus
          defaultValue={props.cidade}
          onChange={handleChangeValues}
          margin="dense"
        />
        <TextField
          autoComplete="given-name"
          name="complemento"
          required
          fullWidth
          id="complemento"
          label="Complemento"
          autoFocus
          defaultValue={props.complemento}
          onChange={handleChangeValues}
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
