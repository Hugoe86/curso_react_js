import { useState, useEffect } from "react";
import RecetaItem from "./RecetaItem";
import RecetaForm from "./RecetaForm";
import IngredientesLista from "./IngredientesLista";

const RecetaLista = () => {
  const [recetaCount, setRecetaCount] = useState(0);

  const [recetas, setRecetas] = useState([]);

  const addReceta = (receta) => {
    setRecetas([...recetas, receta]);
  };

  useEffect(() => {
    setRecetaCount(recetas);
  }, [recetas]);

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
