import IngredientesLista from "./IngredientesLista"

const RecetaItem = ({ receta }) => {
  //  arreglo para descomponer la receta
  const { nombre_receta, tiempo, ingredientes } = receta;

  //    se regresan los componentes
  return (
    <div className={`p-6 rounded-xl bg-purple-300 `}>
      <tr>
        <td>
          {/* Nombre de la receta */}
          <span class="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
            Receta:
          </span>

          <span>&nbsp; {nombre_receta}</span>
        </td>
      </tr>

      <br/>
      
      <tr>
        <tfd>
          {/* tiempo */}
          <span class="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
            Tiempo:
          </span>

          <span>&nbsp; {tiempo}  &nbsp;Min.</span>
          
        </tfd>
      </tr>

      <br/>

      <tr>
        <tfd>
          {/* ingredientes */}
          <span class="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
            Ingredientes:
          </span>

          {/* <div>&nbsp;  <IngredientesLista /> </div> */}
          
        </tfd>
      </tr>

      
    </div>
  );
};

export default RecetaItem;
