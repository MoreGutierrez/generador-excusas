
import { useState } from "react";
import type { Excusa } from "../interfaces/interfaceExcusa";

function ListaFavoritas({ favoritas }:{ favoritas: Excusa[] }) {

  const [mostrarFavoritas, setMostrarFavoritas] = useState(true);

  return (
    <>
      <section className="lista-favoritas">
        <h2>Lista de Favoritas</h2>

        <button onClick={() => setMostrarFavoritas(!mostrarFavoritas)}>
          {mostrarFavoritas ? "Ocultar Favoritas" : "Mostrar Favoritas"}
        </button>

        {mostrarFavoritas &&(
          <ul>
            {favoritas.map((excusa) => (
              <li key={excusa.id}>{excusa.texto}</li>
            ))}
          </ul>
        )}

        {favoritas.length === 0 && <p>No hay excusas favoritas aun</p>}
      </section>
    </>
  );
}

export default ListaFavoritas;