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
          <label>Receta</label>
          <input type="text" placeholder="Receta" />
        </td>
        <td>
          <label>Tiempo</label>
          <input type="text" placeholder="Tiempo" />
        </td>

        <td>
          <button type="submit">+ Agregar receta</button>
        </td>
      </tr>
    </form>
  );
};

export default RecetaForm;
