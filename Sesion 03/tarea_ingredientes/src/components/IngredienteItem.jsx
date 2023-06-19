const IngredienteItem = ({ ingrediente }) => {
  //  arreglo para descomponer la receta
  const { nombre_ingrediente } = ingrediente;

  //    se regresan los componentes
  return (
    <div className={`p-6 rounded-xl bg-amber-50 `}>
      <tr>
        <td>
          {/* Nombre de la receta */}
          <span class="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
            Ingrediente:
          </span>
        </td>
      </tr>

      <tr>
        <td>
          <li>{nombre_ingrediente}</li>
        </td>
      </tr>
    </div>
  );
};

export default IngredienteItem;
