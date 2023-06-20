//  seccion para importar
import { useState } from "react";
import IngredientesLista from "./IngredientesLista";

//  funcion principal del archivo
const RecetaItem = ({ receta }) => {
  //  arreglo para descomponer la receta
  const { nombre_receta, tiempo, ingredientes } = receta;

  //    se regresan los componentes
  return (
    <div className={`p-6 rounded-xl bg-purple-300 `}>
      <tr>
        <td>
          {/* label Nombre de la receta */}
          <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
            Receta:
          </span>
          {/* Nombre de la receta */}
          <span>&nbsp; {nombre_receta}</span>
        </td>
      </tr>

      <br />

      <tr>
        <td>
          {/* label tiempo */}
          <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
            Tiempo:
          </span>

          {/* tiempo */}
          <span>&nbsp; {tiempo} &nbsp;Min.</span>
        </td>
      </tr>

      <br />

      <tr>
        <td>
          {/* label Ingredientes */}
          <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
            Ingredientes:
          </span>
          {/* ingredientes */}
          <span>&nbsp; {ingredientes}</span>
        </td>
      </tr>
    </div>
  );
};

//  seccion para exportar
export default RecetaItem;
