
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

      
    
    </div>
  );
}

export default App;
