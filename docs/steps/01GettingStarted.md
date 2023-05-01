choose react, typescript
```bash
npm create vite  
npm install  
```

init project
./src/App.tsx
```js
function App() {
  function App() {
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
      hello
    </div>
  );
}

export default App;

}

export default App;
```

./src/index.css
```css
* {
  padding: 0;
  margin: 0;
}
```

init lists & show content
./src/App.tsx
```js
interface item {
  id: number;
  text: string;
  completed: boolean;
}
```
```js
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
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
```

