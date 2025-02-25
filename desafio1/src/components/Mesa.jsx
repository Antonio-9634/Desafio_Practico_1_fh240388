import React from "react";
import styles from "../styles/page.module.css";

const Mesa = ({ mesa, onReservar, zona }) => {
  return (
    <div
      className={`${styles.mesa} ${
        mesa.ocupada ? styles.ocupada : styles.disponible
      } ${zona === "Terraza" ? styles.terraza : zona === "Interior" ? styles.interior : styles.vip}`}
      onClick={() => !mesa.ocupada && onReservar(mesa.id)}
    >
      <span className={styles.tipoZona}>{zona}</span> 
      <p>Mesa {mesa.id}</p>
      <p>{mesa.ocupada ? "Ocupada" : "Disponible"}</p>
    </div>
  );
};

export default Mesa;
