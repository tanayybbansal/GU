

import './App.css';
import React, { useState } from 'react';

function App() {
  const[todo,setTodo]=useState('');
  const[todos,setTodos]=useState([]);

  const handleAdd=()=>{
    if(todo===''){
        alert('Please enter a todo');
        return;
    }
    else{
        setTodos([...todos,todo]);//const newTodos=[...todos,todo]; setTodos(newTodos); this is also correct... but this is more readable
        setTodo('');
    }
}
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter a todo" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo,index)=><li key={index}>{todo}</li>)}
      </ul>

      
    

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
