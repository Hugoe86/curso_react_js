//  sección de import
import { useEffect, useState } from "react";

const useCounter = (initialState = 0) => {
  //  vairables para useState
  const [counter, setCounter] = useState(
    Number(localStorage.getItem("counter")) ?? initialState
  );

  //  metodo useEffect
  useEffect(() => {
    //  asigna el valor al localStorege
    localStorage.setItem("counter", counter);
  }, [counter]);

  //    metodo de incrementar
  const increment = () => {
    //  incrementa el valor
    setCounter(counter + 1);
  };

  //    metodo de incrementar
  const decrement = () => {
    //  decdrementa el valor
    setCounter(counter - 1);
  };

  //  regreso de las variables
  return {
    counter,
    increment,
    decrement,
  };
};

//  sección de export
export default useCounter;
