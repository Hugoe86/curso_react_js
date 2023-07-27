//  seccion import
import { useState } from "react";

//  función principal
const useTodo = () => {
  //  delcaración de variables
  const [list, setList] = useState([]);

  //  metodo addTodo
  const addTodo = (todo) => {
    //  agrega a la variable el texto, el valor del check
    setList([...list, { text: todo, done: false }]);
  };

  //  metodo removeTodo
  const removeTodo = (index) => {
    //  elimina el elemento dentro de la lista
    setList(list.filter((_, i) => i !== index));
  };

  //  metodo updateTodo
  const updateTodo = (index, checked) => {
    //  revisamos que contiena la variable
    console.log(checked);

    //  seteamos la vairable
    setList(
      //  recorremos la lista usando el map
      list.map((todo, i) => {
        //  validamos si el indice es igual
        if (i === index) {
          //  regresa la información del check seleccionado
          return { ...todo, done: checked === "on" };
        }
        //  regresa toda la esctructura
        return todo;
      })
    );
  };

  //  regresa la esctructura de los elementos
  return {
    list,
    addTodo,
    removeTodo,
    updateTodo,
  };
};

//  seccion export
export default useTodo;
