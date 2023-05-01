import { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<item[]>([
    {
      id: 1,
      text: "learn typescript",
      completed: false,
    },
    {
      id: 2,
      text: "develop todo app",
      completed: false,
    },
  ]);
  const [input, setInput] = useState("");
  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              style={{
                width: "400px",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggle(todo.id)}
            >
              {todo.text}
            </p>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="add todo item"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default App;
