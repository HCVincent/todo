add line on completed todo
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
          </li>
        ))}
      </ul>
```
```js
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
```