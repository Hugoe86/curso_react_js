//  funcion principal del archivo
const IngredienteItem = ({ ingrediente }) => {
  //  arreglo para descomponer la receta
  const { nombre_ingrediente } = ingrediente;

  //    se regresan los componentes
  return (
    <div className={`p-6 rounded-xl bg-white bg-opacity-30`}>
      <table className="table-fixed">
        <tbody>
          <tr>
            <td>
              <li>{nombre_ingrediente}</li>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

//  sección para exportar
export default IngredienteItem;
