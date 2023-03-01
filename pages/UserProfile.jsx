import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProfile from "../components/CardUsuarioProfile/CardProfile";
import styles from "../styles/Profile.module.css";
import HeaderAdmin from "../components/Header/HeaderAdmin";
import CheckinSystem from "../components/Checkin/Checkin";

export default function CadastroUnidade() {
  const [listSubject, setListSubject] = useState();

  ///ATENCAO MUDAR O ID PARA MUDAR O USUARIO!!!
  //CASO USUARIO INEXISTENTE NAO VAI CONSEGUIR EDITAR OU DELETAR
  useEffect(() => {
    const id = 17;
    axios.get(`http://localhost:8005/api/usuario/${id}`).then((response) => {
      setListSubject(response.data);
    });
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <div className={styles.profile}>
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
      <CheckinSystem />
    </div>
  );
}
