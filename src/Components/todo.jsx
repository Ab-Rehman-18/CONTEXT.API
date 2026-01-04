import React, { useContext, useState } from 'react';
import { TodoContext } from '../App.jsx';

function Todo() {
  const { todos, addTodo, editTodo, deleteTodo, count, setCount } = useContext(TodoContext);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  function handleAdd() {
    if (input) {
      addTodo(input);
      setInput("");
    }
  }

  function handleEdit(id, text) {
    setEditId(id);
    setEditValue(text);
  }

  function handleSave(id) {
    if (editValue) {
      editTodo(id, editValue);
      setEditId(null);
      setEditValue("");
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow p-6 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-blue-600">{count}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <h2 className="text-xl font-semibold mb-2">Todo List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add todo"
          className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-2 bg-gray-50 p-2 rounded">
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-2 py-1"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                  onClick={() => handleSave(todo.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white px-2 py-1 rounded"
                  onClick={() => setEditId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">{todo.text}</span>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;