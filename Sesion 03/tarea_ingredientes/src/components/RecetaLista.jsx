import { useState } from "react";
import RecetaItem from "./RecetaItem";
import RecetaForm from "./RecetaForm";

const RecetaLista = () => {
  const [recetaCount, setRecetaCount] = useState(0);
  const [recetas, setRecetas] = useState([
    {
      nombre_receta: "Pan Francés Tiramisú",
      tiempo: "20",
      ingredientes: [],
    },
  ]);
  const addReceta = (receta) => {
    setRecetas([...recetas, receta]);
    setRecetaCount(recetaCount + 1);
  };

  return (
    <>
      
      <RecetaForm onSubmit={addReceta} />
      <ul className="flex 5 py-5">
        {recetas.map((receta) => (
          <li>
            <RecetaItem receta={receta} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecetaLista;
