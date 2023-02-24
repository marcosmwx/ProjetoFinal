import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://github.com/marcosmwx">
        CCW
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

export default function CadastroUsuario() {
  const [values, setValues] = useState({});

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
    console.log(nome.value);
  };

  const handleClickButton = () => {
    axios.post("http://localhost:8005/cadastro", {
      nome: values.nome,
      sobrenome: values.lastName,
      email: values.email,
      password: values.password,
      cpf: values.cpf,
      telefone: values.telefone,
      rua: values.rua,
      bairro: values.bairro,
      cidade: values.cidade,
      complemento: values.complemento,
    });
    alert("Cadastro Com Sucesso!");
    window.location.href = "/";
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>

            <Box
              component="form"
              onSubmit={handleClickButton}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Sobrenome"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email / Login"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email_conf"
                    label="Confirmação Email"
                    name="email_conf"
                    autoComplete="none"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password_conf"
                    label="Confirmação de Senha"
                    type="password"
                    id="password_conf"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="cpf"
                    name="cpf"
                    label="CPF"
                    fullWidth
                    autoComplete="CPF"
                    variant="standard"
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="telefone"
                    name="telefone"
                    label="Telefone/Whatsapp"
                    fullWidth
                    variant="standard"
                    onChange={handleChangeValues}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cep"
                    label="Cep"
                    fullWidth
                    autoComplete="zip-code"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="rua"
                    label="Rua"
                    fullWidth
                    autoComplete="adress-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="bairro"
                    label="Bairro"
                    fullWidth
                    autoComplete="bairro-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cidade"
                    label="Cidade"
                    fullWidth
                    autoComplete="cidade-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="complemento"
                    label="Complemento"
                    name="complemento"
                    autoComplete="complemento"
                    variant="standard"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox color="secondary" name="Termos" value="yes" />
                    }
                    label="Aceito os termos de Uso."
                  />
                  <a href="#">TERMOS DE USO</a>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enviar
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Ja tem conta? Login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
