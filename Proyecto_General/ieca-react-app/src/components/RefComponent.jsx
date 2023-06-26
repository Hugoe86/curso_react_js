//  seción de import
import { useRef, useEffect } from "react";

//  funcion principal del archivo
const RefComponent = () => {
  //  vairable que se relaciona con useRef
  const inputRef = useRef();

  //    metodo focus
  const focus = () => {
    //  se relaciona con la variable inputRef del input, se le da el foco
    inputRef.current.focus();
  };

  //    metodo clear
  const clear = () => {
    //  limpia el valor del input inputRef
    inputRef.current.value = "";
  };

  //    metodo print
  const print = () => {
    //  imprimir el valor del input
    alert(inputRef.current.value);
  };

  //    estrucutura del div [input, 2x botones]
  return (
    <div className="flex-1 w-full flex flex-col gap-4 px-4">
      <div className="flex gap-4">
        {/* variable relacionada al useRef*/}
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="input-test"
          ref={inputRef}
        />

        {/* botones */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={focus}
        >
          Focus
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={clear}
        >
          Limpiar
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={print}
        >
          Imprimir
        </button>
      </div>
    </div>
  );
};

//  seción de export
export default RefComponent;
