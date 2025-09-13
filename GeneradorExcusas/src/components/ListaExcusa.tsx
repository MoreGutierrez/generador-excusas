import { useState, useEffect } from "react";
import arrayExcusas from "./../data/arrayExcusas";
import ListaFavoritas from "./ListaFavoritas";
import type { Excusa } from "../interfaces/interfaceExcusa";

function ListaExcusas() {

  const [excusas, setExcusas] = useState<Excusa[]>(() => {
    const excusasGuardadas = localStorage.getItem("excusas");
    return excusasGuardadas ? JSON.parse(excusasGuardadas) : arrayExcusas;
  });

  //Estado para las excusas favoritas
  const [favoritas, setFavoritas] = useState<Excusa[]>(() => {
    const favoritasGuardadas = localStorage.getItem("favoritas");
    return favoritasGuardadas ? JSON.parse(favoritasGuardadas) : [];
  });

  //Estado para controlar la visibilidad de la lista
  const [mostrarLista, setMostrarLista] = useState(false);

  //Estado para manejar lo que el ususario escribe y agregar a la lista
  const [nuevaExcusa, setNuevaExcusa] = useState("");



  //LOCALSTORAGE: guardar excusas en el localstorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("excusas", JSON.stringify(excusas));
  }, [excusas]);

  //LOCALSTORAGE: guardar favoritas en el localstorage cada vez que cambien
    useEffect(() => {
    localStorage.setItem("favoritas", JSON.stringify(favoritas));
  }, [favoritas]);



  //Funcion para mostrar/ocultar la lista de excusas
  const mostrarOcultarLista = () => {
    setMostrarLista(!mostrarLista);
  };


  //Funcion para agregar una nueva excusa a la lista
  const agregarExcusa = () => {
    if (nuevaExcusa.trim() === "") return; //evita agregar excusas vacías

    const nueva: Excusa = {
      id: excusas.length + 1, //hace el id autoincremental
      texto: nuevaExcusa,
    };

    setExcusas([...excusas, nueva]); //sumo la nueva excusa al array excusas
    setNuevaExcusa(""); //el input queda vacío, se limpia
  };


  //Funcion para que el usuario pueda eliminar la excusa que ya no quiere
  const eliminarExcusa = (idEliminar: number) => {
    setExcusas(excusas.filter((excusa) => excusa.id !== idEliminar));
    setFavoritas(favoritas.filter((fav) => fav.id !== idEliminar));
  };

  //Funcion para marcar como favorita una excusa
  const marcarFavorita = (excusa: Excusa) => {
    if (!favoritas.some((fav) => fav.id === excusa.id)) {
      setFavoritas([...favoritas, excusa]);
    }
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


        {/*muestra la lista de excusas con el btn eliminar y fav*/}
        {mostrarLista && (
          <ul>
            {excusas.map((excusa) => (
              <li key={excusa.id}>
                {excusa.texto}
                {/*btn para eliminar excusa*/}
                <button onClick={() => eliminarExcusa(excusa.id)}>❌</button>
                {/*btn para marcar excusa como favorita*/}
                <button onClick={() => marcarFavorita(excusa)}>
                  {favoritas.some((fav) => fav.id === excusa.id) ? "⭐" : "☆"}
                </button>
              </li>
            ))}
          </ul>
        )}
        {/*componente que muestra la lista de excusas favoritas*/}
        <ListaFavoritas favoritas={favoritas}
        />
      </section>
    </>
  );
}

export default ListaExcusas;