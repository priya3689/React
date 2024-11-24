import { useState } from "react";

function Counter(){
   const [count, setCount] = useState(0)
   const handleChange =()=>{
    if(count>0){setCount(count+1);}
      else{setCount(0)}

   }
return <div>
   <h1>Counter</h1>
   <button onClick={() => handleChange()}>Add</button>
    <div>{count}</div>
    <button onClick={handleChange()}>Reduce</button>
    </div>
};

export default Counter;

/*
import { useEffect, useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [data, setData] = useState();
  const [counter, setCounter] = useState(0);

  //hooks
  //usestate
  // useEffect

  useEffect(() => {
    render(); // component onmound

    return () => {
      console.log("hello");//component unmount
    };
  }, [counter]);//component update

  function getApi() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => respons
*/