add buton to add new item
```js
      <input
        type="text"
        placeholder="add todo item"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={handleClick}>add</button>
```

```js
  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };
```