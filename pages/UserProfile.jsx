import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProfile from "../components/CardUsuarioProfile/CardProfile";

export default function CadastroUnidade() {
  const [listSubject, setListSubject] = useState();


///ATENCAO MUDAR O ID PARA MUDAR O USUARIO!!! 
//CASO USUARIO INEXISTENTE NAO VAI CONSEGUIR EDITAR OU DELETAR 
  useEffect(() => {
    axios.get("http://localhost:8005/api/usuario/1").then((response) => {
      setListSubject(response.data);
    });
  }, []);
  return (
    <div>
      {typeof listSubject !== "undefined" &&
        listSubject.map((value) => {
          return (
            <CardProfile
              key={value.id}
              id={value.id}
              users_id={value.users_id}
              listCard={listSubject}
              setListCard={setListSubject}
              nome={value.nome}
              sobrenome={value.sobrenome}
              email={value.email}
              cpf={value.cpf}
              telefone={value.telefone}
              cep={value.cep}
              rua={value.rua}
              bairro={value.bairro}
              cidade={value.cidade}
              complemento={value.complemento}
            />
          );
        })}
      
    </div>
  );
}
