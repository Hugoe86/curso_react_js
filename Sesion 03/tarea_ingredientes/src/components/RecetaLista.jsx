//  sección para importar
import { useState, useEffect } from "react";
import RecetaItem from "./RecetaItem";
import RecetaForm from "./RecetaForm";
import IngredientesLista from "./IngredientesLista";

//  funcion principal del archivo
const RecetaLista = () => {
  //  variable para saber el useState
  const [recetaCount, setRecetaCount] = useState(0);

  //  variable para contener las recetas
  const [recetas, setRecetas] = useState([]);

  //  evento para agregar una recetra
  const addReceta = (receta) => {
     //  setea la variable
    setRecetas([...recetas, receta]);
  };

  //  evento de useEffect
  useEffect(() => {
    //  setea la variable
    setRecetaCount(recetas);
  }, [recetas]);

  //  regresa la estructura del formulario
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

//  sección para exportar
export default RecetaLista;
