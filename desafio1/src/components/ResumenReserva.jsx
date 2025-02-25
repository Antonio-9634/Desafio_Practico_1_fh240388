import React from "react";
import styles from "../styles/page.module.css";

const ResumenReserva = ({ reserva }) => {
  if (!reserva) return <p>No hay reserva.</p>;

  return (
    <div className={styles.resumenReserva}>
      <h2>Resumen de Reserva</h2>
      <p><strong>Mesa:</strong> {reserva.mesaId}</p>
      <p><strong>Zona:</strong> {reserva.zona}</p>
      <p><strong>Personas:</strong> {reserva.personas}</p>
    </div>
  );
};

export default ResumenReserva;
