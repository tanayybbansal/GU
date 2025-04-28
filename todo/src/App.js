// import logo from './logo.svg';
import "./App.css";

function App() {
  const handleDelete = (pointer) => {
    const newTodos = todos.filter((item, index) => {
      return index !== pointer; //const handleDelete = (pointer) => setTodos(todos.filter((_, index) => index !== pointer)); we can also use this
    });
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <ul>
        {todos.map((item, index) => {
          return (
            <div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
