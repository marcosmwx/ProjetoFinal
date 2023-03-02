import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckinSystem from "../components/Checkin/Checkin";
import HeaderUser from "../components/Header/HeaderUser";
import FooterUser from "../components/Footer/FooterUser"



export default function CadastroUnidade() {

  return (
    <div>
      <HeaderUser />
      <CheckinSystem />
      <FooterUser />
    </div>
  );
}
