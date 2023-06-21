//  funcion principal del archivo
const RecetaForm = ({ onSubmit }) => {
  //  evento submit
  const submit = (event) => {
    event.preventDefault();

    //  inicializamos variables
    let ingredientes = "";
    let contador = 0;

    //    se toman los valores del formulario
    const form = event.target;

    //    se ingresan los valores del formulario
    const nombre_receta = form[0].value;
    const tiempo = form[1].value;

    //  obtenemos los valores del localStorage [ingredientes]
    let data = localStorage.getItem("ingredientes");

    //  regresa la estructura de data
    console.log(data);

    //  validamos si tiene información
    if (data == "") {
      console.log("Error");
    }
    //  si tienen informacion se obtienen los ingredientes
    else {
      //  se convirte el arreglo
      const ingredientes_valores = JSON.parse(data);

      //  recorremos el arreglo de ingredientes
      for (contador = 0; contador < ingredientes_valores.length; contador++) {
        //  agregamos el nombre del ingrediente a la variable
        ingredientes +=
          "[" + ingredientes_valores[contador].nombre_ingrediente + "] ";
      }
    }

    //    se crea arreglo de recetas
    const receta = { nombre_receta, tiempo, ingredientes };

    //  se inicializa el localStore
    localStorage.setItem("ingredientes", []);
    localStorage.setItem("banera_receta", 1);

    //    se ejecuta el evento Submit
    onSubmit(receta);

    //    se resetea el formulario
    form.reset();
  };

  //  regresa la estructura del formulario
  return (
    // evento onsubmit
    <form onSubmit={submit}>
      <tr>
        {/* sección receta  --------------------------------------------------------------------------------------------------------------------------------- */}
        <td>
          <div className="relative">
            <input
              id="txt_receta"
              type="text"
              placeholder=" "
              class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />

            <label
              for="txt_receta"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Receta
            </label>
          </div>
          {/* sección tiempo  --------------------------------------------------------------------------------------------------------------------------------- */}
          <div className="relative">
            <input
              id="txt_tiempo"
              type="text"
              placeholder=" "
              class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />

            <label
              for="txt_tiempo"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Tiempo en minutos
            </label>
          </div>
        </td>
      </tr>
     

      <tr>
        <td>
          {/* sección botón  --------------------------------------------------------------------------------------------------------------------------------- */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            + Agregar receta
          </button>
        </td>
      </tr>
    </form>
  );
};

//  sección para exportar
export default RecetaForm;
