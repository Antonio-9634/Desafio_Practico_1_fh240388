import React from "react";
import styles from "../styles/page.module.css";

const SelectorZona = ({ zonaSeleccionada, cambiarZona }) => {
  return (
    <div className={styles.selectorZona}>
      <button
        className={zonaSeleccionada === "Terraza" ? styles.seleccionado : ""}
        onClick={() => cambiarZona("Terraza")}
      >
        Terraza
      </button>
      <button
        className={zonaSeleccionada === "Interior" ? styles.seleccionado : ""}
        onClick={() => cambiarZona("Interior")}
      >
        Interior
      </button>
      <button
        className={zonaSeleccionada === "VIP" ? styles.seleccionado : ""}
        onClick={() => cambiarZona("VIP")}
      >
        VIP
      </button>
    </div>
  );
};

export default SelectorZona;
