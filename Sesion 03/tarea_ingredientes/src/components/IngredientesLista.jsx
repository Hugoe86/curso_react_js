import { useState, useEffect } from "react";
import IngredienteItem from "./IngredienteItem";
import IngredienteForm from "./IngredienteForm";

const IngredientesLista = () => {
  const [CountIngrediente, setIngredienteCount] = useState(0);

  const [IngredienteValores, setIngredienteValores] = useState(0);

  let arreglo_ingredientes = [];

  const [ingredientes, setIngrediente] = useState([ ]);

  const addIngrediente = (ingrediente) => {
    setIngrediente([...ingredientes, ingrediente]);
  };


  useEffect(() => {
    //  obtenemos los valores del localStorage [ingredientes]
    let data = localStorage.getItem('ingredientes');

    // //  validamos si tiene información data
    // if(data){
    //   setIngrediente = JSON.parse(data);
    // }

  }, [ ] )

  useEffect(() => {
    
    //arreglo_ingredientes = [...ingredientes];

    //  agregamos los valores al localStorage [ingredientes]
    localStorage.setItem('ingredientes', JSON.stringify(ingredientes));
  

    //console.log(arreglo_ingredientes);

  }, [ingredientes]);

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
