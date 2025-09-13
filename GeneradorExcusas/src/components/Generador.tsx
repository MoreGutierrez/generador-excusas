
import { useState } from "react";
import arrayExcusas from "../data/arrayExcusas";

function GeneradorExcusas() {
  const [excusas, setExcusas] = useState("");

  const generarExcusa = () => {
    const randomIndex = Math.floor(Math.random() * arrayExcusas.length);
    setExcusas(arrayExcusas[randomIndex].texto);
  };
  
  return (
    <div>
      <button onClick={generarExcusa}>Generar Excusa</button>
      <p>{excusas}</p>
    </div>
  );
}

export default GeneradorExcusas;


