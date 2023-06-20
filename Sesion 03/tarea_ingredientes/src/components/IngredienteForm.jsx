const IngredienteForm = ({ onSubmit }) => {
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

  return (
    <div>
      <form onSubmit={submit}>
        <tr>
          <td>
            <label>Ingrediente:&nbsp;&nbsp;</label>

            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ingrediente"
            />
          </td>
        </tr>
        <tr>
          <td>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              + Agregar ingrediente
            </button>
          </td>
        </tr>
      </form>
    </div>
  );
};

export default IngredienteForm;
