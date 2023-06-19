const IngredienteForm = ({ onSubmit }) => {
  const submit = (event) => {
    event.preventDefault();

    //    se toman los valores del formulario
    const form = event.target;

    //    se ingresan los valores del formulario
    const nombre_ingrediente = form[0].value;

    
    console.log(nombre_ingrediente);

    //    se crea arreglo de recetas
    const ingrediente = { nombre_ingrediente };


    //    se ejecuta el evento Submit
    onSubmit(ingrediente);

    //    se resetea el formulario
    form.reset();
  };

  return (
    <form onSubmit={submit}>
      <tr>
        <td>
          <label  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ingrediente:&nbsp;&nbsp;</label>
        </td>
        <td>
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           placeholder="Ingrediente" />
        </td>

        <td>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Agregar ingrediente</button>
        </td>
      </tr>
    </form>
  );
};

export default IngredienteForm;
