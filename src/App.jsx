import { useState, createContext, useContext } from "react";
import "./App.css";
import { userContext } from "./main.jsx";
import Header from "./Components/Header.jsx";
import Todo from "./Components/todo.jsx";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const data = useContext(userContext);

  function addTodo(text) {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text }]);
    }
  }

  function editTodo(id, newText) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, deleteTodo, count, setCount }}
    >
      <div className="app">
        <div className="card">
          <Header />
          <Todo />

          <div className="welcome">
            <h2>
              👋 Welcome, <span>{data?.name}</span>
            </h2>
            <p>Stay productive & manage your tasks easily 🚀</p>
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
