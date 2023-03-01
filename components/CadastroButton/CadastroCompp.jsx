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
import styles from "./cadastroUser.module.css";

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
    console.log(values.email);
  };

  const handleClickButton = () => {
    axios.post("http://localhost:8005/cadastro", {
      nome: values.nome,
      sobrenome: values.sobrenome,
      email: values.email,
      password: values.password,
      cpf: values.cpf,
      telefone: values.telefone,
      cep: values.cep,
      rua: values.rua,
      bairro: values.bairro,
      cidade: values.cidade,
      complemento: values.complemento,
    });
    alert("Cadastrado Com Sucesso!");
    window.location.href = "/";
  };

  return (
    <div className={styles.body}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              className={styles.container}
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar className={styles.avatar}></Avatar>

              <Box
                className={styles.form}
                component="form"
                onSubmit={handleClickButton}
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
                      className={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="sobrenome"
                      label="Sobrenome"
                      name="sobrenome"
                      autoComplete="family-name"
                      onChange={handleChangeValues}
                      className={styles.textField}
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
                      onChange={handleChangeValues}
                      className={styles.textField}
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
                      autoComplete="cpf"
                      name="cpf"
                      required
                      fullWidth
                      id="cpf"
                      label="CPF"
                      autoFocus
                      onChange={handleChangeValues}
                      className={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="telefone"
                      name="telefone"
                      required
                      fullWidth
                      id="telefone"
                      label="Telefone/Whatsapp"
                      autoFocus
                      onChange={handleChangeValues}
                      className={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      autoComplete="cep"
                      name="cep"
                      required
                      fullWidth
                      id="cep"
                      label="CEP"
                      autoFocus
                      onChange={handleChangeValues}
                      className={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      autoComplete="rua"
                      name="rua"
                      required
                      fullWidth
                      id="rua"
                      label="Rua"
                      autoFocus
                      onChange={handleChangeValues}
                      className={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      autoComplete="bairro"
                      name="bairro"
                      required
                      fullWidth
                      id="bairro"
                      label="Bairro"
                      autoFocus
                      onChange={handleChangeValues}
                      className={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      autoComplete="cidade"
                      name="cidade"
                      required
                      fullWidth
                      id="cidade"
                      label="Cidade"
                      autoFocus
                      onChange={handleChangeValues}
                      className={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="complemento"
                      name="complemento"
                      required
                      fullWidth
                      id="complemento"
                      label="Complemento"
                      autoFocus
                      onChange={handleChangeValues}
                      className={styles.textField}
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
            <Copyright sx={{ mt: 5 }} className={styles.copy} />
          </Container>
        </React.Fragment>
      </ThemeProvider>
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
    </div>
  );
}
