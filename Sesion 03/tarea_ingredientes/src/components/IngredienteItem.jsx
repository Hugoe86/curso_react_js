//  funcion principal del archivo
const IngredienteItem = ({ ingrediente }) => {
  //  arreglo para descomponer la receta
  const { nombre_ingrediente } = ingrediente;

  //    se regresan los componentes
  return (
    <table className="table-fixed">
      <tbody>
        <tr>
          <td>
            <li>{nombre_ingrediente}</li>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

//  sección para exportar
export default IngredienteItem;
