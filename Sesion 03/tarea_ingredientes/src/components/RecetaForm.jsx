const RecetaForm = ({ onSubmit }) => {
  const submit = (event) => {
    event.preventDefault();

    //    se toman los valores del formulario
    const form = event.target;

    //    se ingresan los valores del formulario
    const nombre_receta = form[0].value;
    const tiempo = form[1].value;
    const ingredientes = form[2].value;

    //    se crea arreglo de recetas
    const receta = { nombre_receta, tiempo, ingredientes };

    //    se ejecuta el evento Submit
    onSubmit(receta);

    //    se resetea el formulario
    form.reset();
  };

  return (
    <form onSubmit={submit}>
      <tr>
        <td>
          <label for="txt_receta_">Receta</label>
          <input
            id="txt_receta_"
            type="text"
            placeholder="Receta"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </td>
      </tr>
      <br />
      <tr>
        <td>
          <label>Tiempo</label>
          <input
            type="text"
            placeholder="Tiempo"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </td>
      </tr>
      <br />

      <tr>
        <td>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            + Agregar receta
          </button>
        </td>
      </tr>
    </form>
  );
};

export default RecetaForm;
