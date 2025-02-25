"use client";

import React, { useState } from "react";
import PlanoRestaurante from "../components/PlanoRestaurante";
import ResumenReserva from "../components/ResumenReserva";
import SelectorZona from "../components/SelectorZona";
import styles from "../styles/page.module.css";

const Page = () => {
  const [zonaSeleccionada, setZonaSeleccionada] = useState("Terraza");
  const [reserva, setReserva] = useState(null); // Estado para manejar la reserva

  const [mesas, setMesas] = useState({
    Terraza: [
      { id: 1, ocupada: false },
      { id: 2, ocupada: true },
      { id: 3, ocupada: false },
    ],
    Interior: [
      { id: 4, ocupada: false },
      { id: 5, ocupada: true },
      { id: 6, ocupada: false },
    ],
    VIP: [
      { id: 7, ocupada: false },
      { id: 8, ocupada: true },
      { id: 9, ocupada: false },
    ],
  });

  const reservarMesa = (id) => {
    const mesa = mesas[zonaSeleccionada].find((mesa) => mesa.id === id);

    if (!mesa.ocupada) {
      // Si la mesa está desocupada, la reservamos
      setMesas((prevMesas) => {
        const nuevasMesas = { ...prevMesas };
        nuevasMesas[zonaSeleccionada] = nuevasMesas[zonaSeleccionada].map((mesa) =>
          mesa.id === id ? { ...mesa, ocupada: true } : mesa
        );
        return nuevasMesas;
      });
      // Actualizamos el estado de reserva
      const nuevaReserva = {
        mesaId: id,
        zona: zonaSeleccionada,
        personas: 4, // Aquí puedes cambiar la cantidad de personas
      };
      setReserva(nuevaReserva); // Guardamos la reserva
    }
  };

  const liberarMesa = (id) => {
    // Liberar una mesa (solo si está ocupada)
    setMesas((prevMesas) => {
      const nuevasMesas = { ...prevMesas };
      nuevasMesas[zonaSeleccionada] = nuevasMesas[zonaSeleccionada].map((mesa) =>
        mesa.id === id ? { ...mesa, ocupada: false } : mesa
      );
      return nuevasMesas;
    });
    setReserva(null); // Limpiamos la reserva al liberar la mesa
  };

  const cambiarZona = (zona) => {
    setZonaSeleccionada(zona);
    setReserva(null); // Si deseas resetear la reserva al cambiar de zona
  };

  return (
    <div className={styles.container}>
      <SelectorZona zonaSeleccionada={zonaSeleccionada} cambiarZona={cambiarZona} />
      <PlanoRestaurante mesas={mesas[zonaSeleccionada]} onReservar={reservarMesa} zona={zonaSeleccionada} />
      
      {/* Mostramos el resumen de la reserva solo si hay una reserva activa */}
      {reserva && <ResumenReserva reserva={reserva} />}
      
      {/* Mostrar siempre el botón para liberar mesas ocupadas */}
      <div className={styles.botonLiberarContainer}>
        {mesas[zonaSeleccionada].map((mesa) =>
          mesa.ocupada ? (
            <div key={mesa.id} className={styles.botonLiberar}>
              <button onClick={() => liberarMesa(mesa.id)}>
                Liberar Mesa {mesa.id}
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Page;