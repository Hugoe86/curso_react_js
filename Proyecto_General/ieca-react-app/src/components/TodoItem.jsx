const TodoItem = ({ todo, removeTodo, updateTodo, index }) => {
  return (
    <li className="p-4 flex gap-2 rounded-lg bg-slate-200 shadow-sm">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        defaultChecked={todo.done}
        onChange={({ target }) => updateTodo(index, target.value)}
      />

      <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-teal-600 bg-teal-200  last:mr-0 mr-1">
        {todo.text}
      </span>

      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => removeTodo(index)}
      >
        Eliminar
      </button>
    </li>
  );
};

export default TodoItem;
