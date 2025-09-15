
import { useState } from "react";
import type { Excusa } from "../interfaces/interfaceExcusa";

function ListaFavoritas({ favoritas }:{ favoritas: Excusa[] }) {

  const [mostrarFavoritas, setMostrarFavoritas] = useState(true);

  return (
    <>
      <section className="lista-favoritas">
        <h2>Lista de Favoritas</h2>

        {/*btn para mostrar/ocultar favoritas*/}
        <button onClick={() => setMostrarFavoritas(!mostrarFavoritas)}>
          {mostrarFavoritas ? "Ocultar Favoritas" : "Mostrar Favoritas"}
        </button>

        {/*lista favoritas*/}
        {mostrarFavoritas &&(
          <ul className="ul-favoritas">
            {favoritas.map((excusa) => (
              <li key={excusa.id} className="li-excusa">{excusa.texto}</li>
            ))}
          </ul>
        )}

        {/*mensaje que se muestra cuando no hay excusas favoritas*/}
        {favoritas.length === 0 && <p>No hay excusas favoritas aun</p>}
      </section>
    </>
  );
}

export default ListaFavoritas;