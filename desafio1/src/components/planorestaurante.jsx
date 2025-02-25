import React from "react";
import Mesa from "./Mesa";
import styles from "../styles/page.module.css";

const PlanoRestaurante = ({ mesas, onReservar, zona }) => {
  return (
    <div className={styles.plano}>
      {mesas.map((mesa) => (
        <Mesa key={mesa.id} mesa={mesa} onReservar={onReservar} zona={zona} />
      ))}
    </div>
  );
};

export default PlanoRestaurante;
