import { useState } from "react";
import IngredienteItem from "./IngredienteItem"
import IngredienteForm from "./IngredienteForm"


const IngredientesLista = () => {
  

    const [CountIngrediente, setIngredienteCount] = useState(0);

   
    const [ingredientes, setIngrediente] = useState([
      {
        nombre_ingrediente: "3/4 De taza de Leche Evaporada CARNATION",
      },
      {
        nombre_ingrediente: "3 Cucharadas de Cocoa NESTLÉ® Chocolatería",
      },
      {
        nombre_ingrediente: "1 Cucharada de NESCAFÉ CLÁSICO",
      },
      {
        nombre_ingrediente: "1 Huevo",
      },
      {
        nombre_ingrediente: "1 Cucharada de esencia de vainilla",
      },
      {
        nombre_ingrediente: " 1/2 Barra de mantequilla (45 g)",
      },
     
    ]);

    const addIngrediente = (ingrediente) => {
      setIngrediente([...ingredientes, ingrediente]);
      setIngredienteCount(CountIngrediente + 1);
    };

    return (
      <>
        <IngredienteForm onSubmit={addIngrediente} />
        <ul className="flex 5 py-5">
          {ingredientes.map((ingrediente) => (
            <li>
              <IngredienteItem ingrediente={ingrediente} />
            </li>
          ))}
        </ul>
      </>
    );

}



export default IngredientesLista;