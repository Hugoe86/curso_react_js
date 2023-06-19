import IngredientesLista from "./components/IngredientesLista";
import RecetaLista from "./components/RecetaLista";

function App() {
  return (
    <tabel>
      <tr>
        <td>
          <IngredientesLista />
        </td>
        <td>
          <RecetaLista />
        </td>
      </tr>
    </tabel>
  );
}

export default App;
