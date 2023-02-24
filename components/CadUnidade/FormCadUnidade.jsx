import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const theme = createTheme();

export default function CadastroUnidade() {
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={2}>
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
                <Grid item xs={12} sm={2}>
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
                <Grid item xs={12} sm={2}>
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
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={3}>
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
                <Grid item xs={12} sm={3}>
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
                <Grid item xs={12} sm={3}>
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
              </Grid>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Enviar
              </Button>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
