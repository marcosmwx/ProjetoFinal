import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import style from "../../styles/CadUnidade.module.css"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

const theme = createTheme();
export default function FormDialogCadastro(props) {
  // State que define valores do input para edição de valores


  // Axios para enviar os valores alterados no input de edição
 

  // Função para definir true quando clicar nos card, quando true abre opções de definição
  const handleClickOpen = () => {
    props.setOpen(true);
  };

  // Função para fechar o card
  const handleClose = () => {
    props.setOpen(false);
  };

  // Função para segurar os valores definidos nos inputs de edição
  const [values, setValues] = useState({});

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
    console.log(nome.value);
  };

  const handleClickButton = () => {
    axios.post("http://localhost:8005/CadastroUnidade", {
      nome: values.nome,
      capacidade: values.capacidade,
      cep: values.cep,
      rua: values.rua,
      bairro: values.bairro,
      cidade: values.cidade,
      descricao: values.descricao,
      telefone: values.telefone,
      email: values.email,
    });
    alert("Unidade cadastrada com sucesso Com Sucesso!");
    e.preventDefault();
  };
  
  return (
    <Dialog open={props.open} onClose={handleClose}>
    <div className={style.cabecalho}>

      <DialogActions className={style.x}>
       <Button onClick={handleClose}> <ArrowBackSharpIcon/></Button>
       </DialogActions>
      <DialogTitle className={style.texto}>Cadastro Unidade</DialogTitle>
    
    </div>
      <DialogContent>
      
      <ThemeProvider theme={theme}>
      <React.Fragment>
        <Container>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,

              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleClickButton}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid className={style.formAdmin} container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    name="nome"
                    required
                    fullWidth
                    id="nome"
                    label="Nome"
                    autoFocus
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoFocus
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="telefone"
                    required
                    fullWidth
                    id="telefone"
                    label="Telefone"
                    autoFocus
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="capacidade"
                    label="Capacidade"
                    name="capacidade"
                    type="number"
                    autoComplete="family-name"
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="cep"
                    label="Cep"
                    name="cep"
                    autoComplete="family-name"
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="rua"
                    label="Rua"
                    name="rua"
                    autoComplete="family-name"
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="bairro"
                    label="Bairro"
                    name="bairro"
                    autoComplete="family-name"
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="cidade"
                    label="Cidade"
                    name="cidade"
                    autoComplete="family-name"
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="descricao"
                    label="Descrição"
                    name="descricao"
                    autoComplete="family-name"
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Button className={style.button_admin} type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Cadastrar
                </Button>
              </Grid>

            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
      </DialogContent>
    </Dialog>
  );
}
