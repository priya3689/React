//import React from 'react'
import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
 
  const handleDelete = (index) => {
  //  setTodos( todos.filter((x) => {
  //     return index !== x.id;
  //   }));
  console.log("Before Delete" ,todos);
 const filteredTodos = todos.filter((x) => {
     return index !== x.id
  });
  console.log("Filtered Todos",filteredTodos);
  setTodos([...filteredTodos]);
  
  console.log("After delete",todos);
    setTodo("")
  };
  const addTodos = () => {
    setTodos([...todos,{id:Date.now(),text:todo,status:false}])
    setTodo("")

    }
    // const stausChange=(id,e) => {
      
    //   todos.forEach((todo) => {
    //     if(todo.id===id){
    //       todo.status=e.target.checked;
          
    //       }
    //   })
      
    // }
    const stausChange = (id, e) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, status: e.target.checked } : todo
      );
      setTodos([...updatedTodos]); // Ensure a new array is created
      console.log("Todos after status change:", updatedTodos);
    };
    
    return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Todays List </h2>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="🖊️ Add item..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <i
          className="fas fa-plus"
          onClick={addTodos}
        ></i>
      </div>
      <div className="todos">
        {todos?.map((todoObj, index) => {
          console.log(todoObj.status);
          return (
            <div key={index} className="todo">
              <div className="left">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={(e) => stausChange(todoObj.id,e)}
                  value={todoObj.status}
                />
                <p>{todoObj.text} - {todoObj.status?"yes":"no"}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={() => handleDelete(todoObj.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
