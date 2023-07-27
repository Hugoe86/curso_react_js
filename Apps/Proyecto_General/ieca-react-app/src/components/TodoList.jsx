//  sección import
import { useState } from "react";
import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";

//  funcion principal
const TodoList = () => {
  //  decalración de variables
  const [inputValue, setInputValue] = useState("");
  const { list, addTodo, removeTodo, updateTodo } = useTodo();

  //  metodo newTodo
  const newTodo = () => {
    //  se manda la información
    addTodo(inputValue);
  };

  //  se regresa la esctructura del componente
  return (
    <div className="bg-gray-200 flex-1 w-full flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          type="text"
          onChange={({ target }) => {
            setInputValue(target.value);
          }}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={newTodo}
        >
          Guardar
        </button>
      </div>
      <ul>
        {list.map((todo, index) => (
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            index={index}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};

//  sección export
export default TodoList;
