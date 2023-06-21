//  sección para importar
import IngredientesLista from "./IngredientesLista";
import RecetaLista from "./RecetaLista";

//  funcion principal del archivo
const FormPrincipal = () => {
  //    se regresa la estructura del formulario
  return (
    <>
      <div>
        <hr />
        <IngredientesLista />
        <hr></hr>
        <RecetaLista />
        <hr />
      </div>
    </>
  );
};

//  sección para exportar
export default FormPrincipal;
