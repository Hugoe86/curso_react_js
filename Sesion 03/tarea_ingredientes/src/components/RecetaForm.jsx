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
          <label>Receta</label>
          <input
            type="text"
            placeholder="Receta"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </td>
      </tr>
      <br />
      <tr>
        {/* sección tiempo  --------------------------------------------------------------------------------------------------------------------------------- */}
        <td>
          <label>Tiempo en minutos</label>
          <input
            type="text"
            placeholder="Tiempo en minutos"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </td>
      </tr>
      <br />

      <tr>
        <td>
          {/* sección botón  --------------------------------------------------------------------------------------------------------------------------------- */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
