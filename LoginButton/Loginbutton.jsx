import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function BtnLogin() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (values) => {
    axios.post("http://localhost:8005/login", {
      email: values.email,
      senha: values.senha,
    }).then('response');
    
  };

  const handleClose = () => {
    setOpen(false);
  };
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/marcosmwx/">
          CCW
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const email = data.get("email");
    const password = data.get("password");

    if (email === "willianmw@hotmail.com" && password === "123456") {
      console.log("Login correto!");
      window.location.assign("http://localhost:8005/UserProfile");
    } else {
      console.log("Login incorreto!");
    }
  };
  const theme = createTheme();
  const stylesx = {
    button: {
      backgroundColor: "white",
      borderColor: "#35009e",
      color: "#35009e",
      "&:hover": {
        color: "white",
        borderColor: "white",
      },
    },
    textField: {
      "& label.Mui-focused": {
        color: "#35009e",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#35009e",
      },
    },
    submitButton: {
      backgroundColor: "#35009e",
      color: "white",
      "&:hover": {
        backgroundColor: "#35009e",
      },
    },
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={stylesx.button}
        className="MuiButton-root"
      >
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  sx={stylesx.textField}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={stylesx.textField}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Lembrar Login"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ...stylesx.submitButton }}
                >
                  Entrar
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      {"Esqueceu sua Senha?"}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/cadastro" variant="body2">
                      {"Cadastre-se Aqui!"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}
