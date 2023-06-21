//  funcion principal del archivo
const IngredienteForm = ({ onSubmit }) => {
  //  funcion del submit
  const submit = (event) => {
    event.preventDefault();

    //    se toman los valores del formulario
    const form = event.target;

    //    se ingresan los valores del formulario
    const nombre_ingrediente = form[0].value;

    //    se crea arreglo de recetas
    const ingrediente = { nombre_ingrediente };

    //    se ejecuta el evento Submit
    onSubmit(ingrediente);

    //    se resetea el formulario
    form.reset();
  };

  //  regresa la esctructura del formulario de ingredientes
  return (
    <div>
      <form onSubmit={submit}>
        <tr>
          <td>
          <div className="relative">
            
            {/* sección ingredientes  --------------------------------------------------------------------------------------------------------------------------------- */}
            
            <input
              type="text"
              id ="txt_ingrediente"
              class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            
            <label for="txt_ingrediente" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" >Ingrediente:&nbsp;&nbsp;</label>

          
            </div>
          </td>
        </tr>
        <tr>
          <td>
            {/* sección botón  --------------------------------------------------------------------------------------------------------------------------------- */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              + Agregar ingrediente
            </button>
          </td>
        </tr>
      </form>
    </div>
  );
};

//  sección para exportar
export default IngredienteForm;
