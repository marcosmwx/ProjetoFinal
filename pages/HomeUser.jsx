import React from "react";
import HeaderUser from "../components/Header/HeaderUser";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeUsuario from "../components/HomeUser/HomeUsuario";
import FooterUser from "../components/Footer/FooterUser"



export default function HomeUser() {
    return (
      <div>
       <HeaderUser/>
       <HomeUsuario/>
   <FooterUser/>
      </div>
    );
  }