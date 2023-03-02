const express = require("express");
const next = require("next");
const mysql = require("mysql");
const NextCors = require("nextjs-cors");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // configuracao do cors
  async function handler(req, res) {
    // Run the cors middleware
    // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    // Rest of the API logic
    res.json({ message: "Hello NextJs Cors!" });
  }

  // conexao com banco de dados
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "coworking",
  });

  server.use(express.json());
  connection.connect();

  //Usuarios total get
  server.get("/api/usuarios", (req, res) => {
    const query = "SELECT * FROM users";
    connection.query(query, (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  });

  //Usuario profile get
  server.get("/api/usuario/:id", (req, res) => {
    const userId = req.params.id;
    const query = `SELECT u.*, e.*
    FROM users u
    JOIN endereco e ON u.id = e.users_id
    WHERE u.id = ? `;
    connection.query(query, [userId], (error, results, fields) => {
      if (error) throw error;
      res.json(results); // retorna o primeiro resultado encontrado
    });
  });

  //Usuario edit
  server.put("/edit/usuario", (req, res) => {
   
    const {
      id,
      nome,
      sobrenome,
      email,
      cpf,
      telefone,
      cep,
      rua,
      bairro,
      cidade,
      complemento,
      users_id,
    } = req.body;

    connection.beginTransaction((err) => {
      if (err) throw err;

      const query1 =
        "UPDATE users SET nome=?, sobrenome=?, email=?, cpf=?, telefone=? WHERE id=?";
      const values1 = [nome, sobrenome, email, cpf, telefone, id];

      connection.query(query1, values1, (err, result1) => {
        if (err) {
          connection.rollback(() => {
            throw err;
          });
        }

        const query2 =
          "UPDATE endereco SET cep=?, rua=?, bairro=?, cidade=?, complemento=? WHERE users_id=?";
        const values2 = [cep, rua, bairro, cidade, complemento, users_id];

        connection.query(query2, values2, (err, result2) => {
          if (err) {
            connection.rollback(() => {
              throw err;
            });
          }

          connection.commit((err) => {
            if (err) {
              connection.rollback(() => {
                throw err;
              });
            }
            console.log(`Atualização de usuário ${users_id} concluída com sucesso.`);
            res.sendStatus(200);
          });
        });
      });
    });
  });

  // Usuario Cadastro
  server.post("/cadastro", (req, res) => {
    const {
      nome,
      sobrenome,
      email,
      cpf,
      telefone,
      cep,
      rua,
      bairro,
      cidade,
      complemento,
    } = req.body;

    let SQL =
      "INSERT INTO users (nome, sobrenome, email, cpf, telefone) VALUES (?, ?, ?, ?, ?)";
    connection.query(
      SQL,
      [nome, sobrenome, email, cpf, telefone],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Erro ao criar usuário");
        }
        const users_id = result.insertId; // ID do usuário recém-criado
        SQL =
          "INSERT INTO endereco (cep, rua, bairro, cidade, complemento, users_id) VALUES (?, ?, ?, ?, ?, ?)";
        connection.query(
          SQL,
          [cep, rua, bairro, cidade, complemento, users_id],
          (err, result) => {
            if (err) {
              console.log(err);
              return res.status(500).send("Erro ao criar endereço");
            }
            return res
              .status(200)
              .send("Usuário e endereço criados com sucesso");
          }
        );
      }
    );
  });

  //Usuario delete
  server.delete("/usuario/delete/:id", (req, res) => {
    const userId = req.params.id;
  
    connection.beginTransaction((err) => {
      if (err) throw err;
  
      const query1 = "DELETE FROM endereco WHERE users_id = ?";
      const values1 = [userId];
  
      connection.query(query1, values1, (err, result1) => {
        if (err) {
          connection.rollback(() => {
            throw err;
          });
        }
  
        const query2 = "DELETE FROM users WHERE id = ?";
        const values2 = [userId];
  
        connection.query(query2, values2, (err, result2) => {
          if (err) {
            connection.rollback(() => {
              throw err;
            });
          }
  
          connection.commit((err) => {
            if (err) {
              connection.rollback(() => {
                throw err;
              });
            }
            console.log(`Usuário ${userId} excluído com sucesso.`);
            res.sendStatus(200);
          });
        });
      });
    });
  });
  

  //Unidades get
  server.get("/api/unidades", (req, res) => {
    const query = "SELECT * FROM unidade";
    connection.query(query, (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  });

  //Cadastro de unidade
  server.post("/CadastroUnidade", (req, res) => {
    const { nome } = req.body;
    const { capacidade } = req.body;
    const { cep } = req.body;
    const { rua } = req.body;
    const { bairro } = req.body;
    const { cidade } = req.body;
    const { descricao } = req.body;
    const { telefone } = req.body;
    const { email } = req.body;

    let SQL =
      "INSERT INTO unidade (nome, capacidade, cep, rua, bairro, cidade, descricao, telefone, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(
      SQL,
      [nome, capacidade, cep, rua, bairro, cidade, descricao, telefone, email],
      (err, result) => {
        console.log(err);
      }
    );
  });

  // Editar Unidades
  server.put("/edit/unidades", (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { capacidade } = req.body;
    const { cep } = req.body;
    const { rua } = req.body;
    const { bairro } = req.body;
    const { cidade } = req.body;
    const { descricao } = req.body;
    const { telefone } = req.body;
    const { email } = req.body;

    let SQL =
      "UPDATE unidade SET nome = ?, capacidade = ?, cep = ?, rua = ?, bairro = ?, cidade = ?, descricao = ?, telefone = ?, email = ?WHERE id = ?";

    connection.query(
      SQL,
      [
        nome,
        capacidade,
        cep,
        rua,
        bairro,
        cidade,
        descricao,
        telefone,
        email,
        id,
      ],
      (err, result) => {
        if (err) console.log(err);
        else res.send(result);
      }
    );
  });

  // Delete Unidades
  server.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM unidade WHERE id = ? ";
    connection.query(SQL, [id], (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  });

  server.get("/profile", (req, res) => {
    return app.render(req, res, "/UserProfile");
  });

  server.get("/contatos", (req, res) => {
    return app.render(req, res, "/Contato");
  });
  server.get("/unidades", (req, res) => {
    return app.render(req, res, "/Unidades");
  });

  server.get("/cadastro", (req, res) => {
    return app.render(req, res, "/CadastroIndex");
  });

  server.get("/cadastroUnidade", (req, res) => {
    return app.render(req, res, "/CadastroUnidade");
  });
  server.get("/data", (req, res) => {
    return app.render(req, res, "/UserData");
  });
  server.get("/home", (req, res) => {
    return app.render(req, res, "/HomeUser");
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  app.post("/login", (req, res)=>{
    const email = req.body.email;
    const senha = req.body.senha;
    connection.query("SELEC * FROM login WHERE email = ? AND senha = ?", 
    [email, senha],
    (err, result9)=>{
      if (err){
        req.sed(err);
      }if(result9.length > 0){
        res.send({msg: 'Logado com sucesso'})
      }else{
        res.sed({msg:'conta não encontrada'})
      }
      
    });
  });

  server.listen(8005, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:8005");
  });
});
