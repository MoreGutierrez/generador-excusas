import { useState } from "react";
import arrayExcusas from "./../data/arrayExcusas";

function ListaExcusas() {
  const [mostrarLista, setMostrarLista] = useState(false);

  const mostrarOcultarLista = () => {
    setMostrarLista(!mostrarLista);
  };

  return (
    <>
      <h2>Lista de Excusas</h2>
      <button onClick={mostrarOcultarLista}>
        {mostrarLista ? "Ocultar Lista" : "Mostrar Lista"}
      </button>

      {mostrarLista && (
        <ul>
          {arrayExcusas.map((excusa) => (
            <li key={excusa.id}>{excusa.texto}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListaExcusas;
