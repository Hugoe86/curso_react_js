//  sección import
import { useState } from "react";

//  funcion principal
const ControlledComponent = () => {
  //  variable de estados
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  //  evento para escuchar el texto
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //    metodo print
  const print = () => {
    //  imprimir el valor del input
    alert(inputValue);
  };

  //    metodo clear
  const clear = () => {
    //  limpia el valor del input inputRef
    setInputValue("");
  };

  //    metodo clear
  const validate = () => {
    //  validamos que la longitud sea manor de 10 caracteres
    if (inputValue.length > 10) {
      setError("El valor debe tener menos de 10 caracteres");
    }
    //  si no manda mensaje de texto correcto, y limpia el seterror
    else {
      alert("El valor es correcto" + inputValue);

      //    limpia el valor
      setError("");
    }
  };

  //    estrucutura del div [input, 2x botones]
  return (
    <div className="bg-gray-200 flex-1 w-full">
      <div className="flex gap-4">
        {/* variable relacionada al useRef*/}
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />

        {/* botones ************************************************************************************* */}
        {/* Imprimir  ************************************************************************************* */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={print}
        >
          Imprimir
        </button>

        {/* Limpiar  ************************************************************************************* */}
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={clear}
        >
          Limpiar
        </button>
        {/* Validar  ************************************************************************************* */}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={validate}
        >
          Validar
        </button>

                {/* ************************************************************************************* */}
      </div>

      {!!error && <span className="text-red-500">{error}</span>}

      <div className="flex gap-4">el valor del input es: {inputValue}</div>
    </div>
  );
};

//  seción de export
export default ControlledComponent;
