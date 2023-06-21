//  sección para importar
import IngredientesLista from "./IngredientesLista";
import RecetaLista from "./RecetaLista";

//  funcion principal del archivo
const FormPrincipal = () => {
  //    se regresa la estructura del formulario
  return (
    <>
      <div className="bg-gray-600 bg-opacity-50 flex items-center justify-center h-screen">
        <div class="">
          <IngredientesLista />
        </div>

        <div class="">
          <RecetaLista />
        </div>
      </div>
    </>
  );
};

//  sección para exportar
export default FormPrincipal;
