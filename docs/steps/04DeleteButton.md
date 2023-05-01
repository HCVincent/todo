add delete button
```js
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
```
```js
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
```