import { useState } from "react";
import arrayExcusas from "./../data/arrayExcusas";

function ListaExcusas() {
  const [excusas, setExcusas] = useState(arrayExcusas);

  //Estado para controlar la visibilidad de la lista
  const [mostrarLista, setMostrarLista] = useState(false);
  const mostrarOcultarLista = () => {
    setMostrarLista(!mostrarLista);
  };

  //Estado para manejar lo que el ususario escribe y agregar a la lista
  const [nuevaExcusa, setNuevaExcusa] = useState("");
  const agregarExcusa = () => {
    if (nuevaExcusa.trim() === "") return; //evita agregar excusas vacías

    const nueva = {
      id: excusas.length + 1, //hace el id autoincremental
      texto: nuevaExcusa,
    };

    setExcusas([...excusas, nueva]); //sumo la nueva excusa al array excusas
    setNuevaExcusa(""); //el input queda vacío, se limpia
  };

  return (
    <>
      <section className="lista-excusas">
        <h2>Lista de Excusas</h2>

        {/*input y btn para agregar excusa*/}
        <input
          type="text"
          name="excusa"
          placeholder="Escribi una nueva excusa"
          value={nuevaExcusa}
          onChange={(e) => setNuevaExcusa(e.target.value)}
        />
        <button onClick={agregarExcusa}>Agregar Excusa</button>



        {/*btn de mostrar/ocultar lista*/}
        <button onClick={mostrarOcultarLista}>
          {mostrarLista ? "Ocultar Lista" : "Mostrar Lista"}
        </button>


        {/*muestra la lista de excusas*/}
        {mostrarLista && (
          <ul>
            {excusas.map((excusa) => (
              <li key={excusa.id}>{excusa.texto}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default ListaExcusas;