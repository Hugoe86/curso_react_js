import IngredientesLista from "./components/IngredientesLista";
import RecetaLista from "./components/RecetaLista";

function App() {
  return (
    <div>
      <div>
        <h1>Seccion para cargar una receta</h1>
      </div>

      <div>
        <table class="table-fixed">
          <br />
          <tr>
            <td>
              <IngredientesLista />
            </td>
          </tr>

          <br />
          <br />
          <br />

          <tr>
            <td>
              <RecetaLista />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
