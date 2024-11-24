//import React from 'react'
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
   const [completed, setCompleted] = useState([]);

  const handleTodos = (e) => {
    setTodo(e.target.value);
    console.log(todo)
  };
  const addToList = () => {
    setTodoList([...todoList, todo]);
    setTodo("")
  };
  const completedTodos = (e, id) => {
    const filteredTodo = todoList.filter((singleTodo, index) => {
      return index === id && e.target.checked === true;
    });
    console.log(completed);
    setCompleted([...filteredTodo]);
  };
  const handleDelete = (id) => {
    const filteredTodo = todoList.filter((singleTodo, index) => {
      console.log();

      return index !== id;
    });

    setTodoList([...filteredTodo]);
  };


  return (
    <div>
      <h6>My TodoList</h6>
      <section className="todoenter">
        
        <input
          type="text"
          id="newtodo"
          placeholder="Enter you todo"
          value={todo}
          className="todo-input"
          onChange={(e) => handleTodos(e)}
        />
        <button onClick={addToList}>Add to List</button> 
      </section>
      <section className="todo-display-area container">
        <div className="todo-list">
          {todoList.map((t, index) => {
            return (
              <div key={index} className="todo-card-wrapper">
                <div className="todo-card">
                  {t}{" "}
                  <input
                    onChange={(e) => completedTodos(e, index)}
                    type="checkbox"
                  />
                </div>

                <button onClick={() => handleDelete(index)}>delete</button>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

export default Todo;
