import React from "react";
import styles from "../../styles/Profile.module.css";

export default function HomeUsuario() {
  return (
    <div className={styles.container_home}>
      <div className={styles.color_overlay}></div>
      <div>
        <p className={styles.sub_titu1}>Seja Bem vindo ao</p>
        <p className={styles.sub_titu2}>Conect Co. Working</p>
      </div>
    </div>
  );
}