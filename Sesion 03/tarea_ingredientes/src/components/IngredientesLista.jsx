//  sección para importar
import { useState, useEffect } from "react";
import IngredienteItem from "./IngredienteItem";
import IngredienteForm from "./IngredienteForm";

//  funcion principal del archivo
const IngredientesLista = () => {
  //  variable para el estado useState
  const [CountIngrediente, setIngredienteCount] = useState(0);

  //  variable para los ingredientes
  const [ingredientes, setIngrediente] = useState([]);

  //  evento para agregar un ingrediente
  const addIngrediente = (ingrediente) => {
    setIngrediente([...ingredientes, ingrediente]);
  };

  //  evento useEffect, para el formulario cuando se inicializa
  useEffect(() => {
    //  obtenemos los valores del localStorage [ingredientes]
    let data = localStorage.getItem("ingredientes");

    // //  validamos si tiene información data
    // if(data){
    //   setIngrediente = JSON.parse(data);
    // }
  }, []);

  //  evento useEffect, para ingredientes
  useEffect(() => {
    //  agregamos los valores al localStorage [ingredientes]
    localStorage.setItem("ingredientes", JSON.stringify(ingredientes));
  }, [ingredientes]);


   //    se regresan los componentes
  return (
    <>
      <IngredienteForm onSubmit={addIngrediente} />
      <div>
        {ingredientes.map((ingrediente) => (
          <div>
            <IngredienteItem ingrediente={ingrediente} />
          </div>
        ))}
      </div>
    </>
  );
};

export default IngredientesLista;
