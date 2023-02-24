import React, { useEffect, useState } from "react";
import axios from "axios";
import TabUnidade from "../components/CadUnidade/TabUnidade";
import FormCadUnidade from "../components/CadUnidade/FormCadUnidade";
import Card from "../components/CardInfoUnidades/CardUnidades";

export default function CadastroUnidade() {
  const [listSubject, setListSubject] = useState();

  useEffect(() => {
    axios.get("http://localhost:8005/api/unidades").then((response) => {
      setListSubject(response.data);
    });
  }, []);
  return (
    <div>
      <FormCadUnidade />
      {typeof listSubject !== "undefined" &&
        listSubject.map((value) => {
          return (
            <Card
              key={value.id}
              id={value.id}
              listCard={listSubject}
              setListCard={setListSubject}
              nome={value.nome}
              capacidade={value.capacidade}
              cep={value.cep}
              rua={value.rua}
              bairro={value.bairro}
              cidade={value.cidade}
              descricao={value.descricao}
              telefone={value.telefone}
              email={value.email}
            />
          );
        })}
      <TabUnidade />
    </div>
  );
}
