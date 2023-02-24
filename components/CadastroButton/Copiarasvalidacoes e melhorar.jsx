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

function isValidName(name) {
  return /^[a-zA-Z ]{1,20}$/.test(name);
}

function isValidPassword(password) {
  return password.length <= 16;
}

function isValidCPF(cpf) {
  return /^\d{11}$/.test(cpf);
}

function isValidPhone(phone) {
  return /^\d{11}$/.test(phone);
}

function isValidStreet(street) {
  return /^[a-zA-Z0-9 ]{1,20}$/.test(street);
}

function isValidDistrict(district) {
  return /^[a-zA-Z0-9 ]{1,20}$/.test(district);
}

function isValidCity(city) {
  return /^[a-zA-Z ]{1,15}$/.test(city);
}

function isValidComplement(complement) {
  return /^[a-zA-Z0-9 ]{0,25}$/.test(complement);
}

function validateForm(values) {
  const {
    nome,
    lastName,
    password,
    cpf,
    telefone,
    rua,
    bairro,
    cidade,
    complemento,
  } = values;

  if (!isValidName(nome)) {
    alert("O nome deve ter no máximo 20 caracteres e não deve conter números");
    return false;
  }
  if (!isValidName(lastName)) {
    alert(
      "O sobrenome deve ter no máximo 20 caracteres e não deve conter números"
    );
    return false;
  }
  if (!isValidPassword(password)) {
    alert("A senha deve ter no máximo 16 caracteres");
    return false;
  }
  if (!isValidCPF(cpf)) {
    alert("O CPF deve ter 11 dígitos");
    return false;
  }
  if (!isValidPhone(telefone)) {
    alert("O telefone deve ter 11 dígitos");
    return false;
  }
  if (!isValidStreet(rua)) {
    alert("A rua deve ter no máximo 20 caracteres");
    return false;
  }
  if (!isValidDistrict(bairro)) {
    alert("O bairro deve ter no máximo 20 caracteres");
    return false;
  }
  if (!isValidCity(cidade)) {
    alert("A cidade deve ter no máximo 15 caracteres");
    return false;
  }
  if (!isValidComplement(complemento)) {
    alert("O complemento deve ter no máximo 25 caracteres");
    return false;
  }

  return true;
}

export default function CadastroUsuario() {
  const [values, setValues] = useState({});

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    if (validateForm(values)) {
      axios
        .post("http://localhost:3000/api/user", values)
        .then((response) => {
          alert("Cadastro realizado com sucesso!");
        })
        .catch((error) => {
          alert("Erro ao realizar cadastro.");
        });
    }
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* Ícone de usuário */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro de Usuário
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="nome"
                  required
                  fullWidth
                  id="firstName"
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
                  autoComplete="lname"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="E-mail"
                  type="email"
                  id="email"
                  autoComplete="email"
                  onChange={handleChangeValues}
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
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpf"
                  label="CPF"
                  type="number"
                  id="cpf"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="telefone"
                  label="Telefone"
                  type="number"
                  id="telefone"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="rua"
                  label="Rua"
                  type="text"
                  id="rua"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="bairro"
                  label="Bairro"
                  type="text"
                  id="bairro"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="cidade"
                  label="Cidade"
                  type="text"
                  id="cidade"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="complemento"
                  label="Complemento"
                  type="text"
                  id="complemento"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="telefone"
                  label="Telefone"
                  type="number"
                  id="telefone"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="dataNascimento"
                  label="Data de Nascimento"
                  type="date"
                  id="dataNascimento"
                  autoComplete="off"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="rua"
                  label="Rua"
                  id="rua"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="bairro"
                  label="Bairro"
                  id="bairro"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="cidade"
                  label="Cidade"
                  id="cidade"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="estado"
                  label="Estado"
                  id="estado"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="complemento"
                  label="Complemento"
                  id="complemento"
                  autoComplete="off"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Li e concordo com os termos e condições."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClickButton}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Já tem uma conta? Faça login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
