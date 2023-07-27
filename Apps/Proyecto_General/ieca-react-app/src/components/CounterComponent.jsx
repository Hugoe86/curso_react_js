//  sección import
import useCounter from "../hooks/useCounter";

//  funcion principal
const CounterComponent = () => {
  //  se declara la variable y se referencia al hook "useCounter"
  const { counter, increment, decrement } = useCounter(10);

  return (
    <div className="flex-1 w-full flex flex-col gap-4 px-4">
      <div className="text-5xl text-purple-800">
        <h1>{counter}</h1>
      </div>

      <div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          + Incrementar
        </button>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          - Decrementar
        </button>
      </div>
    </div>
  );
};

//  seción exportar
export default CounterComponent;
