//  sección para importar
import { useState, useEffect } from "react";
import IngredienteItem from "./IngredienteItem";
import IngredienteForm from "./IngredienteForm";

//  funcion principal del archivo
const IngredientesLista = () => {
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

    //  validamos si tiene información data
    if (data) {
      //  enviamos los valores que tiene la variable
      console.log(JSON.parse(data));

      //  cargamos los datos
      setIngrediente(JSON.parse(data));
    }
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

//  sección para exportar
export default IngredientesLista;
